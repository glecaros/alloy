import { Output } from "@alloy-js/core";
import { d } from "@alloy-js/core/testing";
import { expect, it } from "vitest";
import { SourceFile } from "../source-file/source-file.jsx";
import { Union } from "./union.jsx";

it("renders namespaces when a file level namespace is present", () => {
  expect(
    <Output>
      <SourceFile path="main.tsp">
        <Union
          name="Animals"
          variants={
            new Map([
              ["dog", '"dog"'],
              ["cat", '"cat"'],
            ])
          }
        />
      </SourceFile>
    </Output>,
  ).toRenderTo({
    "main.tsp": d`
    union Animals {
      dog: "dog",
      cat: "cat"
    }
        `,
  });
});
