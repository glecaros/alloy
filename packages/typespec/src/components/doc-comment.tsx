import { children, Children, childrenArray, List, Show } from "@alloy-js/core";

export interface DocCommentTagParamProps {
    name: string;
    description: Children;
}

export function DocCommentTagParam(props: DocCommentTagParamProps) {
    return (
        <>@param {props.name} {props.description}</>
    );
}

export interface DocCommentTagReturnsProps {
    description: Children;
}

export function DocCommentTagReturns(props: DocCommentTagReturnsProps) {
    return (
        <>@returns {props.description}</>
    );
}

export interface OperationDocCommentProps {
    children: Children;
}

export function OperationDocComment(props: OperationDocCommentProps) {

}

export interface DocCommentProps {
    description: Children | undefined;
    params: Children | undefined;
    returns: Children | undefined;
    children: Children | undefined;
}

export function DocComment(props: DocCommentProps) {
    const children = childrenArray(() => props.children);
    if (children.length > 1) {
    return (
        <>
            {"/**"}
        <align string=" * ">
            <hbr />
            <List>{children}</List>
        </align>
            <hbr />
            {" */"}
        </>
    );
} else {
    return (
        <>
            {"/** "}
            {props.children}
            {" */"}
        </>
    );
}
}

export interface DocWhenProps {
    children: Children;
}
export function DocWhen(props: DocWhenProps) {
    return (
        <Show when={Boolean(props.children)}>
            <DocComment>{props.children}</DocComment>
            <hbr />
        </Show>
    );
}