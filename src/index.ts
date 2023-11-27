/**
 * Tebex REST API client for interacting with the Tebex API.
 */
import fetch from "node-fetch";
import {
  ITebexREST,
  TebexCommandQueue,
  TebexCommandQueueOffline,
  TebexCommunityGoal,
  TebexInformation,
  TebexListing,
  TebexListingPackage,
  TebexPackage,
  TebexPayment,
  TebexPaymentFields,
  TebexPaymentPaginated,
} from "./types";
import { UnknownError, InternalServerError, InvalidTebexSecret, TebexNotFound, BaseAPIError } from "./errors";

const BASE_URL = "https://plugin.tebex.io/";

/**
 * Tebex REST API client class.
 * @example const client = new TebexClient(TEBEX_SECRET);
 * // Fetch server information
 * const information = await client.information();
 */
export class TebexClient implements ITebexREST {
  /**
   * @ignore
   */
  private fetch: IFetchAPI;

  constructor(private readonly secret: string) {
    this.fetch = tebexFetch(this.secret);
  }

  async information() {
    return await this.fetch.get<TebexInformation>("/information");
  }

  commandQueue = {
    queue: () => this.fetch.get<TebexCommandQueue>("/queue"),
    queueOffline: () => this.fetch.get<TebexCommandQueueOffline>("/queue/offline-commands"),
    queueOnline: (playerId: string) => this.fetch.get<TebexCommandQueueOffline>("/queue/offline-commands/" + playerId),
    deleteCommands: (...ids: number[]) => this.fetch.delete<null>("/queue", { ids }),
  };

  async listing() {
    return await this.fetch.get<TebexListing>("/listing");
  }

  packages = {
    all: (verbose?: boolean) => this.fetch.get<TebexPackage[]>(`/packages${verbose ? "?verbose=true" : ""}`),
    get: (packageId: string) => this.fetch.get<TebexPackage>(`/package/${packageId}`),
    update: (packageId: string, body: { disabled: boolean; name: string; price: number }) =>
      this.fetch.put<null>("/package/" + packageId, body),
  };

  communityGoals = {
    get: (communityGoal?: string) =>
      communityGoal
        ? this.fetch.get<TebexCommunityGoal>("/community_goals/" + communityGoal)
        : this.fetch.get<TebexCommunityGoal[]>("/community_goals"),
  };

  payments = {
    getAll: (limit?: number) => this.fetch.get<TebexPayment[]>(`/payments${limit ? "?limit=" + limit : ""}`),
    getPaginated: (page?: number) => this.fetch.get<TebexPaymentPaginated>(`/payments${page ? "?paged=" + page : ""}`),
    getPayment: (transactionId: string) =>
      this.fetch.get<TebexPayment>(`/payments${transactionId ? "?transaction=" + transactionId : ""}`),
    getPaymentFields: (packageId: string) => this.fetch.get<TebexPaymentFields>("/payments/fields/" + packageId),
    updatePayment: (
      transactionId: string,
      body: {
        username: string;
        status: "complete" | "chargeback" | "refund";
      }
    ) => this.fetch.put<null>(`/payments${transactionId ? "?transaction=" + transactionId : ""}`, body),
    createPaymentNote: (transactionId: string, note: string) =>
      this.fetch.put<null>(`/payments${transactionId ? "?transaction=" + transactionId : ""}`, {
        note,
      }),
  };
}

/**
 * Tebex REST API client function.
 */
