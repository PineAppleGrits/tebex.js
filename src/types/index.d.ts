import { BaseAPIError } from "../errors";
/**
 * Represents the ISO 4217 currency codes.
 */
export type ISO4217 =
  | "AED"
  | "AFN"
  | "ALL"
  | "AMD"
  | "ANG"
  | "AOA"
  | "ARS"
  | "AUD"
  | "AWG"
  | "AZN"
  | "BAM"
  | "BBD"
  | "BDT"
  | "BGN"
  | "BHD"
  | "BIF"
  | "BMD"
  | "BND"
  | "BOB"
  | "BOV"
  | "BRL"
  | "BSD"
  | "BTN"
  | "BWP"
  | "BYN"
  | "BZD"
  | "CAD"
  | "CDF"
  | "CHE"
  | "CHF"
  | "CHW"
  | "CLF"
  | "CLP"
  | "COP"
  | "COU"
  | "CRC"
  | "CUC"
  | "CUP"
  | "CVE"
  | "CZK"
  | "DJF"
  | "DKK"
  | "DOP"
  | "DZD"
  | "EGP"
  | "ERN"
  | "ETB"
  | "EUR"
  | "FJD"
  | "FKP"
  | "GBP"
  | "GEL"
  | "GHS"
  | "GIP"
  | "GMD"
  | "GNF"
  | "GTQ"
  | "GYD"
  | "HKD"
  | "HNL"
  | "HTG"
  | "HUF"
  | "IDR"
  | "ILS"
  | "INR"
  | "IQD"
  | "IRR"
  | "ISK"
  | "JMD"
  | "JOD"
  | "JPY"
  | "KES"
  | "KGS"
  | "KHR"
  | "KMF"
  | "KPW"
  | "KRW"
  | "KWD"
  | "KYD"
  | "KZT"
  | "LAK"
  | "LBP"
  | "LKR"
  | "LRD"
  | "LSL"
  | "LYD"
  | "MAD"
  | "MDL"
  | "MGA"
  | "MKD"
  | "MMK"
  | "MNT"
  | "MOP"
  | "MRU"
  | "MUR"
  | "MVR"
  | "MWK"
  | "MXN"
  | "MXV"
  | "MYR"
  | "MZN"
  | "NAD"
  | "NGN"
  | "NIO"
  | "NOK"
  | "NPR"
  | "NZD"
  | "OMR"
  | "PAB"
  | "PEN"
  | "PGK"
  | "PHP"
  | "PKR"
  | "PLN"
  | "PYG"
  | "QAR"
  | "RON"
  | "RSD"
  | "CNY"
  | "RUB"
  | "RWF"
  | "SAR"
  | "SBD"
  | "SCR"
  | "SDG"
  | "SEK"
  | "SGD"
  | "SHP"
  | "SLE"
  | "SLL"
  | "SOS"
  | "SRD"
  | "SSP"
  | "STN"
  | "SVC"
  | "SYP"
  | "SZL"
  | "THB"
  | "TJS"
  | "TMT"
  | "TND"
  | "TOP"
  | "TRY"
  | "TTD"
  | "TWD"
  | "TZS"
  | "UAH"
  | "UGX"
  | "USD"
  | "USN"
  | "UYI"
  | "UYU"
  | "UYW"
  | "UZS"
  | "VED"
  | "VES"
  | "VND"
  | "VUV"
  | "WST"
  | "XAF"
  | "XAG"
  | "XAU"
  | "XBA"
  | "XBB"
  | "XBC"
  | "XBD"
  | "XCD"
  | "XDR"
  | "XOF"
  | "XPD"
  | "XPF"
  | "XPT"
  | "XSU"
  | "XTS"
  | "XUA"
  | "XXX"
  | "YER"
  | "ZAR"
  | "ZMW"
  | "ZW";

/**
 * Represents the Tebex information.
 */
