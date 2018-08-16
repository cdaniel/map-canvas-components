import * as React from 'react';
import { jsPlumbInstance } from "jsplumb";
import MapEditorState from "../types/MapEditorState";
export interface IProps {
    connectionStyler: (type: string) => any | null;
    jsPlumbInstance: jsPlumbInstance;
    styler: (type: string) => HTMLDivElement | any | null;
}
export default class MapCanvas extends React.Component<IProps, MapEditorState> {
    private jsPlumbInstance;
    private input;
    constructor(props: IProps);
    componentWillMount: () => void;
    componentWillUnmount: () => void;
    componentDidUpdate: () => void;
    constructRubberBand: () => JSX.Element | null;
    render(): JSX.Element;
    private setContainer;
    private mouseDown;
    private mouseUp;
    private mouseMove;
    private connectionDragStarted;
    private connectionDragStopped;
    private beforeDropListener;
    private onResize;
    private onChange;
    private renderNodes;
    private selectSelectedNodes;
    private renderConnections;
}
