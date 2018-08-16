import * as React from 'react';
export interface IProps {
    name: string;
    icon: any;
    action: any;
    connection: any;
}
export default class NodeConnectionMenu extends React.Component<IProps, any> {
    constructor(props: IProps);
    render(): JSX.Element;
    onMouseOverFunction: () => void;
    onMouseLeaveFunction: () => void;
    clickWrapper: () => (event: any) => void;
}