export interface TebexInformation {
  /**
   * Represents the account information.
   */
  account: {
    /**
     * The ID of the account.
     */
    id: number;
    /**
     * The domain of the account.
     */
    domain: string;
    /**
     * The name of the account.
     */
    name: string;
    /**
     * Represents the currency information.
     */
    currency: {
      /**
       * The ISO 4217 code of the currency.
       */
      iso_4217: ISO4217;
      /**
       * The symbol of the currency.
       */
      symbol: Uint8Array;
    };
    /**
     * Indicates if the account is in online mode.
     */
    online_mode: boolean;
    /**
     * The game type of the account.
     */
    game_type: string;
    /**
     * Indicates if the account logs events.
     */
    log_events: boolean;
  };
  /**
   * Represents the server information.
   */
  server: {
    /**
     * The ID of the server.
     */
    id: number;
    /**
     * The name of the server.
     */
    name: string;
  };
}

/**
 * Represents a Tebex command queue.
 */
export interface TebexCommandQueue {
  /**
   * Metadata about the command queue.
   */
  meta: {
    /**
     * Indicates whether the commands should be executed offline.
     */
    execute_offline: boolean;
    /**
     * The timestamp for the next check.
     */
    next_check: number;
    /**
     * Indicates if there are more commands in the queue.
     */
    more: boolean;
  };
  /**
   * An array of Tebex players.
   */
  players: TebexCommandQueuePlayer[];
}
/**
 * Represents the Tebex command queue when the server is offline.
 */
export interface TebexCommandQueueOffline {
  /**
   * Metadata about the command queue.
   */
  meta: {
    /**
     * Indicates if the command queue is limited.
     */
    limited: boolean;
  };
  /**
   * An array of Tebex commands associated with players.
   */
  commands: (TebexCommand & {
    /**
     * The player associated with the command.
     */
    player: TebexCommandQueuePlayer;
  })[];
}
/**
 * Represents a Tebex command queue online.
 */
export interface TebexCommandQueueOnline {
  /**
   * An array of Tebex commands.
   */
  commands: TebexCommand[];
}
/**
 * Represents a Tebex player.
 */
export interface TebexCommandQueuePlayer {
  /**
   * The ID of the player.
   */
  id: number;

  /**
   * The name of the player.
   */
  name: string;

  /**
   * The UUID of the player.
   */
  uuid: string;
}
/**
 * Represents a Tebex command.
 */
export interface TebexCommand {
  /**
   * The ID of the command.
   */
  id: number;

  /**
   * The command string.
   */
  command: string;

  /**
   * The payment amount.
   */
  payment: number;

  /**
   * The package number.
   */
  package: number;

  /**
   * The conditions for the command.
   */
  conditions: {
    /**
     * The delay in milliseconds.
     */
    delay: number;

    /**
     * The number of slots.
     */
    slots: number;
  };
}

/**
 * Represents a Tebex listing.
 */
export interface TebexListing {
  /**
   * The categories in the Tebex listing.
   */
  categories: TebexCategory &
    {
      /**
       * Indicates if only subcategories are included.
       */
      only_subcategories: boolean;
      /**
       * The subcategories in the Tebex listing.
       */
      subcategories: TebexCategory[];
    }[];
}
/**
 * Represents a Tebex category.
 */
export interface TebexCategory {
  /**
   * The ID of the category.
   */
  id: number;
  /**
   * The order of the category.
   */
  order: number;
  /**
   * The name of the category.
   */
  name: string;
  /**
   * The packages associated with the category.
   */
  packages: TebexListingPackage[];
}
/**
 * Represents a Tebex listing package.
 */
export interface TebexListingPackage {
  /**
   * The ID of the package.
   */
  id: number;

  /**
   * The order of the package.
   */
  order: number;

  /**
   * The name of the package.
   */
  name: string;

  /**
   * The price of the package.
   */
  price: string;

