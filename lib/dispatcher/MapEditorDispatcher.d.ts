import { Dispatcher } from 'flux';
export declare class TypedEvent<P> {
    payload: P;
    constructor(payload: P);
}
export declare type Event = TypedEvent<any>;
export declare const MapEditorDispatcher: Dispatcher<TypedEvent<any>>;
