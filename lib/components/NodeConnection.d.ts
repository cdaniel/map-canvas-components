import * as React from 'react';
import { jsPlumbInstance } from "jsplumb";
export interface IConnectionProps {
    focused: boolean;
    jsPlumbInstance: jsPlumbInstance;
    label?: string;
    scope: string;
    sourceId: string;
    targetId: string;
    styler: (type: string) => string | any;
}
export default class NodeConnection extends React.Component<IConnectionProps, any> {
    private jsPlumbInstance;
    constructor(props: IConnectionProps);
    render(): null;
    buildCustomMenuOverlay: (menu: any) => HTMLDivElement;
    componentDidMount: () => void;
    componentDidUpdate: () => void;
    componentWillUnmount: () => void;
    private clickHandler;
}
