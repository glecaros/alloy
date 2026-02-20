import { Block, Child, For, Indent, Show } from "@alloy-js/core";

export enum InheritanceType {
  Extends = "extends",
  Is = "is",
}

export interface ModelProps {
  // Name is optional for inline defined models
  name?: string;

  // The usage of 'is' and 'extends' is mutually exclussive
  inherits?: [InheritanceType, Child];

  // multiple spreads can be defined per model
  spreads?: Child[];

  // models can be empty
  members?: Map<string, Child>;
}

export function Model(props: ModelProps) {
  const members = props.members ?? new Map();
  const spreads = props.spreads ?? new Array();
  return (
    <>
      <Show when={Boolean(props.name)}>model {props.name} </Show>
      <Show when={props.inherits?.[0] === InheritanceType.Extends}>
        extends {props.inherits?.[1]}
      </Show>
      <Show when={props.inherits?.[0] === InheritanceType.Is}>
        is {props.inherits?.[1]}
      </Show>
      <Block>
        <For each={spreads} semicolon hardline enderPunctuation>
          {(child) => (
            <>
              <Indent>...{child}</Indent>
            </>
          )}
        </For>
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
