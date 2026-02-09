import { Block, For, Show } from "@alloy-js/core";

export interface UnionProps {
  variants: Map<string, string>; // empty unions are not supported
  expandable?: boolean;
  name: string;
}

// TODO this is a Named union, we also need to implement support for 
// union expressions, namely: `alias UnionExpression = Type1 | Type2 | ...; 
export function Union(props: UnionProps) {
  // TODO figure out the right way to assert this
  // assert(props.variants.size > 0, "Unions must have at least one variant");
  return (
    <>
      union {props.name}{" "}
      <Block>
        <Show when={props.expandable}>
          string,
          <hbr />
        </Show>
        <For each={props.variants.entries()} comma hardline enderPunctuation>
          {([key, value]) => (
            <>
              {key}: {value}
            </>
          )}
        </For>
      </Block>
    </>
  );
}
