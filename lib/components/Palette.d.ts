import * as React from 'react';
import * as jsPlumb from './../../node_modules/jsplumb';
import { jsPlumbInstance } from "jsplumb";
import { ReactElement } from "react";
interface IPaletteComponent {
    id: number;
    key: string;
    label: string;
    visualElement: ReactElement<HTMLDivElement>;
}
export interface IPaletteComponents extends Array<IPaletteComponent> {
}
export interface IPaletteProps {
    components: IPaletteComponents;
    jsPlumbInstance: jsPlumbInstance;
}
export default class Palette extends React.Component<IPaletteProps, object> {
    private components;
    private jsPlumbInstance;
    constructor(props: IPaletteProps);
    renderComponent(component: IPaletteComponent): JSX.Element;
    makeDraggable(type: string, input: {}): jsPlumb.jsPlumbInstance | undefined;
    renderComponents(components: IPaletteComponents): JSX.Element[];
    render(): JSX.Element;
}
export {};