  /**
   * The image URL of the package (optional).
   */
  image?: string;

  /**
   * The sale information of the package.
   */
  sale: {
    /**
     * Indicates whether the sale is active or not.
     */
    active: number;

    /**
     * The discount of the sale.
     */
    discount: string;
  };
}
/**
 * Represents a Tebex package.
 */
export interface TebexPackage {
  /**
   * The ID of the package.
   */
  id: number;
  /**
   * The name of the package.
   */
  name: string;
  /**
   * The image URL of the package (optional).
   */
  image?: string;
  /**
   * The price of the package.
   */
  price: number;
  /**
   * The length of the package's expiry.
   */
  expiry_length: number;
  /**
   * The period of the package's expiry.
   * Possible values: 'minute', 'hour', 'day', 'week', 'month', 'year'.
   */
  expiry_period: "minute" | "hour" | "day" | "week" | "month" | "year";
  /**
   * The type of the package.
   * Possible values: 'single', 'subscription', 'both'.
   */
  type: "single" | "subscription" | "both";
  /**
   * The category of the package.
   */
  category: {
    /**
     * The ID of the category.
     */
    id: number;
    /**
     * The name of the category.
     */
    name: string;
  };
  /**
   * The global limit of the package.
   */
  global_limit: number;
  /**
   * The period of the global limit.
   * Possible values: 'none', 'hourly', 'daily', 'weekly', 'monthly', 'annually'.
   */
  global_limit_period: "none" | "hourly" | "daily" | "weekly" | "monthly" | "annually";
  /**
   * The user limit of the package.
   */
  user_limit: number;
  /**
   * The period of the user limit.
   * Possible values: 'none', 'hourly', 'daily', 'weekly', 'monthly', 'annually'.
   */
  user_limit_period: "none" | "hourly" | "daily" | "weekly" | "monthly" | "annually";
  /**
   * The servers associated with the package.
   */
  servers: {
    /**
     * The ID of the server.
     */
    id: number;
    /**
     * The name of the server.
     */
    name: string;
  }[];
  /**
   * The required packages for the package.
   */
  required_packages: number[];
  /**
   * Indicates if any of the required packages are sufficient.
   */
  require_any: boolean;
  /**
   * Indicates if a gift card can be created for the package.
   */
  create_giftcard: boolean;
  /**
   * Indicates if the package should be shown until a specific date.
   */
  show_until: boolean;
  /**
   * The GUI item associated with the package (optional).
   */
  gui_item?: string;
  /**
   * Indicates if the package is disabled.
   */
  disabled: boolean;
  /**
   * Indicates if the quantity of the package should be disabled.
   */
  disable_quantity: boolean;
  /**
   * Indicates if a custom price can be set for the package.
   */
  custom_price: boolean;
  /**
   * Indicates if the server should be chosen for the package.
   */
  choose_server: boolean;
  /**
   * Indicates if the package limit expires.
   */
  limit_expires: boolean;
  /**
   * Indicates if the commands should be inherited for the package.
   */
  inherit_commands: boolean;
  /**
   * Indicates if a variable gift card can be created for the package.
   */
  variable_giftcard: boolean;
}

/**
 * Represents a Tebex Community Goal.
 */
export interface TebexCommunityGoal {
  /**
   * The ID of the community goal.
   */
  id: number;
  /**
   * The date and time when the community goal was created.
   */
  created_at: Date;
  /**
   * The date and time when the community goal was last updated.
   */
  updated_at: Date;
  /**
   * The account associated with the community goal.
   */
  account: number;
  /**
   * The name of the community goal.
   */
  name: string;
  /**
   * The description of the community goal.
   */
  description: string;
  /**
   * The image URL of the community goal (optional).
   */
  image?: string;
  /**
   * The target of the community goal.
   */
  target: string;
  /**
   * The current progress of the community goal.
   */
  current: string;
  /**
   * The number of times the community goal can be repeated.
   */
  repeatable: number;
  /**
   * The date and time when the community goal was last achieved (null if never achieved).
   */
  last_achieved: null | Date;
  /**
   * The number of times the community goal has been achieved.
   */
  times_achieved: number;
  /**
   * The status of the community goal ('active' or 'inactive').
   */
  status: "active" | "inactive";
  /**
   * The sale associated with the community goal.
   */
  sale: number;
}
/**
 * Represents a Tebex payment.
 */
