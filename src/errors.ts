/**
 * Represents an error that occurs in the API.\
 * If thrown represents an unknown error
 * @property name The name of the error.
 * @property message The error message.
 * @param message The error message.
 * @param name The error message.
 */
export abstract class BaseAPIError extends Error {
  constructor(message: string, name: string = "APIError") {
    super(message);
    this.name = name;
  }
}

/**
 * Error thrown when an invalid Tebex secret is provided.
 */
export class InvalidTebexSecret extends BaseAPIError {
  constructor() {
    super("Invalid Tebex secret", "InvalidTebexSecret");
  }
}

/**
 * Error thrown when a Tebex request is not found.
 */
export class TebexNotFound extends BaseAPIError {
  constructor(message: string = "Tebex request not found") {
    super(message, "TebexNotFound");
  }
}
/**
 * Error thrown when a Tebex request gives an Server error
 */
export class InternalServerError extends BaseAPIError {
  constructor(message: string = "Internal server error") {
    super(message, "InternalServerError");
  }
}

/**
 * Error thrown when a Tebex request gives an Server error
 */
export class UnknownError extends BaseAPIError {
  constructor(message: string = "Unknown API error") {
    super(message, "UnknownError");
  }
}
