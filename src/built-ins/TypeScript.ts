export const TypeScriptExtension = {};

declare global {
  /**
   * Mutation types.
  **/

  type Mutable<T> = { -readonly [K in keyof T]: T[K] };

  type Immutable<T> = { readonly [K in keyof T]: T[K] };

  /**
   * Range types.
  **/

  type FromTo<T> = { from: T, to: T };

  type RangedLinkedList<T> = { head: T, tail: T };
}