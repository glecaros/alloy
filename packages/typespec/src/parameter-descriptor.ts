import { Children, Namekey, Ref, Refkey } from "@alloy-js/core";

/**
 * Information for a TypeSpec generic type parameter.
 */
export interface TypeParameterDescriptor {
  /**
   * The name of the type parameter.
   */
  readonly name: string | Namekey;

  /**
   * The extends constraint for the type parameter.
   */
  readonly extends?: Children;

  /**
   * The default type of the type parameter.
   */
  readonly default?: Children;

  /**
   * A refkey or array of refkeys for this type parameter.
   */
  readonly refkey?: Refkey | Refkey[];
}

export interface TypeReferenceDescriptor {
  readonly kind: "Reference";
  readonly name: string | Namekey;
  readonly refKey: Refkey | Refkey[];
}

export interface ModelDescriptor {
  readonly kind: "Model";
  readonly name: string | Namekey;
}

export interface EnumDescriptor {
  readonly kind: "Enum";
  readonly name: string | Namekey;
}

export interface UnionDescriptor {
  readonly kind: "Union";
  readonly name: string | Namekey;
}

export interface ScalarDescriptor {
  readonly kind: "Scalar";
  readonly name: string | Namekey;
}

export interface IntrinsicDescriptor {
  readonly kind: "Intrinsic";
  readonly name: string;
}

export interface StringLiteralDescriptor {
  readonly kind: "Literal";
  readonly type: "string";
  readonly value: string;
}

export interface NumericLiteralDescriptor {
  readonly kind: "Literal";
  readonly type: "number";
  readonly value: number;
}

export interface BooleanLiteralDescriptor {
  readonly kind: "Literal";
  readonly type: "boolean";
  readonly value: boolean;
}

export type LiteralDescriptor =
  | StringLiteralDescriptor
  | NumericLiteralDescriptor
  | BooleanLiteralDescriptor;

export type TypeDescriptor = ModelDescriptor | EnumDescriptor | UnionDescriptor | ScalarDescriptor | IntrinsicDescriptor | LiteralDescriptor | TypeReferenceDescriptor;