export interface TebexPayment {
  /**
   * The ID of the payment.
   */
  id: number;
  /**
   * The amount of the payment.
   */
  amount: string;
  /**
   * The date of the payment.
   */
  date: string | Date;
  /**
   * The currency of the payment.
   */
  currency: {
    /**
     * The ISO 4217 code of the currency.
     */
    iso_4217: ISO4217;
    /**
     * The symbol of the currency.
     */
    symbol: string;
  };
  /**
   * The gateway used for the payment.
   */
  gateway: {
    /**
     * The ID of the gateway.
     */
    id: number;
    /**
     * The name of the gateway.
     * Possible values: 'PayPal', 'Tebex Checkout', 'Manual', or a custom string.
     */
    name: "PayPal" | "Tebex Checkout" | "Manual" | string;
  };
  /**
   * The status of the payment.
   */
  status: "Complete" | "Refund" | string;
  /**
   * The email associated with the payment.
   */
  email: string;
  /**
   * The player associated with the payment.
   */
  player: {
    /**
     * The ID of the player.
     */
    id: number;
    /**
     * The name of the player.
     */
    name: string;
    /**
     * The UUID of the player.
     */
    uuid: string;
  };
  /**
   * The packages included in the payment.
   */
  packages: {
    /**
     * The ID of the package.
     */
    id: number;
    /**
     * The name of the package.
     */
    name: string;
  }[];
  /**
   * The notes associated with the payment.
   */
  notes: {
    /**
     * The creation date of the note.
     */
    created_at: string | Date;
    /**
     * The content of the note.
     */
    note: string;
  }[];
  /**
   * The creator code of the payment, if any.
   */
  creator_code: string | null;
}

/**
 * Represents a paginated list of Tebex payments.
 */
export interface TebexPaymentPaginated {
  /**
   * The total number of payments.
   */
  total: number;
  /**
   * The number of payments per page.
   */
  per_page: number;
  /**
   * The current page number.
   */
  current_page: number;
  /**
   * The last page number.
   */
  last_page: number;
  /**
   * The URL of the next page.
   */
  next_page_url: string;
  /**
   * The URL of the previous page.
   */
  prev_page_url: string;
  /**
   * The starting index of the payments in the current page.
   */
  from: number;
  /**
   * The ending index of the payments in the current page.
   */
  to: number;
  /**
   * The array of Tebex payments.
   */
  data: TebexPayment[];
}

export type TebexPaymentFields =
  | {
      /**
       * The name of the field.
       */
      name: "price";
      /**
       * The value of the field.
       */
      value: "Custom Price";
      /**
       * The type of the field.
       */
      type: "numeric";
    }
  | {
      /**
       * The name of the field.
       */
      name: "server";
      /**
       * The description of the field.
       */
      description: "Select a server to run commands on";
      /**
       * The type of the field.
       */
      type: "dropdown";
      /**
       * The options for the field.
       */
      options: {
        /**
         * The label of the option.
         */
        label: string;
        /**
         * The value of the option.
         */
        value: number;
      }[];
    }
  | {
      /**
       * The name of the field.
       */
      name: "uname";
      /**
       * The description of the field.
       */
      description: "uname";
      /**
       * The type of the field.
       */
      type: "username";
      /**
       * The options for the field.
       */
      options: boolean;
    }
  | {
      /**
       * The name of the field.
       */
      name: "global";
      /**
       * The description of the field.
       */
      description: "Global level";
      /**
       * The type of the field.
       */
      type: "numeric";
      /**
       * The options for the field.
       */
      options: boolean;
    };

