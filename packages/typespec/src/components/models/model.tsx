import { Block, Child, For, Show } from "@alloy-js/core";
import { ValueOrArray } from "../../util.js";

export enum InheritanceType {
  Extends = "extends",
  Is = "is",
}

export interface ModelProps {
  name: string;
  inherits?: [InheritanceType, Child];
  
  spreads?: ValueOrArray<Child>;

  members?: Map<string, Child>;
}

// TODO this is a Named union, we also need to implement support for
// union expressions, namely: `alias UnionExpression = Type1 | Type2 | ...;
export function Model(props: ModelProps) {
  // TODO figure out the right way to assert this
  // assert(props.variants.size > 0, "Unions must have at least one variant");

  const members = props.members ?? new Map();

  return (
    <>
      model {props.name}{" "}
      <Show when={props.inherits?.[0] === InheritanceType.Extends}>
        extends {props.inherits?.[1]} 
      </Show>
      <Show when={props.inherits?.[0] === InheritanceType.Is}>
        is {props.inherits?.[1]} 
      </Show>
      <Block>
        <For each={members.entries()} semicolon hardline enderPunctuation>
          {([name, value]) => (
            <>
              {name}: {value}
            </>
          )}
        </For>
      </Block>
    </>
  );
}
