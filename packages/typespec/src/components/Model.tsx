import { Block, Children, childrenArray, Show } from "@alloy-js/core";
import { Documentation } from "./Documentation.jsx";
import { Name } from "./Name.jsx";
import { ModelReference } from "./ModelReference.jsx";
import { TypeParameterDescriptor } from "../parameter-descriptor.js";

export interface ModelProps {
  doc: string;
  name?: string;
  baseModel?: string;
  decorators?: Children;
  children?: Children;
  typeParameters?: TypeParameterDescriptor[];
}

export function Model(props: ModelProps) {
  const { doc, name, baseModel, } = props;

  const decorators = childrenArray(() => props.decorators);
  const children = childrenArray(() => props.children);

  return (
    <>
      <Show when={Boolean(doc)}>
        <Documentation doc={doc!} />
        <hbr />
      </Show>
      { decorators }
      <Show when={Boolean(name)}>
        model <Name name={name!} />
      </Show>
      <Show when={Boolean(baseModel)}>
        <>extends <ModelReference model={baseModel!} /></>
      </Show>
      <Block>
        {children}
      </Block>
    </>
  );
}
