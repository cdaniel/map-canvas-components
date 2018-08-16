/// <reference types="node" />
import { Dispatcher } from 'flux';
import { Event } from '../dispatcher/MapEditorDispatcher';
import { EventEmitter } from 'events';
declare class FluxStore<TState> {
    protected onDispatch: (action: Event) => void;
    dispatchToken: string;
    protected changed: boolean;
    protected emitter: EventEmitter;
    protected dispatcher: Dispatcher<Event>;
    protected cleanStateFn: () => TState;
    protected state: TState;
    constructor(dispatcher: Dispatcher<Event>, onDispatch: (action: Event) => void, cleanStateFn: () => TState);
    /**
     * Is idempotent per dispatched event
     */
    emitChange(): void;
    hasChanged(): boolean;
    addChangeListener(callback: () => void): void;
    removeChangeListener(callback: () => void): void;
    cleanState(): void;
    invokeOnDispatch(payload: Event): void;
}
export default FluxStore;
