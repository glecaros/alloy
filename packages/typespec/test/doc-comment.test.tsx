import { it } from "vitest";
import { toSourceText } from "./utils.jsx";
import { DocCommentTagParam, OperationDocComment } from "#components/doc-comment.jsx";
import { DocCommentTagReturns } from "#components/doc-comment.jsx";
import { DocCommentMarkdown } from "#components/doc-comment.jsx";
import { code, text, } from "@alloy-js/core";
import { DocComment } from "#components/doc-comment.jsx";


it("Should render", () => {
    const result = toSourceText(
        <DocComment>
            This is a summary.
            <DocCommentTagParam name="paramName" description="the description" />
            <DocCommentTagParam name="paramName" description="the description" />
            <DocCommentTagReturns description="the return description" />
        </DocComment>
    );
    console.log(result);
    const result2 = toSourceText(
        <DocComment>
            asdf

            <DocCommentTagParam name="paramName" description="the description" />
            <DocCommentTagParam name="paramName" description="the description" />
            <DocCommentTagReturns description="the return description" />
        </DocComment>
    );
    console.log(result2);
});