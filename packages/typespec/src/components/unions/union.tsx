import { Block, For } from "@alloy-js/core";
import { useNamespaceContext } from "../../contexts/namespace.js";
import { NamespaceSymbol } from "../../symbols/namespace.js";

export interface UnionProps {
  variants: Map<string, string>; // empty unions are not supported
  name: string;
  namespace?: NamespaceSymbol;
}

export function Union(props: UnionProps) {
  const namespaceCtx = useNamespaceContext();
  const namespace = props.namespace ?? namespaceCtx?.symbol;

  // TODO figure out the right way to assert this
  // assert(props.variants.size > 0, "Unions must have at least one variant");
  return (
    <>
      union {props.name}{" "}
      <Block>
        <For each={props.variants.entries()} comma hardline>
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
