import { Children, Indent, Show } from "@alloy-js/core";
import { Documentation } from "./Documentation.jsx";
import { Name } from "./Name.jsx";
import { ModelReference } from "./ModelReference.jsx";

export interface ModelProps {
  doc: string;
  name?: string;
  baseModel?: string;
  decorators?: Children;
  children?: Children;
}

export function ModelComponent(props: ModelProps) {
  const { doc, name, baseModel, decorators, children } = props;

  return (
    <>
      <Show when={Boolean(doc)}>
        <Documentation doc={doc!} />
        <hbr />
      </Show>
      {{ decorators }}
      <Show when={Boolean(name)}>
        model <Name name={name!} />
      </Show>
      <Show when={Boolean(baseModel)}>
        <>extends <ModelReference model={baseModel!} /></>
      </Show>
      {" {"}
      <Indent>
        {children}
      </Indent>
      <hbr />
      {"}"}
    </>
  );
}