/**
 * Represents a Tebex checkout URL.
 */
export interface TebexCheckoutURL {
  /**
   * The URL for the Tebex checkout.
   */
  url: string;

  /**
   * The expiration date for the checkout URL.
   * It can be either a string or a Date object.
   */
  expires: string | Date;
}

/**
 * Represents a Tebex gift card.
 */
export interface TebexGiftCard {
  /**
   * The ID of the gift card.
   */
  id: number;

  /**
   * The code of the gift card.
   */
  code: string;

  /**
   * The balance of the gift card.
   */
  balance: {
    /**
     * The starting balance of the gift card.
     */
    starting: string;

    /**
     * The remaining balance of the gift card.
     */
    remaining: string;

    /**
     * The currency of the gift card balance.
     */
    currency: string;
  };

  /**
   * The note associated with the gift card.
   */
  note: string;

  /**
   * Indicates whether the gift card is void.
   */
  void: boolean;

  /**
   * The date and time when the gift card was created.
   */
  created_at: string | Date;

  /**
   * The date and time when the gift card expires.
   * If null, the gift card does not have an expiration date.
   */
  expires_at: null | string | Date;
}

/**
 * Represents a Tebex coupon.
 */
export interface TebexCoupon {
  /**
   * The ID of the coupon.
   */
  id: number;

  /**
   * The code of the coupon.
   */
  code: string;

  /**
   * The effectiveness of the coupon.
   */
  effective: {
    /**
     * The type of effectiveness, which can be 'cart', 'category', or 'package'.
     */
    type: "cart" | "category" | "package";

    /**
     * The packages associated with the coupon.
     */
    packages: number[];

    /**
     * The categories associated with the coupon.
     */
    categories: number[];
  };

  /**
   * The discount of the coupon.
   */
  discount: {
    /**
     * The type of discount, which can be 'value' or 'percentage'.
     */
    type: "value" | "percentage";

    /**
     * The percentage value of the discount.
     */
    percentage: number;

    /**
     * The value of the discount.
     */
    value: number;
  };

  /**
   * The expiration details of the coupon.
   */
  expire: {
    /**
     * Indicates if the coupon can be redeemed unlimited times.
     */
    redeem_unlimited: "true" | "false";

    /**
     * Indicates if the coupon never expires.
     */
    expire_never: "true" | "false";

    /**
     * The limit of coupon redemption.
     */
    limit: number;

    /**
     * The date of expiration.
     */
    date: string | Date;
  };

  /**
   * The type of basket the coupon can be used for, which can be 'single', 'subscription', or 'both'.
   */
  basket_type: "single" | "subscription" | "both";

  /**
   * The start date of the coupon.
   */
  start_date: string | Date;

  /**
   * The user limit of the coupon.
   */
  user_limit: number;

  /**
   * The minimum value required for the coupon to be applicable.
   */
  minimum: number;

  /**
   * The username associated with the coupon.
   */
  username: string;

  /**
   * The note for the coupon.
   */
  note: string;
}
/**
 * Represents a Tebex ban.
 */
export interface TebexBan {
  /**
   * The ID of the ban.
   */
  id: number;
  /**
   * The time when the ban was issued.
   */
  time: string | Date;
  /**
   * The IP address associated with the ban.
   */
  ip: string;
  /**
   * The payment email used by the banned user.
   */
  payment_email: string;
  /**
   * The reason for the ban.
   */
  reason: string;
  /**
   * Information about the banned user.
   */
  user: {
    /**
     * The in-game name of the banned user.
     */
    ign: string;
    /**
     * The UUID of the banned user.
     */
    uuid: string;
  };
}
/**
 * Represents a Tebex sale.
 */
export interface TebexSale {
  /**
   * The ID of the sale.
   */
  id: number;

