import { expect, it } from "vitest";
import { toSourceText } from "./utils.jsx";
import { Documentation } from "#components/Documentation.jsx";
import { d } from "@alloy-js/core/testing";

it("Should render multiline docs correctly", () => {
    const doc = d`
        This is a test
        of multiline
        documentation.`;
  const result = toSourceText(
    <Documentation doc={doc} />
  );
  expect(result).toBe(d`
    /**
     * This is a test
     * of multiline
     * documentation.
     */`);
});

it("Should render single line docs correctly", () => {
  const doc = "This is a test of single line documentation.";
  const result = toSourceText(
    <Documentation doc={doc} />
  );
  expect(result).toBe("/** This is a test of single line documentation. */");
});
