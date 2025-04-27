
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Batter
 * 
 */
export type Batter = $Result.DefaultSelection<Prisma.$BatterPayload>
/**
 * Model Bowler
 * 
 */
export type Bowler = $Result.DefaultSelection<Prisma.$BowlerPayload>
/**
 * Model Allrounders
 * 
 */
export type Allrounders = $Result.DefaultSelection<Prisma.$AllroundersPayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batter`: Exposes CRUD operations for the **Batter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Batters
    * const batters = await prisma.batter.findMany()
    * ```
    */
  get batter(): Prisma.BatterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bowler`: Exposes CRUD operations for the **Bowler** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bowlers
    * const bowlers = await prisma.bowler.findMany()
    * ```
    */
  get bowler(): Prisma.BowlerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.allrounders`: Exposes CRUD operations for the **Allrounders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Allrounders
    * const allrounders = await prisma.allrounders.findMany()
    * ```
    */
  get allrounders(): Prisma.AllroundersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Admin: 'Admin',
    Batter: 'Batter',
    Bowler: 'Bowler',
    Allrounders: 'Allrounders'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "admin" | "batter" | "bowler" | "allrounders"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Batter: {
        payload: Prisma.$BatterPayload<ExtArgs>
        fields: Prisma.BatterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatterPayload>
          }
          findFirst: {
            args: Prisma.BatterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatterPayload>
          }
          findMany: {
            args: Prisma.BatterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatterPayload>[]
          }
          create: {
            args: Prisma.BatterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatterPayload>
          }
          createMany: {
            args: Prisma.BatterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BatterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatterPayload>[]
          }
          delete: {
            args: Prisma.BatterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatterPayload>
          }
          update: {
            args: Prisma.BatterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatterPayload>
          }
          deleteMany: {
            args: Prisma.BatterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BatterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatterPayload>[]
          }
          upsert: {
            args: Prisma.BatterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatterPayload>
          }
          aggregate: {
            args: Prisma.BatterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatter>
          }
          groupBy: {
            args: Prisma.BatterGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatterGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatterCountArgs<ExtArgs>
            result: $Utils.Optional<BatterCountAggregateOutputType> | number
          }
        }
      }
      Bowler: {
        payload: Prisma.$BowlerPayload<ExtArgs>
        fields: Prisma.BowlerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BowlerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BowlerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BowlerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BowlerPayload>
          }
          findFirst: {
            args: Prisma.BowlerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BowlerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BowlerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BowlerPayload>
          }
          findMany: {
            args: Prisma.BowlerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BowlerPayload>[]
          }
          create: {
            args: Prisma.BowlerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BowlerPayload>
          }
          createMany: {
            args: Prisma.BowlerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BowlerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BowlerPayload>[]
          }
          delete: {
            args: Prisma.BowlerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BowlerPayload>
          }
          update: {
            args: Prisma.BowlerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BowlerPayload>
          }
          deleteMany: {
            args: Prisma.BowlerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BowlerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BowlerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BowlerPayload>[]
          }
          upsert: {
            args: Prisma.BowlerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BowlerPayload>
          }
          aggregate: {
            args: Prisma.BowlerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBowler>
          }
          groupBy: {
            args: Prisma.BowlerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BowlerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BowlerCountArgs<ExtArgs>
            result: $Utils.Optional<BowlerCountAggregateOutputType> | number
          }
        }
      }
      Allrounders: {
        payload: Prisma.$AllroundersPayload<ExtArgs>
        fields: Prisma.AllroundersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllroundersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllroundersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllroundersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllroundersPayload>
          }
          findFirst: {
            args: Prisma.AllroundersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllroundersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllroundersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllroundersPayload>
          }
          findMany: {
            args: Prisma.AllroundersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllroundersPayload>[]
          }
          create: {
            args: Prisma.AllroundersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllroundersPayload>
          }
          createMany: {
            args: Prisma.AllroundersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AllroundersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllroundersPayload>[]
          }
          delete: {
            args: Prisma.AllroundersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllroundersPayload>
          }
          update: {
            args: Prisma.AllroundersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllroundersPayload>
          }
          deleteMany: {
            args: Prisma.AllroundersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AllroundersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AllroundersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllroundersPayload>[]
          }
          upsert: {
            args: Prisma.AllroundersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllroundersPayload>
          }
          aggregate: {
            args: Prisma.AllroundersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllrounders>
          }
          groupBy: {
            args: Prisma.AllroundersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllroundersGroupByOutputType>[]
          }
          count: {
            args: Prisma.AllroundersCountArgs<ExtArgs>
            result: $Utils.Optional<AllroundersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    admin?: AdminOmit
    batter?: BatterOmit
    bowler?: BowlerOmit
    allrounders?: AllroundersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Batter
   */

  export type AggregateBatter = {
    _count: BatterCountAggregateOutputType | null
    _avg: BatterAvgAggregateOutputType | null
    _sum: BatterSumAggregateOutputType | null
    _min: BatterMinAggregateOutputType | null
    _max: BatterMaxAggregateOutputType | null
  }

  export type BatterAvgAggregateOutputType = {
    id: number | null
    age: number | null
    matches: number | null
    innings: number | null
    notouts: number | null
    runs: number | null
    heighestscore: number | null
    average: number | null
    ballsfaced: number | null
    strikerate: number | null
    hundreds: number | null
    fifties: number | null
    ducks: number | null
    fours: number | null
    sixes: number | null
  }

  export type BatterSumAggregateOutputType = {
    id: number | null
    age: number | null
    matches: number | null
    innings: number | null
    notouts: number | null
    runs: number | null
    heighestscore: number | null
    average: number | null
    ballsfaced: number | null
    strikerate: number | null
    hundreds: number | null
    fifties: number | null
    ducks: number | null
    fours: number | null
    sixes: number | null
  }

  export type BatterMinAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    nationality: string | null
    image: string | null
    span: string | null
    matches: number | null
    innings: number | null
    notouts: number | null
    runs: number | null
    heighestscore: number | null
    average: number | null
    ballsfaced: number | null
    strikerate: number | null
    hundreds: number | null
    fifties: number | null
    ducks: number | null
    fours: number | null
    sixes: number | null
  }

  export type BatterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    nationality: string | null
    image: string | null
    span: string | null
    matches: number | null
    innings: number | null
    notouts: number | null
    runs: number | null
    heighestscore: number | null
    average: number | null
    ballsfaced: number | null
    strikerate: number | null
    hundreds: number | null
    fifties: number | null
    ducks: number | null
    fours: number | null
    sixes: number | null
  }

  export type BatterCountAggregateOutputType = {
    id: number
    name: number
    age: number
    nationality: number
    image: number
    span: number
    matches: number
    innings: number
    notouts: number
    runs: number
    heighestscore: number
    average: number
    ballsfaced: number
    strikerate: number
    hundreds: number
    fifties: number
    ducks: number
    fours: number
    sixes: number
    _all: number
  }


  export type BatterAvgAggregateInputType = {
    id?: true
    age?: true
    matches?: true
    innings?: true
    notouts?: true
    runs?: true
    heighestscore?: true
    average?: true
    ballsfaced?: true
    strikerate?: true
    hundreds?: true
    fifties?: true
    ducks?: true
    fours?: true
    sixes?: true
  }

  export type BatterSumAggregateInputType = {
    id?: true
    age?: true
    matches?: true
    innings?: true
    notouts?: true
    runs?: true
    heighestscore?: true
    average?: true
    ballsfaced?: true
    strikerate?: true
    hundreds?: true
    fifties?: true
    ducks?: true
    fours?: true
    sixes?: true
  }

  export type BatterMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    nationality?: true
    image?: true
    span?: true
    matches?: true
    innings?: true
    notouts?: true
    runs?: true
    heighestscore?: true
    average?: true
    ballsfaced?: true
    strikerate?: true
    hundreds?: true
    fifties?: true
    ducks?: true
    fours?: true
    sixes?: true
  }

  export type BatterMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    nationality?: true
    image?: true
    span?: true
    matches?: true
    innings?: true
    notouts?: true
    runs?: true
    heighestscore?: true
    average?: true
    ballsfaced?: true
    strikerate?: true
    hundreds?: true
    fifties?: true
    ducks?: true
    fours?: true
    sixes?: true
  }

  export type BatterCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    nationality?: true
    image?: true
    span?: true
    matches?: true
    innings?: true
    notouts?: true
    runs?: true
    heighestscore?: true
    average?: true
    ballsfaced?: true
    strikerate?: true
    hundreds?: true
    fifties?: true
    ducks?: true
    fours?: true
    sixes?: true
    _all?: true
  }

  export type BatterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batter to aggregate.
     */
    where?: BatterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batters to fetch.
     */
    orderBy?: BatterOrderByWithRelationInput | BatterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Batters
    **/
    _count?: true | BatterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BatterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BatterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatterMaxAggregateInputType
  }

  export type GetBatterAggregateType<T extends BatterAggregateArgs> = {
        [P in keyof T & keyof AggregateBatter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatter[P]>
      : GetScalarType<T[P], AggregateBatter[P]>
  }




  export type BatterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatterWhereInput
    orderBy?: BatterOrderByWithAggregationInput | BatterOrderByWithAggregationInput[]
    by: BatterScalarFieldEnum[] | BatterScalarFieldEnum
    having?: BatterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatterCountAggregateInputType | true
    _avg?: BatterAvgAggregateInputType
    _sum?: BatterSumAggregateInputType
    _min?: BatterMinAggregateInputType
    _max?: BatterMaxAggregateInputType
  }

  export type BatterGroupByOutputType = {
    id: number
    name: string
    age: number
    nationality: string
    image: string
    span: string
    matches: number
    innings: number
    notouts: number
    runs: number
    heighestscore: number
    average: number
    ballsfaced: number
    strikerate: number
    hundreds: number
    fifties: number
    ducks: number
    fours: number
    sixes: number
    _count: BatterCountAggregateOutputType | null
    _avg: BatterAvgAggregateOutputType | null
    _sum: BatterSumAggregateOutputType | null
    _min: BatterMinAggregateOutputType | null
    _max: BatterMaxAggregateOutputType | null
  }

  type GetBatterGroupByPayload<T extends BatterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatterGroupByOutputType[P]>
            : GetScalarType<T[P], BatterGroupByOutputType[P]>
        }
      >
    >


  export type BatterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    nationality?: boolean
    image?: boolean
    span?: boolean
    matches?: boolean
    innings?: boolean
    notouts?: boolean
    runs?: boolean
    heighestscore?: boolean
    average?: boolean
    ballsfaced?: boolean
    strikerate?: boolean
    hundreds?: boolean
    fifties?: boolean
    ducks?: boolean
    fours?: boolean
    sixes?: boolean
  }, ExtArgs["result"]["batter"]>

  export type BatterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    nationality?: boolean
    image?: boolean
    span?: boolean
    matches?: boolean
    innings?: boolean
    notouts?: boolean
    runs?: boolean
    heighestscore?: boolean
    average?: boolean
    ballsfaced?: boolean
    strikerate?: boolean
    hundreds?: boolean
    fifties?: boolean
    ducks?: boolean
    fours?: boolean
    sixes?: boolean
  }, ExtArgs["result"]["batter"]>

  export type BatterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    nationality?: boolean
    image?: boolean
    span?: boolean
    matches?: boolean
    innings?: boolean
    notouts?: boolean
    runs?: boolean
    heighestscore?: boolean
    average?: boolean
    ballsfaced?: boolean
    strikerate?: boolean
    hundreds?: boolean
    fifties?: boolean
    ducks?: boolean
    fours?: boolean
    sixes?: boolean
  }, ExtArgs["result"]["batter"]>

  export type BatterSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    nationality?: boolean
    image?: boolean
    span?: boolean
    matches?: boolean
    innings?: boolean
    notouts?: boolean
    runs?: boolean
    heighestscore?: boolean
    average?: boolean
    ballsfaced?: boolean
    strikerate?: boolean
    hundreds?: boolean
    fifties?: boolean
    ducks?: boolean
    fours?: boolean
    sixes?: boolean
  }

  export type BatterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "nationality" | "image" | "span" | "matches" | "innings" | "notouts" | "runs" | "heighestscore" | "average" | "ballsfaced" | "strikerate" | "hundreds" | "fifties" | "ducks" | "fours" | "sixes", ExtArgs["result"]["batter"]>

  export type $BatterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Batter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      age: number
      nationality: string
      image: string
      span: string
      matches: number
      innings: number
      notouts: number
      runs: number
      heighestscore: number
      average: number
      ballsfaced: number
      strikerate: number
      hundreds: number
      fifties: number
      ducks: number
      fours: number
      sixes: number
    }, ExtArgs["result"]["batter"]>
    composites: {}
  }

  type BatterGetPayload<S extends boolean | null | undefined | BatterDefaultArgs> = $Result.GetResult<Prisma.$BatterPayload, S>

  type BatterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatterCountAggregateInputType | true
    }

  export interface BatterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Batter'], meta: { name: 'Batter' } }
    /**
     * Find zero or one Batter that matches the filter.
     * @param {BatterFindUniqueArgs} args - Arguments to find a Batter
     * @example
     * // Get one Batter
     * const batter = await prisma.batter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatterFindUniqueArgs>(args: SelectSubset<T, BatterFindUniqueArgs<ExtArgs>>): Prisma__BatterClient<$Result.GetResult<Prisma.$BatterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Batter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatterFindUniqueOrThrowArgs} args - Arguments to find a Batter
     * @example
     * // Get one Batter
     * const batter = await prisma.batter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatterFindUniqueOrThrowArgs>(args: SelectSubset<T, BatterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatterClient<$Result.GetResult<Prisma.$BatterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatterFindFirstArgs} args - Arguments to find a Batter
     * @example
     * // Get one Batter
     * const batter = await prisma.batter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatterFindFirstArgs>(args?: SelectSubset<T, BatterFindFirstArgs<ExtArgs>>): Prisma__BatterClient<$Result.GetResult<Prisma.$BatterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatterFindFirstOrThrowArgs} args - Arguments to find a Batter
     * @example
     * // Get one Batter
     * const batter = await prisma.batter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatterFindFirstOrThrowArgs>(args?: SelectSubset<T, BatterFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatterClient<$Result.GetResult<Prisma.$BatterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Batters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Batters
     * const batters = await prisma.batter.findMany()
     * 
     * // Get first 10 Batters
     * const batters = await prisma.batter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batterWithIdOnly = await prisma.batter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatterFindManyArgs>(args?: SelectSubset<T, BatterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Batter.
     * @param {BatterCreateArgs} args - Arguments to create a Batter.
     * @example
     * // Create one Batter
     * const Batter = await prisma.batter.create({
     *   data: {
     *     // ... data to create a Batter
     *   }
     * })
     * 
     */
    create<T extends BatterCreateArgs>(args: SelectSubset<T, BatterCreateArgs<ExtArgs>>): Prisma__BatterClient<$Result.GetResult<Prisma.$BatterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Batters.
     * @param {BatterCreateManyArgs} args - Arguments to create many Batters.
     * @example
     * // Create many Batters
     * const batter = await prisma.batter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatterCreateManyArgs>(args?: SelectSubset<T, BatterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Batters and returns the data saved in the database.
     * @param {BatterCreateManyAndReturnArgs} args - Arguments to create many Batters.
     * @example
     * // Create many Batters
     * const batter = await prisma.batter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Batters and only return the `id`
     * const batterWithIdOnly = await prisma.batter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BatterCreateManyAndReturnArgs>(args?: SelectSubset<T, BatterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Batter.
     * @param {BatterDeleteArgs} args - Arguments to delete one Batter.
     * @example
     * // Delete one Batter
     * const Batter = await prisma.batter.delete({
     *   where: {
     *     // ... filter to delete one Batter
     *   }
     * })
     * 
     */
    delete<T extends BatterDeleteArgs>(args: SelectSubset<T, BatterDeleteArgs<ExtArgs>>): Prisma__BatterClient<$Result.GetResult<Prisma.$BatterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Batter.
     * @param {BatterUpdateArgs} args - Arguments to update one Batter.
     * @example
     * // Update one Batter
     * const batter = await prisma.batter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatterUpdateArgs>(args: SelectSubset<T, BatterUpdateArgs<ExtArgs>>): Prisma__BatterClient<$Result.GetResult<Prisma.$BatterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Batters.
     * @param {BatterDeleteManyArgs} args - Arguments to filter Batters to delete.
     * @example
     * // Delete a few Batters
     * const { count } = await prisma.batter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatterDeleteManyArgs>(args?: SelectSubset<T, BatterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Batters
     * const batter = await prisma.batter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatterUpdateManyArgs>(args: SelectSubset<T, BatterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batters and returns the data updated in the database.
     * @param {BatterUpdateManyAndReturnArgs} args - Arguments to update many Batters.
     * @example
     * // Update many Batters
     * const batter = await prisma.batter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Batters and only return the `id`
     * const batterWithIdOnly = await prisma.batter.updateManyAndReturn({
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
    updateManyAndReturn<T extends BatterUpdateManyAndReturnArgs>(args: SelectSubset<T, BatterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Batter.
     * @param {BatterUpsertArgs} args - Arguments to update or create a Batter.
     * @example
     * // Update or create a Batter
     * const batter = await prisma.batter.upsert({
     *   create: {
     *     // ... data to create a Batter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Batter we want to update
     *   }
     * })
     */
    upsert<T extends BatterUpsertArgs>(args: SelectSubset<T, BatterUpsertArgs<ExtArgs>>): Prisma__BatterClient<$Result.GetResult<Prisma.$BatterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Batters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatterCountArgs} args - Arguments to filter Batters to count.
     * @example
     * // Count the number of Batters
     * const count = await prisma.batter.count({
     *   where: {
     *     // ... the filter for the Batters we want to count
     *   }
     * })
    **/
    count<T extends BatterCountArgs>(
      args?: Subset<T, BatterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Batter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BatterAggregateArgs>(args: Subset<T, BatterAggregateArgs>): Prisma.PrismaPromise<GetBatterAggregateType<T>>

    /**
     * Group by Batter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatterGroupByArgs} args - Group by arguments.
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
      T extends BatterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatterGroupByArgs['orderBy'] }
        : { orderBy?: BatterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BatterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Batter model
   */
  readonly fields: BatterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Batter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Batter model
   */
  interface BatterFieldRefs {
    readonly id: FieldRef<"Batter", 'Int'>
    readonly name: FieldRef<"Batter", 'String'>
    readonly age: FieldRef<"Batter", 'Int'>
    readonly nationality: FieldRef<"Batter", 'String'>
    readonly image: FieldRef<"Batter", 'String'>
    readonly span: FieldRef<"Batter", 'String'>
    readonly matches: FieldRef<"Batter", 'Int'>
    readonly innings: FieldRef<"Batter", 'Int'>
    readonly notouts: FieldRef<"Batter", 'Int'>
    readonly runs: FieldRef<"Batter", 'Int'>
    readonly heighestscore: FieldRef<"Batter", 'Int'>
    readonly average: FieldRef<"Batter", 'Int'>
    readonly ballsfaced: FieldRef<"Batter", 'Int'>
    readonly strikerate: FieldRef<"Batter", 'Float'>
    readonly hundreds: FieldRef<"Batter", 'Int'>
    readonly fifties: FieldRef<"Batter", 'Int'>
    readonly ducks: FieldRef<"Batter", 'Int'>
    readonly fours: FieldRef<"Batter", 'Int'>
    readonly sixes: FieldRef<"Batter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Batter findUnique
   */
  export type BatterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batter
     */
    select?: BatterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batter
     */
    omit?: BatterOmit<ExtArgs> | null
    /**
     * Filter, which Batter to fetch.
     */
    where: BatterWhereUniqueInput
  }

  /**
   * Batter findUniqueOrThrow
   */
  export type BatterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batter
     */
    select?: BatterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batter
     */
    omit?: BatterOmit<ExtArgs> | null
    /**
     * Filter, which Batter to fetch.
     */
    where: BatterWhereUniqueInput
  }

  /**
   * Batter findFirst
   */
  export type BatterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batter
     */
    select?: BatterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batter
     */
    omit?: BatterOmit<ExtArgs> | null
    /**
     * Filter, which Batter to fetch.
     */
    where?: BatterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batters to fetch.
     */
    orderBy?: BatterOrderByWithRelationInput | BatterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batters.
     */
    cursor?: BatterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batters.
     */
    distinct?: BatterScalarFieldEnum | BatterScalarFieldEnum[]
  }

  /**
   * Batter findFirstOrThrow
   */
  export type BatterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batter
     */
    select?: BatterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batter
     */
    omit?: BatterOmit<ExtArgs> | null
    /**
     * Filter, which Batter to fetch.
     */
    where?: BatterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batters to fetch.
     */
    orderBy?: BatterOrderByWithRelationInput | BatterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batters.
     */
    cursor?: BatterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batters.
     */
    distinct?: BatterScalarFieldEnum | BatterScalarFieldEnum[]
  }

  /**
   * Batter findMany
   */
  export type BatterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batter
     */
    select?: BatterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batter
     */
    omit?: BatterOmit<ExtArgs> | null
    /**
     * Filter, which Batters to fetch.
     */
    where?: BatterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batters to fetch.
     */
    orderBy?: BatterOrderByWithRelationInput | BatterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Batters.
     */
    cursor?: BatterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batters.
     */
    skip?: number
    distinct?: BatterScalarFieldEnum | BatterScalarFieldEnum[]
  }

  /**
   * Batter create
   */
  export type BatterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batter
     */
    select?: BatterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batter
     */
    omit?: BatterOmit<ExtArgs> | null
    /**
     * The data needed to create a Batter.
     */
    data: XOR<BatterCreateInput, BatterUncheckedCreateInput>
  }

  /**
   * Batter createMany
   */
  export type BatterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Batters.
     */
    data: BatterCreateManyInput | BatterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Batter createManyAndReturn
   */
  export type BatterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batter
     */
    select?: BatterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batter
     */
    omit?: BatterOmit<ExtArgs> | null
    /**
     * The data used to create many Batters.
     */
    data: BatterCreateManyInput | BatterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Batter update
   */
  export type BatterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batter
     */
    select?: BatterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batter
     */
    omit?: BatterOmit<ExtArgs> | null
    /**
     * The data needed to update a Batter.
     */
    data: XOR<BatterUpdateInput, BatterUncheckedUpdateInput>
    /**
     * Choose, which Batter to update.
     */
    where: BatterWhereUniqueInput
  }

  /**
   * Batter updateMany
   */
  export type BatterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Batters.
     */
    data: XOR<BatterUpdateManyMutationInput, BatterUncheckedUpdateManyInput>
    /**
     * Filter which Batters to update
     */
    where?: BatterWhereInput
    /**
     * Limit how many Batters to update.
     */
    limit?: number
  }

  /**
   * Batter updateManyAndReturn
   */
  export type BatterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batter
     */
    select?: BatterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batter
     */
    omit?: BatterOmit<ExtArgs> | null
    /**
     * The data used to update Batters.
     */
    data: XOR<BatterUpdateManyMutationInput, BatterUncheckedUpdateManyInput>
    /**
     * Filter which Batters to update
     */
    where?: BatterWhereInput
    /**
     * Limit how many Batters to update.
     */
    limit?: number
  }

  /**
   * Batter upsert
   */
  export type BatterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batter
     */
    select?: BatterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batter
     */
    omit?: BatterOmit<ExtArgs> | null
    /**
     * The filter to search for the Batter to update in case it exists.
     */
    where: BatterWhereUniqueInput
    /**
     * In case the Batter found by the `where` argument doesn't exist, create a new Batter with this data.
     */
    create: XOR<BatterCreateInput, BatterUncheckedCreateInput>
    /**
     * In case the Batter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatterUpdateInput, BatterUncheckedUpdateInput>
  }

  /**
   * Batter delete
   */
  export type BatterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batter
     */
    select?: BatterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batter
     */
    omit?: BatterOmit<ExtArgs> | null
    /**
     * Filter which Batter to delete.
     */
    where: BatterWhereUniqueInput
  }

  /**
   * Batter deleteMany
   */
  export type BatterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batters to delete
     */
    where?: BatterWhereInput
    /**
     * Limit how many Batters to delete.
     */
    limit?: number
  }

  /**
   * Batter without action
   */
  export type BatterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batter
     */
    select?: BatterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batter
     */
    omit?: BatterOmit<ExtArgs> | null
  }


  /**
   * Model Bowler
   */

  export type AggregateBowler = {
    _count: BowlerCountAggregateOutputType | null
    _avg: BowlerAvgAggregateOutputType | null
    _sum: BowlerSumAggregateOutputType | null
    _min: BowlerMinAggregateOutputType | null
    _max: BowlerMaxAggregateOutputType | null
  }

  export type BowlerAvgAggregateOutputType = {
    id: number | null
    age: number | null
    matches: number | null
    innings: number | null
    balls: number | null
    overs: number | null
    madeins: number | null
    runs: number | null
    wickets: number | null
    average: number | null
    economy: number | null
    strikerate: number | null
    fours: number | null
    fives: number | null
  }

  export type BowlerSumAggregateOutputType = {
    id: number | null
    age: number | null
    matches: number | null
    innings: number | null
    balls: number | null
    overs: number | null
    madeins: number | null
    runs: number | null
    wickets: number | null
    average: number | null
    economy: number | null
    strikerate: number | null
    fours: number | null
    fives: number | null
  }

  export type BowlerMinAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    nationality: string | null
    image: string | null
    span: string | null
    matches: number | null
    innings: number | null
    balls: number | null
    overs: number | null
    madeins: number | null
    runs: number | null
    wickets: number | null
    bbi: string | null
    average: number | null
    economy: number | null
    strikerate: number | null
    fours: number | null
    fives: number | null
  }

  export type BowlerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    nationality: string | null
    image: string | null
    span: string | null
    matches: number | null
    innings: number | null
    balls: number | null
    overs: number | null
    madeins: number | null
    runs: number | null
    wickets: number | null
    bbi: string | null
    average: number | null
    economy: number | null
    strikerate: number | null
    fours: number | null
    fives: number | null
  }

  export type BowlerCountAggregateOutputType = {
    id: number
    name: number
    age: number
    nationality: number
    image: number
    span: number
    matches: number
    innings: number
    balls: number
    overs: number
    madeins: number
    runs: number
    wickets: number
    bbi: number
    average: number
    economy: number
    strikerate: number
    fours: number
    fives: number
    _all: number
  }


  export type BowlerAvgAggregateInputType = {
    id?: true
    age?: true
    matches?: true
    innings?: true
    balls?: true
    overs?: true
    madeins?: true
    runs?: true
    wickets?: true
    average?: true
    economy?: true
    strikerate?: true
    fours?: true
    fives?: true
  }

  export type BowlerSumAggregateInputType = {
    id?: true
    age?: true
    matches?: true
    innings?: true
    balls?: true
    overs?: true
    madeins?: true
    runs?: true
    wickets?: true
    average?: true
    economy?: true
    strikerate?: true
    fours?: true
    fives?: true
  }

  export type BowlerMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    nationality?: true
    image?: true
    span?: true
    matches?: true
    innings?: true
    balls?: true
    overs?: true
    madeins?: true
    runs?: true
    wickets?: true
    bbi?: true
    average?: true
    economy?: true
    strikerate?: true
    fours?: true
    fives?: true
  }

  export type BowlerMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    nationality?: true
    image?: true
    span?: true
    matches?: true
    innings?: true
    balls?: true
    overs?: true
    madeins?: true
    runs?: true
    wickets?: true
    bbi?: true
    average?: true
    economy?: true
    strikerate?: true
    fours?: true
    fives?: true
  }

  export type BowlerCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    nationality?: true
    image?: true
    span?: true
    matches?: true
    innings?: true
    balls?: true
    overs?: true
    madeins?: true
    runs?: true
    wickets?: true
    bbi?: true
    average?: true
    economy?: true
    strikerate?: true
    fours?: true
    fives?: true
    _all?: true
  }

  export type BowlerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bowler to aggregate.
     */
    where?: BowlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bowlers to fetch.
     */
    orderBy?: BowlerOrderByWithRelationInput | BowlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BowlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bowlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bowlers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bowlers
    **/
    _count?: true | BowlerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BowlerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BowlerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BowlerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BowlerMaxAggregateInputType
  }

  export type GetBowlerAggregateType<T extends BowlerAggregateArgs> = {
        [P in keyof T & keyof AggregateBowler]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBowler[P]>
      : GetScalarType<T[P], AggregateBowler[P]>
  }




  export type BowlerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BowlerWhereInput
    orderBy?: BowlerOrderByWithAggregationInput | BowlerOrderByWithAggregationInput[]
    by: BowlerScalarFieldEnum[] | BowlerScalarFieldEnum
    having?: BowlerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BowlerCountAggregateInputType | true
    _avg?: BowlerAvgAggregateInputType
    _sum?: BowlerSumAggregateInputType
    _min?: BowlerMinAggregateInputType
    _max?: BowlerMaxAggregateInputType
  }

  export type BowlerGroupByOutputType = {
    id: number
    name: string
    age: number
    nationality: string
    image: string
    span: string
    matches: number
    innings: number
    balls: number
    overs: number
    madeins: number
    runs: number
    wickets: number
    bbi: string
    average: number
    economy: number
    strikerate: number
    fours: number
    fives: number
    _count: BowlerCountAggregateOutputType | null
    _avg: BowlerAvgAggregateOutputType | null
    _sum: BowlerSumAggregateOutputType | null
    _min: BowlerMinAggregateOutputType | null
    _max: BowlerMaxAggregateOutputType | null
  }

  type GetBowlerGroupByPayload<T extends BowlerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BowlerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BowlerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BowlerGroupByOutputType[P]>
            : GetScalarType<T[P], BowlerGroupByOutputType[P]>
        }
      >
    >


  export type BowlerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    nationality?: boolean
    image?: boolean
    span?: boolean
    matches?: boolean
    innings?: boolean
    balls?: boolean
    overs?: boolean
    madeins?: boolean
    runs?: boolean
    wickets?: boolean
    bbi?: boolean
    average?: boolean
    economy?: boolean
    strikerate?: boolean
    fours?: boolean
    fives?: boolean
  }, ExtArgs["result"]["bowler"]>

  export type BowlerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    nationality?: boolean
    image?: boolean
    span?: boolean
    matches?: boolean
    innings?: boolean
    balls?: boolean
    overs?: boolean
    madeins?: boolean
    runs?: boolean
    wickets?: boolean
    bbi?: boolean
    average?: boolean
    economy?: boolean
    strikerate?: boolean
    fours?: boolean
    fives?: boolean
  }, ExtArgs["result"]["bowler"]>

  export type BowlerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    nationality?: boolean
    image?: boolean
    span?: boolean
    matches?: boolean
    innings?: boolean
    balls?: boolean
    overs?: boolean
    madeins?: boolean
    runs?: boolean
    wickets?: boolean
    bbi?: boolean
    average?: boolean
    economy?: boolean
    strikerate?: boolean
    fours?: boolean
    fives?: boolean
  }, ExtArgs["result"]["bowler"]>

  export type BowlerSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    nationality?: boolean
    image?: boolean
    span?: boolean
    matches?: boolean
    innings?: boolean
    balls?: boolean
    overs?: boolean
    madeins?: boolean
    runs?: boolean
    wickets?: boolean
    bbi?: boolean
    average?: boolean
    economy?: boolean
    strikerate?: boolean
    fours?: boolean
    fives?: boolean
  }

  export type BowlerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "nationality" | "image" | "span" | "matches" | "innings" | "balls" | "overs" | "madeins" | "runs" | "wickets" | "bbi" | "average" | "economy" | "strikerate" | "fours" | "fives", ExtArgs["result"]["bowler"]>

  export type $BowlerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bowler"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      age: number
      nationality: string
      image: string
      span: string
      matches: number
      innings: number
      balls: number
      overs: number
      madeins: number
      runs: number
      wickets: number
      bbi: string
      average: number
      economy: number
      strikerate: number
      fours: number
      fives: number
    }, ExtArgs["result"]["bowler"]>
    composites: {}
  }

  type BowlerGetPayload<S extends boolean | null | undefined | BowlerDefaultArgs> = $Result.GetResult<Prisma.$BowlerPayload, S>

  type BowlerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BowlerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BowlerCountAggregateInputType | true
    }

  export interface BowlerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bowler'], meta: { name: 'Bowler' } }
    /**
     * Find zero or one Bowler that matches the filter.
     * @param {BowlerFindUniqueArgs} args - Arguments to find a Bowler
     * @example
     * // Get one Bowler
     * const bowler = await prisma.bowler.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BowlerFindUniqueArgs>(args: SelectSubset<T, BowlerFindUniqueArgs<ExtArgs>>): Prisma__BowlerClient<$Result.GetResult<Prisma.$BowlerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bowler that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BowlerFindUniqueOrThrowArgs} args - Arguments to find a Bowler
     * @example
     * // Get one Bowler
     * const bowler = await prisma.bowler.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BowlerFindUniqueOrThrowArgs>(args: SelectSubset<T, BowlerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BowlerClient<$Result.GetResult<Prisma.$BowlerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bowler that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BowlerFindFirstArgs} args - Arguments to find a Bowler
     * @example
     * // Get one Bowler
     * const bowler = await prisma.bowler.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BowlerFindFirstArgs>(args?: SelectSubset<T, BowlerFindFirstArgs<ExtArgs>>): Prisma__BowlerClient<$Result.GetResult<Prisma.$BowlerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bowler that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BowlerFindFirstOrThrowArgs} args - Arguments to find a Bowler
     * @example
     * // Get one Bowler
     * const bowler = await prisma.bowler.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BowlerFindFirstOrThrowArgs>(args?: SelectSubset<T, BowlerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BowlerClient<$Result.GetResult<Prisma.$BowlerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bowlers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BowlerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bowlers
     * const bowlers = await prisma.bowler.findMany()
     * 
     * // Get first 10 Bowlers
     * const bowlers = await prisma.bowler.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bowlerWithIdOnly = await prisma.bowler.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BowlerFindManyArgs>(args?: SelectSubset<T, BowlerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BowlerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bowler.
     * @param {BowlerCreateArgs} args - Arguments to create a Bowler.
     * @example
     * // Create one Bowler
     * const Bowler = await prisma.bowler.create({
     *   data: {
     *     // ... data to create a Bowler
     *   }
     * })
     * 
     */
    create<T extends BowlerCreateArgs>(args: SelectSubset<T, BowlerCreateArgs<ExtArgs>>): Prisma__BowlerClient<$Result.GetResult<Prisma.$BowlerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bowlers.
     * @param {BowlerCreateManyArgs} args - Arguments to create many Bowlers.
     * @example
     * // Create many Bowlers
     * const bowler = await prisma.bowler.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BowlerCreateManyArgs>(args?: SelectSubset<T, BowlerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bowlers and returns the data saved in the database.
     * @param {BowlerCreateManyAndReturnArgs} args - Arguments to create many Bowlers.
     * @example
     * // Create many Bowlers
     * const bowler = await prisma.bowler.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bowlers and only return the `id`
     * const bowlerWithIdOnly = await prisma.bowler.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BowlerCreateManyAndReturnArgs>(args?: SelectSubset<T, BowlerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BowlerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bowler.
     * @param {BowlerDeleteArgs} args - Arguments to delete one Bowler.
     * @example
     * // Delete one Bowler
     * const Bowler = await prisma.bowler.delete({
     *   where: {
     *     // ... filter to delete one Bowler
     *   }
     * })
     * 
     */
    delete<T extends BowlerDeleteArgs>(args: SelectSubset<T, BowlerDeleteArgs<ExtArgs>>): Prisma__BowlerClient<$Result.GetResult<Prisma.$BowlerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bowler.
     * @param {BowlerUpdateArgs} args - Arguments to update one Bowler.
     * @example
     * // Update one Bowler
     * const bowler = await prisma.bowler.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BowlerUpdateArgs>(args: SelectSubset<T, BowlerUpdateArgs<ExtArgs>>): Prisma__BowlerClient<$Result.GetResult<Prisma.$BowlerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bowlers.
     * @param {BowlerDeleteManyArgs} args - Arguments to filter Bowlers to delete.
     * @example
     * // Delete a few Bowlers
     * const { count } = await prisma.bowler.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BowlerDeleteManyArgs>(args?: SelectSubset<T, BowlerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bowlers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BowlerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bowlers
     * const bowler = await prisma.bowler.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BowlerUpdateManyArgs>(args: SelectSubset<T, BowlerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bowlers and returns the data updated in the database.
     * @param {BowlerUpdateManyAndReturnArgs} args - Arguments to update many Bowlers.
     * @example
     * // Update many Bowlers
     * const bowler = await prisma.bowler.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bowlers and only return the `id`
     * const bowlerWithIdOnly = await prisma.bowler.updateManyAndReturn({
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
    updateManyAndReturn<T extends BowlerUpdateManyAndReturnArgs>(args: SelectSubset<T, BowlerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BowlerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bowler.
     * @param {BowlerUpsertArgs} args - Arguments to update or create a Bowler.
     * @example
     * // Update or create a Bowler
     * const bowler = await prisma.bowler.upsert({
     *   create: {
     *     // ... data to create a Bowler
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bowler we want to update
     *   }
     * })
     */
    upsert<T extends BowlerUpsertArgs>(args: SelectSubset<T, BowlerUpsertArgs<ExtArgs>>): Prisma__BowlerClient<$Result.GetResult<Prisma.$BowlerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bowlers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BowlerCountArgs} args - Arguments to filter Bowlers to count.
     * @example
     * // Count the number of Bowlers
     * const count = await prisma.bowler.count({
     *   where: {
     *     // ... the filter for the Bowlers we want to count
     *   }
     * })
    **/
    count<T extends BowlerCountArgs>(
      args?: Subset<T, BowlerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BowlerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bowler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BowlerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BowlerAggregateArgs>(args: Subset<T, BowlerAggregateArgs>): Prisma.PrismaPromise<GetBowlerAggregateType<T>>

    /**
     * Group by Bowler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BowlerGroupByArgs} args - Group by arguments.
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
      T extends BowlerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BowlerGroupByArgs['orderBy'] }
        : { orderBy?: BowlerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BowlerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBowlerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bowler model
   */
  readonly fields: BowlerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bowler.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BowlerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bowler model
   */
  interface BowlerFieldRefs {
    readonly id: FieldRef<"Bowler", 'Int'>
    readonly name: FieldRef<"Bowler", 'String'>
    readonly age: FieldRef<"Bowler", 'Int'>
    readonly nationality: FieldRef<"Bowler", 'String'>
    readonly image: FieldRef<"Bowler", 'String'>
    readonly span: FieldRef<"Bowler", 'String'>
    readonly matches: FieldRef<"Bowler", 'Int'>
    readonly innings: FieldRef<"Bowler", 'Int'>
    readonly balls: FieldRef<"Bowler", 'Int'>
    readonly overs: FieldRef<"Bowler", 'Int'>
    readonly madeins: FieldRef<"Bowler", 'Int'>
    readonly runs: FieldRef<"Bowler", 'Int'>
    readonly wickets: FieldRef<"Bowler", 'Int'>
    readonly bbi: FieldRef<"Bowler", 'String'>
    readonly average: FieldRef<"Bowler", 'Float'>
    readonly economy: FieldRef<"Bowler", 'Float'>
    readonly strikerate: FieldRef<"Bowler", 'Float'>
    readonly fours: FieldRef<"Bowler", 'Int'>
    readonly fives: FieldRef<"Bowler", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Bowler findUnique
   */
  export type BowlerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bowler
     */
    select?: BowlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bowler
     */
    omit?: BowlerOmit<ExtArgs> | null
    /**
     * Filter, which Bowler to fetch.
     */
    where: BowlerWhereUniqueInput
  }

  /**
   * Bowler findUniqueOrThrow
   */
  export type BowlerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bowler
     */
    select?: BowlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bowler
     */
    omit?: BowlerOmit<ExtArgs> | null
    /**
     * Filter, which Bowler to fetch.
     */
    where: BowlerWhereUniqueInput
  }

  /**
   * Bowler findFirst
   */
  export type BowlerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bowler
     */
    select?: BowlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bowler
     */
    omit?: BowlerOmit<ExtArgs> | null
    /**
     * Filter, which Bowler to fetch.
     */
    where?: BowlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bowlers to fetch.
     */
    orderBy?: BowlerOrderByWithRelationInput | BowlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bowlers.
     */
    cursor?: BowlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bowlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bowlers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bowlers.
     */
    distinct?: BowlerScalarFieldEnum | BowlerScalarFieldEnum[]
  }

  /**
   * Bowler findFirstOrThrow
   */
  export type BowlerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bowler
     */
    select?: BowlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bowler
     */
    omit?: BowlerOmit<ExtArgs> | null
    /**
     * Filter, which Bowler to fetch.
     */
    where?: BowlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bowlers to fetch.
     */
    orderBy?: BowlerOrderByWithRelationInput | BowlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bowlers.
     */
    cursor?: BowlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bowlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bowlers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bowlers.
     */
    distinct?: BowlerScalarFieldEnum | BowlerScalarFieldEnum[]
  }

  /**
   * Bowler findMany
   */
  export type BowlerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bowler
     */
    select?: BowlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bowler
     */
    omit?: BowlerOmit<ExtArgs> | null
    /**
     * Filter, which Bowlers to fetch.
     */
    where?: BowlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bowlers to fetch.
     */
    orderBy?: BowlerOrderByWithRelationInput | BowlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bowlers.
     */
    cursor?: BowlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bowlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bowlers.
     */
    skip?: number
    distinct?: BowlerScalarFieldEnum | BowlerScalarFieldEnum[]
  }

  /**
   * Bowler create
   */
  export type BowlerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bowler
     */
    select?: BowlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bowler
     */
    omit?: BowlerOmit<ExtArgs> | null
    /**
     * The data needed to create a Bowler.
     */
    data: XOR<BowlerCreateInput, BowlerUncheckedCreateInput>
  }

  /**
   * Bowler createMany
   */
  export type BowlerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bowlers.
     */
    data: BowlerCreateManyInput | BowlerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bowler createManyAndReturn
   */
  export type BowlerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bowler
     */
    select?: BowlerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bowler
     */
    omit?: BowlerOmit<ExtArgs> | null
    /**
     * The data used to create many Bowlers.
     */
    data: BowlerCreateManyInput | BowlerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bowler update
   */
  export type BowlerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bowler
     */
    select?: BowlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bowler
     */
    omit?: BowlerOmit<ExtArgs> | null
    /**
     * The data needed to update a Bowler.
     */
    data: XOR<BowlerUpdateInput, BowlerUncheckedUpdateInput>
    /**
     * Choose, which Bowler to update.
     */
    where: BowlerWhereUniqueInput
  }

  /**
   * Bowler updateMany
   */
  export type BowlerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bowlers.
     */
    data: XOR<BowlerUpdateManyMutationInput, BowlerUncheckedUpdateManyInput>
    /**
     * Filter which Bowlers to update
     */
    where?: BowlerWhereInput
    /**
     * Limit how many Bowlers to update.
     */
    limit?: number
  }

  /**
   * Bowler updateManyAndReturn
   */
  export type BowlerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bowler
     */
    select?: BowlerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bowler
     */
    omit?: BowlerOmit<ExtArgs> | null
    /**
     * The data used to update Bowlers.
     */
    data: XOR<BowlerUpdateManyMutationInput, BowlerUncheckedUpdateManyInput>
    /**
     * Filter which Bowlers to update
     */
    where?: BowlerWhereInput
    /**
     * Limit how many Bowlers to update.
     */
    limit?: number
  }

  /**
   * Bowler upsert
   */
  export type BowlerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bowler
     */
    select?: BowlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bowler
     */
    omit?: BowlerOmit<ExtArgs> | null
    /**
     * The filter to search for the Bowler to update in case it exists.
     */
    where: BowlerWhereUniqueInput
    /**
     * In case the Bowler found by the `where` argument doesn't exist, create a new Bowler with this data.
     */
    create: XOR<BowlerCreateInput, BowlerUncheckedCreateInput>
    /**
     * In case the Bowler was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BowlerUpdateInput, BowlerUncheckedUpdateInput>
  }

  /**
   * Bowler delete
   */
  export type BowlerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bowler
     */
    select?: BowlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bowler
     */
    omit?: BowlerOmit<ExtArgs> | null
    /**
     * Filter which Bowler to delete.
     */
    where: BowlerWhereUniqueInput
  }

  /**
   * Bowler deleteMany
   */
  export type BowlerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bowlers to delete
     */
    where?: BowlerWhereInput
    /**
     * Limit how many Bowlers to delete.
     */
    limit?: number
  }

  /**
   * Bowler without action
   */
  export type BowlerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bowler
     */
    select?: BowlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bowler
     */
    omit?: BowlerOmit<ExtArgs> | null
  }


  /**
   * Model Allrounders
   */

  export type AggregateAllrounders = {
    _count: AllroundersCountAggregateOutputType | null
    _avg: AllroundersAvgAggregateOutputType | null
    _sum: AllroundersSumAggregateOutputType | null
    _min: AllroundersMinAggregateOutputType | null
    _max: AllroundersMaxAggregateOutputType | null
  }

  export type AllroundersAvgAggregateOutputType = {
    id: number | null
    age: number | null
    matches: number | null
    innings: number | null
    balls: number | null
    overs: number | null
    madeins: number | null
    runs: number | null
    wickets: number | null
    average: number | null
    economy: number | null
    strikerate: number | null
    fours: number | null
    fives: number | null
  }

  export type AllroundersSumAggregateOutputType = {
    id: number | null
    age: number | null
    matches: number | null
    innings: number | null
    balls: number | null
    overs: number | null
    madeins: number | null
    runs: number | null
    wickets: number | null
    average: number | null
    economy: number | null
    strikerate: number | null
    fours: number | null
    fives: number | null
  }

  export type AllroundersMinAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    image: string | null
    nationality: string | null
    span: string | null
    matches: number | null
    innings: number | null
    balls: number | null
    overs: number | null
    madeins: number | null
    runs: number | null
    wickets: number | null
    bbi: string | null
    average: number | null
    economy: number | null
    strikerate: number | null
    fours: number | null
    fives: number | null
  }

  export type AllroundersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    image: string | null
    nationality: string | null
    span: string | null
    matches: number | null
    innings: number | null
    balls: number | null
    overs: number | null
    madeins: number | null
    runs: number | null
    wickets: number | null
    bbi: string | null
    average: number | null
    economy: number | null
    strikerate: number | null
    fours: number | null
    fives: number | null
  }

  export type AllroundersCountAggregateOutputType = {
    id: number
    name: number
    age: number
    image: number
    nationality: number
    span: number
    matches: number
    innings: number
    balls: number
    overs: number
    madeins: number
    runs: number
    wickets: number
    bbi: number
    average: number
    economy: number
    strikerate: number
    fours: number
    fives: number
    _all: number
  }


  export type AllroundersAvgAggregateInputType = {
    id?: true
    age?: true
    matches?: true
    innings?: true
    balls?: true
    overs?: true
    madeins?: true
    runs?: true
    wickets?: true
    average?: true
    economy?: true
    strikerate?: true
    fours?: true
    fives?: true
  }

  export type AllroundersSumAggregateInputType = {
    id?: true
    age?: true
    matches?: true
    innings?: true
    balls?: true
    overs?: true
    madeins?: true
    runs?: true
    wickets?: true
    average?: true
    economy?: true
    strikerate?: true
    fours?: true
    fives?: true
  }

  export type AllroundersMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    image?: true
    nationality?: true
    span?: true
    matches?: true
    innings?: true
    balls?: true
    overs?: true
    madeins?: true
    runs?: true
    wickets?: true
    bbi?: true
    average?: true
    economy?: true
    strikerate?: true
    fours?: true
    fives?: true
  }

  export type AllroundersMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    image?: true
    nationality?: true
    span?: true
    matches?: true
    innings?: true
    balls?: true
    overs?: true
    madeins?: true
    runs?: true
    wickets?: true
    bbi?: true
    average?: true
    economy?: true
    strikerate?: true
    fours?: true
    fives?: true
  }

  export type AllroundersCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    image?: true
    nationality?: true
    span?: true
    matches?: true
    innings?: true
    balls?: true
    overs?: true
    madeins?: true
    runs?: true
    wickets?: true
    bbi?: true
    average?: true
    economy?: true
    strikerate?: true
    fours?: true
    fives?: true
    _all?: true
  }

  export type AllroundersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Allrounders to aggregate.
     */
    where?: AllroundersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allrounders to fetch.
     */
    orderBy?: AllroundersOrderByWithRelationInput | AllroundersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllroundersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allrounders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allrounders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Allrounders
    **/
    _count?: true | AllroundersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AllroundersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AllroundersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllroundersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllroundersMaxAggregateInputType
  }

  export type GetAllroundersAggregateType<T extends AllroundersAggregateArgs> = {
        [P in keyof T & keyof AggregateAllrounders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllrounders[P]>
      : GetScalarType<T[P], AggregateAllrounders[P]>
  }




  export type AllroundersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllroundersWhereInput
    orderBy?: AllroundersOrderByWithAggregationInput | AllroundersOrderByWithAggregationInput[]
    by: AllroundersScalarFieldEnum[] | AllroundersScalarFieldEnum
    having?: AllroundersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllroundersCountAggregateInputType | true
    _avg?: AllroundersAvgAggregateInputType
    _sum?: AllroundersSumAggregateInputType
    _min?: AllroundersMinAggregateInputType
    _max?: AllroundersMaxAggregateInputType
  }

  export type AllroundersGroupByOutputType = {
    id: number
    name: string
    age: number
    image: string
    nationality: string
    span: string
    matches: number
    innings: number
    balls: number
    overs: number
    madeins: number
    runs: number
    wickets: number
    bbi: string
    average: number
    economy: number
    strikerate: number
    fours: number
    fives: number
    _count: AllroundersCountAggregateOutputType | null
    _avg: AllroundersAvgAggregateOutputType | null
    _sum: AllroundersSumAggregateOutputType | null
    _min: AllroundersMinAggregateOutputType | null
    _max: AllroundersMaxAggregateOutputType | null
  }

  type GetAllroundersGroupByPayload<T extends AllroundersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllroundersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllroundersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllroundersGroupByOutputType[P]>
            : GetScalarType<T[P], AllroundersGroupByOutputType[P]>
        }
      >
    >


  export type AllroundersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    image?: boolean
    nationality?: boolean
    span?: boolean
    matches?: boolean
    innings?: boolean
    balls?: boolean
    overs?: boolean
    madeins?: boolean
    runs?: boolean
    wickets?: boolean
    bbi?: boolean
    average?: boolean
    economy?: boolean
    strikerate?: boolean
    fours?: boolean
    fives?: boolean
  }, ExtArgs["result"]["allrounders"]>

  export type AllroundersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    image?: boolean
    nationality?: boolean
    span?: boolean
    matches?: boolean
    innings?: boolean
    balls?: boolean
    overs?: boolean
    madeins?: boolean
    runs?: boolean
    wickets?: boolean
    bbi?: boolean
    average?: boolean
    economy?: boolean
    strikerate?: boolean
    fours?: boolean
    fives?: boolean
  }, ExtArgs["result"]["allrounders"]>

  export type AllroundersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    image?: boolean
    nationality?: boolean
    span?: boolean
    matches?: boolean
    innings?: boolean
    balls?: boolean
    overs?: boolean
    madeins?: boolean
    runs?: boolean
    wickets?: boolean
    bbi?: boolean
    average?: boolean
    economy?: boolean
    strikerate?: boolean
    fours?: boolean
    fives?: boolean
  }, ExtArgs["result"]["allrounders"]>

  export type AllroundersSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    image?: boolean
    nationality?: boolean
    span?: boolean
    matches?: boolean
    innings?: boolean
    balls?: boolean
    overs?: boolean
    madeins?: boolean
    runs?: boolean
    wickets?: boolean
    bbi?: boolean
    average?: boolean
    economy?: boolean
    strikerate?: boolean
    fours?: boolean
    fives?: boolean
  }

  export type AllroundersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "image" | "nationality" | "span" | "matches" | "innings" | "balls" | "overs" | "madeins" | "runs" | "wickets" | "bbi" | "average" | "economy" | "strikerate" | "fours" | "fives", ExtArgs["result"]["allrounders"]>

  export type $AllroundersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Allrounders"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      age: number
      image: string
      nationality: string
      span: string
      matches: number
      innings: number
      balls: number
      overs: number
      madeins: number
      runs: number
      wickets: number
      bbi: string
      average: number
      economy: number
      strikerate: number
      fours: number
      fives: number
    }, ExtArgs["result"]["allrounders"]>
    composites: {}
  }

  type AllroundersGetPayload<S extends boolean | null | undefined | AllroundersDefaultArgs> = $Result.GetResult<Prisma.$AllroundersPayload, S>

  type AllroundersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AllroundersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllroundersCountAggregateInputType | true
    }

  export interface AllroundersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Allrounders'], meta: { name: 'Allrounders' } }
    /**
     * Find zero or one Allrounders that matches the filter.
     * @param {AllroundersFindUniqueArgs} args - Arguments to find a Allrounders
     * @example
     * // Get one Allrounders
     * const allrounders = await prisma.allrounders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AllroundersFindUniqueArgs>(args: SelectSubset<T, AllroundersFindUniqueArgs<ExtArgs>>): Prisma__AllroundersClient<$Result.GetResult<Prisma.$AllroundersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Allrounders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AllroundersFindUniqueOrThrowArgs} args - Arguments to find a Allrounders
     * @example
     * // Get one Allrounders
     * const allrounders = await prisma.allrounders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AllroundersFindUniqueOrThrowArgs>(args: SelectSubset<T, AllroundersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AllroundersClient<$Result.GetResult<Prisma.$AllroundersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allrounders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllroundersFindFirstArgs} args - Arguments to find a Allrounders
     * @example
     * // Get one Allrounders
     * const allrounders = await prisma.allrounders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AllroundersFindFirstArgs>(args?: SelectSubset<T, AllroundersFindFirstArgs<ExtArgs>>): Prisma__AllroundersClient<$Result.GetResult<Prisma.$AllroundersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allrounders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllroundersFindFirstOrThrowArgs} args - Arguments to find a Allrounders
     * @example
     * // Get one Allrounders
     * const allrounders = await prisma.allrounders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AllroundersFindFirstOrThrowArgs>(args?: SelectSubset<T, AllroundersFindFirstOrThrowArgs<ExtArgs>>): Prisma__AllroundersClient<$Result.GetResult<Prisma.$AllroundersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Allrounders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllroundersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Allrounders
     * const allrounders = await prisma.allrounders.findMany()
     * 
     * // Get first 10 Allrounders
     * const allrounders = await prisma.allrounders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allroundersWithIdOnly = await prisma.allrounders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AllroundersFindManyArgs>(args?: SelectSubset<T, AllroundersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllroundersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Allrounders.
     * @param {AllroundersCreateArgs} args - Arguments to create a Allrounders.
     * @example
     * // Create one Allrounders
     * const Allrounders = await prisma.allrounders.create({
     *   data: {
     *     // ... data to create a Allrounders
     *   }
     * })
     * 
     */
    create<T extends AllroundersCreateArgs>(args: SelectSubset<T, AllroundersCreateArgs<ExtArgs>>): Prisma__AllroundersClient<$Result.GetResult<Prisma.$AllroundersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Allrounders.
     * @param {AllroundersCreateManyArgs} args - Arguments to create many Allrounders.
     * @example
     * // Create many Allrounders
     * const allrounders = await prisma.allrounders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AllroundersCreateManyArgs>(args?: SelectSubset<T, AllroundersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Allrounders and returns the data saved in the database.
     * @param {AllroundersCreateManyAndReturnArgs} args - Arguments to create many Allrounders.
     * @example
     * // Create many Allrounders
     * const allrounders = await prisma.allrounders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Allrounders and only return the `id`
     * const allroundersWithIdOnly = await prisma.allrounders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AllroundersCreateManyAndReturnArgs>(args?: SelectSubset<T, AllroundersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllroundersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Allrounders.
     * @param {AllroundersDeleteArgs} args - Arguments to delete one Allrounders.
     * @example
     * // Delete one Allrounders
     * const Allrounders = await prisma.allrounders.delete({
     *   where: {
     *     // ... filter to delete one Allrounders
     *   }
     * })
     * 
     */
    delete<T extends AllroundersDeleteArgs>(args: SelectSubset<T, AllroundersDeleteArgs<ExtArgs>>): Prisma__AllroundersClient<$Result.GetResult<Prisma.$AllroundersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Allrounders.
     * @param {AllroundersUpdateArgs} args - Arguments to update one Allrounders.
     * @example
     * // Update one Allrounders
     * const allrounders = await prisma.allrounders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AllroundersUpdateArgs>(args: SelectSubset<T, AllroundersUpdateArgs<ExtArgs>>): Prisma__AllroundersClient<$Result.GetResult<Prisma.$AllroundersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Allrounders.
     * @param {AllroundersDeleteManyArgs} args - Arguments to filter Allrounders to delete.
     * @example
     * // Delete a few Allrounders
     * const { count } = await prisma.allrounders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AllroundersDeleteManyArgs>(args?: SelectSubset<T, AllroundersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allrounders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllroundersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Allrounders
     * const allrounders = await prisma.allrounders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AllroundersUpdateManyArgs>(args: SelectSubset<T, AllroundersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allrounders and returns the data updated in the database.
     * @param {AllroundersUpdateManyAndReturnArgs} args - Arguments to update many Allrounders.
     * @example
     * // Update many Allrounders
     * const allrounders = await prisma.allrounders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Allrounders and only return the `id`
     * const allroundersWithIdOnly = await prisma.allrounders.updateManyAndReturn({
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
    updateManyAndReturn<T extends AllroundersUpdateManyAndReturnArgs>(args: SelectSubset<T, AllroundersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllroundersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Allrounders.
     * @param {AllroundersUpsertArgs} args - Arguments to update or create a Allrounders.
     * @example
     * // Update or create a Allrounders
     * const allrounders = await prisma.allrounders.upsert({
     *   create: {
     *     // ... data to create a Allrounders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Allrounders we want to update
     *   }
     * })
     */
    upsert<T extends AllroundersUpsertArgs>(args: SelectSubset<T, AllroundersUpsertArgs<ExtArgs>>): Prisma__AllroundersClient<$Result.GetResult<Prisma.$AllroundersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Allrounders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllroundersCountArgs} args - Arguments to filter Allrounders to count.
     * @example
     * // Count the number of Allrounders
     * const count = await prisma.allrounders.count({
     *   where: {
     *     // ... the filter for the Allrounders we want to count
     *   }
     * })
    **/
    count<T extends AllroundersCountArgs>(
      args?: Subset<T, AllroundersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllroundersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Allrounders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllroundersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AllroundersAggregateArgs>(args: Subset<T, AllroundersAggregateArgs>): Prisma.PrismaPromise<GetAllroundersAggregateType<T>>

    /**
     * Group by Allrounders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllroundersGroupByArgs} args - Group by arguments.
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
      T extends AllroundersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllroundersGroupByArgs['orderBy'] }
        : { orderBy?: AllroundersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AllroundersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllroundersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Allrounders model
   */
  readonly fields: AllroundersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Allrounders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllroundersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Allrounders model
   */
  interface AllroundersFieldRefs {
    readonly id: FieldRef<"Allrounders", 'Int'>
    readonly name: FieldRef<"Allrounders", 'String'>
    readonly age: FieldRef<"Allrounders", 'Int'>
    readonly image: FieldRef<"Allrounders", 'String'>
    readonly nationality: FieldRef<"Allrounders", 'String'>
    readonly span: FieldRef<"Allrounders", 'String'>
    readonly matches: FieldRef<"Allrounders", 'Int'>
    readonly innings: FieldRef<"Allrounders", 'Int'>
    readonly balls: FieldRef<"Allrounders", 'Int'>
    readonly overs: FieldRef<"Allrounders", 'Int'>
    readonly madeins: FieldRef<"Allrounders", 'Int'>
    readonly runs: FieldRef<"Allrounders", 'Int'>
    readonly wickets: FieldRef<"Allrounders", 'Int'>
    readonly bbi: FieldRef<"Allrounders", 'String'>
    readonly average: FieldRef<"Allrounders", 'Float'>
    readonly economy: FieldRef<"Allrounders", 'Float'>
    readonly strikerate: FieldRef<"Allrounders", 'Float'>
    readonly fours: FieldRef<"Allrounders", 'Int'>
    readonly fives: FieldRef<"Allrounders", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Allrounders findUnique
   */
  export type AllroundersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allrounders
     */
    select?: AllroundersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allrounders
     */
    omit?: AllroundersOmit<ExtArgs> | null
    /**
     * Filter, which Allrounders to fetch.
     */
    where: AllroundersWhereUniqueInput
  }

  /**
   * Allrounders findUniqueOrThrow
   */
  export type AllroundersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allrounders
     */
    select?: AllroundersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allrounders
     */
    omit?: AllroundersOmit<ExtArgs> | null
    /**
     * Filter, which Allrounders to fetch.
     */
    where: AllroundersWhereUniqueInput
  }

  /**
   * Allrounders findFirst
   */
  export type AllroundersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allrounders
     */
    select?: AllroundersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allrounders
     */
    omit?: AllroundersOmit<ExtArgs> | null
    /**
     * Filter, which Allrounders to fetch.
     */
    where?: AllroundersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allrounders to fetch.
     */
    orderBy?: AllroundersOrderByWithRelationInput | AllroundersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allrounders.
     */
    cursor?: AllroundersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allrounders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allrounders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allrounders.
     */
    distinct?: AllroundersScalarFieldEnum | AllroundersScalarFieldEnum[]
  }

  /**
   * Allrounders findFirstOrThrow
   */
  export type AllroundersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allrounders
     */
    select?: AllroundersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allrounders
     */
    omit?: AllroundersOmit<ExtArgs> | null
    /**
     * Filter, which Allrounders to fetch.
     */
    where?: AllroundersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allrounders to fetch.
     */
    orderBy?: AllroundersOrderByWithRelationInput | AllroundersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allrounders.
     */
    cursor?: AllroundersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allrounders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allrounders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allrounders.
     */
    distinct?: AllroundersScalarFieldEnum | AllroundersScalarFieldEnum[]
  }

  /**
   * Allrounders findMany
   */
  export type AllroundersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allrounders
     */
    select?: AllroundersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allrounders
     */
    omit?: AllroundersOmit<ExtArgs> | null
    /**
     * Filter, which Allrounders to fetch.
     */
    where?: AllroundersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allrounders to fetch.
     */
    orderBy?: AllroundersOrderByWithRelationInput | AllroundersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Allrounders.
     */
    cursor?: AllroundersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allrounders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allrounders.
     */
    skip?: number
    distinct?: AllroundersScalarFieldEnum | AllroundersScalarFieldEnum[]
  }

  /**
   * Allrounders create
   */
  export type AllroundersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allrounders
     */
    select?: AllroundersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allrounders
     */
    omit?: AllroundersOmit<ExtArgs> | null
    /**
     * The data needed to create a Allrounders.
     */
    data: XOR<AllroundersCreateInput, AllroundersUncheckedCreateInput>
  }

  /**
   * Allrounders createMany
   */
  export type AllroundersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Allrounders.
     */
    data: AllroundersCreateManyInput | AllroundersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Allrounders createManyAndReturn
   */
  export type AllroundersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allrounders
     */
    select?: AllroundersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Allrounders
     */
    omit?: AllroundersOmit<ExtArgs> | null
    /**
     * The data used to create many Allrounders.
     */
    data: AllroundersCreateManyInput | AllroundersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Allrounders update
   */
  export type AllroundersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allrounders
     */
    select?: AllroundersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allrounders
     */
    omit?: AllroundersOmit<ExtArgs> | null
    /**
     * The data needed to update a Allrounders.
     */
    data: XOR<AllroundersUpdateInput, AllroundersUncheckedUpdateInput>
    /**
     * Choose, which Allrounders to update.
     */
    where: AllroundersWhereUniqueInput
  }

  /**
   * Allrounders updateMany
   */
  export type AllroundersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Allrounders.
     */
    data: XOR<AllroundersUpdateManyMutationInput, AllroundersUncheckedUpdateManyInput>
    /**
     * Filter which Allrounders to update
     */
    where?: AllroundersWhereInput
    /**
     * Limit how many Allrounders to update.
     */
    limit?: number
  }

  /**
   * Allrounders updateManyAndReturn
   */
  export type AllroundersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allrounders
     */
    select?: AllroundersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Allrounders
     */
    omit?: AllroundersOmit<ExtArgs> | null
    /**
     * The data used to update Allrounders.
     */
    data: XOR<AllroundersUpdateManyMutationInput, AllroundersUncheckedUpdateManyInput>
    /**
     * Filter which Allrounders to update
     */
    where?: AllroundersWhereInput
    /**
     * Limit how many Allrounders to update.
     */
    limit?: number
  }

  /**
   * Allrounders upsert
   */
  export type AllroundersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allrounders
     */
    select?: AllroundersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allrounders
     */
    omit?: AllroundersOmit<ExtArgs> | null
    /**
     * The filter to search for the Allrounders to update in case it exists.
     */
    where: AllroundersWhereUniqueInput
    /**
     * In case the Allrounders found by the `where` argument doesn't exist, create a new Allrounders with this data.
     */
    create: XOR<AllroundersCreateInput, AllroundersUncheckedCreateInput>
    /**
     * In case the Allrounders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllroundersUpdateInput, AllroundersUncheckedUpdateInput>
  }

  /**
   * Allrounders delete
   */
  export type AllroundersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allrounders
     */
    select?: AllroundersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allrounders
     */
    omit?: AllroundersOmit<ExtArgs> | null
    /**
     * Filter which Allrounders to delete.
     */
    where: AllroundersWhereUniqueInput
  }

  /**
   * Allrounders deleteMany
   */
  export type AllroundersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Allrounders to delete
     */
    where?: AllroundersWhereInput
    /**
     * Limit how many Allrounders to delete.
     */
    limit?: number
  }

  /**
   * Allrounders without action
   */
  export type AllroundersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allrounders
     */
    select?: AllroundersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allrounders
     */
    omit?: AllroundersOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const BatterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    nationality: 'nationality',
    image: 'image',
    span: 'span',
    matches: 'matches',
    innings: 'innings',
    notouts: 'notouts',
    runs: 'runs',
    heighestscore: 'heighestscore',
    average: 'average',
    ballsfaced: 'ballsfaced',
    strikerate: 'strikerate',
    hundreds: 'hundreds',
    fifties: 'fifties',
    ducks: 'ducks',
    fours: 'fours',
    sixes: 'sixes'
  };

  export type BatterScalarFieldEnum = (typeof BatterScalarFieldEnum)[keyof typeof BatterScalarFieldEnum]


  export const BowlerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    nationality: 'nationality',
    image: 'image',
    span: 'span',
    matches: 'matches',
    innings: 'innings',
    balls: 'balls',
    overs: 'overs',
    madeins: 'madeins',
    runs: 'runs',
    wickets: 'wickets',
    bbi: 'bbi',
    average: 'average',
    economy: 'economy',
    strikerate: 'strikerate',
    fours: 'fours',
    fives: 'fives'
  };

  export type BowlerScalarFieldEnum = (typeof BowlerScalarFieldEnum)[keyof typeof BowlerScalarFieldEnum]


  export const AllroundersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    image: 'image',
    nationality: 'nationality',
    span: 'span',
    matches: 'matches',
    innings: 'innings',
    balls: 'balls',
    overs: 'overs',
    madeins: 'madeins',
    runs: 'runs',
    wickets: 'wickets',
    bbi: 'bbi',
    average: 'average',
    economy: 'economy',
    strikerate: 'strikerate',
    fours: 'fours',
    fives: 'fives'
  };

  export type AllroundersScalarFieldEnum = (typeof AllroundersScalarFieldEnum)[keyof typeof AllroundersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type BatterWhereInput = {
    AND?: BatterWhereInput | BatterWhereInput[]
    OR?: BatterWhereInput[]
    NOT?: BatterWhereInput | BatterWhereInput[]
    id?: IntFilter<"Batter"> | number
    name?: StringFilter<"Batter"> | string
    age?: IntFilter<"Batter"> | number
    nationality?: StringFilter<"Batter"> | string
    image?: StringFilter<"Batter"> | string
    span?: StringFilter<"Batter"> | string
    matches?: IntFilter<"Batter"> | number
    innings?: IntFilter<"Batter"> | number
    notouts?: IntFilter<"Batter"> | number
    runs?: IntFilter<"Batter"> | number
    heighestscore?: IntFilter<"Batter"> | number
    average?: IntFilter<"Batter"> | number
    ballsfaced?: IntFilter<"Batter"> | number
    strikerate?: FloatFilter<"Batter"> | number
    hundreds?: IntFilter<"Batter"> | number
    fifties?: IntFilter<"Batter"> | number
    ducks?: IntFilter<"Batter"> | number
    fours?: IntFilter<"Batter"> | number
    sixes?: IntFilter<"Batter"> | number
  }

  export type BatterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    nationality?: SortOrder
    image?: SortOrder
    span?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    notouts?: SortOrder
    runs?: SortOrder
    heighestscore?: SortOrder
    average?: SortOrder
    ballsfaced?: SortOrder
    strikerate?: SortOrder
    hundreds?: SortOrder
    fifties?: SortOrder
    ducks?: SortOrder
    fours?: SortOrder
    sixes?: SortOrder
  }

  export type BatterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BatterWhereInput | BatterWhereInput[]
    OR?: BatterWhereInput[]
    NOT?: BatterWhereInput | BatterWhereInput[]
    name?: StringFilter<"Batter"> | string
    age?: IntFilter<"Batter"> | number
    nationality?: StringFilter<"Batter"> | string
    image?: StringFilter<"Batter"> | string
    span?: StringFilter<"Batter"> | string
    matches?: IntFilter<"Batter"> | number
    innings?: IntFilter<"Batter"> | number
    notouts?: IntFilter<"Batter"> | number
    runs?: IntFilter<"Batter"> | number
    heighestscore?: IntFilter<"Batter"> | number
    average?: IntFilter<"Batter"> | number
    ballsfaced?: IntFilter<"Batter"> | number
    strikerate?: FloatFilter<"Batter"> | number
    hundreds?: IntFilter<"Batter"> | number
    fifties?: IntFilter<"Batter"> | number
    ducks?: IntFilter<"Batter"> | number
    fours?: IntFilter<"Batter"> | number
    sixes?: IntFilter<"Batter"> | number
  }, "id">

  export type BatterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    nationality?: SortOrder
    image?: SortOrder
    span?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    notouts?: SortOrder
    runs?: SortOrder
    heighestscore?: SortOrder
    average?: SortOrder
    ballsfaced?: SortOrder
    strikerate?: SortOrder
    hundreds?: SortOrder
    fifties?: SortOrder
    ducks?: SortOrder
    fours?: SortOrder
    sixes?: SortOrder
    _count?: BatterCountOrderByAggregateInput
    _avg?: BatterAvgOrderByAggregateInput
    _max?: BatterMaxOrderByAggregateInput
    _min?: BatterMinOrderByAggregateInput
    _sum?: BatterSumOrderByAggregateInput
  }

  export type BatterScalarWhereWithAggregatesInput = {
    AND?: BatterScalarWhereWithAggregatesInput | BatterScalarWhereWithAggregatesInput[]
    OR?: BatterScalarWhereWithAggregatesInput[]
    NOT?: BatterScalarWhereWithAggregatesInput | BatterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Batter"> | number
    name?: StringWithAggregatesFilter<"Batter"> | string
    age?: IntWithAggregatesFilter<"Batter"> | number
    nationality?: StringWithAggregatesFilter<"Batter"> | string
    image?: StringWithAggregatesFilter<"Batter"> | string
    span?: StringWithAggregatesFilter<"Batter"> | string
    matches?: IntWithAggregatesFilter<"Batter"> | number
    innings?: IntWithAggregatesFilter<"Batter"> | number
    notouts?: IntWithAggregatesFilter<"Batter"> | number
    runs?: IntWithAggregatesFilter<"Batter"> | number
    heighestscore?: IntWithAggregatesFilter<"Batter"> | number
    average?: IntWithAggregatesFilter<"Batter"> | number
    ballsfaced?: IntWithAggregatesFilter<"Batter"> | number
    strikerate?: FloatWithAggregatesFilter<"Batter"> | number
    hundreds?: IntWithAggregatesFilter<"Batter"> | number
    fifties?: IntWithAggregatesFilter<"Batter"> | number
    ducks?: IntWithAggregatesFilter<"Batter"> | number
    fours?: IntWithAggregatesFilter<"Batter"> | number
    sixes?: IntWithAggregatesFilter<"Batter"> | number
  }

  export type BowlerWhereInput = {
    AND?: BowlerWhereInput | BowlerWhereInput[]
    OR?: BowlerWhereInput[]
    NOT?: BowlerWhereInput | BowlerWhereInput[]
    id?: IntFilter<"Bowler"> | number
    name?: StringFilter<"Bowler"> | string
    age?: IntFilter<"Bowler"> | number
    nationality?: StringFilter<"Bowler"> | string
    image?: StringFilter<"Bowler"> | string
    span?: StringFilter<"Bowler"> | string
    matches?: IntFilter<"Bowler"> | number
    innings?: IntFilter<"Bowler"> | number
    balls?: IntFilter<"Bowler"> | number
    overs?: IntFilter<"Bowler"> | number
    madeins?: IntFilter<"Bowler"> | number
    runs?: IntFilter<"Bowler"> | number
    wickets?: IntFilter<"Bowler"> | number
    bbi?: StringFilter<"Bowler"> | string
    average?: FloatFilter<"Bowler"> | number
    economy?: FloatFilter<"Bowler"> | number
    strikerate?: FloatFilter<"Bowler"> | number
    fours?: IntFilter<"Bowler"> | number
    fives?: IntFilter<"Bowler"> | number
  }

  export type BowlerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    nationality?: SortOrder
    image?: SortOrder
    span?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    balls?: SortOrder
    overs?: SortOrder
    madeins?: SortOrder
    runs?: SortOrder
    wickets?: SortOrder
    bbi?: SortOrder
    average?: SortOrder
    economy?: SortOrder
    strikerate?: SortOrder
    fours?: SortOrder
    fives?: SortOrder
  }

  export type BowlerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BowlerWhereInput | BowlerWhereInput[]
    OR?: BowlerWhereInput[]
    NOT?: BowlerWhereInput | BowlerWhereInput[]
    name?: StringFilter<"Bowler"> | string
    age?: IntFilter<"Bowler"> | number
    nationality?: StringFilter<"Bowler"> | string
    image?: StringFilter<"Bowler"> | string
    span?: StringFilter<"Bowler"> | string
    matches?: IntFilter<"Bowler"> | number
    innings?: IntFilter<"Bowler"> | number
    balls?: IntFilter<"Bowler"> | number
    overs?: IntFilter<"Bowler"> | number
    madeins?: IntFilter<"Bowler"> | number
    runs?: IntFilter<"Bowler"> | number
    wickets?: IntFilter<"Bowler"> | number
    bbi?: StringFilter<"Bowler"> | string
    average?: FloatFilter<"Bowler"> | number
    economy?: FloatFilter<"Bowler"> | number
    strikerate?: FloatFilter<"Bowler"> | number
    fours?: IntFilter<"Bowler"> | number
    fives?: IntFilter<"Bowler"> | number
  }, "id">

  export type BowlerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    nationality?: SortOrder
    image?: SortOrder
    span?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    balls?: SortOrder
    overs?: SortOrder
    madeins?: SortOrder
    runs?: SortOrder
    wickets?: SortOrder
    bbi?: SortOrder
    average?: SortOrder
    economy?: SortOrder
    strikerate?: SortOrder
    fours?: SortOrder
    fives?: SortOrder
    _count?: BowlerCountOrderByAggregateInput
    _avg?: BowlerAvgOrderByAggregateInput
    _max?: BowlerMaxOrderByAggregateInput
    _min?: BowlerMinOrderByAggregateInput
    _sum?: BowlerSumOrderByAggregateInput
  }

  export type BowlerScalarWhereWithAggregatesInput = {
    AND?: BowlerScalarWhereWithAggregatesInput | BowlerScalarWhereWithAggregatesInput[]
    OR?: BowlerScalarWhereWithAggregatesInput[]
    NOT?: BowlerScalarWhereWithAggregatesInput | BowlerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bowler"> | number
    name?: StringWithAggregatesFilter<"Bowler"> | string
    age?: IntWithAggregatesFilter<"Bowler"> | number
    nationality?: StringWithAggregatesFilter<"Bowler"> | string
    image?: StringWithAggregatesFilter<"Bowler"> | string
    span?: StringWithAggregatesFilter<"Bowler"> | string
    matches?: IntWithAggregatesFilter<"Bowler"> | number
    innings?: IntWithAggregatesFilter<"Bowler"> | number
    balls?: IntWithAggregatesFilter<"Bowler"> | number
    overs?: IntWithAggregatesFilter<"Bowler"> | number
    madeins?: IntWithAggregatesFilter<"Bowler"> | number
    runs?: IntWithAggregatesFilter<"Bowler"> | number
    wickets?: IntWithAggregatesFilter<"Bowler"> | number
    bbi?: StringWithAggregatesFilter<"Bowler"> | string
    average?: FloatWithAggregatesFilter<"Bowler"> | number
    economy?: FloatWithAggregatesFilter<"Bowler"> | number
    strikerate?: FloatWithAggregatesFilter<"Bowler"> | number
    fours?: IntWithAggregatesFilter<"Bowler"> | number
    fives?: IntWithAggregatesFilter<"Bowler"> | number
  }

  export type AllroundersWhereInput = {
    AND?: AllroundersWhereInput | AllroundersWhereInput[]
    OR?: AllroundersWhereInput[]
    NOT?: AllroundersWhereInput | AllroundersWhereInput[]
    id?: IntFilter<"Allrounders"> | number
    name?: StringFilter<"Allrounders"> | string
    age?: IntFilter<"Allrounders"> | number
    image?: StringFilter<"Allrounders"> | string
    nationality?: StringFilter<"Allrounders"> | string
    span?: StringFilter<"Allrounders"> | string
    matches?: IntFilter<"Allrounders"> | number
    innings?: IntFilter<"Allrounders"> | number
    balls?: IntFilter<"Allrounders"> | number
    overs?: IntFilter<"Allrounders"> | number
    madeins?: IntFilter<"Allrounders"> | number
    runs?: IntFilter<"Allrounders"> | number
    wickets?: IntFilter<"Allrounders"> | number
    bbi?: StringFilter<"Allrounders"> | string
    average?: FloatFilter<"Allrounders"> | number
    economy?: FloatFilter<"Allrounders"> | number
    strikerate?: FloatFilter<"Allrounders"> | number
    fours?: IntFilter<"Allrounders"> | number
    fives?: IntFilter<"Allrounders"> | number
  }

  export type AllroundersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    image?: SortOrder
    nationality?: SortOrder
    span?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    balls?: SortOrder
    overs?: SortOrder
    madeins?: SortOrder
    runs?: SortOrder
    wickets?: SortOrder
    bbi?: SortOrder
    average?: SortOrder
    economy?: SortOrder
    strikerate?: SortOrder
    fours?: SortOrder
    fives?: SortOrder
  }

  export type AllroundersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AllroundersWhereInput | AllroundersWhereInput[]
    OR?: AllroundersWhereInput[]
    NOT?: AllroundersWhereInput | AllroundersWhereInput[]
    name?: StringFilter<"Allrounders"> | string
    age?: IntFilter<"Allrounders"> | number
    image?: StringFilter<"Allrounders"> | string
    nationality?: StringFilter<"Allrounders"> | string
    span?: StringFilter<"Allrounders"> | string
    matches?: IntFilter<"Allrounders"> | number
    innings?: IntFilter<"Allrounders"> | number
    balls?: IntFilter<"Allrounders"> | number
    overs?: IntFilter<"Allrounders"> | number
    madeins?: IntFilter<"Allrounders"> | number
    runs?: IntFilter<"Allrounders"> | number
    wickets?: IntFilter<"Allrounders"> | number
    bbi?: StringFilter<"Allrounders"> | string
    average?: FloatFilter<"Allrounders"> | number
    economy?: FloatFilter<"Allrounders"> | number
    strikerate?: FloatFilter<"Allrounders"> | number
    fours?: IntFilter<"Allrounders"> | number
    fives?: IntFilter<"Allrounders"> | number
  }, "id">

  export type AllroundersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    image?: SortOrder
    nationality?: SortOrder
    span?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    balls?: SortOrder
    overs?: SortOrder
    madeins?: SortOrder
    runs?: SortOrder
    wickets?: SortOrder
    bbi?: SortOrder
    average?: SortOrder
    economy?: SortOrder
    strikerate?: SortOrder
    fours?: SortOrder
    fives?: SortOrder
    _count?: AllroundersCountOrderByAggregateInput
    _avg?: AllroundersAvgOrderByAggregateInput
    _max?: AllroundersMaxOrderByAggregateInput
    _min?: AllroundersMinOrderByAggregateInput
    _sum?: AllroundersSumOrderByAggregateInput
  }

  export type AllroundersScalarWhereWithAggregatesInput = {
    AND?: AllroundersScalarWhereWithAggregatesInput | AllroundersScalarWhereWithAggregatesInput[]
    OR?: AllroundersScalarWhereWithAggregatesInput[]
    NOT?: AllroundersScalarWhereWithAggregatesInput | AllroundersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Allrounders"> | number
    name?: StringWithAggregatesFilter<"Allrounders"> | string
    age?: IntWithAggregatesFilter<"Allrounders"> | number
    image?: StringWithAggregatesFilter<"Allrounders"> | string
    nationality?: StringWithAggregatesFilter<"Allrounders"> | string
    span?: StringWithAggregatesFilter<"Allrounders"> | string
    matches?: IntWithAggregatesFilter<"Allrounders"> | number
    innings?: IntWithAggregatesFilter<"Allrounders"> | number
    balls?: IntWithAggregatesFilter<"Allrounders"> | number
    overs?: IntWithAggregatesFilter<"Allrounders"> | number
    madeins?: IntWithAggregatesFilter<"Allrounders"> | number
    runs?: IntWithAggregatesFilter<"Allrounders"> | number
    wickets?: IntWithAggregatesFilter<"Allrounders"> | number
    bbi?: StringWithAggregatesFilter<"Allrounders"> | string
    average?: FloatWithAggregatesFilter<"Allrounders"> | number
    economy?: FloatWithAggregatesFilter<"Allrounders"> | number
    strikerate?: FloatWithAggregatesFilter<"Allrounders"> | number
    fours?: IntWithAggregatesFilter<"Allrounders"> | number
    fives?: IntWithAggregatesFilter<"Allrounders"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    name: string
    email: string
    password: string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type AdminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type AdminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type BatterCreateInput = {
    name: string
    age: number
    nationality: string
    image: string
    span: string
    matches: number
    innings: number
    notouts: number
    runs: number
    heighestscore: number
    average: number
    ballsfaced: number
    strikerate: number
    hundreds: number
    fifties: number
    ducks: number
    fours: number
    sixes: number
  }

  export type BatterUncheckedCreateInput = {
    id?: number
    name: string
    age: number
    nationality: string
    image: string
    span: string
    matches: number
    innings: number
    notouts: number
    runs: number
    heighestscore: number
    average: number
    ballsfaced: number
    strikerate: number
    hundreds: number
    fifties: number
    ducks: number
    fours: number
    sixes: number
  }

  export type BatterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    span?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    innings?: IntFieldUpdateOperationsInput | number
    notouts?: IntFieldUpdateOperationsInput | number
    runs?: IntFieldUpdateOperationsInput | number
    heighestscore?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    ballsfaced?: IntFieldUpdateOperationsInput | number
    strikerate?: FloatFieldUpdateOperationsInput | number
    hundreds?: IntFieldUpdateOperationsInput | number
    fifties?: IntFieldUpdateOperationsInput | number
    ducks?: IntFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    sixes?: IntFieldUpdateOperationsInput | number
  }

  export type BatterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    span?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    innings?: IntFieldUpdateOperationsInput | number
    notouts?: IntFieldUpdateOperationsInput | number
    runs?: IntFieldUpdateOperationsInput | number
    heighestscore?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    ballsfaced?: IntFieldUpdateOperationsInput | number
    strikerate?: FloatFieldUpdateOperationsInput | number
    hundreds?: IntFieldUpdateOperationsInput | number
    fifties?: IntFieldUpdateOperationsInput | number
    ducks?: IntFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    sixes?: IntFieldUpdateOperationsInput | number
  }

  export type BatterCreateManyInput = {
    id?: number
    name: string
    age: number
    nationality: string
    image: string
    span: string
    matches: number
    innings: number
    notouts: number
    runs: number
    heighestscore: number
    average: number
    ballsfaced: number
    strikerate: number
    hundreds: number
    fifties: number
    ducks: number
    fours: number
    sixes: number
  }

  export type BatterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    span?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    innings?: IntFieldUpdateOperationsInput | number
    notouts?: IntFieldUpdateOperationsInput | number
    runs?: IntFieldUpdateOperationsInput | number
    heighestscore?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    ballsfaced?: IntFieldUpdateOperationsInput | number
    strikerate?: FloatFieldUpdateOperationsInput | number
    hundreds?: IntFieldUpdateOperationsInput | number
    fifties?: IntFieldUpdateOperationsInput | number
    ducks?: IntFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    sixes?: IntFieldUpdateOperationsInput | number
  }

  export type BatterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    span?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    innings?: IntFieldUpdateOperationsInput | number
    notouts?: IntFieldUpdateOperationsInput | number
    runs?: IntFieldUpdateOperationsInput | number
    heighestscore?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    ballsfaced?: IntFieldUpdateOperationsInput | number
    strikerate?: FloatFieldUpdateOperationsInput | number
    hundreds?: IntFieldUpdateOperationsInput | number
    fifties?: IntFieldUpdateOperationsInput | number
    ducks?: IntFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    sixes?: IntFieldUpdateOperationsInput | number
  }

  export type BowlerCreateInput = {
    name: string
    age: number
    nationality: string
    image: string
    span: string
    matches: number
    innings: number
    balls: number
    overs: number
    madeins: number
    runs: number
    wickets: number
    bbi: string
    average: number
    economy: number
    strikerate: number
    fours: number
    fives: number
  }

  export type BowlerUncheckedCreateInput = {
    id?: number
    name: string
    age: number
    nationality: string
    image: string
    span: string
    matches: number
    innings: number
    balls: number
    overs: number
    madeins: number
    runs: number
    wickets: number
    bbi: string
    average: number
    economy: number
    strikerate: number
    fours: number
    fives: number
  }

  export type BowlerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    span?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    innings?: IntFieldUpdateOperationsInput | number
    balls?: IntFieldUpdateOperationsInput | number
    overs?: IntFieldUpdateOperationsInput | number
    madeins?: IntFieldUpdateOperationsInput | number
    runs?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    bbi?: StringFieldUpdateOperationsInput | string
    average?: FloatFieldUpdateOperationsInput | number
    economy?: FloatFieldUpdateOperationsInput | number
    strikerate?: FloatFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    fives?: IntFieldUpdateOperationsInput | number
  }

  export type BowlerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    span?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    innings?: IntFieldUpdateOperationsInput | number
    balls?: IntFieldUpdateOperationsInput | number
    overs?: IntFieldUpdateOperationsInput | number
    madeins?: IntFieldUpdateOperationsInput | number
    runs?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    bbi?: StringFieldUpdateOperationsInput | string
    average?: FloatFieldUpdateOperationsInput | number
    economy?: FloatFieldUpdateOperationsInput | number
    strikerate?: FloatFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    fives?: IntFieldUpdateOperationsInput | number
  }

  export type BowlerCreateManyInput = {
    id?: number
    name: string
    age: number
    nationality: string
    image: string
    span: string
    matches: number
    innings: number
    balls: number
    overs: number
    madeins: number
    runs: number
    wickets: number
    bbi: string
    average: number
    economy: number
    strikerate: number
    fours: number
    fives: number
  }

  export type BowlerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    span?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    innings?: IntFieldUpdateOperationsInput | number
    balls?: IntFieldUpdateOperationsInput | number
    overs?: IntFieldUpdateOperationsInput | number
    madeins?: IntFieldUpdateOperationsInput | number
    runs?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    bbi?: StringFieldUpdateOperationsInput | string
    average?: FloatFieldUpdateOperationsInput | number
    economy?: FloatFieldUpdateOperationsInput | number
    strikerate?: FloatFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    fives?: IntFieldUpdateOperationsInput | number
  }

  export type BowlerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    span?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    innings?: IntFieldUpdateOperationsInput | number
    balls?: IntFieldUpdateOperationsInput | number
    overs?: IntFieldUpdateOperationsInput | number
    madeins?: IntFieldUpdateOperationsInput | number
    runs?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    bbi?: StringFieldUpdateOperationsInput | string
    average?: FloatFieldUpdateOperationsInput | number
    economy?: FloatFieldUpdateOperationsInput | number
    strikerate?: FloatFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    fives?: IntFieldUpdateOperationsInput | number
  }

  export type AllroundersCreateInput = {
    name: string
    age: number
    image: string
    nationality: string
    span: string
    matches: number
    innings: number
    balls: number
    overs: number
    madeins: number
    runs: number
    wickets: number
    bbi: string
    average: number
    economy: number
    strikerate: number
    fours: number
    fives: number
  }

  export type AllroundersUncheckedCreateInput = {
    id?: number
    name: string
    age: number
    image: string
    nationality: string
    span: string
    matches: number
    innings: number
    balls: number
    overs: number
    madeins: number
    runs: number
    wickets: number
    bbi: string
    average: number
    economy: number
    strikerate: number
    fours: number
    fives: number
  }

  export type AllroundersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    span?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    innings?: IntFieldUpdateOperationsInput | number
    balls?: IntFieldUpdateOperationsInput | number
    overs?: IntFieldUpdateOperationsInput | number
    madeins?: IntFieldUpdateOperationsInput | number
    runs?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    bbi?: StringFieldUpdateOperationsInput | string
    average?: FloatFieldUpdateOperationsInput | number
    economy?: FloatFieldUpdateOperationsInput | number
    strikerate?: FloatFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    fives?: IntFieldUpdateOperationsInput | number
  }

  export type AllroundersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    span?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    innings?: IntFieldUpdateOperationsInput | number
    balls?: IntFieldUpdateOperationsInput | number
    overs?: IntFieldUpdateOperationsInput | number
    madeins?: IntFieldUpdateOperationsInput | number
    runs?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    bbi?: StringFieldUpdateOperationsInput | string
    average?: FloatFieldUpdateOperationsInput | number
    economy?: FloatFieldUpdateOperationsInput | number
    strikerate?: FloatFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    fives?: IntFieldUpdateOperationsInput | number
  }

  export type AllroundersCreateManyInput = {
    id?: number
    name: string
    age: number
    image: string
    nationality: string
    span: string
    matches: number
    innings: number
    balls: number
    overs: number
    madeins: number
    runs: number
    wickets: number
    bbi: string
    average: number
    economy: number
    strikerate: number
    fours: number
    fives: number
  }

  export type AllroundersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    span?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    innings?: IntFieldUpdateOperationsInput | number
    balls?: IntFieldUpdateOperationsInput | number
    overs?: IntFieldUpdateOperationsInput | number
    madeins?: IntFieldUpdateOperationsInput | number
    runs?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    bbi?: StringFieldUpdateOperationsInput | string
    average?: FloatFieldUpdateOperationsInput | number
    economy?: FloatFieldUpdateOperationsInput | number
    strikerate?: FloatFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    fives?: IntFieldUpdateOperationsInput | number
  }

  export type AllroundersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    span?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    innings?: IntFieldUpdateOperationsInput | number
    balls?: IntFieldUpdateOperationsInput | number
    overs?: IntFieldUpdateOperationsInput | number
    madeins?: IntFieldUpdateOperationsInput | number
    runs?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    bbi?: StringFieldUpdateOperationsInput | string
    average?: FloatFieldUpdateOperationsInput | number
    economy?: FloatFieldUpdateOperationsInput | number
    strikerate?: FloatFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    fives?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BatterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    nationality?: SortOrder
    image?: SortOrder
    span?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    notouts?: SortOrder
    runs?: SortOrder
    heighestscore?: SortOrder
    average?: SortOrder
    ballsfaced?: SortOrder
    strikerate?: SortOrder
    hundreds?: SortOrder
    fifties?: SortOrder
    ducks?: SortOrder
    fours?: SortOrder
    sixes?: SortOrder
  }

  export type BatterAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    notouts?: SortOrder
    runs?: SortOrder
    heighestscore?: SortOrder
    average?: SortOrder
    ballsfaced?: SortOrder
    strikerate?: SortOrder
    hundreds?: SortOrder
    fifties?: SortOrder
    ducks?: SortOrder
    fours?: SortOrder
    sixes?: SortOrder
  }

  export type BatterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    nationality?: SortOrder
    image?: SortOrder
    span?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    notouts?: SortOrder
    runs?: SortOrder
    heighestscore?: SortOrder
    average?: SortOrder
    ballsfaced?: SortOrder
    strikerate?: SortOrder
    hundreds?: SortOrder
    fifties?: SortOrder
    ducks?: SortOrder
    fours?: SortOrder
    sixes?: SortOrder
  }

  export type BatterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    nationality?: SortOrder
    image?: SortOrder
    span?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    notouts?: SortOrder
    runs?: SortOrder
    heighestscore?: SortOrder
    average?: SortOrder
    ballsfaced?: SortOrder
    strikerate?: SortOrder
    hundreds?: SortOrder
    fifties?: SortOrder
    ducks?: SortOrder
    fours?: SortOrder
    sixes?: SortOrder
  }

  export type BatterSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    notouts?: SortOrder
    runs?: SortOrder
    heighestscore?: SortOrder
    average?: SortOrder
    ballsfaced?: SortOrder
    strikerate?: SortOrder
    hundreds?: SortOrder
    fifties?: SortOrder
    ducks?: SortOrder
    fours?: SortOrder
    sixes?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BowlerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    nationality?: SortOrder
    image?: SortOrder
    span?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    balls?: SortOrder
    overs?: SortOrder
    madeins?: SortOrder
    runs?: SortOrder
    wickets?: SortOrder
    bbi?: SortOrder
    average?: SortOrder
    economy?: SortOrder
    strikerate?: SortOrder
    fours?: SortOrder
    fives?: SortOrder
  }

  export type BowlerAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    balls?: SortOrder
    overs?: SortOrder
    madeins?: SortOrder
    runs?: SortOrder
    wickets?: SortOrder
    average?: SortOrder
    economy?: SortOrder
    strikerate?: SortOrder
    fours?: SortOrder
    fives?: SortOrder
  }

  export type BowlerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    nationality?: SortOrder
    image?: SortOrder
    span?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    balls?: SortOrder
    overs?: SortOrder
    madeins?: SortOrder
    runs?: SortOrder
    wickets?: SortOrder
    bbi?: SortOrder
    average?: SortOrder
    economy?: SortOrder
    strikerate?: SortOrder
    fours?: SortOrder
    fives?: SortOrder
  }

  export type BowlerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    nationality?: SortOrder
    image?: SortOrder
    span?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    balls?: SortOrder
    overs?: SortOrder
    madeins?: SortOrder
    runs?: SortOrder
    wickets?: SortOrder
    bbi?: SortOrder
    average?: SortOrder
    economy?: SortOrder
    strikerate?: SortOrder
    fours?: SortOrder
    fives?: SortOrder
  }

  export type BowlerSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    balls?: SortOrder
    overs?: SortOrder
    madeins?: SortOrder
    runs?: SortOrder
    wickets?: SortOrder
    average?: SortOrder
    economy?: SortOrder
    strikerate?: SortOrder
    fours?: SortOrder
    fives?: SortOrder
  }

  export type AllroundersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    image?: SortOrder
    nationality?: SortOrder
    span?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    balls?: SortOrder
    overs?: SortOrder
    madeins?: SortOrder
    runs?: SortOrder
    wickets?: SortOrder
    bbi?: SortOrder
    average?: SortOrder
    economy?: SortOrder
    strikerate?: SortOrder
    fours?: SortOrder
    fives?: SortOrder
  }

  export type AllroundersAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    balls?: SortOrder
    overs?: SortOrder
    madeins?: SortOrder
    runs?: SortOrder
    wickets?: SortOrder
    average?: SortOrder
    economy?: SortOrder
    strikerate?: SortOrder
    fours?: SortOrder
    fives?: SortOrder
  }

  export type AllroundersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    image?: SortOrder
    nationality?: SortOrder
    span?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    balls?: SortOrder
    overs?: SortOrder
    madeins?: SortOrder
    runs?: SortOrder
    wickets?: SortOrder
    bbi?: SortOrder
    average?: SortOrder
    economy?: SortOrder
    strikerate?: SortOrder
    fours?: SortOrder
    fives?: SortOrder
  }

  export type AllroundersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    image?: SortOrder
    nationality?: SortOrder
    span?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    balls?: SortOrder
    overs?: SortOrder
    madeins?: SortOrder
    runs?: SortOrder
    wickets?: SortOrder
    bbi?: SortOrder
    average?: SortOrder
    economy?: SortOrder
    strikerate?: SortOrder
    fours?: SortOrder
    fives?: SortOrder
  }

  export type AllroundersSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    matches?: SortOrder
    innings?: SortOrder
    balls?: SortOrder
    overs?: SortOrder
    madeins?: SortOrder
    runs?: SortOrder
    wickets?: SortOrder
    average?: SortOrder
    economy?: SortOrder
    strikerate?: SortOrder
    fours?: SortOrder
    fives?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}