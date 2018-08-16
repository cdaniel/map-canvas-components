import * as React from 'react';
import { jsPlumbInstance } from "jsplumb";
export interface INodeProps {
    activeDragScope: {
        sourceId: string;
        scopeId: string;
    } | null;
    evolution: number;
    id: string;
    jsPlumbInstance: jsPlumbInstance;
    multiNodeFocus: boolean;
    name: string;
    nodeDroppedOntoId: string | any;
    parentHeight: number;
    parentWidth: number;
    styler: (type: string) => HTMLDivElement | any | null;
    type: string;
    visibility: number;
    focused: boolean;
}
export default class Node extends React.Component<INodeProps, any> {
    private jsPlumbInstance;
    private input;
    private dependencyStubs;
    constructor(props: INodeProps);
    prepareDragConnectionComponents(): any[] | null;
    shouldBecomeDragTarget(): boolean;
    render(): JSX.Element;
    onDeleteMenuOver: () => void;
    onMoveMenuOver: () => void;
    onMouseOver: (hoveredMenu: string) => void;
    onMouseLeave: () => void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    moveStopped: (event: any) => void;
    updateMovableState(): void;
    componentWillUnmount(): void;
    reconcileDragConnectionStubs: () => void;
    componentWillReceiveProps(nextProps: INodeProps): void;
    storeNativeHandle: (input: any) => void;
    onMouseDown: (event: React.SyntheticEvent<Element>) => void;
    private computedLookUpdate;
}
