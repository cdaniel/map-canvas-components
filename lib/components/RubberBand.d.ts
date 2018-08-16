import * as React from 'react';
export interface IRubberbandProps {
    startPos: {
        left: number;
        top: number;
    };
    endPos: {
        left: number;
        top: number;
    };
    parentHeight: number;
    parentWidth: number;
}
export default class RubberBand extends React.Component<IRubberbandProps, any> {
    constructor(props: IRubberbandProps);
    render(): JSX.Element | null;
}