  /**
   * The name of the sale.
   */
  name: string;

  /**
   * The effectiveness of the sale.
   */
  effective: {
    /**
     * The type of effectiveness, either 'package' or 'category'.
     */
    type: "package" | "category";

    /**
     * The IDs of the packages affected by the sale.
     */
    packages: number[];

    /**
     * The IDs of the categories affected by the sale.
     */
    categories: number[];
  };

  /**
   * The discount details of the sale.
   */
  discount: {
    /**
     * The type of discount, either 'value' or 'percentage'.
     */
    type: "value" | "percentage";

    /**
     * The percentage discount value.
     */
    percentage: number;

    /**
     * The value discount value.
     */
    value: number;
  };

  /**
   * The start timestamp of the sale.
   */
  start: TimestampSeconds;

  /**
   * The expiration timestamp of the sale.
   */
  expire: TimestampSeconds;

  /**
   * The order of the sale.
   */
  order: number;
}
/**
 * Represents a timestamp in seconds.
 */
export type TimestampSeconds = number;

/**
 * Represents a Tebex player.
 */
export interface TebexPlayer {
  /**
   * The player's ID.
   */
  player: {
    id: string;
    /**
     * The player's username.
     */
    username: string;
    /**
     * Additional metadata for the player.
     */
    meta: string;
    /**
     * The ID of the plugin username.
     */
    plugin_username_id: number;
  };
  /**
   * The number of bans for the player.
   */
  banCount: number;
  /**
   * The chargeback rate for the player.
   */
  chargebackRate: number;
  /**
   * The list of payments made by the player.
   */
  payments: {
    /**
     * The transaction ID of the payment.
     */
    txn_id: string;
    /**
     * The time of the payment.
     */
    time: TimestampSeconds;
    /**
     * The price of the payment.
     */
    price: number;
    /**
     * The currency of the payment.
     */
    currency: ISO4217;
    /**
     * The status of the payment.
     */
    status: number;
  }[];
  /**
   * The purchase totals for the player.
   */
  purchaseTotals: { [K in ISO4217]?: number }[];
}
/**
 * Represents a Tebex purchase.
 */
export interface TebexPurchase {
  /**
   * The transaction ID of the purchase.
   */
  txn_id: string;

  /**
   * The date of the purchase.
   * It can be either a string or a Date object.
   */
  date: string | Date;

  /**
   * The quantity of the purchase.
   */
  quantity: number;

  /**
   * The package associated with the purchase.
   */
  package: {
    /**
     * The ID of the package.
     */
    id: number;

    /**
     * The name of the package.
     */
    name: string;
  };
}

/**
 * Tebex REST API client class.
 */
export interface ITebexREST {
  /**
   * Retrieves information about the Tebex store.
   * @returns A promise that resolves to the TebexInformation object.
   * @throws BaseAPIError if an error occurs during the request.
   **/
  information(): Promise<TebexInformation>;
  /**
   * Provides access to the Tebex command queue related API methods.
   */
  commandQueue: {
    /**
     * Retrieves the command queue.
     * @returns A promise that resolves to the TebexCommandQueue object.
     * @throws BaseAPIError if an error occurs during the request.
     */
    queue(): Promise<TebexCommandQueue>;

    /**
     * Retrieves the offline command queue.
     * @returns A promise that resolves to the TebexCommandQueueOffline object.
     * @throws BaseAPIError if an error occurs during the request.
     */
    queueOffline(): Promise<TebexCommandQueueOffline>;

    /**
     * Retrieves the offline command queue for a specific player.
     * @param playerId The ID of the player.
     * @returns A promise that resolves to the TebexCommandQueueOffline object.
     * @throws BaseAPIError if an error occurs during the request.
     */
    queueOnline(playerId: string): Promise<TebexCommandQueueOffline>;

    /**
     * Deletes commands from the command queue.
     * @param ids The IDs of the commands to delete.
     * @returns A promise that resolves to null.
     * @throws BaseAPIError if an error occurs during the request.
     */
    deleteCommands(...ids: number[]): Promise<null>;
  };

