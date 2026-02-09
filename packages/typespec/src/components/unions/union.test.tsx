import { Output } from "@alloy-js/core";
import { d } from "@alloy-js/core/testing";
import { expect, it } from "vitest";
import { SourceFile } from "../source-file/source-file.jsx";
import { Union } from "./union.jsx";

it("Name to string only closed union.", () => {
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
      cat: "cat",
    }
        `,
  });
});

it("Name to string only expandable union.", () => {
  expect(
    <Output>
      <SourceFile path="main.tsp">
        <Union
          name="Animals"
          expandable
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
      string,
      dog: "dog",
      cat: "cat",
    }
        `,
  });
});
