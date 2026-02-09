import { Block, For, Show } from "@alloy-js/core";

export interface ModelProps {
  name: string;
  members: Map<string, typeof Model>;
}

// TODO this is a Named union, we also need to implement support for 
// union expressions, namely: `alias UnionExpression = Type1 | Type2 | ...; 
export function Model(props: ModelProps) {
  // TODO figure out the right way to assert this
  // assert(props.variants.size > 0, "Unions must have at least one variant");
  return (
    <>
      model {props.name}{" "}
      <Block>
        <For each={props.members.entries()} semicolon hardline enderPunctuation>
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