export function TebexRest(secret: string): ITebexREST {
  /**
   * @ignore
   */
  const fetch = tebexFetch(secret);

  async function information() {
    return await fetch.get<TebexInformation>("/information");
  }

  const commandQueue = {
    queue: () => fetch.get<TebexCommandQueue>("/queue"),
    queueOffline: () => fetch.get<TebexCommandQueueOffline>("/queue/offline-commands"),
    queueOnline: (playerId: string) => fetch.get<TebexCommandQueueOffline>("/queue/offline-commands/" + playerId),
    deleteCommands: (...ids: number[]) => fetch.delete<null>("/queue", { ids }),
  };

  async function listing() {
    return await fetch.get<TebexListing>("/listing");
  }

  const packages = {
    /**
     * @method
     * @function
     */
    all: (verbose?: boolean) => fetch.get<TebexPackage[]>(`/packages${verbose ? "?verbose=true" : ""}`),
    get: (packageId: string) => fetch.get<TebexPackage>(`/package/${packageId}`),
    update: (packageId: string, body: { disabled: boolean; name: string; price: number }) =>
      fetch.put<null>("/package/" + packageId, body),
  };

  const communityGoals = {
    get: (communityGoal?: string) =>
      communityGoal
        ? fetch.get<TebexCommunityGoal>("/community_goals/" + communityGoal)
        : fetch.get<TebexCommunityGoal[]>("/community_goals"),
  };

  const payments = {
    getAll: (limit?: number) => fetch.get<TebexPayment[]>(`/payments${limit ? "?limit=" + limit : ""}`),
    getPaginated: (page?: number) => fetch.get<TebexPaymentPaginated>(`/payments${page ? "?paged=" + page : ""}`),
    getPayment: (transactionId: string) =>
      fetch.get<TebexPayment>(`/payments${transactionId ? "?transaction=" + transactionId : ""}`),
    getPaymentFields: (packageId: string) => fetch.get<TebexPaymentFields>("/payments/fields/" + packageId),
    updatePayment: (
      transactionId: string,
      body: {
        username: string;
        status: "complete" | "chargeback" | "refund";
      }
    ) => fetch.put<null>(`/payments${transactionId ? "?transaction=" + transactionId : ""}`, body),
    createPaymentNote: (transactionId: string, note: string) =>
      fetch.put<null>(`/payments${transactionId ? "?transaction=" + transactionId : ""}`, {
        note,
      }),
  };

  return {
    information,
    commandQueue,
    listing,
    packages,
    communityGoals,
    payments,
  };
}

/**
 * Represents an API client that provides methods for making HTTP requests.
 * @ignore
 */
interface IFetchAPI {
  /**
   * Sends a GET request to the specified endpoint.
   * @param endpoint - The endpoint to send the request to.
   * @returns A promise that resolves to the response data or an instance of BaseAPIError if an error occurs.
   * @throws BaseAPIError if an error occurs during the request.
   */
  get: <T>(endpoint: string) => Promise<T>;

  /**
   * Sends a POST request to the specified endpoint.
   * @param endpoint - The endpoint to send the request to.
   * @param body - The request body.
   * @returns A promise that resolves to the response data or an instance of BaseAPIError if an error occurs.
   * @throws BaseAPIError if an error occurs during the request.
   */
  post: <T>(endpoint: string, body: Object) => Promise<T>;

  /**
   * Sends a PUT request to the specified endpoint.
   * @param endpoint - The endpoint to send the request to.
   * @param body - The request body.
   * @returns A promise that resolves to the response data or an instance of BaseAPIError if an error occurs.
   * @throws BaseAPIError if an error occurs during the request.
   */
  put: <T>(endpoint: string, body: Object) => Promise<T>;

  /**
   * Sends a DELETE request to the specified endpoint.
   * @param endpoint - The endpoint to send the request to.
   * @param body - The request body.
   * @returns A promise that resolves to the response data or an instance of BaseAPIError if an error occurs.
   * @throws BaseAPIError if an error occurs during the request.
   */
  delete: <T>(endpoint: string, body: Object) => Promise<T>;
}
/**
 * Creates a fetch API object for making HTTP requests to the Tebex API.
 * @param secret The Tebex secret key.
 * @function
 * @ignore
 * @returns The fetch API object.
 */
function tebexFetch(secret: string): IFetchAPI {
  /**
   * Sends a request to the specified endpoint.
   */
  const _fetch = async <T>(endpoint: string, body?: Object, method: "GET" | "POST" | "PUT" | "DELETE" = "GET"): Promise<T> => {
    const response = await fetch(BASE_URL + endpoint, {
      method,
      headers: {
        "X-Tebex-Secret": secret,
        ...(body ? { "Content-Type": "application/json" } : {}),
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      if (response.status === 403) throw new InvalidTebexSecret();
      else if (response.status === 404) throw new TebexNotFound();
      else if (response.status === 500) throw new InternalServerError();
      else throw new UnknownError(`${response.status} ${response.statusText ?? ""}`);
    }
    try {
      return (await response.json()) as T;
    } catch (err) {
      throw new UnknownError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return {
    get: async (endpoint: string) => _fetch(endpoint),
    post: async (endpoint: string, body: Object) => _fetch(endpoint, body, "POST"),
    put: async (endpoint: string, body: Object) => _fetch(endpoint, body, "PUT"),
    delete: async (endpoint: string, body: Object) => _fetch(endpoint, body, "DELETE"),
  };
}
export const Errors = { UnknownError, InternalServerError, InvalidTebexSecret, TebexNotFound };
