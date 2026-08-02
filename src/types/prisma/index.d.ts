/**
 * Client
 **/
import * as runtime from "./runtime/library.js";

import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Device
 *
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>;
/**
 * Model Plant
 *
 */
export type Plant = $Result.DefaultSelection<Prisma.$PlantPayload>;
/**
 * Model MoistureReading
 *
 */
export type MoistureReading =
  $Result.DefaultSelection<Prisma.$MoistureReadingPayload>;
/**
 * Model WateringLog
 *
 */
export type WateringLog = $Result.DefaultSelection<Prisma.$WateringLogPayload>;
/**
 * Model PushSubscription
 *
 */
export type PushSubscription =
  $Result.DefaultSelection<Prisma.$PushSubscriptionPayload>;
/**
 * Model NotificationLog
 *
 */
export type NotificationLog =
  $Result.DefaultSelection<Prisma.$NotificationLogPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Devices
   * const devices = await prisma.device.findMany()
   * ```
   */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plant`: Exposes CRUD operations for the **Plant** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Plants
   * const plants = await prisma.plant.findMany()
   * ```
   */
  get plant(): Prisma.PlantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moistureReading`: Exposes CRUD operations for the **MoistureReading** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more MoistureReadings
   * const moistureReadings = await prisma.moistureReading.findMany()
   * ```
   */
  get moistureReading(): Prisma.MoistureReadingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wateringLog`: Exposes CRUD operations for the **WateringLog** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more WateringLogs
   * const wateringLogs = await prisma.wateringLog.findMany()
   * ```
   */
  get wateringLog(): Prisma.WateringLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pushSubscription`: Exposes CRUD operations for the **PushSubscription** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PushSubscriptions
   * const pushSubscriptions = await prisma.pushSubscription.findMany()
   * ```
   */
  get pushSubscription(): Prisma.PushSubscriptionDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.notificationLog`: Exposes CRUD operations for the **NotificationLog** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more NotificationLogs
   * const notificationLogs = await prisma.notificationLog.findMany()
   * ```
   */
  get notificationLog(): Prisma.NotificationLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
        | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Device: "Device";
    Plant: "Plant";
    MoistureReading: "MoistureReading";
    WateringLog: "WateringLog";
    PushSubscription: "PushSubscription";
    NotificationLog: "NotificationLog";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "user"
        | "device"
        | "plant"
        | "moistureReading"
        | "wateringLog"
        | "pushSubscription"
        | "notificationLog";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>;
        fields: Prisma.DeviceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>;
          };
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>;
          };
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[];
          };
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>;
          };
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[];
          };
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>;
          };
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>;
          };
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[];
          };
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>;
          };
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDevice>;
          };
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DeviceGroupByOutputType>[];
          };
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>;
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number;
          };
        };
      };
      Plant: {
        payload: Prisma.$PlantPayload<ExtArgs>;
        fields: Prisma.PlantFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PlantFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlantPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PlantFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>;
          };
          findFirst: {
            args: Prisma.PlantFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlantPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PlantFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>;
          };
          findMany: {
            args: Prisma.PlantFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>[];
          };
          create: {
            args: Prisma.PlantCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>;
          };
          createMany: {
            args: Prisma.PlantCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PlantCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>[];
          };
          delete: {
            args: Prisma.PlantDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>;
          };
          update: {
            args: Prisma.PlantUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>;
          };
          deleteMany: {
            args: Prisma.PlantDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PlantUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PlantUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>[];
          };
          upsert: {
            args: Prisma.PlantUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>;
          };
          aggregate: {
            args: Prisma.PlantAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePlant>;
          };
          groupBy: {
            args: Prisma.PlantGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PlantGroupByOutputType>[];
          };
          count: {
            args: Prisma.PlantCountArgs<ExtArgs>;
            result: $Utils.Optional<PlantCountAggregateOutputType> | number;
          };
        };
      };
      MoistureReading: {
        payload: Prisma.$MoistureReadingPayload<ExtArgs>;
        fields: Prisma.MoistureReadingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MoistureReadingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoistureReadingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MoistureReadingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoistureReadingPayload>;
          };
          findFirst: {
            args: Prisma.MoistureReadingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoistureReadingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MoistureReadingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoistureReadingPayload>;
          };
          findMany: {
            args: Prisma.MoistureReadingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoistureReadingPayload>[];
          };
          create: {
            args: Prisma.MoistureReadingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoistureReadingPayload>;
          };
          createMany: {
            args: Prisma.MoistureReadingCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MoistureReadingCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoistureReadingPayload>[];
          };
          delete: {
            args: Prisma.MoistureReadingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoistureReadingPayload>;
          };
          update: {
            args: Prisma.MoistureReadingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoistureReadingPayload>;
          };
          deleteMany: {
            args: Prisma.MoistureReadingDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MoistureReadingUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MoistureReadingUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoistureReadingPayload>[];
          };
          upsert: {
            args: Prisma.MoistureReadingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoistureReadingPayload>;
          };
          aggregate: {
            args: Prisma.MoistureReadingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMoistureReading>;
          };
          groupBy: {
            args: Prisma.MoistureReadingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MoistureReadingGroupByOutputType>[];
          };
          count: {
            args: Prisma.MoistureReadingCountArgs<ExtArgs>;
            result:
              $Utils.Optional<MoistureReadingCountAggregateOutputType> | number;
          };
        };
      };
      WateringLog: {
        payload: Prisma.$WateringLogPayload<ExtArgs>;
        fields: Prisma.WateringLogFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.WateringLogFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WateringLogPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.WateringLogFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WateringLogPayload>;
          };
          findFirst: {
            args: Prisma.WateringLogFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WateringLogPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.WateringLogFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WateringLogPayload>;
          };
          findMany: {
            args: Prisma.WateringLogFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WateringLogPayload>[];
          };
          create: {
            args: Prisma.WateringLogCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WateringLogPayload>;
          };
          createMany: {
            args: Prisma.WateringLogCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.WateringLogCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WateringLogPayload>[];
          };
          delete: {
            args: Prisma.WateringLogDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WateringLogPayload>;
          };
          update: {
            args: Prisma.WateringLogUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WateringLogPayload>;
          };
          deleteMany: {
            args: Prisma.WateringLogDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.WateringLogUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.WateringLogUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WateringLogPayload>[];
          };
          upsert: {
            args: Prisma.WateringLogUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WateringLogPayload>;
          };
          aggregate: {
            args: Prisma.WateringLogAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateWateringLog>;
          };
          groupBy: {
            args: Prisma.WateringLogGroupByArgs<ExtArgs>;
            result: $Utils.Optional<WateringLogGroupByOutputType>[];
          };
          count: {
            args: Prisma.WateringLogCountArgs<ExtArgs>;
            result:
              $Utils.Optional<WateringLogCountAggregateOutputType> | number;
          };
        };
      };
      PushSubscription: {
        payload: Prisma.$PushSubscriptionPayload<ExtArgs>;
        fields: Prisma.PushSubscriptionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PushSubscriptionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PushSubscriptionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>;
          };
          findFirst: {
            args: Prisma.PushSubscriptionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PushSubscriptionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>;
          };
          findMany: {
            args: Prisma.PushSubscriptionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[];
          };
          create: {
            args: Prisma.PushSubscriptionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>;
          };
          createMany: {
            args: Prisma.PushSubscriptionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PushSubscriptionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[];
          };
          delete: {
            args: Prisma.PushSubscriptionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>;
          };
          update: {
            args: Prisma.PushSubscriptionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>;
          };
          deleteMany: {
            args: Prisma.PushSubscriptionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PushSubscriptionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PushSubscriptionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[];
          };
          upsert: {
            args: Prisma.PushSubscriptionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>;
          };
          aggregate: {
            args: Prisma.PushSubscriptionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePushSubscription>;
          };
          groupBy: {
            args: Prisma.PushSubscriptionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PushSubscriptionGroupByOutputType>[];
          };
          count: {
            args: Prisma.PushSubscriptionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<PushSubscriptionCountAggregateOutputType>
              | number;
          };
        };
      };
      NotificationLog: {
        payload: Prisma.$NotificationLogPayload<ExtArgs>;
        fields: Prisma.NotificationLogFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.NotificationLogFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.NotificationLogFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>;
          };
          findFirst: {
            args: Prisma.NotificationLogFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.NotificationLogFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>;
          };
          findMany: {
            args: Prisma.NotificationLogFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>[];
          };
          create: {
            args: Prisma.NotificationLogCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>;
          };
          createMany: {
            args: Prisma.NotificationLogCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.NotificationLogCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>[];
          };
          delete: {
            args: Prisma.NotificationLogDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>;
          };
          update: {
            args: Prisma.NotificationLogUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>;
          };
          deleteMany: {
            args: Prisma.NotificationLogDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.NotificationLogUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.NotificationLogUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>[];
          };
          upsert: {
            args: Prisma.NotificationLogUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationLogPayload>;
          };
          aggregate: {
            args: Prisma.NotificationLogAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNotificationLog>;
          };
          groupBy: {
            args: Prisma.NotificationLogGroupByArgs<ExtArgs>;
            result: $Utils.Optional<NotificationLogGroupByOutputType>[];
          };
          count: {
            args: Prisma.NotificationLogCountArgs<ExtArgs>;
            result:
              $Utils.Optional<NotificationLogCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    device?: DeviceOmit;
    plant?: PlantOmit;
    moistureReading?: MoistureReadingOmit;
    wateringLog?: WateringLogOmit;
    pushSubscription?: PushSubscriptionOmit;
    notificationLog?: NotificationLogOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T["level"] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    plants: number;
    devices: number;
    pushSubscriptions: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    plants?: boolean | UserCountOutputTypeCountPlantsArgs;
    devices?: boolean | UserCountOutputTypeCountDevicesArgs;
    pushSubscriptions?: boolean | UserCountOutputTypeCountPushSubscriptionsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlantsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PlantWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDevicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: DeviceWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPushSubscriptionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PushSubscriptionWhereInput;
  };

  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    readings: number;
  };

  export type DeviceCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    readings?: boolean | DeviceCountOutputTypeCountReadingsArgs;
  };

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountReadingsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MoistureReadingWhereInput;
  };

  /**
   * Count Type PlantCountOutputType
   */

  export type PlantCountOutputType = {
    readings: number;
    waterings: number;
    notifications: number;
  };

  export type PlantCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    readings?: boolean | PlantCountOutputTypeCountReadingsArgs;
    waterings?: boolean | PlantCountOutputTypeCountWateringsArgs;
    notifications?: boolean | PlantCountOutputTypeCountNotificationsArgs;
  };

  // Custom InputTypes
  /**
   * PlantCountOutputType without action
   */
  export type PlantCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlantCountOutputType
     */
    select?: PlantCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PlantCountOutputType without action
   */
  export type PlantCountOutputTypeCountReadingsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MoistureReadingWhereInput;
  };

  /**
   * PlantCountOutputType without action
   */
  export type PlantCountOutputTypeCountWateringsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: WateringLogWhereInput;
  };

  /**
   * PlantCountOutputType without action
   */
  export type PlantCountOutputTypeCountNotificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationLogWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    passwordHash: string;
    name: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      plants?: boolean | User$plantsArgs<ExtArgs>;
      devices?: boolean | User$devicesArgs<ExtArgs>;
      pushSubscriptions?: boolean | User$pushSubscriptionsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "email" | "passwordHash" | "name" | "createdAt" | "updatedAt",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    plants?: boolean | User$plantsArgs<ExtArgs>;
    devices?: boolean | User$devicesArgs<ExtArgs>;
    pushSubscriptions?: boolean | User$pushSubscriptionsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      plants: Prisma.$PlantPayload<ExtArgs>[];
      devices: Prisma.$DevicePayload<ExtArgs>[];
      pushSubscriptions: Prisma.$PushSubscriptionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        passwordHash: string;
        name: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T["by"] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    plants<T extends User$plantsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$plantsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PlantPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    devices<T extends User$devicesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$devicesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$DevicePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    pushSubscriptions<T extends User$pushSubscriptionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$pushSubscriptionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PushSubscriptionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?:
        ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly passwordHash: FieldRef<"User", "String">;
    readonly name: FieldRef<"User", "String">;
    readonly createdAt: FieldRef<"User", "DateTime">;
    readonly updatedAt: FieldRef<"User", "DateTime">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.plants
   */
  export type User$plantsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null;
    where?: PlantWhereInput;
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[];
    cursor?: PlantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[];
  };

  /**
   * User.devices
   */
  export type User$devicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null;
    where?: DeviceWhereInput;
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[];
    cursor?: DeviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[];
  };

  /**
   * User.pushSubscriptions
   */
  export type User$pushSubscriptionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null;
    where?: PushSubscriptionWhereInput;
    orderBy?:
      | PushSubscriptionOrderByWithRelationInput
      | PushSubscriptionOrderByWithRelationInput[];
    cursor?: PushSubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null;
    _avg: DeviceAvgAggregateOutputType | null;
    _sum: DeviceSumAggregateOutputType | null;
    _min: DeviceMinAggregateOutputType | null;
    _max: DeviceMaxAggregateOutputType | null;
  };

  export type DeviceAvgAggregateOutputType = {
    lastBatteryLevel: number | null;
  };

  export type DeviceSumAggregateOutputType = {
    lastBatteryLevel: number | null;
  };

  export type DeviceMinAggregateOutputType = {
    id: string | null;
    token: string | null;
    name: string | null;
    macAddress: string | null;
    lastBatteryLevel: number | null;
    lastSeenAt: Date | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type DeviceMaxAggregateOutputType = {
    id: string | null;
    token: string | null;
    name: string | null;
    macAddress: string | null;
    lastBatteryLevel: number | null;
    lastSeenAt: Date | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type DeviceCountAggregateOutputType = {
    id: number;
    token: number;
    name: number;
    macAddress: number;
    lastBatteryLevel: number;
    lastSeenAt: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type DeviceAvgAggregateInputType = {
    lastBatteryLevel?: true;
  };

  export type DeviceSumAggregateInputType = {
    lastBatteryLevel?: true;
  };

  export type DeviceMinAggregateInputType = {
    id?: true;
    token?: true;
    name?: true;
    macAddress?: true;
    lastBatteryLevel?: true;
    lastSeenAt?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type DeviceMaxAggregateInputType = {
    id?: true;
    token?: true;
    name?: true;
    macAddress?: true;
    lastBatteryLevel?: true;
    lastSeenAt?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type DeviceCountAggregateInputType = {
    id?: true;
    token?: true;
    name?: true;
    macAddress?: true;
    lastBatteryLevel?: true;
    lastSeenAt?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type DeviceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Devices
     **/
    _count?: true | DeviceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: DeviceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: DeviceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DeviceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DeviceMaxAggregateInputType;
  };

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
    [P in keyof T & keyof AggregateDevice]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>;
  };

  export type DeviceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: DeviceWhereInput;
    orderBy?:
      DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[];
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum;
    having?: DeviceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeviceCountAggregateInputType | true;
    _avg?: DeviceAvgAggregateInputType;
    _sum?: DeviceSumAggregateInputType;
    _min?: DeviceMinAggregateInputType;
    _max?: DeviceMaxAggregateInputType;
  };

  export type DeviceGroupByOutputType = {
    id: string;
    token: string;
    name: string;
    macAddress: string | null;
    lastBatteryLevel: number | null;
    lastSeenAt: Date | null;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: DeviceCountAggregateOutputType | null;
    _avg: DeviceAvgAggregateOutputType | null;
    _sum: DeviceSumAggregateOutputType | null;
    _min: DeviceMinAggregateOutputType | null;
    _max: DeviceMaxAggregateOutputType | null;
  };

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<DeviceGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof DeviceGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>;
        }
      >
    >;

  export type DeviceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      token?: boolean;
      name?: boolean;
      macAddress?: boolean;
      lastBatteryLevel?: boolean;
      lastSeenAt?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      plant?: boolean | Device$plantArgs<ExtArgs>;
      readings?: boolean | Device$readingsArgs<ExtArgs>;
      _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["device"]
  >;

  export type DeviceSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      token?: boolean;
      name?: boolean;
      macAddress?: boolean;
      lastBatteryLevel?: boolean;
      lastSeenAt?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["device"]
  >;

  export type DeviceSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      token?: boolean;
      name?: boolean;
      macAddress?: boolean;
      lastBatteryLevel?: boolean;
      lastSeenAt?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["device"]
  >;

  export type DeviceSelectScalar = {
    id?: boolean;
    token?: boolean;
    name?: boolean;
    macAddress?: boolean;
    lastBatteryLevel?: boolean;
    lastSeenAt?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type DeviceOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "token"
    | "name"
    | "macAddress"
    | "lastBatteryLevel"
    | "lastSeenAt"
    | "userId"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["device"]
  >;
  export type DeviceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    plant?: boolean | Device$plantArgs<ExtArgs>;
    readings?: boolean | Device$readingsArgs<ExtArgs>;
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type DeviceIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type DeviceIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $DevicePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Device";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      plant: Prisma.$PlantPayload<ExtArgs> | null;
      readings: Prisma.$MoistureReadingPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        token: string;
        name: string;
        macAddress: string | null;
        lastBatteryLevel: number | null;
        lastSeenAt: Date | null;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["device"]
    >;
    composites: {};
  };

  type DeviceGetPayload<
    S extends boolean | null | undefined | DeviceDefaultArgs,
  > = $Result.GetResult<Prisma.$DevicePayload, S>;

  type DeviceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<DeviceFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: DeviceCountAggregateInputType | true;
  };

  export interface DeviceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Device"];
      meta: { name: "Device" };
    };
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(
      args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>,
    ): Prisma__DeviceClient<
      $Result.GetResult<
        Prisma.$DevicePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__DeviceClient<
      $Result.GetResult<
        Prisma.$DevicePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(
      args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>,
    ): Prisma__DeviceClient<
      $Result.GetResult<
        Prisma.$DevicePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__DeviceClient<
      $Result.GetResult<
        Prisma.$DevicePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     *
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DeviceFindManyArgs>(
      args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DevicePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     *
     */
    create<T extends DeviceCreateArgs>(
      args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>,
    ): Prisma__DeviceClient<
      $Result.GetResult<
        Prisma.$DevicePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DeviceCreateManyArgs>(
      args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(
      args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DevicePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     *
     */
    delete<T extends DeviceDeleteArgs>(
      args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>,
    ): Prisma__DeviceClient<
      $Result.GetResult<
        Prisma.$DevicePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DeviceUpdateArgs>(
      args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>,
    ): Prisma__DeviceClient<
      $Result.GetResult<
        Prisma.$DevicePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DeviceDeleteManyArgs>(
      args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DeviceUpdateManyArgs>(
      args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(
      args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DevicePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(
      args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>,
    ): Prisma__DeviceClient<
      $Result.GetResult<
        Prisma.$DevicePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
     **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], DeviceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DeviceAggregateArgs>(
      args: Subset<T, DeviceAggregateArgs>,
    ): Prisma.PrismaPromise<GetDeviceAggregateType<T>>;

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs["orderBy"] }
        : { orderBy?: DeviceGroupByArgs["orderBy"] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T["by"] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetDeviceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Device model
     */
    readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    plant<T extends Device$plantArgs<ExtArgs> = {}>(
      args?: Subset<T, Device$plantArgs<ExtArgs>>,
    ): Prisma__PlantClient<
      $Result.GetResult<
        Prisma.$PlantPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    readings<T extends Device$readingsArgs<ExtArgs> = {}>(
      args?: Subset<T, Device$readingsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MoistureReadingPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?:
        ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", "String">;
    readonly token: FieldRef<"Device", "String">;
    readonly name: FieldRef<"Device", "String">;
    readonly macAddress: FieldRef<"Device", "String">;
    readonly lastBatteryLevel: FieldRef<"Device", "Float">;
    readonly lastSeenAt: FieldRef<"Device", "DateTime">;
    readonly userId: FieldRef<"Device", "String">;
    readonly createdAt: FieldRef<"Device", "DateTime">;
    readonly updatedAt: FieldRef<"Device", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null;
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput;
  };

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null;
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput;
  };

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null;
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[];
  };

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null;
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[];
  };

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null;
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Devices.
     */
    skip?: number;
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[];
  };

  /**
   * Device create
   */
  export type DeviceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null;
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>;
  };

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null;
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Device update
   */
  export type DeviceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null;
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>;
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput;
  };

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>;
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput;
    /**
     * Limit how many Devices to update.
     */
    limit?: number;
  };

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null;
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>;
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput;
    /**
     * Limit how many Devices to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null;
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput;
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>;
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>;
  };

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null;
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput;
  };

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput;
    /**
     * Limit how many Devices to delete.
     */
    limit?: number;
  };

  /**
   * Device.plant
   */
  export type Device$plantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null;
    where?: PlantWhereInput;
  };

  /**
   * Device.readings
   */
  export type Device$readingsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MoistureReading
     */
    select?: MoistureReadingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoistureReading
     */
    omit?: MoistureReadingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoistureReadingInclude<ExtArgs> | null;
    where?: MoistureReadingWhereInput;
    orderBy?:
      | MoistureReadingOrderByWithRelationInput
      | MoistureReadingOrderByWithRelationInput[];
    cursor?: MoistureReadingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      MoistureReadingScalarFieldEnum | MoistureReadingScalarFieldEnum[];
  };

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null;
  };

  /**
   * Model Plant
   */

  export type AggregatePlant = {
    _count: PlantCountAggregateOutputType | null;
    _avg: PlantAvgAggregateOutputType | null;
    _sum: PlantSumAggregateOutputType | null;
    _min: PlantMinAggregateOutputType | null;
    _max: PlantMaxAggregateOutputType | null;
  };

  export type PlantAvgAggregateOutputType = {
    minMoistureThreshold: number | null;
    targetMoistureLevel: number | null;
  };

  export type PlantSumAggregateOutputType = {
    minMoistureThreshold: number | null;
    targetMoistureLevel: number | null;
  };

  export type PlantMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    species: string | null;
    location: string | null;
    minMoistureThreshold: number | null;
    targetMoistureLevel: number | null;
    userId: string | null;
    deviceId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PlantMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    species: string | null;
    location: string | null;
    minMoistureThreshold: number | null;
    targetMoistureLevel: number | null;
    userId: string | null;
    deviceId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PlantCountAggregateOutputType = {
    id: number;
    name: number;
    species: number;
    location: number;
    minMoistureThreshold: number;
    targetMoistureLevel: number;
    userId: number;
    deviceId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type PlantAvgAggregateInputType = {
    minMoistureThreshold?: true;
    targetMoistureLevel?: true;
  };

  export type PlantSumAggregateInputType = {
    minMoistureThreshold?: true;
    targetMoistureLevel?: true;
  };

  export type PlantMinAggregateInputType = {
    id?: true;
    name?: true;
    species?: true;
    location?: true;
    minMoistureThreshold?: true;
    targetMoistureLevel?: true;
    userId?: true;
    deviceId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PlantMaxAggregateInputType = {
    id?: true;
    name?: true;
    species?: true;
    location?: true;
    minMoistureThreshold?: true;
    targetMoistureLevel?: true;
    userId?: true;
    deviceId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PlantCountAggregateInputType = {
    id?: true;
    name?: true;
    species?: true;
    location?: true;
    minMoistureThreshold?: true;
    targetMoistureLevel?: true;
    userId?: true;
    deviceId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type PlantAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Plant to aggregate.
     */
    where?: PlantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PlantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Plants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Plants
     **/
    _count?: true | PlantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PlantAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PlantSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PlantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PlantMaxAggregateInputType;
  };

  export type GetPlantAggregateType<T extends PlantAggregateArgs> = {
    [P in keyof T & keyof AggregatePlant]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlant[P]>
      : GetScalarType<T[P], AggregatePlant[P]>;
  };

  export type PlantGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PlantWhereInput;
    orderBy?:
      PlantOrderByWithAggregationInput | PlantOrderByWithAggregationInput[];
    by: PlantScalarFieldEnum[] | PlantScalarFieldEnum;
    having?: PlantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlantCountAggregateInputType | true;
    _avg?: PlantAvgAggregateInputType;
    _sum?: PlantSumAggregateInputType;
    _min?: PlantMinAggregateInputType;
    _max?: PlantMaxAggregateInputType;
  };

  export type PlantGroupByOutputType = {
    id: string;
    name: string;
    species: string | null;
    location: string | null;
    minMoistureThreshold: number;
    targetMoistureLevel: number;
    userId: string;
    deviceId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PlantCountAggregateOutputType | null;
    _avg: PlantAvgAggregateOutputType | null;
    _sum: PlantSumAggregateOutputType | null;
    _min: PlantMinAggregateOutputType | null;
    _max: PlantMaxAggregateOutputType | null;
  };

  type GetPlantGroupByPayload<T extends PlantGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PlantGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof PlantGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantGroupByOutputType[P]>
            : GetScalarType<T[P], PlantGroupByOutputType[P]>;
        }
      >
    >;

  export type PlantSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      species?: boolean;
      location?: boolean;
      minMoistureThreshold?: boolean;
      targetMoistureLevel?: boolean;
      userId?: boolean;
      deviceId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      device?: boolean | Plant$deviceArgs<ExtArgs>;
      readings?: boolean | Plant$readingsArgs<ExtArgs>;
      waterings?: boolean | Plant$wateringsArgs<ExtArgs>;
      notifications?: boolean | Plant$notificationsArgs<ExtArgs>;
      _count?: boolean | PlantCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["plant"]
  >;

  export type PlantSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      species?: boolean;
      location?: boolean;
      minMoistureThreshold?: boolean;
      targetMoistureLevel?: boolean;
      userId?: boolean;
      deviceId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      device?: boolean | Plant$deviceArgs<ExtArgs>;
    },
    ExtArgs["result"]["plant"]
  >;

  export type PlantSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      species?: boolean;
      location?: boolean;
      minMoistureThreshold?: boolean;
      targetMoistureLevel?: boolean;
      userId?: boolean;
      deviceId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      device?: boolean | Plant$deviceArgs<ExtArgs>;
    },
    ExtArgs["result"]["plant"]
  >;

  export type PlantSelectScalar = {
    id?: boolean;
    name?: boolean;
    species?: boolean;
    location?: boolean;
    minMoistureThreshold?: boolean;
    targetMoistureLevel?: boolean;
    userId?: boolean;
    deviceId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type PlantOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "species"
    | "location"
    | "minMoistureThreshold"
    | "targetMoistureLevel"
    | "userId"
    | "deviceId"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["plant"]
  >;
  export type PlantInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    device?: boolean | Plant$deviceArgs<ExtArgs>;
    readings?: boolean | Plant$readingsArgs<ExtArgs>;
    waterings?: boolean | Plant$wateringsArgs<ExtArgs>;
    notifications?: boolean | Plant$notificationsArgs<ExtArgs>;
    _count?: boolean | PlantCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type PlantIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    device?: boolean | Plant$deviceArgs<ExtArgs>;
  };
  export type PlantIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    device?: boolean | Plant$deviceArgs<ExtArgs>;
  };

  export type $PlantPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Plant";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      device: Prisma.$DevicePayload<ExtArgs> | null;
      readings: Prisma.$MoistureReadingPayload<ExtArgs>[];
      waterings: Prisma.$WateringLogPayload<ExtArgs>[];
      notifications: Prisma.$NotificationLogPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        species: string | null;
        location: string | null;
        minMoistureThreshold: number;
        targetMoistureLevel: number;
        userId: string;
        deviceId: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["plant"]
    >;
    composites: {};
  };

  type PlantGetPayload<
    S extends boolean | null | undefined | PlantDefaultArgs,
  > = $Result.GetResult<Prisma.$PlantPayload, S>;

  type PlantCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PlantFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: PlantCountAggregateInputType | true;
  };

  export interface PlantDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Plant"];
      meta: { name: "Plant" };
    };
    /**
     * Find zero or one Plant that matches the filter.
     * @param {PlantFindUniqueArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantFindUniqueArgs>(
      args: SelectSubset<T, PlantFindUniqueArgs<ExtArgs>>,
    ): Prisma__PlantClient<
      $Result.GetResult<
        Prisma.$PlantPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Plant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantFindUniqueOrThrowArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PlantFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PlantClient<
      $Result.GetResult<
        Prisma.$PlantPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Plant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantFindFirstArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantFindFirstArgs>(
      args?: SelectSubset<T, PlantFindFirstArgs<ExtArgs>>,
    ): Prisma__PlantClient<
      $Result.GetResult<
        Prisma.$PlantPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Plant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantFindFirstOrThrowArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PlantFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PlantClient<
      $Result.GetResult<
        Prisma.$PlantPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Plants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plants
     * const plants = await prisma.plant.findMany()
     *
     * // Get first 10 Plants
     * const plants = await prisma.plant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const plantWithIdOnly = await prisma.plant.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PlantFindManyArgs>(
      args?: SelectSubset<T, PlantFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PlantPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Plant.
     * @param {PlantCreateArgs} args - Arguments to create a Plant.
     * @example
     * // Create one Plant
     * const Plant = await prisma.plant.create({
     *   data: {
     *     // ... data to create a Plant
     *   }
     * })
     *
     */
    create<T extends PlantCreateArgs>(
      args: SelectSubset<T, PlantCreateArgs<ExtArgs>>,
    ): Prisma__PlantClient<
      $Result.GetResult<
        Prisma.$PlantPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Plants.
     * @param {PlantCreateManyArgs} args - Arguments to create many Plants.
     * @example
     * // Create many Plants
     * const plant = await prisma.plant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PlantCreateManyArgs>(
      args?: SelectSubset<T, PlantCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Plants and returns the data saved in the database.
     * @param {PlantCreateManyAndReturnArgs} args - Arguments to create many Plants.
     * @example
     * // Create many Plants
     * const plant = await prisma.plant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Plants and only return the `id`
     * const plantWithIdOnly = await prisma.plant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PlantCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PlantCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PlantPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Plant.
     * @param {PlantDeleteArgs} args - Arguments to delete one Plant.
     * @example
     * // Delete one Plant
     * const Plant = await prisma.plant.delete({
     *   where: {
     *     // ... filter to delete one Plant
     *   }
     * })
     *
     */
    delete<T extends PlantDeleteArgs>(
      args: SelectSubset<T, PlantDeleteArgs<ExtArgs>>,
    ): Prisma__PlantClient<
      $Result.GetResult<
        Prisma.$PlantPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Plant.
     * @param {PlantUpdateArgs} args - Arguments to update one Plant.
     * @example
     * // Update one Plant
     * const plant = await prisma.plant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PlantUpdateArgs>(
      args: SelectSubset<T, PlantUpdateArgs<ExtArgs>>,
    ): Prisma__PlantClient<
      $Result.GetResult<
        Prisma.$PlantPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Plants.
     * @param {PlantDeleteManyArgs} args - Arguments to filter Plants to delete.
     * @example
     * // Delete a few Plants
     * const { count } = await prisma.plant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PlantDeleteManyArgs>(
      args?: SelectSubset<T, PlantDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plants
     * const plant = await prisma.plant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PlantUpdateManyArgs>(
      args: SelectSubset<T, PlantUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Plants and returns the data updated in the database.
     * @param {PlantUpdateManyAndReturnArgs} args - Arguments to update many Plants.
     * @example
     * // Update many Plants
     * const plant = await prisma.plant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Plants and only return the `id`
     * const plantWithIdOnly = await prisma.plant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PlantUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PlantUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PlantPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Plant.
     * @param {PlantUpsertArgs} args - Arguments to update or create a Plant.
     * @example
     * // Update or create a Plant
     * const plant = await prisma.plant.upsert({
     *   create: {
     *     // ... data to create a Plant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plant we want to update
     *   }
     * })
     */
    upsert<T extends PlantUpsertArgs>(
      args: SelectSubset<T, PlantUpsertArgs<ExtArgs>>,
    ): Prisma__PlantClient<
      $Result.GetResult<
        Prisma.$PlantPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantCountArgs} args - Arguments to filter Plants to count.
     * @example
     * // Count the number of Plants
     * const count = await prisma.plant.count({
     *   where: {
     *     // ... the filter for the Plants we want to count
     *   }
     * })
     **/
    count<T extends PlantCountArgs>(
      args?: Subset<T, PlantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PlantCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Plant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PlantAggregateArgs>(
      args: Subset<T, PlantAggregateArgs>,
    ): Prisma.PrismaPromise<GetPlantAggregateType<T>>;

    /**
     * Group by Plant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PlantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: PlantGroupByArgs["orderBy"] }
        : { orderBy?: PlantGroupByArgs["orderBy"] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T["by"] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, PlantGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetPlantGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Plant model
     */
    readonly fields: PlantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    device<T extends Plant$deviceArgs<ExtArgs> = {}>(
      args?: Subset<T, Plant$deviceArgs<ExtArgs>>,
    ): Prisma__DeviceClient<
      $Result.GetResult<
        Prisma.$DevicePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    readings<T extends Plant$readingsArgs<ExtArgs> = {}>(
      args?: Subset<T, Plant$readingsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MoistureReadingPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    waterings<T extends Plant$wateringsArgs<ExtArgs> = {}>(
      args?: Subset<T, Plant$wateringsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$WateringLogPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    notifications<T extends Plant$notificationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Plant$notificationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NotificationLogPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?:
        ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Plant model
   */
  interface PlantFieldRefs {
    readonly id: FieldRef<"Plant", "String">;
    readonly name: FieldRef<"Plant", "String">;
    readonly species: FieldRef<"Plant", "String">;
    readonly location: FieldRef<"Plant", "String">;
    readonly minMoistureThreshold: FieldRef<"Plant", "Float">;
    readonly targetMoistureLevel: FieldRef<"Plant", "Float">;
    readonly userId: FieldRef<"Plant", "String">;
    readonly deviceId: FieldRef<"Plant", "String">;
    readonly createdAt: FieldRef<"Plant", "DateTime">;
    readonly updatedAt: FieldRef<"Plant", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Plant findUnique
   */
  export type PlantFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null;
    /**
     * Filter, which Plant to fetch.
     */
    where: PlantWhereUniqueInput;
  };

  /**
   * Plant findUniqueOrThrow
   */
  export type PlantFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null;
    /**
     * Filter, which Plant to fetch.
     */
    where: PlantWhereUniqueInput;
  };

  /**
   * Plant findFirst
   */
  export type PlantFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null;
    /**
     * Filter, which Plant to fetch.
     */
    where?: PlantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Plants.
     */
    cursor?: PlantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Plants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Plants.
     */
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[];
  };

  /**
   * Plant findFirstOrThrow
   */
  export type PlantFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null;
    /**
     * Filter, which Plant to fetch.
     */
    where?: PlantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Plants.
     */
    cursor?: PlantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Plants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Plants.
     */
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[];
  };

  /**
   * Plant findMany
   */
  export type PlantFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null;
    /**
     * Filter, which Plants to fetch.
     */
    where?: PlantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Plants.
     */
    cursor?: PlantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Plants.
     */
    skip?: number;
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[];
  };

  /**
   * Plant create
   */
  export type PlantCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null;
    /**
     * The data needed to create a Plant.
     */
    data: XOR<PlantCreateInput, PlantUncheckedCreateInput>;
  };

  /**
   * Plant createMany
   */
  export type PlantCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Plants.
     */
    data: PlantCreateManyInput | PlantCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Plant createManyAndReturn
   */
  export type PlantCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null;
    /**
     * The data used to create many Plants.
     */
    data: PlantCreateManyInput | PlantCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Plant update
   */
  export type PlantUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null;
    /**
     * The data needed to update a Plant.
     */
    data: XOR<PlantUpdateInput, PlantUncheckedUpdateInput>;
    /**
     * Choose, which Plant to update.
     */
    where: PlantWhereUniqueInput;
  };

  /**
   * Plant updateMany
   */
  export type PlantUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Plants.
     */
    data: XOR<PlantUpdateManyMutationInput, PlantUncheckedUpdateManyInput>;
    /**
     * Filter which Plants to update
     */
    where?: PlantWhereInput;
    /**
     * Limit how many Plants to update.
     */
    limit?: number;
  };

  /**
   * Plant updateManyAndReturn
   */
  export type PlantUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null;
    /**
     * The data used to update Plants.
     */
    data: XOR<PlantUpdateManyMutationInput, PlantUncheckedUpdateManyInput>;
    /**
     * Filter which Plants to update
     */
    where?: PlantWhereInput;
    /**
     * Limit how many Plants to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Plant upsert
   */
  export type PlantUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null;
    /**
     * The filter to search for the Plant to update in case it exists.
     */
    where: PlantWhereUniqueInput;
    /**
     * In case the Plant found by the `where` argument doesn't exist, create a new Plant with this data.
     */
    create: XOR<PlantCreateInput, PlantUncheckedCreateInput>;
    /**
     * In case the Plant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantUpdateInput, PlantUncheckedUpdateInput>;
  };

  /**
   * Plant delete
   */
  export type PlantDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null;
    /**
     * Filter which Plant to delete.
     */
    where: PlantWhereUniqueInput;
  };

  /**
   * Plant deleteMany
   */
  export type PlantDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Plants to delete
     */
    where?: PlantWhereInput;
    /**
     * Limit how many Plants to delete.
     */
    limit?: number;
  };

  /**
   * Plant.device
   */
  export type Plant$deviceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null;
    where?: DeviceWhereInput;
  };

  /**
   * Plant.readings
   */
  export type Plant$readingsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MoistureReading
     */
    select?: MoistureReadingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoistureReading
     */
    omit?: MoistureReadingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoistureReadingInclude<ExtArgs> | null;
    where?: MoistureReadingWhereInput;
    orderBy?:
      | MoistureReadingOrderByWithRelationInput
      | MoistureReadingOrderByWithRelationInput[];
    cursor?: MoistureReadingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      MoistureReadingScalarFieldEnum | MoistureReadingScalarFieldEnum[];
  };

  /**
   * Plant.waterings
   */
  export type Plant$wateringsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WateringLog
     */
    select?: WateringLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WateringLog
     */
    omit?: WateringLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringLogInclude<ExtArgs> | null;
    where?: WateringLogWhereInput;
    orderBy?:
      | WateringLogOrderByWithRelationInput
      | WateringLogOrderByWithRelationInput[];
    cursor?: WateringLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: WateringLogScalarFieldEnum | WateringLogScalarFieldEnum[];
  };

  /**
   * Plant.notifications
   */
  export type Plant$notificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null;
    where?: NotificationLogWhereInput;
    orderBy?:
      | NotificationLogOrderByWithRelationInput
      | NotificationLogOrderByWithRelationInput[];
    cursor?: NotificationLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      NotificationLogScalarFieldEnum | NotificationLogScalarFieldEnum[];
  };

  /**
   * Plant without action
   */
  export type PlantDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null;
  };

  /**
   * Model MoistureReading
   */

  export type AggregateMoistureReading = {
    _count: MoistureReadingCountAggregateOutputType | null;
    _avg: MoistureReadingAvgAggregateOutputType | null;
    _sum: MoistureReadingSumAggregateOutputType | null;
    _min: MoistureReadingMinAggregateOutputType | null;
    _max: MoistureReadingMaxAggregateOutputType | null;
  };

  export type MoistureReadingAvgAggregateOutputType = {
    moisture: number | null;
    battery: number | null;
  };

  export type MoistureReadingSumAggregateOutputType = {
    moisture: number | null;
    battery: number | null;
  };

  export type MoistureReadingMinAggregateOutputType = {
    id: string | null;
    moisture: number | null;
    battery: number | null;
    deviceId: string | null;
    plantId: string | null;
    createdAt: Date | null;
  };

  export type MoistureReadingMaxAggregateOutputType = {
    id: string | null;
    moisture: number | null;
    battery: number | null;
    deviceId: string | null;
    plantId: string | null;
    createdAt: Date | null;
  };

  export type MoistureReadingCountAggregateOutputType = {
    id: number;
    moisture: number;
    battery: number;
    deviceId: number;
    plantId: number;
    createdAt: number;
    _all: number;
  };

  export type MoistureReadingAvgAggregateInputType = {
    moisture?: true;
    battery?: true;
  };

  export type MoistureReadingSumAggregateInputType = {
    moisture?: true;
    battery?: true;
  };

  export type MoistureReadingMinAggregateInputType = {
    id?: true;
    moisture?: true;
    battery?: true;
    deviceId?: true;
    plantId?: true;
    createdAt?: true;
  };

  export type MoistureReadingMaxAggregateInputType = {
    id?: true;
    moisture?: true;
    battery?: true;
    deviceId?: true;
    plantId?: true;
    createdAt?: true;
  };

  export type MoistureReadingCountAggregateInputType = {
    id?: true;
    moisture?: true;
    battery?: true;
    deviceId?: true;
    plantId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type MoistureReadingAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MoistureReading to aggregate.
     */
    where?: MoistureReadingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoistureReadings to fetch.
     */
    orderBy?:
      | MoistureReadingOrderByWithRelationInput
      | MoistureReadingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MoistureReadingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoistureReadings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoistureReadings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MoistureReadings
     **/
    _count?: true | MoistureReadingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MoistureReadingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MoistureReadingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MoistureReadingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MoistureReadingMaxAggregateInputType;
  };

  export type GetMoistureReadingAggregateType<
    T extends MoistureReadingAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateMoistureReading]: P extends
      "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoistureReading[P]>
      : GetScalarType<T[P], AggregateMoistureReading[P]>;
  };

  export type MoistureReadingGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MoistureReadingWhereInput;
    orderBy?:
      | MoistureReadingOrderByWithAggregationInput
      | MoistureReadingOrderByWithAggregationInput[];
    by: MoistureReadingScalarFieldEnum[] | MoistureReadingScalarFieldEnum;
    having?: MoistureReadingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MoistureReadingCountAggregateInputType | true;
    _avg?: MoistureReadingAvgAggregateInputType;
    _sum?: MoistureReadingSumAggregateInputType;
    _min?: MoistureReadingMinAggregateInputType;
    _max?: MoistureReadingMaxAggregateInputType;
  };

  export type MoistureReadingGroupByOutputType = {
    id: string;
    moisture: number;
    battery: number;
    deviceId: string;
    plantId: string | null;
    createdAt: Date;
    _count: MoistureReadingCountAggregateOutputType | null;
    _avg: MoistureReadingAvgAggregateOutputType | null;
    _sum: MoistureReadingSumAggregateOutputType | null;
    _min: MoistureReadingMinAggregateOutputType | null;
    _max: MoistureReadingMaxAggregateOutputType | null;
  };

  type GetMoistureReadingGroupByPayload<T extends MoistureReadingGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MoistureReadingGroupByOutputType, T["by"]> & {
          [
            P in keyof T & keyof MoistureReadingGroupByOutputType
          ]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoistureReadingGroupByOutputType[P]>
            : GetScalarType<T[P], MoistureReadingGroupByOutputType[P]>;
        }
      >
    >;

  export type MoistureReadingSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      moisture?: boolean;
      battery?: boolean;
      deviceId?: boolean;
      plantId?: boolean;
      createdAt?: boolean;
      device?: boolean | DeviceDefaultArgs<ExtArgs>;
      plant?: boolean | MoistureReading$plantArgs<ExtArgs>;
    },
    ExtArgs["result"]["moistureReading"]
  >;

  export type MoistureReadingSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      moisture?: boolean;
      battery?: boolean;
      deviceId?: boolean;
      plantId?: boolean;
      createdAt?: boolean;
      device?: boolean | DeviceDefaultArgs<ExtArgs>;
      plant?: boolean | MoistureReading$plantArgs<ExtArgs>;
    },
    ExtArgs["result"]["moistureReading"]
  >;

  export type MoistureReadingSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      moisture?: boolean;
      battery?: boolean;
      deviceId?: boolean;
      plantId?: boolean;
      createdAt?: boolean;
      device?: boolean | DeviceDefaultArgs<ExtArgs>;
      plant?: boolean | MoistureReading$plantArgs<ExtArgs>;
    },
    ExtArgs["result"]["moistureReading"]
  >;

  export type MoistureReadingSelectScalar = {
    id?: boolean;
    moisture?: boolean;
    battery?: boolean;
    deviceId?: boolean;
    plantId?: boolean;
    createdAt?: boolean;
  };

  export type MoistureReadingOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "moisture" | "battery" | "deviceId" | "plantId" | "createdAt",
    ExtArgs["result"]["moistureReading"]
  >;
  export type MoistureReadingInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>;
    plant?: boolean | MoistureReading$plantArgs<ExtArgs>;
  };
  export type MoistureReadingIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>;
    plant?: boolean | MoistureReading$plantArgs<ExtArgs>;
  };
  export type MoistureReadingIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>;
    plant?: boolean | MoistureReading$plantArgs<ExtArgs>;
  };

  export type $MoistureReadingPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "MoistureReading";
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>;
      plant: Prisma.$PlantPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        moisture: number;
        battery: number;
        deviceId: string;
        plantId: string | null;
        createdAt: Date;
      },
      ExtArgs["result"]["moistureReading"]
    >;
    composites: {};
  };

  type MoistureReadingGetPayload<
    S extends boolean | null | undefined | MoistureReadingDefaultArgs,
  > = $Result.GetResult<Prisma.$MoistureReadingPayload, S>;

  type MoistureReadingCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    MoistureReadingFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: MoistureReadingCountAggregateInputType | true;
  };

  export interface MoistureReadingDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["MoistureReading"];
      meta: { name: "MoistureReading" };
    };
    /**
     * Find zero or one MoistureReading that matches the filter.
     * @param {MoistureReadingFindUniqueArgs} args - Arguments to find a MoistureReading
     * @example
     * // Get one MoistureReading
     * const moistureReading = await prisma.moistureReading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoistureReadingFindUniqueArgs>(
      args: SelectSubset<T, MoistureReadingFindUniqueArgs<ExtArgs>>,
    ): Prisma__MoistureReadingClient<
      $Result.GetResult<
        Prisma.$MoistureReadingPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one MoistureReading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoistureReadingFindUniqueOrThrowArgs} args - Arguments to find a MoistureReading
     * @example
     * // Get one MoistureReading
     * const moistureReading = await prisma.moistureReading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoistureReadingFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MoistureReadingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MoistureReadingClient<
      $Result.GetResult<
        Prisma.$MoistureReadingPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MoistureReading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoistureReadingFindFirstArgs} args - Arguments to find a MoistureReading
     * @example
     * // Get one MoistureReading
     * const moistureReading = await prisma.moistureReading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoistureReadingFindFirstArgs>(
      args?: SelectSubset<T, MoistureReadingFindFirstArgs<ExtArgs>>,
    ): Prisma__MoistureReadingClient<
      $Result.GetResult<
        Prisma.$MoistureReadingPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MoistureReading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoistureReadingFindFirstOrThrowArgs} args - Arguments to find a MoistureReading
     * @example
     * // Get one MoistureReading
     * const moistureReading = await prisma.moistureReading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoistureReadingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MoistureReadingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MoistureReadingClient<
      $Result.GetResult<
        Prisma.$MoistureReadingPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more MoistureReadings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoistureReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoistureReadings
     * const moistureReadings = await prisma.moistureReading.findMany()
     *
     * // Get first 10 MoistureReadings
     * const moistureReadings = await prisma.moistureReading.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const moistureReadingWithIdOnly = await prisma.moistureReading.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MoistureReadingFindManyArgs>(
      args?: SelectSubset<T, MoistureReadingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MoistureReadingPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a MoistureReading.
     * @param {MoistureReadingCreateArgs} args - Arguments to create a MoistureReading.
     * @example
     * // Create one MoistureReading
     * const MoistureReading = await prisma.moistureReading.create({
     *   data: {
     *     // ... data to create a MoistureReading
     *   }
     * })
     *
     */
    create<T extends MoistureReadingCreateArgs>(
      args: SelectSubset<T, MoistureReadingCreateArgs<ExtArgs>>,
    ): Prisma__MoistureReadingClient<
      $Result.GetResult<
        Prisma.$MoistureReadingPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many MoistureReadings.
     * @param {MoistureReadingCreateManyArgs} args - Arguments to create many MoistureReadings.
     * @example
     * // Create many MoistureReadings
     * const moistureReading = await prisma.moistureReading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MoistureReadingCreateManyArgs>(
      args?: SelectSubset<T, MoistureReadingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many MoistureReadings and returns the data saved in the database.
     * @param {MoistureReadingCreateManyAndReturnArgs} args - Arguments to create many MoistureReadings.
     * @example
     * // Create many MoistureReadings
     * const moistureReading = await prisma.moistureReading.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MoistureReadings and only return the `id`
     * const moistureReadingWithIdOnly = await prisma.moistureReading.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MoistureReadingCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MoistureReadingCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MoistureReadingPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a MoistureReading.
     * @param {MoistureReadingDeleteArgs} args - Arguments to delete one MoistureReading.
     * @example
     * // Delete one MoistureReading
     * const MoistureReading = await prisma.moistureReading.delete({
     *   where: {
     *     // ... filter to delete one MoistureReading
     *   }
     * })
     *
     */
    delete<T extends MoistureReadingDeleteArgs>(
      args: SelectSubset<T, MoistureReadingDeleteArgs<ExtArgs>>,
    ): Prisma__MoistureReadingClient<
      $Result.GetResult<
        Prisma.$MoistureReadingPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one MoistureReading.
     * @param {MoistureReadingUpdateArgs} args - Arguments to update one MoistureReading.
     * @example
     * // Update one MoistureReading
     * const moistureReading = await prisma.moistureReading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MoistureReadingUpdateArgs>(
      args: SelectSubset<T, MoistureReadingUpdateArgs<ExtArgs>>,
    ): Prisma__MoistureReadingClient<
      $Result.GetResult<
        Prisma.$MoistureReadingPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more MoistureReadings.
     * @param {MoistureReadingDeleteManyArgs} args - Arguments to filter MoistureReadings to delete.
     * @example
     * // Delete a few MoistureReadings
     * const { count } = await prisma.moistureReading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MoistureReadingDeleteManyArgs>(
      args?: SelectSubset<T, MoistureReadingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MoistureReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoistureReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoistureReadings
     * const moistureReading = await prisma.moistureReading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MoistureReadingUpdateManyArgs>(
      args: SelectSubset<T, MoistureReadingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MoistureReadings and returns the data updated in the database.
     * @param {MoistureReadingUpdateManyAndReturnArgs} args - Arguments to update many MoistureReadings.
     * @example
     * // Update many MoistureReadings
     * const moistureReading = await prisma.moistureReading.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MoistureReadings and only return the `id`
     * const moistureReadingWithIdOnly = await prisma.moistureReading.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MoistureReadingUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MoistureReadingUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MoistureReadingPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one MoistureReading.
     * @param {MoistureReadingUpsertArgs} args - Arguments to update or create a MoistureReading.
     * @example
     * // Update or create a MoistureReading
     * const moistureReading = await prisma.moistureReading.upsert({
     *   create: {
     *     // ... data to create a MoistureReading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoistureReading we want to update
     *   }
     * })
     */
    upsert<T extends MoistureReadingUpsertArgs>(
      args: SelectSubset<T, MoistureReadingUpsertArgs<ExtArgs>>,
    ): Prisma__MoistureReadingClient<
      $Result.GetResult<
        Prisma.$MoistureReadingPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of MoistureReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoistureReadingCountArgs} args - Arguments to filter MoistureReadings to count.
     * @example
     * // Count the number of MoistureReadings
     * const count = await prisma.moistureReading.count({
     *   where: {
     *     // ... the filter for the MoistureReadings we want to count
     *   }
     * })
     **/
    count<T extends MoistureReadingCountArgs>(
      args?: Subset<T, MoistureReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], MoistureReadingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a MoistureReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoistureReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MoistureReadingAggregateArgs>(
      args: Subset<T, MoistureReadingAggregateArgs>,
    ): Prisma.PrismaPromise<GetMoistureReadingAggregateType<T>>;

    /**
     * Group by MoistureReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoistureReadingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MoistureReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: MoistureReadingGroupByArgs["orderBy"] }
        : { orderBy?: MoistureReadingGroupByArgs["orderBy"] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T["by"] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, MoistureReadingGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetMoistureReadingGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MoistureReading model
     */
    readonly fields: MoistureReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MoistureReading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoistureReadingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, DeviceDefaultArgs<ExtArgs>>,
    ): Prisma__DeviceClient<
      | $Result.GetResult<
          Prisma.$DevicePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    plant<T extends MoistureReading$plantArgs<ExtArgs> = {}>(
      args?: Subset<T, MoistureReading$plantArgs<ExtArgs>>,
    ): Prisma__PlantClient<
      $Result.GetResult<
        Prisma.$PlantPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?:
        ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the MoistureReading model
   */
  interface MoistureReadingFieldRefs {
    readonly id: FieldRef<"MoistureReading", "String">;
    readonly moisture: FieldRef<"MoistureReading", "Float">;
    readonly battery: FieldRef<"MoistureReading", "Float">;
    readonly deviceId: FieldRef<"MoistureReading", "String">;
    readonly plantId: FieldRef<"MoistureReading", "String">;
    readonly createdAt: FieldRef<"MoistureReading", "DateTime">;
  }

  // Custom InputTypes
  /**
   * MoistureReading findUnique
   */
  export type MoistureReadingFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MoistureReading
     */
    select?: MoistureReadingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoistureReading
     */
    omit?: MoistureReadingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoistureReadingInclude<ExtArgs> | null;
    /**
     * Filter, which MoistureReading to fetch.
     */
    where: MoistureReadingWhereUniqueInput;
  };

  /**
   * MoistureReading findUniqueOrThrow
   */
  export type MoistureReadingFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MoistureReading
     */
    select?: MoistureReadingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoistureReading
     */
    omit?: MoistureReadingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoistureReadingInclude<ExtArgs> | null;
    /**
     * Filter, which MoistureReading to fetch.
     */
    where: MoistureReadingWhereUniqueInput;
  };

  /**
   * MoistureReading findFirst
   */
  export type MoistureReadingFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MoistureReading
     */
    select?: MoistureReadingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoistureReading
     */
    omit?: MoistureReadingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoistureReadingInclude<ExtArgs> | null;
    /**
     * Filter, which MoistureReading to fetch.
     */
    where?: MoistureReadingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoistureReadings to fetch.
     */
    orderBy?:
      | MoistureReadingOrderByWithRelationInput
      | MoistureReadingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MoistureReadings.
     */
    cursor?: MoistureReadingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoistureReadings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoistureReadings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MoistureReadings.
     */
    distinct?:
      MoistureReadingScalarFieldEnum | MoistureReadingScalarFieldEnum[];
  };

  /**
   * MoistureReading findFirstOrThrow
   */
  export type MoistureReadingFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MoistureReading
     */
    select?: MoistureReadingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoistureReading
     */
    omit?: MoistureReadingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoistureReadingInclude<ExtArgs> | null;
    /**
     * Filter, which MoistureReading to fetch.
     */
    where?: MoistureReadingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoistureReadings to fetch.
     */
    orderBy?:
      | MoistureReadingOrderByWithRelationInput
      | MoistureReadingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MoistureReadings.
     */
    cursor?: MoistureReadingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoistureReadings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoistureReadings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MoistureReadings.
     */
    distinct?:
      MoistureReadingScalarFieldEnum | MoistureReadingScalarFieldEnum[];
  };

  /**
   * MoistureReading findMany
   */
  export type MoistureReadingFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MoistureReading
     */
    select?: MoistureReadingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoistureReading
     */
    omit?: MoistureReadingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoistureReadingInclude<ExtArgs> | null;
    /**
     * Filter, which MoistureReadings to fetch.
     */
    where?: MoistureReadingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoistureReadings to fetch.
     */
    orderBy?:
      | MoistureReadingOrderByWithRelationInput
      | MoistureReadingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MoistureReadings.
     */
    cursor?: MoistureReadingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoistureReadings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoistureReadings.
     */
    skip?: number;
    distinct?:
      MoistureReadingScalarFieldEnum | MoistureReadingScalarFieldEnum[];
  };

  /**
   * MoistureReading create
   */
  export type MoistureReadingCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MoistureReading
     */
    select?: MoistureReadingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoistureReading
     */
    omit?: MoistureReadingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoistureReadingInclude<ExtArgs> | null;
    /**
     * The data needed to create a MoistureReading.
     */
    data: XOR<MoistureReadingCreateInput, MoistureReadingUncheckedCreateInput>;
  };

  /**
   * MoistureReading createMany
   */
  export type MoistureReadingCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many MoistureReadings.
     */
    data: MoistureReadingCreateManyInput | MoistureReadingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * MoistureReading createManyAndReturn
   */
  export type MoistureReadingCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MoistureReading
     */
    select?: MoistureReadingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MoistureReading
     */
    omit?: MoistureReadingOmit<ExtArgs> | null;
    /**
     * The data used to create many MoistureReadings.
     */
    data: MoistureReadingCreateManyInput | MoistureReadingCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoistureReadingIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MoistureReading update
   */
  export type MoistureReadingUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MoistureReading
     */
    select?: MoistureReadingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoistureReading
     */
    omit?: MoistureReadingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoistureReadingInclude<ExtArgs> | null;
    /**
     * The data needed to update a MoistureReading.
     */
    data: XOR<MoistureReadingUpdateInput, MoistureReadingUncheckedUpdateInput>;
    /**
     * Choose, which MoistureReading to update.
     */
    where: MoistureReadingWhereUniqueInput;
  };

  /**
   * MoistureReading updateMany
   */
  export type MoistureReadingUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update MoistureReadings.
     */
    data: XOR<
      MoistureReadingUpdateManyMutationInput,
      MoistureReadingUncheckedUpdateManyInput
    >;
    /**
     * Filter which MoistureReadings to update
     */
    where?: MoistureReadingWhereInput;
    /**
     * Limit how many MoistureReadings to update.
     */
    limit?: number;
  };

  /**
   * MoistureReading updateManyAndReturn
   */
  export type MoistureReadingUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MoistureReading
     */
    select?: MoistureReadingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MoistureReading
     */
    omit?: MoistureReadingOmit<ExtArgs> | null;
    /**
     * The data used to update MoistureReadings.
     */
    data: XOR<
      MoistureReadingUpdateManyMutationInput,
      MoistureReadingUncheckedUpdateManyInput
    >;
    /**
     * Filter which MoistureReadings to update
     */
    where?: MoistureReadingWhereInput;
    /**
     * Limit how many MoistureReadings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoistureReadingIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MoistureReading upsert
   */
  export type MoistureReadingUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MoistureReading
     */
    select?: MoistureReadingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoistureReading
     */
    omit?: MoistureReadingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoistureReadingInclude<ExtArgs> | null;
    /**
     * The filter to search for the MoistureReading to update in case it exists.
     */
    where: MoistureReadingWhereUniqueInput;
    /**
     * In case the MoistureReading found by the `where` argument doesn't exist, create a new MoistureReading with this data.
     */
    create: XOR<
      MoistureReadingCreateInput,
      MoistureReadingUncheckedCreateInput
    >;
    /**
     * In case the MoistureReading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      MoistureReadingUpdateInput,
      MoistureReadingUncheckedUpdateInput
    >;
  };

  /**
   * MoistureReading delete
   */
  export type MoistureReadingDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MoistureReading
     */
    select?: MoistureReadingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoistureReading
     */
    omit?: MoistureReadingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoistureReadingInclude<ExtArgs> | null;
    /**
     * Filter which MoistureReading to delete.
     */
    where: MoistureReadingWhereUniqueInput;
  };

  /**
   * MoistureReading deleteMany
   */
  export type MoistureReadingDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MoistureReadings to delete
     */
    where?: MoistureReadingWhereInput;
    /**
     * Limit how many MoistureReadings to delete.
     */
    limit?: number;
  };

  /**
   * MoistureReading.plant
   */
  export type MoistureReading$plantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null;
    where?: PlantWhereInput;
  };

  /**
   * MoistureReading without action
   */
  export type MoistureReadingDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MoistureReading
     */
    select?: MoistureReadingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoistureReading
     */
    omit?: MoistureReadingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoistureReadingInclude<ExtArgs> | null;
  };

  /**
   * Model WateringLog
   */

  export type AggregateWateringLog = {
    _count: WateringLogCountAggregateOutputType | null;
    _avg: WateringLogAvgAggregateOutputType | null;
    _sum: WateringLogSumAggregateOutputType | null;
    _min: WateringLogMinAggregateOutputType | null;
    _max: WateringLogMaxAggregateOutputType | null;
  };

  export type WateringLogAvgAggregateOutputType = {
    moistureBefore: number | null;
    moistureAfter: number | null;
  };

  export type WateringLogSumAggregateOutputType = {
    moistureBefore: number | null;
    moistureAfter: number | null;
  };

  export type WateringLogMinAggregateOutputType = {
    id: string | null;
    plantId: string | null;
    moistureBefore: number | null;
    moistureAfter: number | null;
    detectedAutomatically: boolean | null;
    note: string | null;
    createdAt: Date | null;
  };

  export type WateringLogMaxAggregateOutputType = {
    id: string | null;
    plantId: string | null;
    moistureBefore: number | null;
    moistureAfter: number | null;
    detectedAutomatically: boolean | null;
    note: string | null;
    createdAt: Date | null;
  };

  export type WateringLogCountAggregateOutputType = {
    id: number;
    plantId: number;
    moistureBefore: number;
    moistureAfter: number;
    detectedAutomatically: number;
    note: number;
    createdAt: number;
    _all: number;
  };

  export type WateringLogAvgAggregateInputType = {
    moistureBefore?: true;
    moistureAfter?: true;
  };

  export type WateringLogSumAggregateInputType = {
    moistureBefore?: true;
    moistureAfter?: true;
  };

  export type WateringLogMinAggregateInputType = {
    id?: true;
    plantId?: true;
    moistureBefore?: true;
    moistureAfter?: true;
    detectedAutomatically?: true;
    note?: true;
    createdAt?: true;
  };

  export type WateringLogMaxAggregateInputType = {
    id?: true;
    plantId?: true;
    moistureBefore?: true;
    moistureAfter?: true;
    detectedAutomatically?: true;
    note?: true;
    createdAt?: true;
  };

  export type WateringLogCountAggregateInputType = {
    id?: true;
    plantId?: true;
    moistureBefore?: true;
    moistureAfter?: true;
    detectedAutomatically?: true;
    note?: true;
    createdAt?: true;
    _all?: true;
  };

  export type WateringLogAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which WateringLog to aggregate.
     */
    where?: WateringLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WateringLogs to fetch.
     */
    orderBy?:
      | WateringLogOrderByWithRelationInput
      | WateringLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: WateringLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WateringLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WateringLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned WateringLogs
     **/
    _count?: true | WateringLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: WateringLogAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: WateringLogSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: WateringLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: WateringLogMaxAggregateInputType;
  };

  export type GetWateringLogAggregateType<T extends WateringLogAggregateArgs> =
    {
      [P in keyof T & keyof AggregateWateringLog]: P extends "_count" | "count"
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateWateringLog[P]>
        : GetScalarType<T[P], AggregateWateringLog[P]>;
    };

  export type WateringLogGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: WateringLogWhereInput;
    orderBy?:
      | WateringLogOrderByWithAggregationInput
      | WateringLogOrderByWithAggregationInput[];
    by: WateringLogScalarFieldEnum[] | WateringLogScalarFieldEnum;
    having?: WateringLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WateringLogCountAggregateInputType | true;
    _avg?: WateringLogAvgAggregateInputType;
    _sum?: WateringLogSumAggregateInputType;
    _min?: WateringLogMinAggregateInputType;
    _max?: WateringLogMaxAggregateInputType;
  };

  export type WateringLogGroupByOutputType = {
    id: string;
    plantId: string;
    moistureBefore: number | null;
    moistureAfter: number | null;
    detectedAutomatically: boolean;
    note: string | null;
    createdAt: Date;
    _count: WateringLogCountAggregateOutputType | null;
    _avg: WateringLogAvgAggregateOutputType | null;
    _sum: WateringLogSumAggregateOutputType | null;
    _min: WateringLogMinAggregateOutputType | null;
    _max: WateringLogMaxAggregateOutputType | null;
  };

  type GetWateringLogGroupByPayload<T extends WateringLogGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<WateringLogGroupByOutputType, T["by"]> & {
          [
            P in keyof T & keyof WateringLogGroupByOutputType
          ]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WateringLogGroupByOutputType[P]>
            : GetScalarType<T[P], WateringLogGroupByOutputType[P]>;
        }
      >
    >;

  export type WateringLogSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      plantId?: boolean;
      moistureBefore?: boolean;
      moistureAfter?: boolean;
      detectedAutomatically?: boolean;
      note?: boolean;
      createdAt?: boolean;
      plant?: boolean | PlantDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["wateringLog"]
  >;

  export type WateringLogSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      plantId?: boolean;
      moistureBefore?: boolean;
      moistureAfter?: boolean;
      detectedAutomatically?: boolean;
      note?: boolean;
      createdAt?: boolean;
      plant?: boolean | PlantDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["wateringLog"]
  >;

  export type WateringLogSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      plantId?: boolean;
      moistureBefore?: boolean;
      moistureAfter?: boolean;
      detectedAutomatically?: boolean;
      note?: boolean;
      createdAt?: boolean;
      plant?: boolean | PlantDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["wateringLog"]
  >;

  export type WateringLogSelectScalar = {
    id?: boolean;
    plantId?: boolean;
    moistureBefore?: boolean;
    moistureAfter?: boolean;
    detectedAutomatically?: boolean;
    note?: boolean;
    createdAt?: boolean;
  };

  export type WateringLogOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "plantId"
    | "moistureBefore"
    | "moistureAfter"
    | "detectedAutomatically"
    | "note"
    | "createdAt",
    ExtArgs["result"]["wateringLog"]
  >;
  export type WateringLogInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    plant?: boolean | PlantDefaultArgs<ExtArgs>;
  };
  export type WateringLogIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    plant?: boolean | PlantDefaultArgs<ExtArgs>;
  };
  export type WateringLogIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    plant?: boolean | PlantDefaultArgs<ExtArgs>;
  };

  export type $WateringLogPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "WateringLog";
    objects: {
      plant: Prisma.$PlantPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        plantId: string;
        moistureBefore: number | null;
        moistureAfter: number | null;
        detectedAutomatically: boolean;
        note: string | null;
        createdAt: Date;
      },
      ExtArgs["result"]["wateringLog"]
    >;
    composites: {};
  };

  type WateringLogGetPayload<
    S extends boolean | null | undefined | WateringLogDefaultArgs,
  > = $Result.GetResult<Prisma.$WateringLogPayload, S>;

  type WateringLogCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    WateringLogFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: WateringLogCountAggregateInputType | true;
  };

  export interface WateringLogDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["WateringLog"];
      meta: { name: "WateringLog" };
    };
    /**
     * Find zero or one WateringLog that matches the filter.
     * @param {WateringLogFindUniqueArgs} args - Arguments to find a WateringLog
     * @example
     * // Get one WateringLog
     * const wateringLog = await prisma.wateringLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WateringLogFindUniqueArgs>(
      args: SelectSubset<T, WateringLogFindUniqueArgs<ExtArgs>>,
    ): Prisma__WateringLogClient<
      $Result.GetResult<
        Prisma.$WateringLogPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one WateringLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WateringLogFindUniqueOrThrowArgs} args - Arguments to find a WateringLog
     * @example
     * // Get one WateringLog
     * const wateringLog = await prisma.wateringLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WateringLogFindUniqueOrThrowArgs>(
      args: SelectSubset<T, WateringLogFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__WateringLogClient<
      $Result.GetResult<
        Prisma.$WateringLogPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first WateringLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WateringLogFindFirstArgs} args - Arguments to find a WateringLog
     * @example
     * // Get one WateringLog
     * const wateringLog = await prisma.wateringLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WateringLogFindFirstArgs>(
      args?: SelectSubset<T, WateringLogFindFirstArgs<ExtArgs>>,
    ): Prisma__WateringLogClient<
      $Result.GetResult<
        Prisma.$WateringLogPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first WateringLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WateringLogFindFirstOrThrowArgs} args - Arguments to find a WateringLog
     * @example
     * // Get one WateringLog
     * const wateringLog = await prisma.wateringLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WateringLogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WateringLogFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__WateringLogClient<
      $Result.GetResult<
        Prisma.$WateringLogPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more WateringLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WateringLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WateringLogs
     * const wateringLogs = await prisma.wateringLog.findMany()
     *
     * // Get first 10 WateringLogs
     * const wateringLogs = await prisma.wateringLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const wateringLogWithIdOnly = await prisma.wateringLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends WateringLogFindManyArgs>(
      args?: SelectSubset<T, WateringLogFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$WateringLogPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a WateringLog.
     * @param {WateringLogCreateArgs} args - Arguments to create a WateringLog.
     * @example
     * // Create one WateringLog
     * const WateringLog = await prisma.wateringLog.create({
     *   data: {
     *     // ... data to create a WateringLog
     *   }
     * })
     *
     */
    create<T extends WateringLogCreateArgs>(
      args: SelectSubset<T, WateringLogCreateArgs<ExtArgs>>,
    ): Prisma__WateringLogClient<
      $Result.GetResult<
        Prisma.$WateringLogPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many WateringLogs.
     * @param {WateringLogCreateManyArgs} args - Arguments to create many WateringLogs.
     * @example
     * // Create many WateringLogs
     * const wateringLog = await prisma.wateringLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends WateringLogCreateManyArgs>(
      args?: SelectSubset<T, WateringLogCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many WateringLogs and returns the data saved in the database.
     * @param {WateringLogCreateManyAndReturnArgs} args - Arguments to create many WateringLogs.
     * @example
     * // Create many WateringLogs
     * const wateringLog = await prisma.wateringLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many WateringLogs and only return the `id`
     * const wateringLogWithIdOnly = await prisma.wateringLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends WateringLogCreateManyAndReturnArgs>(
      args?: SelectSubset<T, WateringLogCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$WateringLogPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a WateringLog.
     * @param {WateringLogDeleteArgs} args - Arguments to delete one WateringLog.
     * @example
     * // Delete one WateringLog
     * const WateringLog = await prisma.wateringLog.delete({
     *   where: {
     *     // ... filter to delete one WateringLog
     *   }
     * })
     *
     */
    delete<T extends WateringLogDeleteArgs>(
      args: SelectSubset<T, WateringLogDeleteArgs<ExtArgs>>,
    ): Prisma__WateringLogClient<
      $Result.GetResult<
        Prisma.$WateringLogPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one WateringLog.
     * @param {WateringLogUpdateArgs} args - Arguments to update one WateringLog.
     * @example
     * // Update one WateringLog
     * const wateringLog = await prisma.wateringLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends WateringLogUpdateArgs>(
      args: SelectSubset<T, WateringLogUpdateArgs<ExtArgs>>,
    ): Prisma__WateringLogClient<
      $Result.GetResult<
        Prisma.$WateringLogPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more WateringLogs.
     * @param {WateringLogDeleteManyArgs} args - Arguments to filter WateringLogs to delete.
     * @example
     * // Delete a few WateringLogs
     * const { count } = await prisma.wateringLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends WateringLogDeleteManyArgs>(
      args?: SelectSubset<T, WateringLogDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more WateringLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WateringLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WateringLogs
     * const wateringLog = await prisma.wateringLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends WateringLogUpdateManyArgs>(
      args: SelectSubset<T, WateringLogUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more WateringLogs and returns the data updated in the database.
     * @param {WateringLogUpdateManyAndReturnArgs} args - Arguments to update many WateringLogs.
     * @example
     * // Update many WateringLogs
     * const wateringLog = await prisma.wateringLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more WateringLogs and only return the `id`
     * const wateringLogWithIdOnly = await prisma.wateringLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends WateringLogUpdateManyAndReturnArgs>(
      args: SelectSubset<T, WateringLogUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$WateringLogPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one WateringLog.
     * @param {WateringLogUpsertArgs} args - Arguments to update or create a WateringLog.
     * @example
     * // Update or create a WateringLog
     * const wateringLog = await prisma.wateringLog.upsert({
     *   create: {
     *     // ... data to create a WateringLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WateringLog we want to update
     *   }
     * })
     */
    upsert<T extends WateringLogUpsertArgs>(
      args: SelectSubset<T, WateringLogUpsertArgs<ExtArgs>>,
    ): Prisma__WateringLogClient<
      $Result.GetResult<
        Prisma.$WateringLogPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of WateringLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WateringLogCountArgs} args - Arguments to filter WateringLogs to count.
     * @example
     * // Count the number of WateringLogs
     * const count = await prisma.wateringLog.count({
     *   where: {
     *     // ... the filter for the WateringLogs we want to count
     *   }
     * })
     **/
    count<T extends WateringLogCountArgs>(
      args?: Subset<T, WateringLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], WateringLogCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a WateringLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WateringLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends WateringLogAggregateArgs>(
      args: Subset<T, WateringLogAggregateArgs>,
    ): Prisma.PrismaPromise<GetWateringLogAggregateType<T>>;

    /**
     * Group by WateringLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WateringLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends WateringLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: WateringLogGroupByArgs["orderBy"] }
        : { orderBy?: WateringLogGroupByArgs["orderBy"] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T["by"] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, WateringLogGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetWateringLogGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the WateringLog model
     */
    readonly fields: WateringLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WateringLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WateringLogClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    plant<T extends PlantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PlantDefaultArgs<ExtArgs>>,
    ): Prisma__PlantClient<
      | $Result.GetResult<
          Prisma.$PlantPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?:
        ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the WateringLog model
   */
  interface WateringLogFieldRefs {
    readonly id: FieldRef<"WateringLog", "String">;
    readonly plantId: FieldRef<"WateringLog", "String">;
    readonly moistureBefore: FieldRef<"WateringLog", "Float">;
    readonly moistureAfter: FieldRef<"WateringLog", "Float">;
    readonly detectedAutomatically: FieldRef<"WateringLog", "Boolean">;
    readonly note: FieldRef<"WateringLog", "String">;
    readonly createdAt: FieldRef<"WateringLog", "DateTime">;
  }

  // Custom InputTypes
  /**
   * WateringLog findUnique
   */
  export type WateringLogFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WateringLog
     */
    select?: WateringLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WateringLog
     */
    omit?: WateringLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringLogInclude<ExtArgs> | null;
    /**
     * Filter, which WateringLog to fetch.
     */
    where: WateringLogWhereUniqueInput;
  };

  /**
   * WateringLog findUniqueOrThrow
   */
  export type WateringLogFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WateringLog
     */
    select?: WateringLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WateringLog
     */
    omit?: WateringLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringLogInclude<ExtArgs> | null;
    /**
     * Filter, which WateringLog to fetch.
     */
    where: WateringLogWhereUniqueInput;
  };

  /**
   * WateringLog findFirst
   */
  export type WateringLogFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WateringLog
     */
    select?: WateringLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WateringLog
     */
    omit?: WateringLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringLogInclude<ExtArgs> | null;
    /**
     * Filter, which WateringLog to fetch.
     */
    where?: WateringLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WateringLogs to fetch.
     */
    orderBy?:
      | WateringLogOrderByWithRelationInput
      | WateringLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WateringLogs.
     */
    cursor?: WateringLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WateringLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WateringLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WateringLogs.
     */
    distinct?: WateringLogScalarFieldEnum | WateringLogScalarFieldEnum[];
  };

  /**
   * WateringLog findFirstOrThrow
   */
  export type WateringLogFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WateringLog
     */
    select?: WateringLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WateringLog
     */
    omit?: WateringLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringLogInclude<ExtArgs> | null;
    /**
     * Filter, which WateringLog to fetch.
     */
    where?: WateringLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WateringLogs to fetch.
     */
    orderBy?:
      | WateringLogOrderByWithRelationInput
      | WateringLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WateringLogs.
     */
    cursor?: WateringLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WateringLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WateringLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WateringLogs.
     */
    distinct?: WateringLogScalarFieldEnum | WateringLogScalarFieldEnum[];
  };

  /**
   * WateringLog findMany
   */
  export type WateringLogFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WateringLog
     */
    select?: WateringLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WateringLog
     */
    omit?: WateringLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringLogInclude<ExtArgs> | null;
    /**
     * Filter, which WateringLogs to fetch.
     */
    where?: WateringLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WateringLogs to fetch.
     */
    orderBy?:
      | WateringLogOrderByWithRelationInput
      | WateringLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing WateringLogs.
     */
    cursor?: WateringLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WateringLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WateringLogs.
     */
    skip?: number;
    distinct?: WateringLogScalarFieldEnum | WateringLogScalarFieldEnum[];
  };

  /**
   * WateringLog create
   */
  export type WateringLogCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WateringLog
     */
    select?: WateringLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WateringLog
     */
    omit?: WateringLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringLogInclude<ExtArgs> | null;
    /**
     * The data needed to create a WateringLog.
     */
    data: XOR<WateringLogCreateInput, WateringLogUncheckedCreateInput>;
  };

  /**
   * WateringLog createMany
   */
  export type WateringLogCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many WateringLogs.
     */
    data: WateringLogCreateManyInput | WateringLogCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * WateringLog createManyAndReturn
   */
  export type WateringLogCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WateringLog
     */
    select?: WateringLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WateringLog
     */
    omit?: WateringLogOmit<ExtArgs> | null;
    /**
     * The data used to create many WateringLogs.
     */
    data: WateringLogCreateManyInput | WateringLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringLogIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * WateringLog update
   */
  export type WateringLogUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WateringLog
     */
    select?: WateringLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WateringLog
     */
    omit?: WateringLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringLogInclude<ExtArgs> | null;
    /**
     * The data needed to update a WateringLog.
     */
    data: XOR<WateringLogUpdateInput, WateringLogUncheckedUpdateInput>;
    /**
     * Choose, which WateringLog to update.
     */
    where: WateringLogWhereUniqueInput;
  };

  /**
   * WateringLog updateMany
   */
  export type WateringLogUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update WateringLogs.
     */
    data: XOR<
      WateringLogUpdateManyMutationInput,
      WateringLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which WateringLogs to update
     */
    where?: WateringLogWhereInput;
    /**
     * Limit how many WateringLogs to update.
     */
    limit?: number;
  };

  /**
   * WateringLog updateManyAndReturn
   */
  export type WateringLogUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WateringLog
     */
    select?: WateringLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WateringLog
     */
    omit?: WateringLogOmit<ExtArgs> | null;
    /**
     * The data used to update WateringLogs.
     */
    data: XOR<
      WateringLogUpdateManyMutationInput,
      WateringLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which WateringLogs to update
     */
    where?: WateringLogWhereInput;
    /**
     * Limit how many WateringLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringLogIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * WateringLog upsert
   */
  export type WateringLogUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WateringLog
     */
    select?: WateringLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WateringLog
     */
    omit?: WateringLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringLogInclude<ExtArgs> | null;
    /**
     * The filter to search for the WateringLog to update in case it exists.
     */
    where: WateringLogWhereUniqueInput;
    /**
     * In case the WateringLog found by the `where` argument doesn't exist, create a new WateringLog with this data.
     */
    create: XOR<WateringLogCreateInput, WateringLogUncheckedCreateInput>;
    /**
     * In case the WateringLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WateringLogUpdateInput, WateringLogUncheckedUpdateInput>;
  };

  /**
   * WateringLog delete
   */
  export type WateringLogDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WateringLog
     */
    select?: WateringLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WateringLog
     */
    omit?: WateringLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringLogInclude<ExtArgs> | null;
    /**
     * Filter which WateringLog to delete.
     */
    where: WateringLogWhereUniqueInput;
  };

  /**
   * WateringLog deleteMany
   */
  export type WateringLogDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which WateringLogs to delete
     */
    where?: WateringLogWhereInput;
    /**
     * Limit how many WateringLogs to delete.
     */
    limit?: number;
  };

  /**
   * WateringLog without action
   */
  export type WateringLogDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WateringLog
     */
    select?: WateringLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WateringLog
     */
    omit?: WateringLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringLogInclude<ExtArgs> | null;
  };

  /**
   * Model PushSubscription
   */

  export type AggregatePushSubscription = {
    _count: PushSubscriptionCountAggregateOutputType | null;
    _min: PushSubscriptionMinAggregateOutputType | null;
    _max: PushSubscriptionMaxAggregateOutputType | null;
  };

  export type PushSubscriptionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    endpoint: string | null;
    p256dh: string | null;
    auth: string | null;
    createdAt: Date | null;
  };

  export type PushSubscriptionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    endpoint: string | null;
    p256dh: string | null;
    auth: string | null;
    createdAt: Date | null;
  };

  export type PushSubscriptionCountAggregateOutputType = {
    id: number;
    userId: number;
    endpoint: number;
    p256dh: number;
    auth: number;
    createdAt: number;
    _all: number;
  };

  export type PushSubscriptionMinAggregateInputType = {
    id?: true;
    userId?: true;
    endpoint?: true;
    p256dh?: true;
    auth?: true;
    createdAt?: true;
  };

  export type PushSubscriptionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    endpoint?: true;
    p256dh?: true;
    auth?: true;
    createdAt?: true;
  };

  export type PushSubscriptionCountAggregateInputType = {
    id?: true;
    userId?: true;
    endpoint?: true;
    p256dh?: true;
    auth?: true;
    createdAt?: true;
    _all?: true;
  };

  export type PushSubscriptionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PushSubscription to aggregate.
     */
    where?: PushSubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?:
      | PushSubscriptionOrderByWithRelationInput
      | PushSubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PushSubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PushSubscriptions
     **/
    _count?: true | PushSubscriptionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PushSubscriptionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PushSubscriptionMaxAggregateInputType;
  };

  export type GetPushSubscriptionAggregateType<
    T extends PushSubscriptionAggregateArgs,
  > = {
    [P in keyof T & keyof AggregatePushSubscription]: P extends
      "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePushSubscription[P]>
      : GetScalarType<T[P], AggregatePushSubscription[P]>;
  };

  export type PushSubscriptionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PushSubscriptionWhereInput;
    orderBy?:
      | PushSubscriptionOrderByWithAggregationInput
      | PushSubscriptionOrderByWithAggregationInput[];
    by: PushSubscriptionScalarFieldEnum[] | PushSubscriptionScalarFieldEnum;
    having?: PushSubscriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PushSubscriptionCountAggregateInputType | true;
    _min?: PushSubscriptionMinAggregateInputType;
    _max?: PushSubscriptionMaxAggregateInputType;
  };

  export type PushSubscriptionGroupByOutputType = {
    id: string;
    userId: string;
    endpoint: string;
    p256dh: string;
    auth: string;
    createdAt: Date;
    _count: PushSubscriptionCountAggregateOutputType | null;
    _min: PushSubscriptionMinAggregateOutputType | null;
    _max: PushSubscriptionMaxAggregateOutputType | null;
  };

  type GetPushSubscriptionGroupByPayload<
    T extends PushSubscriptionGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PushSubscriptionGroupByOutputType, T["by"]> & {
        [
          P in keyof T & keyof PushSubscriptionGroupByOutputType
        ]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PushSubscriptionGroupByOutputType[P]>
          : GetScalarType<T[P], PushSubscriptionGroupByOutputType[P]>;
      }
    >
  >;

  export type PushSubscriptionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      endpoint?: boolean;
      p256dh?: boolean;
      auth?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["pushSubscription"]
  >;

  export type PushSubscriptionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      endpoint?: boolean;
      p256dh?: boolean;
      auth?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["pushSubscription"]
  >;

  export type PushSubscriptionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      endpoint?: boolean;
      p256dh?: boolean;
      auth?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["pushSubscription"]
  >;

  export type PushSubscriptionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    endpoint?: boolean;
    p256dh?: boolean;
    auth?: boolean;
    createdAt?: boolean;
  };

  export type PushSubscriptionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "userId" | "endpoint" | "p256dh" | "auth" | "createdAt",
    ExtArgs["result"]["pushSubscription"]
  >;
  export type PushSubscriptionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PushSubscriptionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PushSubscriptionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PushSubscriptionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "PushSubscription";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        endpoint: string;
        p256dh: string;
        auth: string;
        createdAt: Date;
      },
      ExtArgs["result"]["pushSubscription"]
    >;
    composites: {};
  };

  type PushSubscriptionGetPayload<
    S extends boolean | null | undefined | PushSubscriptionDefaultArgs,
  > = $Result.GetResult<Prisma.$PushSubscriptionPayload, S>;

  type PushSubscriptionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    PushSubscriptionFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: PushSubscriptionCountAggregateInputType | true;
  };

  export interface PushSubscriptionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["PushSubscription"];
      meta: { name: "PushSubscription" };
    };
    /**
     * Find zero or one PushSubscription that matches the filter.
     * @param {PushSubscriptionFindUniqueArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PushSubscriptionFindUniqueArgs>(
      args: SelectSubset<T, PushSubscriptionFindUniqueArgs<ExtArgs>>,
    ): Prisma__PushSubscriptionClient<
      $Result.GetResult<
        Prisma.$PushSubscriptionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one PushSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PushSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PushSubscriptionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PushSubscriptionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PushSubscriptionClient<
      $Result.GetResult<
        Prisma.$PushSubscriptionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PushSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindFirstArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PushSubscriptionFindFirstArgs>(
      args?: SelectSubset<T, PushSubscriptionFindFirstArgs<ExtArgs>>,
    ): Prisma__PushSubscriptionClient<
      $Result.GetResult<
        Prisma.$PushSubscriptionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PushSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindFirstOrThrowArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PushSubscriptionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PushSubscriptionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PushSubscriptionClient<
      $Result.GetResult<
        Prisma.$PushSubscriptionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more PushSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PushSubscriptions
     * const pushSubscriptions = await prisma.pushSubscription.findMany()
     *
     * // Get first 10 PushSubscriptions
     * const pushSubscriptions = await prisma.pushSubscription.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PushSubscriptionFindManyArgs>(
      args?: SelectSubset<T, PushSubscriptionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PushSubscriptionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a PushSubscription.
     * @param {PushSubscriptionCreateArgs} args - Arguments to create a PushSubscription.
     * @example
     * // Create one PushSubscription
     * const PushSubscription = await prisma.pushSubscription.create({
     *   data: {
     *     // ... data to create a PushSubscription
     *   }
     * })
     *
     */
    create<T extends PushSubscriptionCreateArgs>(
      args: SelectSubset<T, PushSubscriptionCreateArgs<ExtArgs>>,
    ): Prisma__PushSubscriptionClient<
      $Result.GetResult<
        Prisma.$PushSubscriptionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many PushSubscriptions.
     * @param {PushSubscriptionCreateManyArgs} args - Arguments to create many PushSubscriptions.
     * @example
     * // Create many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PushSubscriptionCreateManyArgs>(
      args?: SelectSubset<T, PushSubscriptionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many PushSubscriptions and returns the data saved in the database.
     * @param {PushSubscriptionCreateManyAndReturnArgs} args - Arguments to create many PushSubscriptions.
     * @example
     * // Create many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PushSubscriptions and only return the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PushSubscriptionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PushSubscriptionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PushSubscriptionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a PushSubscription.
     * @param {PushSubscriptionDeleteArgs} args - Arguments to delete one PushSubscription.
     * @example
     * // Delete one PushSubscription
     * const PushSubscription = await prisma.pushSubscription.delete({
     *   where: {
     *     // ... filter to delete one PushSubscription
     *   }
     * })
     *
     */
    delete<T extends PushSubscriptionDeleteArgs>(
      args: SelectSubset<T, PushSubscriptionDeleteArgs<ExtArgs>>,
    ): Prisma__PushSubscriptionClient<
      $Result.GetResult<
        Prisma.$PushSubscriptionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one PushSubscription.
     * @param {PushSubscriptionUpdateArgs} args - Arguments to update one PushSubscription.
     * @example
     * // Update one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PushSubscriptionUpdateArgs>(
      args: SelectSubset<T, PushSubscriptionUpdateArgs<ExtArgs>>,
    ): Prisma__PushSubscriptionClient<
      $Result.GetResult<
        Prisma.$PushSubscriptionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more PushSubscriptions.
     * @param {PushSubscriptionDeleteManyArgs} args - Arguments to filter PushSubscriptions to delete.
     * @example
     * // Delete a few PushSubscriptions
     * const { count } = await prisma.pushSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PushSubscriptionDeleteManyArgs>(
      args?: SelectSubset<T, PushSubscriptionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PushSubscriptionUpdateManyArgs>(
      args: SelectSubset<T, PushSubscriptionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PushSubscriptions and returns the data updated in the database.
     * @param {PushSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many PushSubscriptions.
     * @example
     * // Update many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PushSubscriptions and only return the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PushSubscriptionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PushSubscriptionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PushSubscriptionPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one PushSubscription.
     * @param {PushSubscriptionUpsertArgs} args - Arguments to update or create a PushSubscription.
     * @example
     * // Update or create a PushSubscription
     * const pushSubscription = await prisma.pushSubscription.upsert({
     *   create: {
     *     // ... data to create a PushSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PushSubscription we want to update
     *   }
     * })
     */
    upsert<T extends PushSubscriptionUpsertArgs>(
      args: SelectSubset<T, PushSubscriptionUpsertArgs<ExtArgs>>,
    ): Prisma__PushSubscriptionClient<
      $Result.GetResult<
        Prisma.$PushSubscriptionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of PushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionCountArgs} args - Arguments to filter PushSubscriptions to count.
     * @example
     * // Count the number of PushSubscriptions
     * const count = await prisma.pushSubscription.count({
     *   where: {
     *     // ... the filter for the PushSubscriptions we want to count
     *   }
     * })
     **/
    count<T extends PushSubscriptionCountArgs>(
      args?: Subset<T, PushSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PushSubscriptionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PushSubscriptionAggregateArgs>(
      args: Subset<T, PushSubscriptionAggregateArgs>,
    ): Prisma.PrismaPromise<GetPushSubscriptionAggregateType<T>>;

    /**
     * Group by PushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PushSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: PushSubscriptionGroupByArgs["orderBy"] }
        : { orderBy?: PushSubscriptionGroupByArgs["orderBy"] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T["by"] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, PushSubscriptionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetPushSubscriptionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PushSubscription model
     */
    readonly fields: PushSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PushSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PushSubscriptionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?:
        ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PushSubscription model
   */
  interface PushSubscriptionFieldRefs {
    readonly id: FieldRef<"PushSubscription", "String">;
    readonly userId: FieldRef<"PushSubscription", "String">;
    readonly endpoint: FieldRef<"PushSubscription", "String">;
    readonly p256dh: FieldRef<"PushSubscription", "String">;
    readonly auth: FieldRef<"PushSubscription", "String">;
    readonly createdAt: FieldRef<"PushSubscription", "DateTime">;
  }

  // Custom InputTypes
  /**
   * PushSubscription findUnique
   */
  export type PushSubscriptionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which PushSubscription to fetch.
     */
    where: PushSubscriptionWhereUniqueInput;
  };

  /**
   * PushSubscription findUniqueOrThrow
   */
  export type PushSubscriptionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which PushSubscription to fetch.
     */
    where: PushSubscriptionWhereUniqueInput;
  };

  /**
   * PushSubscription findFirst
   */
  export type PushSubscriptionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which PushSubscription to fetch.
     */
    where?: PushSubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?:
      | PushSubscriptionOrderByWithRelationInput
      | PushSubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?:
      PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[];
  };

  /**
   * PushSubscription findFirstOrThrow
   */
  export type PushSubscriptionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which PushSubscription to fetch.
     */
    where?: PushSubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?:
      | PushSubscriptionOrderByWithRelationInput
      | PushSubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?:
      PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[];
  };

  /**
   * PushSubscription findMany
   */
  export type PushSubscriptionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which PushSubscriptions to fetch.
     */
    where?: PushSubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?:
      | PushSubscriptionOrderByWithRelationInput
      | PushSubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number;
    distinct?:
      PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[];
  };

  /**
   * PushSubscription create
   */
  export type PushSubscriptionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null;
    /**
     * The data needed to create a PushSubscription.
     */
    data: XOR<
      PushSubscriptionCreateInput,
      PushSubscriptionUncheckedCreateInput
    >;
  };

  /**
   * PushSubscription createMany
   */
  export type PushSubscriptionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PushSubscriptions.
     */
    data: PushSubscriptionCreateManyInput | PushSubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PushSubscription createManyAndReturn
   */
  export type PushSubscriptionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null;
    /**
     * The data used to create many PushSubscriptions.
     */
    data: PushSubscriptionCreateManyInput | PushSubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PushSubscription update
   */
  export type PushSubscriptionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null;
    /**
     * The data needed to update a PushSubscription.
     */
    data: XOR<
      PushSubscriptionUpdateInput,
      PushSubscriptionUncheckedUpdateInput
    >;
    /**
     * Choose, which PushSubscription to update.
     */
    where: PushSubscriptionWhereUniqueInput;
  };

  /**
   * PushSubscription updateMany
   */
  export type PushSubscriptionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PushSubscriptions.
     */
    data: XOR<
      PushSubscriptionUpdateManyMutationInput,
      PushSubscriptionUncheckedUpdateManyInput
    >;
    /**
     * Filter which PushSubscriptions to update
     */
    where?: PushSubscriptionWhereInput;
    /**
     * Limit how many PushSubscriptions to update.
     */
    limit?: number;
  };

  /**
   * PushSubscription updateManyAndReturn
   */
  export type PushSubscriptionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null;
    /**
     * The data used to update PushSubscriptions.
     */
    data: XOR<
      PushSubscriptionUpdateManyMutationInput,
      PushSubscriptionUncheckedUpdateManyInput
    >;
    /**
     * Filter which PushSubscriptions to update
     */
    where?: PushSubscriptionWhereInput;
    /**
     * Limit how many PushSubscriptions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PushSubscription upsert
   */
  export type PushSubscriptionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null;
    /**
     * The filter to search for the PushSubscription to update in case it exists.
     */
    where: PushSubscriptionWhereUniqueInput;
    /**
     * In case the PushSubscription found by the `where` argument doesn't exist, create a new PushSubscription with this data.
     */
    create: XOR<
      PushSubscriptionCreateInput,
      PushSubscriptionUncheckedCreateInput
    >;
    /**
     * In case the PushSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      PushSubscriptionUpdateInput,
      PushSubscriptionUncheckedUpdateInput
    >;
  };

  /**
   * PushSubscription delete
   */
  export type PushSubscriptionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null;
    /**
     * Filter which PushSubscription to delete.
     */
    where: PushSubscriptionWhereUniqueInput;
  };

  /**
   * PushSubscription deleteMany
   */
  export type PushSubscriptionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PushSubscriptions to delete
     */
    where?: PushSubscriptionWhereInput;
    /**
     * Limit how many PushSubscriptions to delete.
     */
    limit?: number;
  };

  /**
   * PushSubscription without action
   */
  export type PushSubscriptionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null;
  };

  /**
   * Model NotificationLog
   */

  export type AggregateNotificationLog = {
    _count: NotificationLogCountAggregateOutputType | null;
    _min: NotificationLogMinAggregateOutputType | null;
    _max: NotificationLogMaxAggregateOutputType | null;
  };

  export type NotificationLogMinAggregateOutputType = {
    id: string | null;
    plantId: string | null;
    type: string | null;
    sentAt: Date | null;
  };

  export type NotificationLogMaxAggregateOutputType = {
    id: string | null;
    plantId: string | null;
    type: string | null;
    sentAt: Date | null;
  };

  export type NotificationLogCountAggregateOutputType = {
    id: number;
    plantId: number;
    type: number;
    sentAt: number;
    _all: number;
  };

  export type NotificationLogMinAggregateInputType = {
    id?: true;
    plantId?: true;
    type?: true;
    sentAt?: true;
  };

  export type NotificationLogMaxAggregateInputType = {
    id?: true;
    plantId?: true;
    type?: true;
    sentAt?: true;
  };

  export type NotificationLogCountAggregateInputType = {
    id?: true;
    plantId?: true;
    type?: true;
    sentAt?: true;
    _all?: true;
  };

  export type NotificationLogAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which NotificationLog to aggregate.
     */
    where?: NotificationLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NotificationLogs to fetch.
     */
    orderBy?:
      | NotificationLogOrderByWithRelationInput
      | NotificationLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: NotificationLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NotificationLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NotificationLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned NotificationLogs
     **/
    _count?: true | NotificationLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: NotificationLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: NotificationLogMaxAggregateInputType;
  };

  export type GetNotificationLogAggregateType<
    T extends NotificationLogAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateNotificationLog]: P extends
      "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationLog[P]>
      : GetScalarType<T[P], AggregateNotificationLog[P]>;
  };

  export type NotificationLogGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationLogWhereInput;
    orderBy?:
      | NotificationLogOrderByWithAggregationInput
      | NotificationLogOrderByWithAggregationInput[];
    by: NotificationLogScalarFieldEnum[] | NotificationLogScalarFieldEnum;
    having?: NotificationLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationLogCountAggregateInputType | true;
    _min?: NotificationLogMinAggregateInputType;
    _max?: NotificationLogMaxAggregateInputType;
  };

  export type NotificationLogGroupByOutputType = {
    id: string;
    plantId: string;
    type: string;
    sentAt: Date;
    _count: NotificationLogCountAggregateOutputType | null;
    _min: NotificationLogMinAggregateOutputType | null;
    _max: NotificationLogMaxAggregateOutputType | null;
  };

  type GetNotificationLogGroupByPayload<T extends NotificationLogGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<NotificationLogGroupByOutputType, T["by"]> & {
          [
            P in keyof T & keyof NotificationLogGroupByOutputType
          ]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationLogGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationLogGroupByOutputType[P]>;
        }
      >
    >;

  export type NotificationLogSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      plantId?: boolean;
      type?: boolean;
      sentAt?: boolean;
      plant?: boolean | PlantDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["notificationLog"]
  >;

  export type NotificationLogSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      plantId?: boolean;
      type?: boolean;
      sentAt?: boolean;
      plant?: boolean | PlantDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["notificationLog"]
  >;

  export type NotificationLogSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      plantId?: boolean;
      type?: boolean;
      sentAt?: boolean;
      plant?: boolean | PlantDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["notificationLog"]
  >;

  export type NotificationLogSelectScalar = {
    id?: boolean;
    plantId?: boolean;
    type?: boolean;
    sentAt?: boolean;
  };

  export type NotificationLogOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "plantId" | "type" | "sentAt",
    ExtArgs["result"]["notificationLog"]
  >;
  export type NotificationLogInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    plant?: boolean | PlantDefaultArgs<ExtArgs>;
  };
  export type NotificationLogIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    plant?: boolean | PlantDefaultArgs<ExtArgs>;
  };
  export type NotificationLogIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    plant?: boolean | PlantDefaultArgs<ExtArgs>;
  };

  export type $NotificationLogPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "NotificationLog";
    objects: {
      plant: Prisma.$PlantPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        plantId: string;
        type: string;
        sentAt: Date;
      },
      ExtArgs["result"]["notificationLog"]
    >;
    composites: {};
  };

  type NotificationLogGetPayload<
    S extends boolean | null | undefined | NotificationLogDefaultArgs,
  > = $Result.GetResult<Prisma.$NotificationLogPayload, S>;

  type NotificationLogCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    NotificationLogFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: NotificationLogCountAggregateInputType | true;
  };

  export interface NotificationLogDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["NotificationLog"];
      meta: { name: "NotificationLog" };
    };
    /**
     * Find zero or one NotificationLog that matches the filter.
     * @param {NotificationLogFindUniqueArgs} args - Arguments to find a NotificationLog
     * @example
     * // Get one NotificationLog
     * const notificationLog = await prisma.notificationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationLogFindUniqueArgs>(
      args: SelectSubset<T, NotificationLogFindUniqueArgs<ExtArgs>>,
    ): Prisma__NotificationLogClient<
      $Result.GetResult<
        Prisma.$NotificationLogPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one NotificationLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationLogFindUniqueOrThrowArgs} args - Arguments to find a NotificationLog
     * @example
     * // Get one NotificationLog
     * const notificationLog = await prisma.notificationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationLogFindUniqueOrThrowArgs>(
      args: SelectSubset<T, NotificationLogFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__NotificationLogClient<
      $Result.GetResult<
        Prisma.$NotificationLogPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first NotificationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogFindFirstArgs} args - Arguments to find a NotificationLog
     * @example
     * // Get one NotificationLog
     * const notificationLog = await prisma.notificationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationLogFindFirstArgs>(
      args?: SelectSubset<T, NotificationLogFindFirstArgs<ExtArgs>>,
    ): Prisma__NotificationLogClient<
      $Result.GetResult<
        Prisma.$NotificationLogPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first NotificationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogFindFirstOrThrowArgs} args - Arguments to find a NotificationLog
     * @example
     * // Get one NotificationLog
     * const notificationLog = await prisma.notificationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationLogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotificationLogFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__NotificationLogClient<
      $Result.GetResult<
        Prisma.$NotificationLogPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more NotificationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationLogs
     * const notificationLogs = await prisma.notificationLog.findMany()
     *
     * // Get first 10 NotificationLogs
     * const notificationLogs = await prisma.notificationLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const notificationLogWithIdOnly = await prisma.notificationLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends NotificationLogFindManyArgs>(
      args?: SelectSubset<T, NotificationLogFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationLogPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a NotificationLog.
     * @param {NotificationLogCreateArgs} args - Arguments to create a NotificationLog.
     * @example
     * // Create one NotificationLog
     * const NotificationLog = await prisma.notificationLog.create({
     *   data: {
     *     // ... data to create a NotificationLog
     *   }
     * })
     *
     */
    create<T extends NotificationLogCreateArgs>(
      args: SelectSubset<T, NotificationLogCreateArgs<ExtArgs>>,
    ): Prisma__NotificationLogClient<
      $Result.GetResult<
        Prisma.$NotificationLogPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many NotificationLogs.
     * @param {NotificationLogCreateManyArgs} args - Arguments to create many NotificationLogs.
     * @example
     * // Create many NotificationLogs
     * const notificationLog = await prisma.notificationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NotificationLogCreateManyArgs>(
      args?: SelectSubset<T, NotificationLogCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many NotificationLogs and returns the data saved in the database.
     * @param {NotificationLogCreateManyAndReturnArgs} args - Arguments to create many NotificationLogs.
     * @example
     * // Create many NotificationLogs
     * const notificationLog = await prisma.notificationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many NotificationLogs and only return the `id`
     * const notificationLogWithIdOnly = await prisma.notificationLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NotificationLogCreateManyAndReturnArgs>(
      args?: SelectSubset<T, NotificationLogCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationLogPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a NotificationLog.
     * @param {NotificationLogDeleteArgs} args - Arguments to delete one NotificationLog.
     * @example
     * // Delete one NotificationLog
     * const NotificationLog = await prisma.notificationLog.delete({
     *   where: {
     *     // ... filter to delete one NotificationLog
     *   }
     * })
     *
     */
    delete<T extends NotificationLogDeleteArgs>(
      args: SelectSubset<T, NotificationLogDeleteArgs<ExtArgs>>,
    ): Prisma__NotificationLogClient<
      $Result.GetResult<
        Prisma.$NotificationLogPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one NotificationLog.
     * @param {NotificationLogUpdateArgs} args - Arguments to update one NotificationLog.
     * @example
     * // Update one NotificationLog
     * const notificationLog = await prisma.notificationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NotificationLogUpdateArgs>(
      args: SelectSubset<T, NotificationLogUpdateArgs<ExtArgs>>,
    ): Prisma__NotificationLogClient<
      $Result.GetResult<
        Prisma.$NotificationLogPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more NotificationLogs.
     * @param {NotificationLogDeleteManyArgs} args - Arguments to filter NotificationLogs to delete.
     * @example
     * // Delete a few NotificationLogs
     * const { count } = await prisma.notificationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NotificationLogDeleteManyArgs>(
      args?: SelectSubset<T, NotificationLogDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more NotificationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationLogs
     * const notificationLog = await prisma.notificationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NotificationLogUpdateManyArgs>(
      args: SelectSubset<T, NotificationLogUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more NotificationLogs and returns the data updated in the database.
     * @param {NotificationLogUpdateManyAndReturnArgs} args - Arguments to update many NotificationLogs.
     * @example
     * // Update many NotificationLogs
     * const notificationLog = await prisma.notificationLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more NotificationLogs and only return the `id`
     * const notificationLogWithIdOnly = await prisma.notificationLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends NotificationLogUpdateManyAndReturnArgs>(
      args: SelectSubset<T, NotificationLogUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationLogPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one NotificationLog.
     * @param {NotificationLogUpsertArgs} args - Arguments to update or create a NotificationLog.
     * @example
     * // Update or create a NotificationLog
     * const notificationLog = await prisma.notificationLog.upsert({
     *   create: {
     *     // ... data to create a NotificationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationLog we want to update
     *   }
     * })
     */
    upsert<T extends NotificationLogUpsertArgs>(
      args: SelectSubset<T, NotificationLogUpsertArgs<ExtArgs>>,
    ): Prisma__NotificationLogClient<
      $Result.GetResult<
        Prisma.$NotificationLogPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of NotificationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogCountArgs} args - Arguments to filter NotificationLogs to count.
     * @example
     * // Count the number of NotificationLogs
     * const count = await prisma.notificationLog.count({
     *   where: {
     *     // ... the filter for the NotificationLogs we want to count
     *   }
     * })
     **/
    count<T extends NotificationLogCountArgs>(
      args?: Subset<T, NotificationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], NotificationLogCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a NotificationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends NotificationLogAggregateArgs>(
      args: Subset<T, NotificationLogAggregateArgs>,
    ): Prisma.PrismaPromise<GetNotificationLogAggregateType<T>>;

    /**
     * Group by NotificationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends NotificationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: NotificationLogGroupByArgs["orderBy"] }
        : { orderBy?: NotificationLogGroupByArgs["orderBy"] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T["by"] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, NotificationLogGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetNotificationLogGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the NotificationLog model
     */
    readonly fields: NotificationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationLogClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    plant<T extends PlantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PlantDefaultArgs<ExtArgs>>,
    ): Prisma__PlantClient<
      | $Result.GetResult<
          Prisma.$PlantPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?:
        ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the NotificationLog model
   */
  interface NotificationLogFieldRefs {
    readonly id: FieldRef<"NotificationLog", "String">;
    readonly plantId: FieldRef<"NotificationLog", "String">;
    readonly type: FieldRef<"NotificationLog", "String">;
    readonly sentAt: FieldRef<"NotificationLog", "DateTime">;
  }

  // Custom InputTypes
  /**
   * NotificationLog findUnique
   */
  export type NotificationLogFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null;
    /**
     * Filter, which NotificationLog to fetch.
     */
    where: NotificationLogWhereUniqueInput;
  };

  /**
   * NotificationLog findUniqueOrThrow
   */
  export type NotificationLogFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null;
    /**
     * Filter, which NotificationLog to fetch.
     */
    where: NotificationLogWhereUniqueInput;
  };

  /**
   * NotificationLog findFirst
   */
  export type NotificationLogFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null;
    /**
     * Filter, which NotificationLog to fetch.
     */
    where?: NotificationLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NotificationLogs to fetch.
     */
    orderBy?:
      | NotificationLogOrderByWithRelationInput
      | NotificationLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NotificationLogs.
     */
    cursor?: NotificationLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NotificationLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NotificationLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NotificationLogs.
     */
    distinct?:
      NotificationLogScalarFieldEnum | NotificationLogScalarFieldEnum[];
  };

  /**
   * NotificationLog findFirstOrThrow
   */
  export type NotificationLogFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null;
    /**
     * Filter, which NotificationLog to fetch.
     */
    where?: NotificationLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NotificationLogs to fetch.
     */
    orderBy?:
      | NotificationLogOrderByWithRelationInput
      | NotificationLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NotificationLogs.
     */
    cursor?: NotificationLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NotificationLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NotificationLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NotificationLogs.
     */
    distinct?:
      NotificationLogScalarFieldEnum | NotificationLogScalarFieldEnum[];
  };

  /**
   * NotificationLog findMany
   */
  export type NotificationLogFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null;
    /**
     * Filter, which NotificationLogs to fetch.
     */
    where?: NotificationLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NotificationLogs to fetch.
     */
    orderBy?:
      | NotificationLogOrderByWithRelationInput
      | NotificationLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing NotificationLogs.
     */
    cursor?: NotificationLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NotificationLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NotificationLogs.
     */
    skip?: number;
    distinct?:
      NotificationLogScalarFieldEnum | NotificationLogScalarFieldEnum[];
  };

  /**
   * NotificationLog create
   */
  export type NotificationLogCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null;
    /**
     * The data needed to create a NotificationLog.
     */
    data: XOR<NotificationLogCreateInput, NotificationLogUncheckedCreateInput>;
  };

  /**
   * NotificationLog createMany
   */
  export type NotificationLogCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many NotificationLogs.
     */
    data: NotificationLogCreateManyInput | NotificationLogCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * NotificationLog createManyAndReturn
   */
  export type NotificationLogCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null;
    /**
     * The data used to create many NotificationLogs.
     */
    data: NotificationLogCreateManyInput | NotificationLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * NotificationLog update
   */
  export type NotificationLogUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null;
    /**
     * The data needed to update a NotificationLog.
     */
    data: XOR<NotificationLogUpdateInput, NotificationLogUncheckedUpdateInput>;
    /**
     * Choose, which NotificationLog to update.
     */
    where: NotificationLogWhereUniqueInput;
  };

  /**
   * NotificationLog updateMany
   */
  export type NotificationLogUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update NotificationLogs.
     */
    data: XOR<
      NotificationLogUpdateManyMutationInput,
      NotificationLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which NotificationLogs to update
     */
    where?: NotificationLogWhereInput;
    /**
     * Limit how many NotificationLogs to update.
     */
    limit?: number;
  };

  /**
   * NotificationLog updateManyAndReturn
   */
  export type NotificationLogUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null;
    /**
     * The data used to update NotificationLogs.
     */
    data: XOR<
      NotificationLogUpdateManyMutationInput,
      NotificationLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which NotificationLogs to update
     */
    where?: NotificationLogWhereInput;
    /**
     * Limit how many NotificationLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * NotificationLog upsert
   */
  export type NotificationLogUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null;
    /**
     * The filter to search for the NotificationLog to update in case it exists.
     */
    where: NotificationLogWhereUniqueInput;
    /**
     * In case the NotificationLog found by the `where` argument doesn't exist, create a new NotificationLog with this data.
     */
    create: XOR<
      NotificationLogCreateInput,
      NotificationLogUncheckedCreateInput
    >;
    /**
     * In case the NotificationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      NotificationLogUpdateInput,
      NotificationLogUncheckedUpdateInput
    >;
  };

  /**
   * NotificationLog delete
   */
  export type NotificationLogDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null;
    /**
     * Filter which NotificationLog to delete.
     */
    where: NotificationLogWhereUniqueInput;
  };

  /**
   * NotificationLog deleteMany
   */
  export type NotificationLogDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which NotificationLogs to delete
     */
    where?: NotificationLogWhereInput;
    /**
     * Limit how many NotificationLogs to delete.
     */
    limit?: number;
  };

  /**
   * NotificationLog without action
   */
  export type NotificationLogDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotificationLog
     */
    select?: NotificationLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationLog
     */
    omit?: NotificationLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationLogInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    email: "email";
    passwordHash: "passwordHash";
    name: "name";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const DeviceScalarFieldEnum: {
    id: "id";
    token: "token";
    name: "name";
    macAddress: "macAddress";
    lastBatteryLevel: "lastBatteryLevel";
    lastSeenAt: "lastSeenAt";
    userId: "userId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type DeviceScalarFieldEnum =
    (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum];

  export const PlantScalarFieldEnum: {
    id: "id";
    name: "name";
    species: "species";
    location: "location";
    minMoistureThreshold: "minMoistureThreshold";
    targetMoistureLevel: "targetMoistureLevel";
    userId: "userId";
    deviceId: "deviceId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type PlantScalarFieldEnum =
    (typeof PlantScalarFieldEnum)[keyof typeof PlantScalarFieldEnum];

  export const MoistureReadingScalarFieldEnum: {
    id: "id";
    moisture: "moisture";
    battery: "battery";
    deviceId: "deviceId";
    plantId: "plantId";
    createdAt: "createdAt";
  };

  export type MoistureReadingScalarFieldEnum =
    (typeof MoistureReadingScalarFieldEnum)[keyof typeof MoistureReadingScalarFieldEnum];

  export const WateringLogScalarFieldEnum: {
    id: "id";
    plantId: "plantId";
    moistureBefore: "moistureBefore";
    moistureAfter: "moistureAfter";
    detectedAutomatically: "detectedAutomatically";
    note: "note";
    createdAt: "createdAt";
  };

  export type WateringLogScalarFieldEnum =
    (typeof WateringLogScalarFieldEnum)[keyof typeof WateringLogScalarFieldEnum];

  export const PushSubscriptionScalarFieldEnum: {
    id: "id";
    userId: "userId";
    endpoint: "endpoint";
    p256dh: "p256dh";
    auth: "auth";
    createdAt: "createdAt";
  };

  export type PushSubscriptionScalarFieldEnum =
    (typeof PushSubscriptionScalarFieldEnum)[keyof typeof PushSubscriptionScalarFieldEnum];

  export const NotificationLogScalarFieldEnum: {
    id: "id";
    plantId: "plantId";
    type: "type";
    sentAt: "sentAt";
  };

  export type NotificationLogScalarFieldEnum =
    (typeof NotificationLogScalarFieldEnum)[keyof typeof NotificationLogScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    email?: StringFilter<"User"> | string;
    passwordHash?: StringFilter<"User"> | string;
    name?: StringNullableFilter<"User"> | string | null;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    updatedAt?: DateTimeFilter<"User"> | Date | string;
    plants?: PlantListRelationFilter;
    devices?: DeviceListRelationFilter;
    pushSubscriptions?: PushSubscriptionListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    name?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    plants?: PlantOrderByRelationAggregateInput;
    devices?: DeviceOrderByRelationAggregateInput;
    pushSubscriptions?: PushSubscriptionOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      passwordHash?: StringFilter<"User"> | string;
      name?: StringNullableFilter<"User"> | string | null;
      createdAt?: DateTimeFilter<"User"> | Date | string;
      updatedAt?: DateTimeFilter<"User"> | Date | string;
      plants?: PlantListRelationFilter;
      devices?: DeviceListRelationFilter;
      pushSubscriptions?: PushSubscriptionListRelationFilter;
    },
    "id" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    name?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"User"> | string;
    email?: StringWithAggregatesFilter<"User"> | string;
    passwordHash?: StringWithAggregatesFilter<"User"> | string;
    name?: StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
  };

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[];
    OR?: DeviceWhereInput[];
    NOT?: DeviceWhereInput | DeviceWhereInput[];
    id?: StringFilter<"Device"> | string;
    token?: StringFilter<"Device"> | string;
    name?: StringFilter<"Device"> | string;
    macAddress?: StringNullableFilter<"Device"> | string | null;
    lastBatteryLevel?: FloatNullableFilter<"Device"> | number | null;
    lastSeenAt?: DateTimeNullableFilter<"Device"> | Date | string | null;
    userId?: StringFilter<"Device"> | string;
    createdAt?: DateTimeFilter<"Device"> | Date | string;
    updatedAt?: DateTimeFilter<"Device"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    plant?: XOR<PlantNullableScalarRelationFilter, PlantWhereInput> | null;
    readings?: MoistureReadingListRelationFilter;
  };

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder;
    token?: SortOrder;
    name?: SortOrder;
    macAddress?: SortOrderInput | SortOrder;
    lastBatteryLevel?: SortOrderInput | SortOrder;
    lastSeenAt?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    plant?: PlantOrderByWithRelationInput;
    readings?: MoistureReadingOrderByRelationAggregateInput;
  };

  export type DeviceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      token?: string;
      AND?: DeviceWhereInput | DeviceWhereInput[];
      OR?: DeviceWhereInput[];
      NOT?: DeviceWhereInput | DeviceWhereInput[];
      name?: StringFilter<"Device"> | string;
      macAddress?: StringNullableFilter<"Device"> | string | null;
      lastBatteryLevel?: FloatNullableFilter<"Device"> | number | null;
      lastSeenAt?: DateTimeNullableFilter<"Device"> | Date | string | null;
      userId?: StringFilter<"Device"> | string;
      createdAt?: DateTimeFilter<"Device"> | Date | string;
      updatedAt?: DateTimeFilter<"Device"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      plant?: XOR<PlantNullableScalarRelationFilter, PlantWhereInput> | null;
      readings?: MoistureReadingListRelationFilter;
    },
    "id" | "token"
  >;

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder;
    token?: SortOrder;
    name?: SortOrder;
    macAddress?: SortOrderInput | SortOrder;
    lastBatteryLevel?: SortOrderInput | SortOrder;
    lastSeenAt?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: DeviceCountOrderByAggregateInput;
    _avg?: DeviceAvgOrderByAggregateInput;
    _max?: DeviceMaxOrderByAggregateInput;
    _min?: DeviceMinOrderByAggregateInput;
    _sum?: DeviceSumOrderByAggregateInput;
  };

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?:
      | DeviceScalarWhereWithAggregatesInput
      | DeviceScalarWhereWithAggregatesInput[];
    OR?: DeviceScalarWhereWithAggregatesInput[];
    NOT?:
      | DeviceScalarWhereWithAggregatesInput
      | DeviceScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Device"> | string;
    token?: StringWithAggregatesFilter<"Device"> | string;
    name?: StringWithAggregatesFilter<"Device"> | string;
    macAddress?: StringNullableWithAggregatesFilter<"Device"> | string | null;
    lastBatteryLevel?:
      FloatNullableWithAggregatesFilter<"Device"> | number | null;
    lastSeenAt?:
      DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null;
    userId?: StringWithAggregatesFilter<"Device"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string;
  };

  export type PlantWhereInput = {
    AND?: PlantWhereInput | PlantWhereInput[];
    OR?: PlantWhereInput[];
    NOT?: PlantWhereInput | PlantWhereInput[];
    id?: StringFilter<"Plant"> | string;
    name?: StringFilter<"Plant"> | string;
    species?: StringNullableFilter<"Plant"> | string | null;
    location?: StringNullableFilter<"Plant"> | string | null;
    minMoistureThreshold?: FloatFilter<"Plant"> | number;
    targetMoistureLevel?: FloatFilter<"Plant"> | number;
    userId?: StringFilter<"Plant"> | string;
    deviceId?: StringNullableFilter<"Plant"> | string | null;
    createdAt?: DateTimeFilter<"Plant"> | Date | string;
    updatedAt?: DateTimeFilter<"Plant"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null;
    readings?: MoistureReadingListRelationFilter;
    waterings?: WateringLogListRelationFilter;
    notifications?: NotificationLogListRelationFilter;
  };

  export type PlantOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    species?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    minMoistureThreshold?: SortOrder;
    targetMoistureLevel?: SortOrder;
    userId?: SortOrder;
    deviceId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    device?: DeviceOrderByWithRelationInput;
    readings?: MoistureReadingOrderByRelationAggregateInput;
    waterings?: WateringLogOrderByRelationAggregateInput;
    notifications?: NotificationLogOrderByRelationAggregateInput;
  };

  export type PlantWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      deviceId?: string;
      AND?: PlantWhereInput | PlantWhereInput[];
      OR?: PlantWhereInput[];
      NOT?: PlantWhereInput | PlantWhereInput[];
      name?: StringFilter<"Plant"> | string;
      species?: StringNullableFilter<"Plant"> | string | null;
      location?: StringNullableFilter<"Plant"> | string | null;
      minMoistureThreshold?: FloatFilter<"Plant"> | number;
      targetMoistureLevel?: FloatFilter<"Plant"> | number;
      userId?: StringFilter<"Plant"> | string;
      createdAt?: DateTimeFilter<"Plant"> | Date | string;
      updatedAt?: DateTimeFilter<"Plant"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null;
      readings?: MoistureReadingListRelationFilter;
      waterings?: WateringLogListRelationFilter;
      notifications?: NotificationLogListRelationFilter;
    },
    "id" | "deviceId"
  >;

  export type PlantOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    species?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    minMoistureThreshold?: SortOrder;
    targetMoistureLevel?: SortOrder;
    userId?: SortOrder;
    deviceId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: PlantCountOrderByAggregateInput;
    _avg?: PlantAvgOrderByAggregateInput;
    _max?: PlantMaxOrderByAggregateInput;
    _min?: PlantMinOrderByAggregateInput;
    _sum?: PlantSumOrderByAggregateInput;
  };

  export type PlantScalarWhereWithAggregatesInput = {
    AND?:
      | PlantScalarWhereWithAggregatesInput
      | PlantScalarWhereWithAggregatesInput[];
    OR?: PlantScalarWhereWithAggregatesInput[];
    NOT?:
      | PlantScalarWhereWithAggregatesInput
      | PlantScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Plant"> | string;
    name?: StringWithAggregatesFilter<"Plant"> | string;
    species?: StringNullableWithAggregatesFilter<"Plant"> | string | null;
    location?: StringNullableWithAggregatesFilter<"Plant"> | string | null;
    minMoistureThreshold?: FloatWithAggregatesFilter<"Plant"> | number;
    targetMoistureLevel?: FloatWithAggregatesFilter<"Plant"> | number;
    userId?: StringWithAggregatesFilter<"Plant"> | string;
    deviceId?: StringNullableWithAggregatesFilter<"Plant"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"Plant"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Plant"> | Date | string;
  };

  export type MoistureReadingWhereInput = {
    AND?: MoistureReadingWhereInput | MoistureReadingWhereInput[];
    OR?: MoistureReadingWhereInput[];
    NOT?: MoistureReadingWhereInput | MoistureReadingWhereInput[];
    id?: StringFilter<"MoistureReading"> | string;
    moisture?: FloatFilter<"MoistureReading"> | number;
    battery?: FloatFilter<"MoistureReading"> | number;
    deviceId?: StringFilter<"MoistureReading"> | string;
    plantId?: StringNullableFilter<"MoistureReading"> | string | null;
    createdAt?: DateTimeFilter<"MoistureReading"> | Date | string;
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>;
    plant?: XOR<PlantNullableScalarRelationFilter, PlantWhereInput> | null;
  };

  export type MoistureReadingOrderByWithRelationInput = {
    id?: SortOrder;
    moisture?: SortOrder;
    battery?: SortOrder;
    deviceId?: SortOrder;
    plantId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    device?: DeviceOrderByWithRelationInput;
    plant?: PlantOrderByWithRelationInput;
  };

  export type MoistureReadingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: MoistureReadingWhereInput | MoistureReadingWhereInput[];
      OR?: MoistureReadingWhereInput[];
      NOT?: MoistureReadingWhereInput | MoistureReadingWhereInput[];
      moisture?: FloatFilter<"MoistureReading"> | number;
      battery?: FloatFilter<"MoistureReading"> | number;
      deviceId?: StringFilter<"MoistureReading"> | string;
      plantId?: StringNullableFilter<"MoistureReading"> | string | null;
      createdAt?: DateTimeFilter<"MoistureReading"> | Date | string;
      device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>;
      plant?: XOR<PlantNullableScalarRelationFilter, PlantWhereInput> | null;
    },
    "id"
  >;

  export type MoistureReadingOrderByWithAggregationInput = {
    id?: SortOrder;
    moisture?: SortOrder;
    battery?: SortOrder;
    deviceId?: SortOrder;
    plantId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: MoistureReadingCountOrderByAggregateInput;
    _avg?: MoistureReadingAvgOrderByAggregateInput;
    _max?: MoistureReadingMaxOrderByAggregateInput;
    _min?: MoistureReadingMinOrderByAggregateInput;
    _sum?: MoistureReadingSumOrderByAggregateInput;
  };

  export type MoistureReadingScalarWhereWithAggregatesInput = {
    AND?:
      | MoistureReadingScalarWhereWithAggregatesInput
      | MoistureReadingScalarWhereWithAggregatesInput[];
    OR?: MoistureReadingScalarWhereWithAggregatesInput[];
    NOT?:
      | MoistureReadingScalarWhereWithAggregatesInput
      | MoistureReadingScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"MoistureReading"> | string;
    moisture?: FloatWithAggregatesFilter<"MoistureReading"> | number;
    battery?: FloatWithAggregatesFilter<"MoistureReading"> | number;
    deviceId?: StringWithAggregatesFilter<"MoistureReading"> | string;
    plantId?:
      StringNullableWithAggregatesFilter<"MoistureReading"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"MoistureReading"> | Date | string;
  };

  export type WateringLogWhereInput = {
    AND?: WateringLogWhereInput | WateringLogWhereInput[];
    OR?: WateringLogWhereInput[];
    NOT?: WateringLogWhereInput | WateringLogWhereInput[];
    id?: StringFilter<"WateringLog"> | string;
    plantId?: StringFilter<"WateringLog"> | string;
    moistureBefore?: FloatNullableFilter<"WateringLog"> | number | null;
    moistureAfter?: FloatNullableFilter<"WateringLog"> | number | null;
    detectedAutomatically?: BoolFilter<"WateringLog"> | boolean;
    note?: StringNullableFilter<"WateringLog"> | string | null;
    createdAt?: DateTimeFilter<"WateringLog"> | Date | string;
    plant?: XOR<PlantScalarRelationFilter, PlantWhereInput>;
  };

  export type WateringLogOrderByWithRelationInput = {
    id?: SortOrder;
    plantId?: SortOrder;
    moistureBefore?: SortOrderInput | SortOrder;
    moistureAfter?: SortOrderInput | SortOrder;
    detectedAutomatically?: SortOrder;
    note?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    plant?: PlantOrderByWithRelationInput;
  };

  export type WateringLogWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: WateringLogWhereInput | WateringLogWhereInput[];
      OR?: WateringLogWhereInput[];
      NOT?: WateringLogWhereInput | WateringLogWhereInput[];
      plantId?: StringFilter<"WateringLog"> | string;
      moistureBefore?: FloatNullableFilter<"WateringLog"> | number | null;
      moistureAfter?: FloatNullableFilter<"WateringLog"> | number | null;
      detectedAutomatically?: BoolFilter<"WateringLog"> | boolean;
      note?: StringNullableFilter<"WateringLog"> | string | null;
      createdAt?: DateTimeFilter<"WateringLog"> | Date | string;
      plant?: XOR<PlantScalarRelationFilter, PlantWhereInput>;
    },
    "id"
  >;

  export type WateringLogOrderByWithAggregationInput = {
    id?: SortOrder;
    plantId?: SortOrder;
    moistureBefore?: SortOrderInput | SortOrder;
    moistureAfter?: SortOrderInput | SortOrder;
    detectedAutomatically?: SortOrder;
    note?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: WateringLogCountOrderByAggregateInput;
    _avg?: WateringLogAvgOrderByAggregateInput;
    _max?: WateringLogMaxOrderByAggregateInput;
    _min?: WateringLogMinOrderByAggregateInput;
    _sum?: WateringLogSumOrderByAggregateInput;
  };

  export type WateringLogScalarWhereWithAggregatesInput = {
    AND?:
      | WateringLogScalarWhereWithAggregatesInput
      | WateringLogScalarWhereWithAggregatesInput[];
    OR?: WateringLogScalarWhereWithAggregatesInput[];
    NOT?:
      | WateringLogScalarWhereWithAggregatesInput
      | WateringLogScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"WateringLog"> | string;
    plantId?: StringWithAggregatesFilter<"WateringLog"> | string;
    moistureBefore?:
      FloatNullableWithAggregatesFilter<"WateringLog"> | number | null;
    moistureAfter?:
      FloatNullableWithAggregatesFilter<"WateringLog"> | number | null;
    detectedAutomatically?: BoolWithAggregatesFilter<"WateringLog"> | boolean;
    note?: StringNullableWithAggregatesFilter<"WateringLog"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"WateringLog"> | Date | string;
  };

  export type PushSubscriptionWhereInput = {
    AND?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[];
    OR?: PushSubscriptionWhereInput[];
    NOT?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[];
    id?: StringFilter<"PushSubscription"> | string;
    userId?: StringFilter<"PushSubscription"> | string;
    endpoint?: StringFilter<"PushSubscription"> | string;
    p256dh?: StringFilter<"PushSubscription"> | string;
    auth?: StringFilter<"PushSubscription"> | string;
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type PushSubscriptionOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    endpoint?: SortOrder;
    p256dh?: SortOrder;
    auth?: SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type PushSubscriptionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      endpoint?: string;
      AND?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[];
      OR?: PushSubscriptionWhereInput[];
      NOT?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[];
      userId?: StringFilter<"PushSubscription"> | string;
      p256dh?: StringFilter<"PushSubscription"> | string;
      auth?: StringFilter<"PushSubscription"> | string;
      createdAt?: DateTimeFilter<"PushSubscription"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "endpoint"
  >;

  export type PushSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    endpoint?: SortOrder;
    p256dh?: SortOrder;
    auth?: SortOrder;
    createdAt?: SortOrder;
    _count?: PushSubscriptionCountOrderByAggregateInput;
    _max?: PushSubscriptionMaxOrderByAggregateInput;
    _min?: PushSubscriptionMinOrderByAggregateInput;
  };

  export type PushSubscriptionScalarWhereWithAggregatesInput = {
    AND?:
      | PushSubscriptionScalarWhereWithAggregatesInput
      | PushSubscriptionScalarWhereWithAggregatesInput[];
    OR?: PushSubscriptionScalarWhereWithAggregatesInput[];
    NOT?:
      | PushSubscriptionScalarWhereWithAggregatesInput
      | PushSubscriptionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"PushSubscription"> | string;
    userId?: StringWithAggregatesFilter<"PushSubscription"> | string;
    endpoint?: StringWithAggregatesFilter<"PushSubscription"> | string;
    p256dh?: StringWithAggregatesFilter<"PushSubscription"> | string;
    auth?: StringWithAggregatesFilter<"PushSubscription"> | string;
    createdAt?:
      DateTimeWithAggregatesFilter<"PushSubscription"> | Date | string;
  };

  export type NotificationLogWhereInput = {
    AND?: NotificationLogWhereInput | NotificationLogWhereInput[];
    OR?: NotificationLogWhereInput[];
    NOT?: NotificationLogWhereInput | NotificationLogWhereInput[];
    id?: StringFilter<"NotificationLog"> | string;
    plantId?: StringFilter<"NotificationLog"> | string;
    type?: StringFilter<"NotificationLog"> | string;
    sentAt?: DateTimeFilter<"NotificationLog"> | Date | string;
    plant?: XOR<PlantScalarRelationFilter, PlantWhereInput>;
  };

  export type NotificationLogOrderByWithRelationInput = {
    id?: SortOrder;
    plantId?: SortOrder;
    type?: SortOrder;
    sentAt?: SortOrder;
    plant?: PlantOrderByWithRelationInput;
  };

  export type NotificationLogWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: NotificationLogWhereInput | NotificationLogWhereInput[];
      OR?: NotificationLogWhereInput[];
      NOT?: NotificationLogWhereInput | NotificationLogWhereInput[];
      plantId?: StringFilter<"NotificationLog"> | string;
      type?: StringFilter<"NotificationLog"> | string;
      sentAt?: DateTimeFilter<"NotificationLog"> | Date | string;
      plant?: XOR<PlantScalarRelationFilter, PlantWhereInput>;
    },
    "id"
  >;

  export type NotificationLogOrderByWithAggregationInput = {
    id?: SortOrder;
    plantId?: SortOrder;
    type?: SortOrder;
    sentAt?: SortOrder;
    _count?: NotificationLogCountOrderByAggregateInput;
    _max?: NotificationLogMaxOrderByAggregateInput;
    _min?: NotificationLogMinOrderByAggregateInput;
  };

  export type NotificationLogScalarWhereWithAggregatesInput = {
    AND?:
      | NotificationLogScalarWhereWithAggregatesInput
      | NotificationLogScalarWhereWithAggregatesInput[];
    OR?: NotificationLogScalarWhereWithAggregatesInput[];
    NOT?:
      | NotificationLogScalarWhereWithAggregatesInput
      | NotificationLogScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"NotificationLog"> | string;
    plantId?: StringWithAggregatesFilter<"NotificationLog"> | string;
    type?: StringWithAggregatesFilter<"NotificationLog"> | string;
    sentAt?: DateTimeWithAggregatesFilter<"NotificationLog"> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    plants?: PlantCreateNestedManyWithoutUserInput;
    devices?: DeviceCreateNestedManyWithoutUserInput;
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    plants?: PlantUncheckedCreateNestedManyWithoutUserInput;
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput;
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    plants?: PlantUpdateManyWithoutUserNestedInput;
    devices?: DeviceUpdateManyWithoutUserNestedInput;
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    plants?: PlantUncheckedUpdateManyWithoutUserNestedInput;
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput;
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DeviceCreateInput = {
    id?: string;
    token?: string;
    name: string;
    macAddress?: string | null;
    lastBatteryLevel?: number | null;
    lastSeenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutDevicesInput;
    plant?: PlantCreateNestedOneWithoutDeviceInput;
    readings?: MoistureReadingCreateNestedManyWithoutDeviceInput;
  };

  export type DeviceUncheckedCreateInput = {
    id?: string;
    token?: string;
    name: string;
    macAddress?: string | null;
    lastBatteryLevel?: number | null;
    lastSeenAt?: Date | string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    plant?: PlantUncheckedCreateNestedOneWithoutDeviceInput;
    readings?: MoistureReadingUncheckedCreateNestedManyWithoutDeviceInput;
  };

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    lastBatteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null;
    lastSeenAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput;
    plant?: PlantUpdateOneWithoutDeviceNestedInput;
    readings?: MoistureReadingUpdateManyWithoutDeviceNestedInput;
  };

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    lastBatteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null;
    lastSeenAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    plant?: PlantUncheckedUpdateOneWithoutDeviceNestedInput;
    readings?: MoistureReadingUncheckedUpdateManyWithoutDeviceNestedInput;
  };

  export type DeviceCreateManyInput = {
    id?: string;
    token?: string;
    name: string;
    macAddress?: string | null;
    lastBatteryLevel?: number | null;
    lastSeenAt?: Date | string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    lastBatteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null;
    lastSeenAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    lastBatteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null;
    lastSeenAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PlantCreateInput = {
    id?: string;
    name: string;
    species?: string | null;
    location?: string | null;
    minMoistureThreshold?: number;
    targetMoistureLevel?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutPlantsInput;
    device?: DeviceCreateNestedOneWithoutPlantInput;
    readings?: MoistureReadingCreateNestedManyWithoutPlantInput;
    waterings?: WateringLogCreateNestedManyWithoutPlantInput;
    notifications?: NotificationLogCreateNestedManyWithoutPlantInput;
  };

  export type PlantUncheckedCreateInput = {
    id?: string;
    name: string;
    species?: string | null;
    location?: string | null;
    minMoistureThreshold?: number;
    targetMoistureLevel?: number;
    userId: string;
    deviceId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    readings?: MoistureReadingUncheckedCreateNestedManyWithoutPlantInput;
    waterings?: WateringLogUncheckedCreateNestedManyWithoutPlantInput;
    notifications?: NotificationLogUncheckedCreateNestedManyWithoutPlantInput;
  };

  export type PlantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    species?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    minMoistureThreshold?: FloatFieldUpdateOperationsInput | number;
    targetMoistureLevel?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPlantsNestedInput;
    device?: DeviceUpdateOneWithoutPlantNestedInput;
    readings?: MoistureReadingUpdateManyWithoutPlantNestedInput;
    waterings?: WateringLogUpdateManyWithoutPlantNestedInput;
    notifications?: NotificationLogUpdateManyWithoutPlantNestedInput;
  };

  export type PlantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    species?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    minMoistureThreshold?: FloatFieldUpdateOperationsInput | number;
    targetMoistureLevel?: FloatFieldUpdateOperationsInput | number;
    userId?: StringFieldUpdateOperationsInput | string;
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    readings?: MoistureReadingUncheckedUpdateManyWithoutPlantNestedInput;
    waterings?: WateringLogUncheckedUpdateManyWithoutPlantNestedInput;
    notifications?: NotificationLogUncheckedUpdateManyWithoutPlantNestedInput;
  };

  export type PlantCreateManyInput = {
    id?: string;
    name: string;
    species?: string | null;
    location?: string | null;
    minMoistureThreshold?: number;
    targetMoistureLevel?: number;
    userId: string;
    deviceId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PlantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    species?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    minMoistureThreshold?: FloatFieldUpdateOperationsInput | number;
    targetMoistureLevel?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PlantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    species?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    minMoistureThreshold?: FloatFieldUpdateOperationsInput | number;
    targetMoistureLevel?: FloatFieldUpdateOperationsInput | number;
    userId?: StringFieldUpdateOperationsInput | string;
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MoistureReadingCreateInput = {
    id?: string;
    moisture: number;
    battery: number;
    createdAt?: Date | string;
    device: DeviceCreateNestedOneWithoutReadingsInput;
    plant?: PlantCreateNestedOneWithoutReadingsInput;
  };

  export type MoistureReadingUncheckedCreateInput = {
    id?: string;
    moisture: number;
    battery: number;
    deviceId: string;
    plantId?: string | null;
    createdAt?: Date | string;
  };

  export type MoistureReadingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    moisture?: FloatFieldUpdateOperationsInput | number;
    battery?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    device?: DeviceUpdateOneRequiredWithoutReadingsNestedInput;
    plant?: PlantUpdateOneWithoutReadingsNestedInput;
  };

  export type MoistureReadingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    moisture?: FloatFieldUpdateOperationsInput | number;
    battery?: FloatFieldUpdateOperationsInput | number;
    deviceId?: StringFieldUpdateOperationsInput | string;
    plantId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MoistureReadingCreateManyInput = {
    id?: string;
    moisture: number;
    battery: number;
    deviceId: string;
    plantId?: string | null;
    createdAt?: Date | string;
  };

  export type MoistureReadingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    moisture?: FloatFieldUpdateOperationsInput | number;
    battery?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MoistureReadingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    moisture?: FloatFieldUpdateOperationsInput | number;
    battery?: FloatFieldUpdateOperationsInput | number;
    deviceId?: StringFieldUpdateOperationsInput | string;
    plantId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WateringLogCreateInput = {
    id?: string;
    moistureBefore?: number | null;
    moistureAfter?: number | null;
    detectedAutomatically?: boolean;
    note?: string | null;
    createdAt?: Date | string;
    plant: PlantCreateNestedOneWithoutWateringsInput;
  };

  export type WateringLogUncheckedCreateInput = {
    id?: string;
    plantId: string;
    moistureBefore?: number | null;
    moistureAfter?: number | null;
    detectedAutomatically?: boolean;
    note?: string | null;
    createdAt?: Date | string;
  };

  export type WateringLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    moistureBefore?: NullableFloatFieldUpdateOperationsInput | number | null;
    moistureAfter?: NullableFloatFieldUpdateOperationsInput | number | null;
    detectedAutomatically?: BoolFieldUpdateOperationsInput | boolean;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    plant?: PlantUpdateOneRequiredWithoutWateringsNestedInput;
  };

  export type WateringLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    plantId?: StringFieldUpdateOperationsInput | string;
    moistureBefore?: NullableFloatFieldUpdateOperationsInput | number | null;
    moistureAfter?: NullableFloatFieldUpdateOperationsInput | number | null;
    detectedAutomatically?: BoolFieldUpdateOperationsInput | boolean;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WateringLogCreateManyInput = {
    id?: string;
    plantId: string;
    moistureBefore?: number | null;
    moistureAfter?: number | null;
    detectedAutomatically?: boolean;
    note?: string | null;
    createdAt?: Date | string;
  };

  export type WateringLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    moistureBefore?: NullableFloatFieldUpdateOperationsInput | number | null;
    moistureAfter?: NullableFloatFieldUpdateOperationsInput | number | null;
    detectedAutomatically?: BoolFieldUpdateOperationsInput | boolean;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WateringLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    plantId?: StringFieldUpdateOperationsInput | string;
    moistureBefore?: NullableFloatFieldUpdateOperationsInput | number | null;
    moistureAfter?: NullableFloatFieldUpdateOperationsInput | number | null;
    detectedAutomatically?: BoolFieldUpdateOperationsInput | boolean;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PushSubscriptionCreateInput = {
    id?: string;
    endpoint: string;
    p256dh: string;
    auth: string;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutPushSubscriptionsInput;
  };

  export type PushSubscriptionUncheckedCreateInput = {
    id?: string;
    userId: string;
    endpoint: string;
    p256dh: string;
    auth: string;
    createdAt?: Date | string;
  };

  export type PushSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    endpoint?: StringFieldUpdateOperationsInput | string;
    p256dh?: StringFieldUpdateOperationsInput | string;
    auth?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPushSubscriptionsNestedInput;
  };

  export type PushSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    endpoint?: StringFieldUpdateOperationsInput | string;
    p256dh?: StringFieldUpdateOperationsInput | string;
    auth?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PushSubscriptionCreateManyInput = {
    id?: string;
    userId: string;
    endpoint: string;
    p256dh: string;
    auth: string;
    createdAt?: Date | string;
  };

  export type PushSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    endpoint?: StringFieldUpdateOperationsInput | string;
    p256dh?: StringFieldUpdateOperationsInput | string;
    auth?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PushSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    endpoint?: StringFieldUpdateOperationsInput | string;
    p256dh?: StringFieldUpdateOperationsInput | string;
    auth?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationLogCreateInput = {
    id?: string;
    type: string;
    sentAt?: Date | string;
    plant: PlantCreateNestedOneWithoutNotificationsInput;
  };

  export type NotificationLogUncheckedCreateInput = {
    id?: string;
    plantId: string;
    type: string;
    sentAt?: Date | string;
  };

  export type NotificationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    plant?: PlantUpdateOneRequiredWithoutNotificationsNestedInput;
  };

  export type NotificationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    plantId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationLogCreateManyInput = {
    id?: string;
    plantId: string;
    type: string;
    sentAt?: Date | string;
  };

  export type NotificationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    plantId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type PlantListRelationFilter = {
    every?: PlantWhereInput;
    some?: PlantWhereInput;
    none?: PlantWhereInput;
  };

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput;
    some?: DeviceWhereInput;
    none?: DeviceWhereInput;
  };

  export type PushSubscriptionListRelationFilter = {
    every?: PushSubscriptionWhereInput;
    some?: PushSubscriptionWhereInput;
    none?: PushSubscriptionWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type PlantOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PushSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type PlantNullableScalarRelationFilter = {
    is?: PlantWhereInput | null;
    isNot?: PlantWhereInput | null;
  };

  export type MoistureReadingListRelationFilter = {
    every?: MoistureReadingWhereInput;
    some?: MoistureReadingWhereInput;
    none?: MoistureReadingWhereInput;
  };

  export type MoistureReadingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder;
    token?: SortOrder;
    name?: SortOrder;
    macAddress?: SortOrder;
    lastBatteryLevel?: SortOrder;
    lastSeenAt?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type DeviceAvgOrderByAggregateInput = {
    lastBatteryLevel?: SortOrder;
  };

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder;
    token?: SortOrder;
    name?: SortOrder;
    macAddress?: SortOrder;
    lastBatteryLevel?: SortOrder;
    lastSeenAt?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder;
    token?: SortOrder;
    name?: SortOrder;
    macAddress?: SortOrder;
    lastBatteryLevel?: SortOrder;
    lastSeenAt?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type DeviceSumOrderByAggregateInput = {
    lastBatteryLevel?: SortOrder;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type DeviceNullableScalarRelationFilter = {
    is?: DeviceWhereInput | null;
    isNot?: DeviceWhereInput | null;
  };

  export type WateringLogListRelationFilter = {
    every?: WateringLogWhereInput;
    some?: WateringLogWhereInput;
    none?: WateringLogWhereInput;
  };

  export type NotificationLogListRelationFilter = {
    every?: NotificationLogWhereInput;
    some?: NotificationLogWhereInput;
    none?: NotificationLogWhereInput;
  };

  export type WateringLogOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type NotificationLogOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PlantCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    species?: SortOrder;
    location?: SortOrder;
    minMoistureThreshold?: SortOrder;
    targetMoistureLevel?: SortOrder;
    userId?: SortOrder;
    deviceId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PlantAvgOrderByAggregateInput = {
    minMoistureThreshold?: SortOrder;
    targetMoistureLevel?: SortOrder;
  };

  export type PlantMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    species?: SortOrder;
    location?: SortOrder;
    minMoistureThreshold?: SortOrder;
    targetMoistureLevel?: SortOrder;
    userId?: SortOrder;
    deviceId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PlantMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    species?: SortOrder;
    location?: SortOrder;
    minMoistureThreshold?: SortOrder;
    targetMoistureLevel?: SortOrder;
    userId?: SortOrder;
    deviceId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PlantSumOrderByAggregateInput = {
    minMoistureThreshold?: SortOrder;
    targetMoistureLevel?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type DeviceScalarRelationFilter = {
    is?: DeviceWhereInput;
    isNot?: DeviceWhereInput;
  };

  export type MoistureReadingCountOrderByAggregateInput = {
    id?: SortOrder;
    moisture?: SortOrder;
    battery?: SortOrder;
    deviceId?: SortOrder;
    plantId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type MoistureReadingAvgOrderByAggregateInput = {
    moisture?: SortOrder;
    battery?: SortOrder;
  };

  export type MoistureReadingMaxOrderByAggregateInput = {
    id?: SortOrder;
    moisture?: SortOrder;
    battery?: SortOrder;
    deviceId?: SortOrder;
    plantId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type MoistureReadingMinOrderByAggregateInput = {
    id?: SortOrder;
    moisture?: SortOrder;
    battery?: SortOrder;
    deviceId?: SortOrder;
    plantId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type MoistureReadingSumOrderByAggregateInput = {
    moisture?: SortOrder;
    battery?: SortOrder;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type PlantScalarRelationFilter = {
    is?: PlantWhereInput;
    isNot?: PlantWhereInput;
  };

  export type WateringLogCountOrderByAggregateInput = {
    id?: SortOrder;
    plantId?: SortOrder;
    moistureBefore?: SortOrder;
    moistureAfter?: SortOrder;
    detectedAutomatically?: SortOrder;
    note?: SortOrder;
    createdAt?: SortOrder;
  };

  export type WateringLogAvgOrderByAggregateInput = {
    moistureBefore?: SortOrder;
    moistureAfter?: SortOrder;
  };

  export type WateringLogMaxOrderByAggregateInput = {
    id?: SortOrder;
    plantId?: SortOrder;
    moistureBefore?: SortOrder;
    moistureAfter?: SortOrder;
    detectedAutomatically?: SortOrder;
    note?: SortOrder;
    createdAt?: SortOrder;
  };

  export type WateringLogMinOrderByAggregateInput = {
    id?: SortOrder;
    plantId?: SortOrder;
    moistureBefore?: SortOrder;
    moistureAfter?: SortOrder;
    detectedAutomatically?: SortOrder;
    note?: SortOrder;
    createdAt?: SortOrder;
  };

  export type WateringLogSumOrderByAggregateInput = {
    moistureBefore?: SortOrder;
    moistureAfter?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type PushSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    endpoint?: SortOrder;
    p256dh?: SortOrder;
    auth?: SortOrder;
    createdAt?: SortOrder;
  };

  export type PushSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    endpoint?: SortOrder;
    p256dh?: SortOrder;
    auth?: SortOrder;
    createdAt?: SortOrder;
  };

  export type PushSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    endpoint?: SortOrder;
    p256dh?: SortOrder;
    auth?: SortOrder;
    createdAt?: SortOrder;
  };

  export type NotificationLogCountOrderByAggregateInput = {
    id?: SortOrder;
    plantId?: SortOrder;
    type?: SortOrder;
    sentAt?: SortOrder;
  };

  export type NotificationLogMaxOrderByAggregateInput = {
    id?: SortOrder;
    plantId?: SortOrder;
    type?: SortOrder;
    sentAt?: SortOrder;
  };

  export type NotificationLogMinOrderByAggregateInput = {
    id?: SortOrder;
    plantId?: SortOrder;
    type?: SortOrder;
    sentAt?: SortOrder;
  };

  export type PlantCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<PlantCreateWithoutUserInput, PlantUncheckedCreateWithoutUserInput>
      | PlantCreateWithoutUserInput[]
      | PlantUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlantCreateOrConnectWithoutUserInput
      | PlantCreateOrConnectWithoutUserInput[];
    createMany?: PlantCreateManyUserInputEnvelope;
    connect?: PlantWhereUniqueInput | PlantWhereUniqueInput[];
  };

  export type DeviceCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
      | DeviceCreateWithoutUserInput[]
      | DeviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | DeviceCreateOrConnectWithoutUserInput
      | DeviceCreateOrConnectWithoutUserInput[];
    createMany?: DeviceCreateManyUserInputEnvelope;
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[];
  };

  export type PushSubscriptionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PushSubscriptionCreateWithoutUserInput,
          PushSubscriptionUncheckedCreateWithoutUserInput
        >
      | PushSubscriptionCreateWithoutUserInput[]
      | PushSubscriptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PushSubscriptionCreateOrConnectWithoutUserInput
      | PushSubscriptionCreateOrConnectWithoutUserInput[];
    createMany?: PushSubscriptionCreateManyUserInputEnvelope;
    connect?:
      PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[];
  };

  export type PlantUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<PlantCreateWithoutUserInput, PlantUncheckedCreateWithoutUserInput>
      | PlantCreateWithoutUserInput[]
      | PlantUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlantCreateOrConnectWithoutUserInput
      | PlantCreateOrConnectWithoutUserInput[];
    createMany?: PlantCreateManyUserInputEnvelope;
    connect?: PlantWhereUniqueInput | PlantWhereUniqueInput[];
  };

  export type DeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
      | DeviceCreateWithoutUserInput[]
      | DeviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | DeviceCreateOrConnectWithoutUserInput
      | DeviceCreateOrConnectWithoutUserInput[];
    createMany?: DeviceCreateManyUserInputEnvelope;
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[];
  };

  export type PushSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PushSubscriptionCreateWithoutUserInput,
          PushSubscriptionUncheckedCreateWithoutUserInput
        >
      | PushSubscriptionCreateWithoutUserInput[]
      | PushSubscriptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PushSubscriptionCreateOrConnectWithoutUserInput
      | PushSubscriptionCreateOrConnectWithoutUserInput[];
    createMany?: PushSubscriptionCreateManyUserInputEnvelope;
    connect?:
      PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type PlantUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<PlantCreateWithoutUserInput, PlantUncheckedCreateWithoutUserInput>
      | PlantCreateWithoutUserInput[]
      | PlantUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlantCreateOrConnectWithoutUserInput
      | PlantCreateOrConnectWithoutUserInput[];
    upsert?:
      | PlantUpsertWithWhereUniqueWithoutUserInput
      | PlantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PlantCreateManyUserInputEnvelope;
    set?: PlantWhereUniqueInput | PlantWhereUniqueInput[];
    disconnect?: PlantWhereUniqueInput | PlantWhereUniqueInput[];
    delete?: PlantWhereUniqueInput | PlantWhereUniqueInput[];
    connect?: PlantWhereUniqueInput | PlantWhereUniqueInput[];
    update?:
      | PlantUpdateWithWhereUniqueWithoutUserInput
      | PlantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PlantUpdateManyWithWhereWithoutUserInput
      | PlantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PlantScalarWhereInput | PlantScalarWhereInput[];
  };

  export type DeviceUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
      | DeviceCreateWithoutUserInput[]
      | DeviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | DeviceCreateOrConnectWithoutUserInput
      | DeviceCreateOrConnectWithoutUserInput[];
    upsert?:
      | DeviceUpsertWithWhereUniqueWithoutUserInput
      | DeviceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: DeviceCreateManyUserInputEnvelope;
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[];
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[];
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[];
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[];
    update?:
      | DeviceUpdateWithWhereUniqueWithoutUserInput
      | DeviceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | DeviceUpdateManyWithWhereWithoutUserInput
      | DeviceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[];
  };

  export type PushSubscriptionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PushSubscriptionCreateWithoutUserInput,
          PushSubscriptionUncheckedCreateWithoutUserInput
        >
      | PushSubscriptionCreateWithoutUserInput[]
      | PushSubscriptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PushSubscriptionCreateOrConnectWithoutUserInput
      | PushSubscriptionCreateOrConnectWithoutUserInput[];
    upsert?:
      | PushSubscriptionUpsertWithWhereUniqueWithoutUserInput
      | PushSubscriptionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PushSubscriptionCreateManyUserInputEnvelope;
    set?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[];
    disconnect?:
      PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[];
    delete?:
      PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[];
    connect?:
      PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[];
    update?:
      | PushSubscriptionUpdateWithWhereUniqueWithoutUserInput
      | PushSubscriptionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PushSubscriptionUpdateManyWithWhereWithoutUserInput
      | PushSubscriptionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[];
  };

  export type PlantUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<PlantCreateWithoutUserInput, PlantUncheckedCreateWithoutUserInput>
      | PlantCreateWithoutUserInput[]
      | PlantUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlantCreateOrConnectWithoutUserInput
      | PlantCreateOrConnectWithoutUserInput[];
    upsert?:
      | PlantUpsertWithWhereUniqueWithoutUserInput
      | PlantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PlantCreateManyUserInputEnvelope;
    set?: PlantWhereUniqueInput | PlantWhereUniqueInput[];
    disconnect?: PlantWhereUniqueInput | PlantWhereUniqueInput[];
    delete?: PlantWhereUniqueInput | PlantWhereUniqueInput[];
    connect?: PlantWhereUniqueInput | PlantWhereUniqueInput[];
    update?:
      | PlantUpdateWithWhereUniqueWithoutUserInput
      | PlantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PlantUpdateManyWithWhereWithoutUserInput
      | PlantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PlantScalarWhereInput | PlantScalarWhereInput[];
  };

  export type DeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
      | DeviceCreateWithoutUserInput[]
      | DeviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | DeviceCreateOrConnectWithoutUserInput
      | DeviceCreateOrConnectWithoutUserInput[];
    upsert?:
      | DeviceUpsertWithWhereUniqueWithoutUserInput
      | DeviceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: DeviceCreateManyUserInputEnvelope;
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[];
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[];
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[];
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[];
    update?:
      | DeviceUpdateWithWhereUniqueWithoutUserInput
      | DeviceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | DeviceUpdateManyWithWhereWithoutUserInput
      | DeviceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[];
  };

  export type PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PushSubscriptionCreateWithoutUserInput,
          PushSubscriptionUncheckedCreateWithoutUserInput
        >
      | PushSubscriptionCreateWithoutUserInput[]
      | PushSubscriptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PushSubscriptionCreateOrConnectWithoutUserInput
      | PushSubscriptionCreateOrConnectWithoutUserInput[];
    upsert?:
      | PushSubscriptionUpsertWithWhereUniqueWithoutUserInput
      | PushSubscriptionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PushSubscriptionCreateManyUserInputEnvelope;
    set?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[];
    disconnect?:
      PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[];
    delete?:
      PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[];
    connect?:
      PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[];
    update?:
      | PushSubscriptionUpdateWithWhereUniqueWithoutUserInput
      | PushSubscriptionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PushSubscriptionUpdateManyWithWhereWithoutUserInput
      | PushSubscriptionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutDevicesInput = {
    create?: XOR<
      UserCreateWithoutDevicesInput,
      UserUncheckedCreateWithoutDevicesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput;
    connect?: UserWhereUniqueInput;
  };

  export type PlantCreateNestedOneWithoutDeviceInput = {
    create?: XOR<
      PlantCreateWithoutDeviceInput,
      PlantUncheckedCreateWithoutDeviceInput
    >;
    connectOrCreate?: PlantCreateOrConnectWithoutDeviceInput;
    connect?: PlantWhereUniqueInput;
  };

  export type MoistureReadingCreateNestedManyWithoutDeviceInput = {
    create?:
      | XOR<
          MoistureReadingCreateWithoutDeviceInput,
          MoistureReadingUncheckedCreateWithoutDeviceInput
        >
      | MoistureReadingCreateWithoutDeviceInput[]
      | MoistureReadingUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?:
      | MoistureReadingCreateOrConnectWithoutDeviceInput
      | MoistureReadingCreateOrConnectWithoutDeviceInput[];
    createMany?: MoistureReadingCreateManyDeviceInputEnvelope;
    connect?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
  };

  export type PlantUncheckedCreateNestedOneWithoutDeviceInput = {
    create?: XOR<
      PlantCreateWithoutDeviceInput,
      PlantUncheckedCreateWithoutDeviceInput
    >;
    connectOrCreate?: PlantCreateOrConnectWithoutDeviceInput;
    connect?: PlantWhereUniqueInput;
  };

  export type MoistureReadingUncheckedCreateNestedManyWithoutDeviceInput = {
    create?:
      | XOR<
          MoistureReadingCreateWithoutDeviceInput,
          MoistureReadingUncheckedCreateWithoutDeviceInput
        >
      | MoistureReadingCreateWithoutDeviceInput[]
      | MoistureReadingUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?:
      | MoistureReadingCreateOrConnectWithoutDeviceInput
      | MoistureReadingCreateOrConnectWithoutDeviceInput[];
    createMany?: MoistureReadingCreateManyDeviceInputEnvelope;
    connect?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type UserUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<
      UserCreateWithoutDevicesInput,
      UserUncheckedCreateWithoutDevicesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput;
    upsert?: UserUpsertWithoutDevicesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutDevicesInput,
        UserUpdateWithoutDevicesInput
      >,
      UserUncheckedUpdateWithoutDevicesInput
    >;
  };

  export type PlantUpdateOneWithoutDeviceNestedInput = {
    create?: XOR<
      PlantCreateWithoutDeviceInput,
      PlantUncheckedCreateWithoutDeviceInput
    >;
    connectOrCreate?: PlantCreateOrConnectWithoutDeviceInput;
    upsert?: PlantUpsertWithoutDeviceInput;
    disconnect?: PlantWhereInput | boolean;
    delete?: PlantWhereInput | boolean;
    connect?: PlantWhereUniqueInput;
    update?: XOR<
      XOR<
        PlantUpdateToOneWithWhereWithoutDeviceInput,
        PlantUpdateWithoutDeviceInput
      >,
      PlantUncheckedUpdateWithoutDeviceInput
    >;
  };

  export type MoistureReadingUpdateManyWithoutDeviceNestedInput = {
    create?:
      | XOR<
          MoistureReadingCreateWithoutDeviceInput,
          MoistureReadingUncheckedCreateWithoutDeviceInput
        >
      | MoistureReadingCreateWithoutDeviceInput[]
      | MoistureReadingUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?:
      | MoistureReadingCreateOrConnectWithoutDeviceInput
      | MoistureReadingCreateOrConnectWithoutDeviceInput[];
    upsert?:
      | MoistureReadingUpsertWithWhereUniqueWithoutDeviceInput
      | MoistureReadingUpsertWithWhereUniqueWithoutDeviceInput[];
    createMany?: MoistureReadingCreateManyDeviceInputEnvelope;
    set?: MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    disconnect?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    delete?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    connect?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    update?:
      | MoistureReadingUpdateWithWhereUniqueWithoutDeviceInput
      | MoistureReadingUpdateWithWhereUniqueWithoutDeviceInput[];
    updateMany?:
      | MoistureReadingUpdateManyWithWhereWithoutDeviceInput
      | MoistureReadingUpdateManyWithWhereWithoutDeviceInput[];
    deleteMany?:
      MoistureReadingScalarWhereInput | MoistureReadingScalarWhereInput[];
  };

  export type PlantUncheckedUpdateOneWithoutDeviceNestedInput = {
    create?: XOR<
      PlantCreateWithoutDeviceInput,
      PlantUncheckedCreateWithoutDeviceInput
    >;
    connectOrCreate?: PlantCreateOrConnectWithoutDeviceInput;
    upsert?: PlantUpsertWithoutDeviceInput;
    disconnect?: PlantWhereInput | boolean;
    delete?: PlantWhereInput | boolean;
    connect?: PlantWhereUniqueInput;
    update?: XOR<
      XOR<
        PlantUpdateToOneWithWhereWithoutDeviceInput,
        PlantUpdateWithoutDeviceInput
      >,
      PlantUncheckedUpdateWithoutDeviceInput
    >;
  };

  export type MoistureReadingUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?:
      | XOR<
          MoistureReadingCreateWithoutDeviceInput,
          MoistureReadingUncheckedCreateWithoutDeviceInput
        >
      | MoistureReadingCreateWithoutDeviceInput[]
      | MoistureReadingUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?:
      | MoistureReadingCreateOrConnectWithoutDeviceInput
      | MoistureReadingCreateOrConnectWithoutDeviceInput[];
    upsert?:
      | MoistureReadingUpsertWithWhereUniqueWithoutDeviceInput
      | MoistureReadingUpsertWithWhereUniqueWithoutDeviceInput[];
    createMany?: MoistureReadingCreateManyDeviceInputEnvelope;
    set?: MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    disconnect?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    delete?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    connect?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    update?:
      | MoistureReadingUpdateWithWhereUniqueWithoutDeviceInput
      | MoistureReadingUpdateWithWhereUniqueWithoutDeviceInput[];
    updateMany?:
      | MoistureReadingUpdateManyWithWhereWithoutDeviceInput
      | MoistureReadingUpdateManyWithWhereWithoutDeviceInput[];
    deleteMany?:
      MoistureReadingScalarWhereInput | MoistureReadingScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutPlantsInput = {
    create?: XOR<
      UserCreateWithoutPlantsInput,
      UserUncheckedCreateWithoutPlantsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPlantsInput;
    connect?: UserWhereUniqueInput;
  };

  export type DeviceCreateNestedOneWithoutPlantInput = {
    create?: XOR<
      DeviceCreateWithoutPlantInput,
      DeviceUncheckedCreateWithoutPlantInput
    >;
    connectOrCreate?: DeviceCreateOrConnectWithoutPlantInput;
    connect?: DeviceWhereUniqueInput;
  };

  export type MoistureReadingCreateNestedManyWithoutPlantInput = {
    create?:
      | XOR<
          MoistureReadingCreateWithoutPlantInput,
          MoistureReadingUncheckedCreateWithoutPlantInput
        >
      | MoistureReadingCreateWithoutPlantInput[]
      | MoistureReadingUncheckedCreateWithoutPlantInput[];
    connectOrCreate?:
      | MoistureReadingCreateOrConnectWithoutPlantInput
      | MoistureReadingCreateOrConnectWithoutPlantInput[];
    createMany?: MoistureReadingCreateManyPlantInputEnvelope;
    connect?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
  };

  export type WateringLogCreateNestedManyWithoutPlantInput = {
    create?:
      | XOR<
          WateringLogCreateWithoutPlantInput,
          WateringLogUncheckedCreateWithoutPlantInput
        >
      | WateringLogCreateWithoutPlantInput[]
      | WateringLogUncheckedCreateWithoutPlantInput[];
    connectOrCreate?:
      | WateringLogCreateOrConnectWithoutPlantInput
      | WateringLogCreateOrConnectWithoutPlantInput[];
    createMany?: WateringLogCreateManyPlantInputEnvelope;
    connect?: WateringLogWhereUniqueInput | WateringLogWhereUniqueInput[];
  };

  export type NotificationLogCreateNestedManyWithoutPlantInput = {
    create?:
      | XOR<
          NotificationLogCreateWithoutPlantInput,
          NotificationLogUncheckedCreateWithoutPlantInput
        >
      | NotificationLogCreateWithoutPlantInput[]
      | NotificationLogUncheckedCreateWithoutPlantInput[];
    connectOrCreate?:
      | NotificationLogCreateOrConnectWithoutPlantInput
      | NotificationLogCreateOrConnectWithoutPlantInput[];
    createMany?: NotificationLogCreateManyPlantInputEnvelope;
    connect?:
      NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[];
  };

  export type MoistureReadingUncheckedCreateNestedManyWithoutPlantInput = {
    create?:
      | XOR<
          MoistureReadingCreateWithoutPlantInput,
          MoistureReadingUncheckedCreateWithoutPlantInput
        >
      | MoistureReadingCreateWithoutPlantInput[]
      | MoistureReadingUncheckedCreateWithoutPlantInput[];
    connectOrCreate?:
      | MoistureReadingCreateOrConnectWithoutPlantInput
      | MoistureReadingCreateOrConnectWithoutPlantInput[];
    createMany?: MoistureReadingCreateManyPlantInputEnvelope;
    connect?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
  };

  export type WateringLogUncheckedCreateNestedManyWithoutPlantInput = {
    create?:
      | XOR<
          WateringLogCreateWithoutPlantInput,
          WateringLogUncheckedCreateWithoutPlantInput
        >
      | WateringLogCreateWithoutPlantInput[]
      | WateringLogUncheckedCreateWithoutPlantInput[];
    connectOrCreate?:
      | WateringLogCreateOrConnectWithoutPlantInput
      | WateringLogCreateOrConnectWithoutPlantInput[];
    createMany?: WateringLogCreateManyPlantInputEnvelope;
    connect?: WateringLogWhereUniqueInput | WateringLogWhereUniqueInput[];
  };

  export type NotificationLogUncheckedCreateNestedManyWithoutPlantInput = {
    create?:
      | XOR<
          NotificationLogCreateWithoutPlantInput,
          NotificationLogUncheckedCreateWithoutPlantInput
        >
      | NotificationLogCreateWithoutPlantInput[]
      | NotificationLogUncheckedCreateWithoutPlantInput[];
    connectOrCreate?:
      | NotificationLogCreateOrConnectWithoutPlantInput
      | NotificationLogCreateOrConnectWithoutPlantInput[];
    createMany?: NotificationLogCreateManyPlantInputEnvelope;
    connect?:
      NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[];
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserUpdateOneRequiredWithoutPlantsNestedInput = {
    create?: XOR<
      UserCreateWithoutPlantsInput,
      UserUncheckedCreateWithoutPlantsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPlantsInput;
    upsert?: UserUpsertWithoutPlantsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPlantsInput,
        UserUpdateWithoutPlantsInput
      >,
      UserUncheckedUpdateWithoutPlantsInput
    >;
  };

  export type DeviceUpdateOneWithoutPlantNestedInput = {
    create?: XOR<
      DeviceCreateWithoutPlantInput,
      DeviceUncheckedCreateWithoutPlantInput
    >;
    connectOrCreate?: DeviceCreateOrConnectWithoutPlantInput;
    upsert?: DeviceUpsertWithoutPlantInput;
    disconnect?: DeviceWhereInput | boolean;
    delete?: DeviceWhereInput | boolean;
    connect?: DeviceWhereUniqueInput;
    update?: XOR<
      XOR<
        DeviceUpdateToOneWithWhereWithoutPlantInput,
        DeviceUpdateWithoutPlantInput
      >,
      DeviceUncheckedUpdateWithoutPlantInput
    >;
  };

  export type MoistureReadingUpdateManyWithoutPlantNestedInput = {
    create?:
      | XOR<
          MoistureReadingCreateWithoutPlantInput,
          MoistureReadingUncheckedCreateWithoutPlantInput
        >
      | MoistureReadingCreateWithoutPlantInput[]
      | MoistureReadingUncheckedCreateWithoutPlantInput[];
    connectOrCreate?:
      | MoistureReadingCreateOrConnectWithoutPlantInput
      | MoistureReadingCreateOrConnectWithoutPlantInput[];
    upsert?:
      | MoistureReadingUpsertWithWhereUniqueWithoutPlantInput
      | MoistureReadingUpsertWithWhereUniqueWithoutPlantInput[];
    createMany?: MoistureReadingCreateManyPlantInputEnvelope;
    set?: MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    disconnect?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    delete?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    connect?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    update?:
      | MoistureReadingUpdateWithWhereUniqueWithoutPlantInput
      | MoistureReadingUpdateWithWhereUniqueWithoutPlantInput[];
    updateMany?:
      | MoistureReadingUpdateManyWithWhereWithoutPlantInput
      | MoistureReadingUpdateManyWithWhereWithoutPlantInput[];
    deleteMany?:
      MoistureReadingScalarWhereInput | MoistureReadingScalarWhereInput[];
  };

  export type WateringLogUpdateManyWithoutPlantNestedInput = {
    create?:
      | XOR<
          WateringLogCreateWithoutPlantInput,
          WateringLogUncheckedCreateWithoutPlantInput
        >
      | WateringLogCreateWithoutPlantInput[]
      | WateringLogUncheckedCreateWithoutPlantInput[];
    connectOrCreate?:
      | WateringLogCreateOrConnectWithoutPlantInput
      | WateringLogCreateOrConnectWithoutPlantInput[];
    upsert?:
      | WateringLogUpsertWithWhereUniqueWithoutPlantInput
      | WateringLogUpsertWithWhereUniqueWithoutPlantInput[];
    createMany?: WateringLogCreateManyPlantInputEnvelope;
    set?: WateringLogWhereUniqueInput | WateringLogWhereUniqueInput[];
    disconnect?: WateringLogWhereUniqueInput | WateringLogWhereUniqueInput[];
    delete?: WateringLogWhereUniqueInput | WateringLogWhereUniqueInput[];
    connect?: WateringLogWhereUniqueInput | WateringLogWhereUniqueInput[];
    update?:
      | WateringLogUpdateWithWhereUniqueWithoutPlantInput
      | WateringLogUpdateWithWhereUniqueWithoutPlantInput[];
    updateMany?:
      | WateringLogUpdateManyWithWhereWithoutPlantInput
      | WateringLogUpdateManyWithWhereWithoutPlantInput[];
    deleteMany?: WateringLogScalarWhereInput | WateringLogScalarWhereInput[];
  };

  export type NotificationLogUpdateManyWithoutPlantNestedInput = {
    create?:
      | XOR<
          NotificationLogCreateWithoutPlantInput,
          NotificationLogUncheckedCreateWithoutPlantInput
        >
      | NotificationLogCreateWithoutPlantInput[]
      | NotificationLogUncheckedCreateWithoutPlantInput[];
    connectOrCreate?:
      | NotificationLogCreateOrConnectWithoutPlantInput
      | NotificationLogCreateOrConnectWithoutPlantInput[];
    upsert?:
      | NotificationLogUpsertWithWhereUniqueWithoutPlantInput
      | NotificationLogUpsertWithWhereUniqueWithoutPlantInput[];
    createMany?: NotificationLogCreateManyPlantInputEnvelope;
    set?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[];
    disconnect?:
      NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[];
    delete?:
      NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[];
    connect?:
      NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[];
    update?:
      | NotificationLogUpdateWithWhereUniqueWithoutPlantInput
      | NotificationLogUpdateWithWhereUniqueWithoutPlantInput[];
    updateMany?:
      | NotificationLogUpdateManyWithWhereWithoutPlantInput
      | NotificationLogUpdateManyWithWhereWithoutPlantInput[];
    deleteMany?:
      NotificationLogScalarWhereInput | NotificationLogScalarWhereInput[];
  };

  export type MoistureReadingUncheckedUpdateManyWithoutPlantNestedInput = {
    create?:
      | XOR<
          MoistureReadingCreateWithoutPlantInput,
          MoistureReadingUncheckedCreateWithoutPlantInput
        >
      | MoistureReadingCreateWithoutPlantInput[]
      | MoistureReadingUncheckedCreateWithoutPlantInput[];
    connectOrCreate?:
      | MoistureReadingCreateOrConnectWithoutPlantInput
      | MoistureReadingCreateOrConnectWithoutPlantInput[];
    upsert?:
      | MoistureReadingUpsertWithWhereUniqueWithoutPlantInput
      | MoistureReadingUpsertWithWhereUniqueWithoutPlantInput[];
    createMany?: MoistureReadingCreateManyPlantInputEnvelope;
    set?: MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    disconnect?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    delete?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    connect?:
      MoistureReadingWhereUniqueInput | MoistureReadingWhereUniqueInput[];
    update?:
      | MoistureReadingUpdateWithWhereUniqueWithoutPlantInput
      | MoistureReadingUpdateWithWhereUniqueWithoutPlantInput[];
    updateMany?:
      | MoistureReadingUpdateManyWithWhereWithoutPlantInput
      | MoistureReadingUpdateManyWithWhereWithoutPlantInput[];
    deleteMany?:
      MoistureReadingScalarWhereInput | MoistureReadingScalarWhereInput[];
  };

  export type WateringLogUncheckedUpdateManyWithoutPlantNestedInput = {
    create?:
      | XOR<
          WateringLogCreateWithoutPlantInput,
          WateringLogUncheckedCreateWithoutPlantInput
        >
      | WateringLogCreateWithoutPlantInput[]
      | WateringLogUncheckedCreateWithoutPlantInput[];
    connectOrCreate?:
      | WateringLogCreateOrConnectWithoutPlantInput
      | WateringLogCreateOrConnectWithoutPlantInput[];
    upsert?:
      | WateringLogUpsertWithWhereUniqueWithoutPlantInput
      | WateringLogUpsertWithWhereUniqueWithoutPlantInput[];
    createMany?: WateringLogCreateManyPlantInputEnvelope;
    set?: WateringLogWhereUniqueInput | WateringLogWhereUniqueInput[];
    disconnect?: WateringLogWhereUniqueInput | WateringLogWhereUniqueInput[];
    delete?: WateringLogWhereUniqueInput | WateringLogWhereUniqueInput[];
    connect?: WateringLogWhereUniqueInput | WateringLogWhereUniqueInput[];
    update?:
      | WateringLogUpdateWithWhereUniqueWithoutPlantInput
      | WateringLogUpdateWithWhereUniqueWithoutPlantInput[];
    updateMany?:
      | WateringLogUpdateManyWithWhereWithoutPlantInput
      | WateringLogUpdateManyWithWhereWithoutPlantInput[];
    deleteMany?: WateringLogScalarWhereInput | WateringLogScalarWhereInput[];
  };

  export type NotificationLogUncheckedUpdateManyWithoutPlantNestedInput = {
    create?:
      | XOR<
          NotificationLogCreateWithoutPlantInput,
          NotificationLogUncheckedCreateWithoutPlantInput
        >
      | NotificationLogCreateWithoutPlantInput[]
      | NotificationLogUncheckedCreateWithoutPlantInput[];
    connectOrCreate?:
      | NotificationLogCreateOrConnectWithoutPlantInput
      | NotificationLogCreateOrConnectWithoutPlantInput[];
    upsert?:
      | NotificationLogUpsertWithWhereUniqueWithoutPlantInput
      | NotificationLogUpsertWithWhereUniqueWithoutPlantInput[];
    createMany?: NotificationLogCreateManyPlantInputEnvelope;
    set?: NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[];
    disconnect?:
      NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[];
    delete?:
      NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[];
    connect?:
      NotificationLogWhereUniqueInput | NotificationLogWhereUniqueInput[];
    update?:
      | NotificationLogUpdateWithWhereUniqueWithoutPlantInput
      | NotificationLogUpdateWithWhereUniqueWithoutPlantInput[];
    updateMany?:
      | NotificationLogUpdateManyWithWhereWithoutPlantInput
      | NotificationLogUpdateManyWithWhereWithoutPlantInput[];
    deleteMany?:
      NotificationLogScalarWhereInput | NotificationLogScalarWhereInput[];
  };

  export type DeviceCreateNestedOneWithoutReadingsInput = {
    create?: XOR<
      DeviceCreateWithoutReadingsInput,
      DeviceUncheckedCreateWithoutReadingsInput
    >;
    connectOrCreate?: DeviceCreateOrConnectWithoutReadingsInput;
    connect?: DeviceWhereUniqueInput;
  };

  export type PlantCreateNestedOneWithoutReadingsInput = {
    create?: XOR<
      PlantCreateWithoutReadingsInput,
      PlantUncheckedCreateWithoutReadingsInput
    >;
    connectOrCreate?: PlantCreateOrConnectWithoutReadingsInput;
    connect?: PlantWhereUniqueInput;
  };

  export type DeviceUpdateOneRequiredWithoutReadingsNestedInput = {
    create?: XOR<
      DeviceCreateWithoutReadingsInput,
      DeviceUncheckedCreateWithoutReadingsInput
    >;
    connectOrCreate?: DeviceCreateOrConnectWithoutReadingsInput;
    upsert?: DeviceUpsertWithoutReadingsInput;
    connect?: DeviceWhereUniqueInput;
    update?: XOR<
      XOR<
        DeviceUpdateToOneWithWhereWithoutReadingsInput,
        DeviceUpdateWithoutReadingsInput
      >,
      DeviceUncheckedUpdateWithoutReadingsInput
    >;
  };

  export type PlantUpdateOneWithoutReadingsNestedInput = {
    create?: XOR<
      PlantCreateWithoutReadingsInput,
      PlantUncheckedCreateWithoutReadingsInput
    >;
    connectOrCreate?: PlantCreateOrConnectWithoutReadingsInput;
    upsert?: PlantUpsertWithoutReadingsInput;
    disconnect?: PlantWhereInput | boolean;
    delete?: PlantWhereInput | boolean;
    connect?: PlantWhereUniqueInput;
    update?: XOR<
      XOR<
        PlantUpdateToOneWithWhereWithoutReadingsInput,
        PlantUpdateWithoutReadingsInput
      >,
      PlantUncheckedUpdateWithoutReadingsInput
    >;
  };

  export type PlantCreateNestedOneWithoutWateringsInput = {
    create?: XOR<
      PlantCreateWithoutWateringsInput,
      PlantUncheckedCreateWithoutWateringsInput
    >;
    connectOrCreate?: PlantCreateOrConnectWithoutWateringsInput;
    connect?: PlantWhereUniqueInput;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type PlantUpdateOneRequiredWithoutWateringsNestedInput = {
    create?: XOR<
      PlantCreateWithoutWateringsInput,
      PlantUncheckedCreateWithoutWateringsInput
    >;
    connectOrCreate?: PlantCreateOrConnectWithoutWateringsInput;
    upsert?: PlantUpsertWithoutWateringsInput;
    connect?: PlantWhereUniqueInput;
    update?: XOR<
      XOR<
        PlantUpdateToOneWithWhereWithoutWateringsInput,
        PlantUpdateWithoutWateringsInput
      >,
      PlantUncheckedUpdateWithoutWateringsInput
    >;
  };

  export type UserCreateNestedOneWithoutPushSubscriptionsInput = {
    create?: XOR<
      UserCreateWithoutPushSubscriptionsInput,
      UserUncheckedCreateWithoutPushSubscriptionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPushSubscriptionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutPushSubscriptionsNestedInput = {
    create?: XOR<
      UserCreateWithoutPushSubscriptionsInput,
      UserUncheckedCreateWithoutPushSubscriptionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPushSubscriptionsInput;
    upsert?: UserUpsertWithoutPushSubscriptionsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPushSubscriptionsInput,
        UserUpdateWithoutPushSubscriptionsInput
      >,
      UserUncheckedUpdateWithoutPushSubscriptionsInput
    >;
  };

  export type PlantCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<
      PlantCreateWithoutNotificationsInput,
      PlantUncheckedCreateWithoutNotificationsInput
    >;
    connectOrCreate?: PlantCreateOrConnectWithoutNotificationsInput;
    connect?: PlantWhereUniqueInput;
  };

  export type PlantUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<
      PlantCreateWithoutNotificationsInput,
      PlantUncheckedCreateWithoutNotificationsInput
    >;
    connectOrCreate?: PlantCreateOrConnectWithoutNotificationsInput;
    upsert?: PlantUpsertWithoutNotificationsInput;
    connect?: PlantWhereUniqueInput;
    update?: XOR<
      XOR<
        PlantUpdateToOneWithWhereWithoutNotificationsInput,
        PlantUpdateWithoutNotificationsInput
      >,
      PlantUncheckedUpdateWithoutNotificationsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type PlantCreateWithoutUserInput = {
    id?: string;
    name: string;
    species?: string | null;
    location?: string | null;
    minMoistureThreshold?: number;
    targetMoistureLevel?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    device?: DeviceCreateNestedOneWithoutPlantInput;
    readings?: MoistureReadingCreateNestedManyWithoutPlantInput;
    waterings?: WateringLogCreateNestedManyWithoutPlantInput;
    notifications?: NotificationLogCreateNestedManyWithoutPlantInput;
  };

  export type PlantUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    species?: string | null;
    location?: string | null;
    minMoistureThreshold?: number;
    targetMoistureLevel?: number;
    deviceId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    readings?: MoistureReadingUncheckedCreateNestedManyWithoutPlantInput;
    waterings?: WateringLogUncheckedCreateNestedManyWithoutPlantInput;
    notifications?: NotificationLogUncheckedCreateNestedManyWithoutPlantInput;
  };

  export type PlantCreateOrConnectWithoutUserInput = {
    where: PlantWhereUniqueInput;
    create: XOR<
      PlantCreateWithoutUserInput,
      PlantUncheckedCreateWithoutUserInput
    >;
  };

  export type PlantCreateManyUserInputEnvelope = {
    data: PlantCreateManyUserInput | PlantCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type DeviceCreateWithoutUserInput = {
    id?: string;
    token?: string;
    name: string;
    macAddress?: string | null;
    lastBatteryLevel?: number | null;
    lastSeenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    plant?: PlantCreateNestedOneWithoutDeviceInput;
    readings?: MoistureReadingCreateNestedManyWithoutDeviceInput;
  };

  export type DeviceUncheckedCreateWithoutUserInput = {
    id?: string;
    token?: string;
    name: string;
    macAddress?: string | null;
    lastBatteryLevel?: number | null;
    lastSeenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    plant?: PlantUncheckedCreateNestedOneWithoutDeviceInput;
    readings?: MoistureReadingUncheckedCreateNestedManyWithoutDeviceInput;
  };

  export type DeviceCreateOrConnectWithoutUserInput = {
    where: DeviceWhereUniqueInput;
    create: XOR<
      DeviceCreateWithoutUserInput,
      DeviceUncheckedCreateWithoutUserInput
    >;
  };

  export type DeviceCreateManyUserInputEnvelope = {
    data: DeviceCreateManyUserInput | DeviceCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type PushSubscriptionCreateWithoutUserInput = {
    id?: string;
    endpoint: string;
    p256dh: string;
    auth: string;
    createdAt?: Date | string;
  };

  export type PushSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string;
    endpoint: string;
    p256dh: string;
    auth: string;
    createdAt?: Date | string;
  };

  export type PushSubscriptionCreateOrConnectWithoutUserInput = {
    where: PushSubscriptionWhereUniqueInput;
    create: XOR<
      PushSubscriptionCreateWithoutUserInput,
      PushSubscriptionUncheckedCreateWithoutUserInput
    >;
  };

  export type PushSubscriptionCreateManyUserInputEnvelope = {
    data:
      | PushSubscriptionCreateManyUserInput
      | PushSubscriptionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type PlantUpsertWithWhereUniqueWithoutUserInput = {
    where: PlantWhereUniqueInput;
    update: XOR<
      PlantUpdateWithoutUserInput,
      PlantUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      PlantCreateWithoutUserInput,
      PlantUncheckedCreateWithoutUserInput
    >;
  };

  export type PlantUpdateWithWhereUniqueWithoutUserInput = {
    where: PlantWhereUniqueInput;
    data: XOR<
      PlantUpdateWithoutUserInput,
      PlantUncheckedUpdateWithoutUserInput
    >;
  };

  export type PlantUpdateManyWithWhereWithoutUserInput = {
    where: PlantScalarWhereInput;
    data: XOR<
      PlantUpdateManyMutationInput,
      PlantUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type PlantScalarWhereInput = {
    AND?: PlantScalarWhereInput | PlantScalarWhereInput[];
    OR?: PlantScalarWhereInput[];
    NOT?: PlantScalarWhereInput | PlantScalarWhereInput[];
    id?: StringFilter<"Plant"> | string;
    name?: StringFilter<"Plant"> | string;
    species?: StringNullableFilter<"Plant"> | string | null;
    location?: StringNullableFilter<"Plant"> | string | null;
    minMoistureThreshold?: FloatFilter<"Plant"> | number;
    targetMoistureLevel?: FloatFilter<"Plant"> | number;
    userId?: StringFilter<"Plant"> | string;
    deviceId?: StringNullableFilter<"Plant"> | string | null;
    createdAt?: DateTimeFilter<"Plant"> | Date | string;
    updatedAt?: DateTimeFilter<"Plant"> | Date | string;
  };

  export type DeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput;
    update: XOR<
      DeviceUpdateWithoutUserInput,
      DeviceUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      DeviceCreateWithoutUserInput,
      DeviceUncheckedCreateWithoutUserInput
    >;
  };

  export type DeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput;
    data: XOR<
      DeviceUpdateWithoutUserInput,
      DeviceUncheckedUpdateWithoutUserInput
    >;
  };

  export type DeviceUpdateManyWithWhereWithoutUserInput = {
    where: DeviceScalarWhereInput;
    data: XOR<
      DeviceUpdateManyMutationInput,
      DeviceUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[];
    OR?: DeviceScalarWhereInput[];
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[];
    id?: StringFilter<"Device"> | string;
    token?: StringFilter<"Device"> | string;
    name?: StringFilter<"Device"> | string;
    macAddress?: StringNullableFilter<"Device"> | string | null;
    lastBatteryLevel?: FloatNullableFilter<"Device"> | number | null;
    lastSeenAt?: DateTimeNullableFilter<"Device"> | Date | string | null;
    userId?: StringFilter<"Device"> | string;
    createdAt?: DateTimeFilter<"Device"> | Date | string;
    updatedAt?: DateTimeFilter<"Device"> | Date | string;
  };

  export type PushSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: PushSubscriptionWhereUniqueInput;
    update: XOR<
      PushSubscriptionUpdateWithoutUserInput,
      PushSubscriptionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      PushSubscriptionCreateWithoutUserInput,
      PushSubscriptionUncheckedCreateWithoutUserInput
    >;
  };

  export type PushSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: PushSubscriptionWhereUniqueInput;
    data: XOR<
      PushSubscriptionUpdateWithoutUserInput,
      PushSubscriptionUncheckedUpdateWithoutUserInput
    >;
  };

  export type PushSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: PushSubscriptionScalarWhereInput;
    data: XOR<
      PushSubscriptionUpdateManyMutationInput,
      PushSubscriptionUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type PushSubscriptionScalarWhereInput = {
    AND?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[];
    OR?: PushSubscriptionScalarWhereInput[];
    NOT?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[];
    id?: StringFilter<"PushSubscription"> | string;
    userId?: StringFilter<"PushSubscription"> | string;
    endpoint?: StringFilter<"PushSubscription"> | string;
    p256dh?: StringFilter<"PushSubscription"> | string;
    auth?: StringFilter<"PushSubscription"> | string;
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string;
  };

  export type UserCreateWithoutDevicesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    plants?: PlantCreateNestedManyWithoutUserInput;
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutDevicesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    plants?: PlantUncheckedCreateNestedManyWithoutUserInput;
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutDevicesInput,
      UserUncheckedCreateWithoutDevicesInput
    >;
  };

  export type PlantCreateWithoutDeviceInput = {
    id?: string;
    name: string;
    species?: string | null;
    location?: string | null;
    minMoistureThreshold?: number;
    targetMoistureLevel?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutPlantsInput;
    readings?: MoistureReadingCreateNestedManyWithoutPlantInput;
    waterings?: WateringLogCreateNestedManyWithoutPlantInput;
    notifications?: NotificationLogCreateNestedManyWithoutPlantInput;
  };

  export type PlantUncheckedCreateWithoutDeviceInput = {
    id?: string;
    name: string;
    species?: string | null;
    location?: string | null;
    minMoistureThreshold?: number;
    targetMoistureLevel?: number;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    readings?: MoistureReadingUncheckedCreateNestedManyWithoutPlantInput;
    waterings?: WateringLogUncheckedCreateNestedManyWithoutPlantInput;
    notifications?: NotificationLogUncheckedCreateNestedManyWithoutPlantInput;
  };

  export type PlantCreateOrConnectWithoutDeviceInput = {
    where: PlantWhereUniqueInput;
    create: XOR<
      PlantCreateWithoutDeviceInput,
      PlantUncheckedCreateWithoutDeviceInput
    >;
  };

  export type MoistureReadingCreateWithoutDeviceInput = {
    id?: string;
    moisture: number;
    battery: number;
    createdAt?: Date | string;
    plant?: PlantCreateNestedOneWithoutReadingsInput;
  };

  export type MoistureReadingUncheckedCreateWithoutDeviceInput = {
    id?: string;
    moisture: number;
    battery: number;
    plantId?: string | null;
    createdAt?: Date | string;
  };

  export type MoistureReadingCreateOrConnectWithoutDeviceInput = {
    where: MoistureReadingWhereUniqueInput;
    create: XOR<
      MoistureReadingCreateWithoutDeviceInput,
      MoistureReadingUncheckedCreateWithoutDeviceInput
    >;
  };

  export type MoistureReadingCreateManyDeviceInputEnvelope = {
    data:
      | MoistureReadingCreateManyDeviceInput
      | MoistureReadingCreateManyDeviceInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutDevicesInput = {
    update: XOR<
      UserUpdateWithoutDevicesInput,
      UserUncheckedUpdateWithoutDevicesInput
    >;
    create: XOR<
      UserCreateWithoutDevicesInput,
      UserUncheckedCreateWithoutDevicesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutDevicesInput,
      UserUncheckedUpdateWithoutDevicesInput
    >;
  };

  export type UserUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    plants?: PlantUpdateManyWithoutUserNestedInput;
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    plants?: PlantUncheckedUpdateManyWithoutUserNestedInput;
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type PlantUpsertWithoutDeviceInput = {
    update: XOR<
      PlantUpdateWithoutDeviceInput,
      PlantUncheckedUpdateWithoutDeviceInput
    >;
    create: XOR<
      PlantCreateWithoutDeviceInput,
      PlantUncheckedCreateWithoutDeviceInput
    >;
    where?: PlantWhereInput;
  };

  export type PlantUpdateToOneWithWhereWithoutDeviceInput = {
    where?: PlantWhereInput;
    data: XOR<
      PlantUpdateWithoutDeviceInput,
      PlantUncheckedUpdateWithoutDeviceInput
    >;
  };

  export type PlantUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    species?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    minMoistureThreshold?: FloatFieldUpdateOperationsInput | number;
    targetMoistureLevel?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPlantsNestedInput;
    readings?: MoistureReadingUpdateManyWithoutPlantNestedInput;
    waterings?: WateringLogUpdateManyWithoutPlantNestedInput;
    notifications?: NotificationLogUpdateManyWithoutPlantNestedInput;
  };

  export type PlantUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    species?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    minMoistureThreshold?: FloatFieldUpdateOperationsInput | number;
    targetMoistureLevel?: FloatFieldUpdateOperationsInput | number;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    readings?: MoistureReadingUncheckedUpdateManyWithoutPlantNestedInput;
    waterings?: WateringLogUncheckedUpdateManyWithoutPlantNestedInput;
    notifications?: NotificationLogUncheckedUpdateManyWithoutPlantNestedInput;
  };

  export type MoistureReadingUpsertWithWhereUniqueWithoutDeviceInput = {
    where: MoistureReadingWhereUniqueInput;
    update: XOR<
      MoistureReadingUpdateWithoutDeviceInput,
      MoistureReadingUncheckedUpdateWithoutDeviceInput
    >;
    create: XOR<
      MoistureReadingCreateWithoutDeviceInput,
      MoistureReadingUncheckedCreateWithoutDeviceInput
    >;
  };

  export type MoistureReadingUpdateWithWhereUniqueWithoutDeviceInput = {
    where: MoistureReadingWhereUniqueInput;
    data: XOR<
      MoistureReadingUpdateWithoutDeviceInput,
      MoistureReadingUncheckedUpdateWithoutDeviceInput
    >;
  };

  export type MoistureReadingUpdateManyWithWhereWithoutDeviceInput = {
    where: MoistureReadingScalarWhereInput;
    data: XOR<
      MoistureReadingUpdateManyMutationInput,
      MoistureReadingUncheckedUpdateManyWithoutDeviceInput
    >;
  };

  export type MoistureReadingScalarWhereInput = {
    AND?: MoistureReadingScalarWhereInput | MoistureReadingScalarWhereInput[];
    OR?: MoistureReadingScalarWhereInput[];
    NOT?: MoistureReadingScalarWhereInput | MoistureReadingScalarWhereInput[];
    id?: StringFilter<"MoistureReading"> | string;
    moisture?: FloatFilter<"MoistureReading"> | number;
    battery?: FloatFilter<"MoistureReading"> | number;
    deviceId?: StringFilter<"MoistureReading"> | string;
    plantId?: StringNullableFilter<"MoistureReading"> | string | null;
    createdAt?: DateTimeFilter<"MoistureReading"> | Date | string;
  };

  export type UserCreateWithoutPlantsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    devices?: DeviceCreateNestedManyWithoutUserInput;
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPlantsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput;
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPlantsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPlantsInput,
      UserUncheckedCreateWithoutPlantsInput
    >;
  };

  export type DeviceCreateWithoutPlantInput = {
    id?: string;
    token?: string;
    name: string;
    macAddress?: string | null;
    lastBatteryLevel?: number | null;
    lastSeenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutDevicesInput;
    readings?: MoistureReadingCreateNestedManyWithoutDeviceInput;
  };

  export type DeviceUncheckedCreateWithoutPlantInput = {
    id?: string;
    token?: string;
    name: string;
    macAddress?: string | null;
    lastBatteryLevel?: number | null;
    lastSeenAt?: Date | string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    readings?: MoistureReadingUncheckedCreateNestedManyWithoutDeviceInput;
  };

  export type DeviceCreateOrConnectWithoutPlantInput = {
    where: DeviceWhereUniqueInput;
    create: XOR<
      DeviceCreateWithoutPlantInput,
      DeviceUncheckedCreateWithoutPlantInput
    >;
  };

  export type MoistureReadingCreateWithoutPlantInput = {
    id?: string;
    moisture: number;
    battery: number;
    createdAt?: Date | string;
    device: DeviceCreateNestedOneWithoutReadingsInput;
  };

  export type MoistureReadingUncheckedCreateWithoutPlantInput = {
    id?: string;
    moisture: number;
    battery: number;
    deviceId: string;
    createdAt?: Date | string;
  };

  export type MoistureReadingCreateOrConnectWithoutPlantInput = {
    where: MoistureReadingWhereUniqueInput;
    create: XOR<
      MoistureReadingCreateWithoutPlantInput,
      MoistureReadingUncheckedCreateWithoutPlantInput
    >;
  };

  export type MoistureReadingCreateManyPlantInputEnvelope = {
    data:
      | MoistureReadingCreateManyPlantInput
      | MoistureReadingCreateManyPlantInput[];
    skipDuplicates?: boolean;
  };

  export type WateringLogCreateWithoutPlantInput = {
    id?: string;
    moistureBefore?: number | null;
    moistureAfter?: number | null;
    detectedAutomatically?: boolean;
    note?: string | null;
    createdAt?: Date | string;
  };

  export type WateringLogUncheckedCreateWithoutPlantInput = {
    id?: string;
    moistureBefore?: number | null;
    moistureAfter?: number | null;
    detectedAutomatically?: boolean;
    note?: string | null;
    createdAt?: Date | string;
  };

  export type WateringLogCreateOrConnectWithoutPlantInput = {
    where: WateringLogWhereUniqueInput;
    create: XOR<
      WateringLogCreateWithoutPlantInput,
      WateringLogUncheckedCreateWithoutPlantInput
    >;
  };

  export type WateringLogCreateManyPlantInputEnvelope = {
    data: WateringLogCreateManyPlantInput | WateringLogCreateManyPlantInput[];
    skipDuplicates?: boolean;
  };

  export type NotificationLogCreateWithoutPlantInput = {
    id?: string;
    type: string;
    sentAt?: Date | string;
  };

  export type NotificationLogUncheckedCreateWithoutPlantInput = {
    id?: string;
    type: string;
    sentAt?: Date | string;
  };

  export type NotificationLogCreateOrConnectWithoutPlantInput = {
    where: NotificationLogWhereUniqueInput;
    create: XOR<
      NotificationLogCreateWithoutPlantInput,
      NotificationLogUncheckedCreateWithoutPlantInput
    >;
  };

  export type NotificationLogCreateManyPlantInputEnvelope = {
    data:
      | NotificationLogCreateManyPlantInput
      | NotificationLogCreateManyPlantInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutPlantsInput = {
    update: XOR<
      UserUpdateWithoutPlantsInput,
      UserUncheckedUpdateWithoutPlantsInput
    >;
    create: XOR<
      UserCreateWithoutPlantsInput,
      UserUncheckedCreateWithoutPlantsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPlantsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPlantsInput,
      UserUncheckedUpdateWithoutPlantsInput
    >;
  };

  export type UserUpdateWithoutPlantsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    devices?: DeviceUpdateManyWithoutUserNestedInput;
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPlantsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput;
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type DeviceUpsertWithoutPlantInput = {
    update: XOR<
      DeviceUpdateWithoutPlantInput,
      DeviceUncheckedUpdateWithoutPlantInput
    >;
    create: XOR<
      DeviceCreateWithoutPlantInput,
      DeviceUncheckedCreateWithoutPlantInput
    >;
    where?: DeviceWhereInput;
  };

  export type DeviceUpdateToOneWithWhereWithoutPlantInput = {
    where?: DeviceWhereInput;
    data: XOR<
      DeviceUpdateWithoutPlantInput,
      DeviceUncheckedUpdateWithoutPlantInput
    >;
  };

  export type DeviceUpdateWithoutPlantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    lastBatteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null;
    lastSeenAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput;
    readings?: MoistureReadingUpdateManyWithoutDeviceNestedInput;
  };

  export type DeviceUncheckedUpdateWithoutPlantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    lastBatteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null;
    lastSeenAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    readings?: MoistureReadingUncheckedUpdateManyWithoutDeviceNestedInput;
  };

  export type MoistureReadingUpsertWithWhereUniqueWithoutPlantInput = {
    where: MoistureReadingWhereUniqueInput;
    update: XOR<
      MoistureReadingUpdateWithoutPlantInput,
      MoistureReadingUncheckedUpdateWithoutPlantInput
    >;
    create: XOR<
      MoistureReadingCreateWithoutPlantInput,
      MoistureReadingUncheckedCreateWithoutPlantInput
    >;
  };

  export type MoistureReadingUpdateWithWhereUniqueWithoutPlantInput = {
    where: MoistureReadingWhereUniqueInput;
    data: XOR<
      MoistureReadingUpdateWithoutPlantInput,
      MoistureReadingUncheckedUpdateWithoutPlantInput
    >;
  };

  export type MoistureReadingUpdateManyWithWhereWithoutPlantInput = {
    where: MoistureReadingScalarWhereInput;
    data: XOR<
      MoistureReadingUpdateManyMutationInput,
      MoistureReadingUncheckedUpdateManyWithoutPlantInput
    >;
  };

  export type WateringLogUpsertWithWhereUniqueWithoutPlantInput = {
    where: WateringLogWhereUniqueInput;
    update: XOR<
      WateringLogUpdateWithoutPlantInput,
      WateringLogUncheckedUpdateWithoutPlantInput
    >;
    create: XOR<
      WateringLogCreateWithoutPlantInput,
      WateringLogUncheckedCreateWithoutPlantInput
    >;
  };

  export type WateringLogUpdateWithWhereUniqueWithoutPlantInput = {
    where: WateringLogWhereUniqueInput;
    data: XOR<
      WateringLogUpdateWithoutPlantInput,
      WateringLogUncheckedUpdateWithoutPlantInput
    >;
  };

  export type WateringLogUpdateManyWithWhereWithoutPlantInput = {
    where: WateringLogScalarWhereInput;
    data: XOR<
      WateringLogUpdateManyMutationInput,
      WateringLogUncheckedUpdateManyWithoutPlantInput
    >;
  };

  export type WateringLogScalarWhereInput = {
    AND?: WateringLogScalarWhereInput | WateringLogScalarWhereInput[];
    OR?: WateringLogScalarWhereInput[];
    NOT?: WateringLogScalarWhereInput | WateringLogScalarWhereInput[];
    id?: StringFilter<"WateringLog"> | string;
    plantId?: StringFilter<"WateringLog"> | string;
    moistureBefore?: FloatNullableFilter<"WateringLog"> | number | null;
    moistureAfter?: FloatNullableFilter<"WateringLog"> | number | null;
    detectedAutomatically?: BoolFilter<"WateringLog"> | boolean;
    note?: StringNullableFilter<"WateringLog"> | string | null;
    createdAt?: DateTimeFilter<"WateringLog"> | Date | string;
  };

  export type NotificationLogUpsertWithWhereUniqueWithoutPlantInput = {
    where: NotificationLogWhereUniqueInput;
    update: XOR<
      NotificationLogUpdateWithoutPlantInput,
      NotificationLogUncheckedUpdateWithoutPlantInput
    >;
    create: XOR<
      NotificationLogCreateWithoutPlantInput,
      NotificationLogUncheckedCreateWithoutPlantInput
    >;
  };

  export type NotificationLogUpdateWithWhereUniqueWithoutPlantInput = {
    where: NotificationLogWhereUniqueInput;
    data: XOR<
      NotificationLogUpdateWithoutPlantInput,
      NotificationLogUncheckedUpdateWithoutPlantInput
    >;
  };

  export type NotificationLogUpdateManyWithWhereWithoutPlantInput = {
    where: NotificationLogScalarWhereInput;
    data: XOR<
      NotificationLogUpdateManyMutationInput,
      NotificationLogUncheckedUpdateManyWithoutPlantInput
    >;
  };

  export type NotificationLogScalarWhereInput = {
    AND?: NotificationLogScalarWhereInput | NotificationLogScalarWhereInput[];
    OR?: NotificationLogScalarWhereInput[];
    NOT?: NotificationLogScalarWhereInput | NotificationLogScalarWhereInput[];
    id?: StringFilter<"NotificationLog"> | string;
    plantId?: StringFilter<"NotificationLog"> | string;
    type?: StringFilter<"NotificationLog"> | string;
    sentAt?: DateTimeFilter<"NotificationLog"> | Date | string;
  };

  export type DeviceCreateWithoutReadingsInput = {
    id?: string;
    token?: string;
    name: string;
    macAddress?: string | null;
    lastBatteryLevel?: number | null;
    lastSeenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutDevicesInput;
    plant?: PlantCreateNestedOneWithoutDeviceInput;
  };

  export type DeviceUncheckedCreateWithoutReadingsInput = {
    id?: string;
    token?: string;
    name: string;
    macAddress?: string | null;
    lastBatteryLevel?: number | null;
    lastSeenAt?: Date | string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    plant?: PlantUncheckedCreateNestedOneWithoutDeviceInput;
  };

  export type DeviceCreateOrConnectWithoutReadingsInput = {
    where: DeviceWhereUniqueInput;
    create: XOR<
      DeviceCreateWithoutReadingsInput,
      DeviceUncheckedCreateWithoutReadingsInput
    >;
  };

  export type PlantCreateWithoutReadingsInput = {
    id?: string;
    name: string;
    species?: string | null;
    location?: string | null;
    minMoistureThreshold?: number;
    targetMoistureLevel?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutPlantsInput;
    device?: DeviceCreateNestedOneWithoutPlantInput;
    waterings?: WateringLogCreateNestedManyWithoutPlantInput;
    notifications?: NotificationLogCreateNestedManyWithoutPlantInput;
  };

  export type PlantUncheckedCreateWithoutReadingsInput = {
    id?: string;
    name: string;
    species?: string | null;
    location?: string | null;
    minMoistureThreshold?: number;
    targetMoistureLevel?: number;
    userId: string;
    deviceId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    waterings?: WateringLogUncheckedCreateNestedManyWithoutPlantInput;
    notifications?: NotificationLogUncheckedCreateNestedManyWithoutPlantInput;
  };

  export type PlantCreateOrConnectWithoutReadingsInput = {
    where: PlantWhereUniqueInput;
    create: XOR<
      PlantCreateWithoutReadingsInput,
      PlantUncheckedCreateWithoutReadingsInput
    >;
  };

  export type DeviceUpsertWithoutReadingsInput = {
    update: XOR<
      DeviceUpdateWithoutReadingsInput,
      DeviceUncheckedUpdateWithoutReadingsInput
    >;
    create: XOR<
      DeviceCreateWithoutReadingsInput,
      DeviceUncheckedCreateWithoutReadingsInput
    >;
    where?: DeviceWhereInput;
  };

  export type DeviceUpdateToOneWithWhereWithoutReadingsInput = {
    where?: DeviceWhereInput;
    data: XOR<
      DeviceUpdateWithoutReadingsInput,
      DeviceUncheckedUpdateWithoutReadingsInput
    >;
  };

  export type DeviceUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    lastBatteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null;
    lastSeenAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput;
    plant?: PlantUpdateOneWithoutDeviceNestedInput;
  };

  export type DeviceUncheckedUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    lastBatteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null;
    lastSeenAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    plant?: PlantUncheckedUpdateOneWithoutDeviceNestedInput;
  };

  export type PlantUpsertWithoutReadingsInput = {
    update: XOR<
      PlantUpdateWithoutReadingsInput,
      PlantUncheckedUpdateWithoutReadingsInput
    >;
    create: XOR<
      PlantCreateWithoutReadingsInput,
      PlantUncheckedCreateWithoutReadingsInput
    >;
    where?: PlantWhereInput;
  };

  export type PlantUpdateToOneWithWhereWithoutReadingsInput = {
    where?: PlantWhereInput;
    data: XOR<
      PlantUpdateWithoutReadingsInput,
      PlantUncheckedUpdateWithoutReadingsInput
    >;
  };

  export type PlantUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    species?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    minMoistureThreshold?: FloatFieldUpdateOperationsInput | number;
    targetMoistureLevel?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPlantsNestedInput;
    device?: DeviceUpdateOneWithoutPlantNestedInput;
    waterings?: WateringLogUpdateManyWithoutPlantNestedInput;
    notifications?: NotificationLogUpdateManyWithoutPlantNestedInput;
  };

  export type PlantUncheckedUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    species?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    minMoistureThreshold?: FloatFieldUpdateOperationsInput | number;
    targetMoistureLevel?: FloatFieldUpdateOperationsInput | number;
    userId?: StringFieldUpdateOperationsInput | string;
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    waterings?: WateringLogUncheckedUpdateManyWithoutPlantNestedInput;
    notifications?: NotificationLogUncheckedUpdateManyWithoutPlantNestedInput;
  };

  export type PlantCreateWithoutWateringsInput = {
    id?: string;
    name: string;
    species?: string | null;
    location?: string | null;
    minMoistureThreshold?: number;
    targetMoistureLevel?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutPlantsInput;
    device?: DeviceCreateNestedOneWithoutPlantInput;
    readings?: MoistureReadingCreateNestedManyWithoutPlantInput;
    notifications?: NotificationLogCreateNestedManyWithoutPlantInput;
  };

  export type PlantUncheckedCreateWithoutWateringsInput = {
    id?: string;
    name: string;
    species?: string | null;
    location?: string | null;
    minMoistureThreshold?: number;
    targetMoistureLevel?: number;
    userId: string;
    deviceId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    readings?: MoistureReadingUncheckedCreateNestedManyWithoutPlantInput;
    notifications?: NotificationLogUncheckedCreateNestedManyWithoutPlantInput;
  };

  export type PlantCreateOrConnectWithoutWateringsInput = {
    where: PlantWhereUniqueInput;
    create: XOR<
      PlantCreateWithoutWateringsInput,
      PlantUncheckedCreateWithoutWateringsInput
    >;
  };

  export type PlantUpsertWithoutWateringsInput = {
    update: XOR<
      PlantUpdateWithoutWateringsInput,
      PlantUncheckedUpdateWithoutWateringsInput
    >;
    create: XOR<
      PlantCreateWithoutWateringsInput,
      PlantUncheckedCreateWithoutWateringsInput
    >;
    where?: PlantWhereInput;
  };

  export type PlantUpdateToOneWithWhereWithoutWateringsInput = {
    where?: PlantWhereInput;
    data: XOR<
      PlantUpdateWithoutWateringsInput,
      PlantUncheckedUpdateWithoutWateringsInput
    >;
  };

  export type PlantUpdateWithoutWateringsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    species?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    minMoistureThreshold?: FloatFieldUpdateOperationsInput | number;
    targetMoistureLevel?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPlantsNestedInput;
    device?: DeviceUpdateOneWithoutPlantNestedInput;
    readings?: MoistureReadingUpdateManyWithoutPlantNestedInput;
    notifications?: NotificationLogUpdateManyWithoutPlantNestedInput;
  };

  export type PlantUncheckedUpdateWithoutWateringsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    species?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    minMoistureThreshold?: FloatFieldUpdateOperationsInput | number;
    targetMoistureLevel?: FloatFieldUpdateOperationsInput | number;
    userId?: StringFieldUpdateOperationsInput | string;
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    readings?: MoistureReadingUncheckedUpdateManyWithoutPlantNestedInput;
    notifications?: NotificationLogUncheckedUpdateManyWithoutPlantNestedInput;
  };

  export type UserCreateWithoutPushSubscriptionsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    plants?: PlantCreateNestedManyWithoutUserInput;
    devices?: DeviceCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPushSubscriptionsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    plants?: PlantUncheckedCreateNestedManyWithoutUserInput;
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPushSubscriptionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPushSubscriptionsInput,
      UserUncheckedCreateWithoutPushSubscriptionsInput
    >;
  };

  export type UserUpsertWithoutPushSubscriptionsInput = {
    update: XOR<
      UserUpdateWithoutPushSubscriptionsInput,
      UserUncheckedUpdateWithoutPushSubscriptionsInput
    >;
    create: XOR<
      UserCreateWithoutPushSubscriptionsInput,
      UserUncheckedCreateWithoutPushSubscriptionsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPushSubscriptionsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPushSubscriptionsInput,
      UserUncheckedUpdateWithoutPushSubscriptionsInput
    >;
  };

  export type UserUpdateWithoutPushSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    plants?: PlantUpdateManyWithoutUserNestedInput;
    devices?: DeviceUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPushSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    plants?: PlantUncheckedUpdateManyWithoutUserNestedInput;
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type PlantCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    species?: string | null;
    location?: string | null;
    minMoistureThreshold?: number;
    targetMoistureLevel?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutPlantsInput;
    device?: DeviceCreateNestedOneWithoutPlantInput;
    readings?: MoistureReadingCreateNestedManyWithoutPlantInput;
    waterings?: WateringLogCreateNestedManyWithoutPlantInput;
  };

  export type PlantUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    species?: string | null;
    location?: string | null;
    minMoistureThreshold?: number;
    targetMoistureLevel?: number;
    userId: string;
    deviceId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    readings?: MoistureReadingUncheckedCreateNestedManyWithoutPlantInput;
    waterings?: WateringLogUncheckedCreateNestedManyWithoutPlantInput;
  };

  export type PlantCreateOrConnectWithoutNotificationsInput = {
    where: PlantWhereUniqueInput;
    create: XOR<
      PlantCreateWithoutNotificationsInput,
      PlantUncheckedCreateWithoutNotificationsInput
    >;
  };

  export type PlantUpsertWithoutNotificationsInput = {
    update: XOR<
      PlantUpdateWithoutNotificationsInput,
      PlantUncheckedUpdateWithoutNotificationsInput
    >;
    create: XOR<
      PlantCreateWithoutNotificationsInput,
      PlantUncheckedCreateWithoutNotificationsInput
    >;
    where?: PlantWhereInput;
  };

  export type PlantUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: PlantWhereInput;
    data: XOR<
      PlantUpdateWithoutNotificationsInput,
      PlantUncheckedUpdateWithoutNotificationsInput
    >;
  };

  export type PlantUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    species?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    minMoistureThreshold?: FloatFieldUpdateOperationsInput | number;
    targetMoistureLevel?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPlantsNestedInput;
    device?: DeviceUpdateOneWithoutPlantNestedInput;
    readings?: MoistureReadingUpdateManyWithoutPlantNestedInput;
    waterings?: WateringLogUpdateManyWithoutPlantNestedInput;
  };

  export type PlantUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    species?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    minMoistureThreshold?: FloatFieldUpdateOperationsInput | number;
    targetMoistureLevel?: FloatFieldUpdateOperationsInput | number;
    userId?: StringFieldUpdateOperationsInput | string;
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    readings?: MoistureReadingUncheckedUpdateManyWithoutPlantNestedInput;
    waterings?: WateringLogUncheckedUpdateManyWithoutPlantNestedInput;
  };

  export type PlantCreateManyUserInput = {
    id?: string;
    name: string;
    species?: string | null;
    location?: string | null;
    minMoistureThreshold?: number;
    targetMoistureLevel?: number;
    deviceId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type DeviceCreateManyUserInput = {
    id?: string;
    token?: string;
    name: string;
    macAddress?: string | null;
    lastBatteryLevel?: number | null;
    lastSeenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PushSubscriptionCreateManyUserInput = {
    id?: string;
    endpoint: string;
    p256dh: string;
    auth: string;
    createdAt?: Date | string;
  };

  export type PlantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    species?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    minMoistureThreshold?: FloatFieldUpdateOperationsInput | number;
    targetMoistureLevel?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    device?: DeviceUpdateOneWithoutPlantNestedInput;
    readings?: MoistureReadingUpdateManyWithoutPlantNestedInput;
    waterings?: WateringLogUpdateManyWithoutPlantNestedInput;
    notifications?: NotificationLogUpdateManyWithoutPlantNestedInput;
  };

  export type PlantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    species?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    minMoistureThreshold?: FloatFieldUpdateOperationsInput | number;
    targetMoistureLevel?: FloatFieldUpdateOperationsInput | number;
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    readings?: MoistureReadingUncheckedUpdateManyWithoutPlantNestedInput;
    waterings?: WateringLogUncheckedUpdateManyWithoutPlantNestedInput;
    notifications?: NotificationLogUncheckedUpdateManyWithoutPlantNestedInput;
  };

  export type PlantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    species?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    minMoistureThreshold?: FloatFieldUpdateOperationsInput | number;
    targetMoistureLevel?: FloatFieldUpdateOperationsInput | number;
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DeviceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    lastBatteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null;
    lastSeenAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    plant?: PlantUpdateOneWithoutDeviceNestedInput;
    readings?: MoistureReadingUpdateManyWithoutDeviceNestedInput;
  };

  export type DeviceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    lastBatteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null;
    lastSeenAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    plant?: PlantUncheckedUpdateOneWithoutDeviceNestedInput;
    readings?: MoistureReadingUncheckedUpdateManyWithoutDeviceNestedInput;
  };

  export type DeviceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    lastBatteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null;
    lastSeenAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PushSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    endpoint?: StringFieldUpdateOperationsInput | string;
    p256dh?: StringFieldUpdateOperationsInput | string;
    auth?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PushSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    endpoint?: StringFieldUpdateOperationsInput | string;
    p256dh?: StringFieldUpdateOperationsInput | string;
    auth?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PushSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    endpoint?: StringFieldUpdateOperationsInput | string;
    p256dh?: StringFieldUpdateOperationsInput | string;
    auth?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MoistureReadingCreateManyDeviceInput = {
    id?: string;
    moisture: number;
    battery: number;
    plantId?: string | null;
    createdAt?: Date | string;
  };

  export type MoistureReadingUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    moisture?: FloatFieldUpdateOperationsInput | number;
    battery?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    plant?: PlantUpdateOneWithoutReadingsNestedInput;
  };

  export type MoistureReadingUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    moisture?: FloatFieldUpdateOperationsInput | number;
    battery?: FloatFieldUpdateOperationsInput | number;
    plantId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MoistureReadingUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    moisture?: FloatFieldUpdateOperationsInput | number;
    battery?: FloatFieldUpdateOperationsInput | number;
    plantId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MoistureReadingCreateManyPlantInput = {
    id?: string;
    moisture: number;
    battery: number;
    deviceId: string;
    createdAt?: Date | string;
  };

  export type WateringLogCreateManyPlantInput = {
    id?: string;
    moistureBefore?: number | null;
    moistureAfter?: number | null;
    detectedAutomatically?: boolean;
    note?: string | null;
    createdAt?: Date | string;
  };

  export type NotificationLogCreateManyPlantInput = {
    id?: string;
    type: string;
    sentAt?: Date | string;
  };

  export type MoistureReadingUpdateWithoutPlantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    moisture?: FloatFieldUpdateOperationsInput | number;
    battery?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    device?: DeviceUpdateOneRequiredWithoutReadingsNestedInput;
  };

  export type MoistureReadingUncheckedUpdateWithoutPlantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    moisture?: FloatFieldUpdateOperationsInput | number;
    battery?: FloatFieldUpdateOperationsInput | number;
    deviceId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MoistureReadingUncheckedUpdateManyWithoutPlantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    moisture?: FloatFieldUpdateOperationsInput | number;
    battery?: FloatFieldUpdateOperationsInput | number;
    deviceId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WateringLogUpdateWithoutPlantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    moistureBefore?: NullableFloatFieldUpdateOperationsInput | number | null;
    moistureAfter?: NullableFloatFieldUpdateOperationsInput | number | null;
    detectedAutomatically?: BoolFieldUpdateOperationsInput | boolean;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WateringLogUncheckedUpdateWithoutPlantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    moistureBefore?: NullableFloatFieldUpdateOperationsInput | number | null;
    moistureAfter?: NullableFloatFieldUpdateOperationsInput | number | null;
    detectedAutomatically?: BoolFieldUpdateOperationsInput | boolean;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WateringLogUncheckedUpdateManyWithoutPlantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    moistureBefore?: NullableFloatFieldUpdateOperationsInput | number | null;
    moistureAfter?: NullableFloatFieldUpdateOperationsInput | number | null;
    detectedAutomatically?: BoolFieldUpdateOperationsInput | boolean;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationLogUpdateWithoutPlantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationLogUncheckedUpdateWithoutPlantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationLogUncheckedUpdateManyWithoutPlantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
