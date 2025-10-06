import { For, Match, Switch } from "@alloy-js/core";

export interface DocumentationProps {
  doc: string;
}

export function Documentation({ doc }: DocumentationProps) {
  const isMultiLine = doc.includes("\n");
  return (
    <Switch>
      <Match when={isMultiLine}>
        <>/**<hbr /></>
        <For hardline ender={<hbr />} each={doc.split("\n")}>
          {(line) => <> * {line}</>}
        </For>
        <> */</>
      </Match>
      <Match when={!isMultiLine}>/** {doc} */</Match>
    </Switch>
  );
}
