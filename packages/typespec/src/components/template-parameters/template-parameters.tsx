import { Children, For, Indent } from "@alloy-js/core";

export interface TemplateParameterDescriptor {
  name: string;
  extends?: Children;
  default?: Children;
}

export interface TemplateParametersProps {
  parameters: (string | TemplateParameterDescriptor)[];
}

export function TemplateParameters(props: TemplateParametersProps) {
  const parameters = normalizeParameters(props.parameters);

  return (
    <>
      {"<"}
      <group>
        <Indent softline>
          <For each={parameters} comma line>
            {(param) => (
              <>
                {param.name}
                {param.extends && <> extends {param.extends}</>}
                {param.default && <> = {param.default}</>}
              </>
            )}
          </For>
        </Indent>
      </group>
      {">"}
    </>
  );
}

function normalizeParameters(
  parameters: (string | TemplateParameterDescriptor)[],
): TemplateParameterDescriptor[] {
  return parameters.map((param) => {
    if (typeof param === "string") {
      return { name: param };
    }
    return param;
  });
}
