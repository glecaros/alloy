import { Match, Switch } from "@alloy-js/core";
import {
  Enum,
  IntrinsicType,
  LiteralType,
  Model,
  Scalar,
  Type,
  Union,
} from "@typespec/compiler";
import { Model } from "./Model.jsx";
import { useTsp } from "@typespec/emitter-framework";
import { ScalarComponent } from "./ScalarComponent.jsx";
import { UnionComponent } from "./UnionComponent.jsx";
import { EnumComponent } from "./EnumComponent.jsx";
import { LiteralDescriptor, TypeDescriptor } from "../parameter-descriptor.js";

export interface TypeProps {
  type: TypeDescriptor;
}

export function TypeComponent({ type }: TypeProps) {
  return (
    <Switch>
      <Match when={$.model.is(type)}>
        <ModelComponent model={type as Model} />
      </Match>
      <Match when={$.scalar.is(type)}>
        <ScalarComponent scalar={type as Scalar} />
      </Match>
      <Match when={$.enum.is(type)}>
        <EnumComponent enumeration={type as Enum} />
      </Match>
      <Match when={$.union.is(type)}>
        <UnionComponent union={type as Union} />
      </Match>
      <Match when={$.literal.is(type)}>
        <LiteralComponent literal={type as LiteralType} />
      </Match>
      <Match when={$.intrinsic.is(type)}>{(type as IntrinsicType).name}</Match>
    </Switch>
  );
}

export interface LiteralProps {
  literal: LiteralType;
}

export function LiteralComponent({ literal }: LiteralDescriptor) {
  return (
    <>
      <Switch>
        <Match when={$.literal.isString(literal)}>"{literal.value}"</Match>
        <Match when={$.literal.isNumeric(literal)}>{literal.value}</Match>
        <Match when={$.literal.isBoolean(literal)}>
          {literal.value ? "true" : "false"}
        </Match>
      </Switch>
    </>
  );
}