  /**
   * Retrieves the Tebex listing.
   * @returns A promise that resolves to the TebexListing object.
   * @throws BaseAPIError if an error occurs during the request.
   */
  listing(): Promise<TebexListing>;

  /**
   * Provides access to the Tebex packages related API methods.
   */
  packages: {
    /**
     * Retrieves all packages
     * @method 
     * @param verbose Specifies whether to include package description.
     * @returns A promise that resolves to an array of TebexPackage
     * @throws BaseAPIError if an error occurs during the request.
     */
    all(verbose?: boolean): Promise<TebexPackage[]>;

    /**
     * Retrieves a specific package by ID.
     * @param packageId The ID of the package to retrieve.
     * @returns A promise that resolves to a TebexPackage
     * @throws BaseAPIError if an error occurs during the request.
     */
    get(packageId?: string): Promise<TebexPackage>;

    /**
     * Updates a package.
     * @param packageId The ID of the package to update.
     * @param body The updated package data.
     * @returns A promise that resolves to null.
     * @throws BaseAPIError if an error occurs during the request.
     */
    update(packageId: string, body: { disabled: boolean; name: string; price: number }): Promise<null>;
  };

  /**
   * Provides access to the Tebex community goals related API methods.
   */
  communityGoals: {
    /**
     * Retrieves all community goals or a specific goal by ID.
     * @param communityGoal The ID of the community goal to retrieve. If not provided, all community goals will be returned.
     * @returns A promise that resolves to the TebexCommunityGoal or TebexCommunityGoal[] object.
     * @throws BaseAPIError if an error occurs during the request.
     */
    get(communityGoal?: string): Promise<TebexCommunityGoal | TebexCommunityGoal[]>;
  };

  /**
   * Provides access to the Tebex payments related API methods.
   */
  payments: {
    /**
     * Retrieves all payments.
     * @param limit The maximum number of payments to retrieve. Defaults to 100.
     * @returns A promise that resolves to an array of TebexPayment objects.
     * @throws BaseAPIError if an error occurs during the request.
     */
    getAll(limit?: number): Promise<TebexPayment[]>;

    /**
     * Retrieves payments paginated by 25 per page.
     * @param page The page number to retrieve. Defaults to the first page.
     * @returns A promise that resolves to the TebexPaymentPaginated object.
     * @throws BaseAPIError if an error occurs during the request.
     */
    getPaginated(page?: number): Promise<TebexPaymentPaginated>;

    /**
     * Retrieves a payment by transaction/payment ID.
     * @param transactionId The ID of the transaction/payment.
     * @returns A promise that resolves to the TebexPayment object.
     * @throws BaseAPIError if an error occurs during the request.
     */
    getPayment(transactionId: string): Promise<TebexPayment>;

    /**
     * Retrieves the required payment fields for a package.
     * @param packageId The ID of the package.
     * @returns A promise that resolves to the TebexPaymentFields object.
     */
    getPaymentFields(packageId: string): Promise<TebexPaymentFields>;

    /**
     * Updates a payment.
     * @param transactionId The ID of the transaction/payment.
     * @param body The updated payment data.
     * @returns A promise that resolves to null.
     * @throws BaseAPIError if an error occurs during the request.
     */
    updatePayment(transactionId: string, body: { username: string; status: "complete" | "chargeback" | "refund" }): Promise<null>;

    /**
     * Creates a payment note.
     * @param transactionId The ID of the transaction/payment.
     * @param note The payment note.
     * @returns A promise that resolves to null.
     * @throws BaseAPIError if an error occurs during the request.
     */
    createPaymentNote(transactionId: string, note: string): Promise<null>;
  };
}
