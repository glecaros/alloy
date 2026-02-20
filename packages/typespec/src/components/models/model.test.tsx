import { Output } from "@alloy-js/core";
import { d } from "@alloy-js/core/testing";
import { expect, it } from "vitest";
import { SourceFile } from "../source-file/source-file.jsx";
import { InheritanceType, Model } from "./model.jsx";

it("Empty model", () => {
  expect(
    <Output>
      <SourceFile path="main.tsp">
        <Model name="Animals" />
      </SourceFile>
    </Output>,
  ).toRenderTo({
    "main.tsp": d`
    model Animals {}
        `,
  });
});

it("Model 'is' another model", () => {
  expect(
    <Output>
      <SourceFile path="main.tsp">
        <Model name="Cat" inherits={[InheritanceType.Is, "Animal"]} />
      </SourceFile>
    </Output>,
  ).toRenderTo({
    "main.tsp": d`
    model Cat is Animal{}
        `,
  });
});

it("Model 'extends' another model", () => {
  expect(
    <Output>
      <SourceFile path="main.tsp">
        <Model name="Cat" inherits={[InheritanceType.Extends, "Animal"]} />
      </SourceFile>
    </Output>,
  ).toRenderTo({
    "main.tsp": d`
    model Cat extends Animal{}
        `,
  });
});

it("Model 'extends' another model and 'spreads' another one", () => {
  expect(
    <Output>
      <SourceFile path="main.tsp">
        <Model
          name="Cat"
          inherits={[InheritanceType.Extends, "Animal"]}
          spreads={Array.of("Feline")}
        />
      </SourceFile>
    </Output>,
  ).toRenderTo({
    "main.tsp": d`
    model Cat extends Animal{
    
        ...Feline;
    }
        `,
  });
});
