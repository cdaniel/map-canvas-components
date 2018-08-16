import { Dispatcher } from "flux";
import FluxStore from './FluxStore';
import { jsPlumbInstance } from "jsplumb";
import { Event } from '../dispatcher/MapEditorDispatcher';
import IMapEditorState from '../types/MapEditorState';
declare class MapEditorStore extends FluxStore<IMapEditorState> {
    constructor(dispatcher: Dispatcher<Event>);
    getState(): IMapEditorState;
    setJsPlumbInstance(plumb: jsPlumbInstance): void;
    verifyTarget(params: any): boolean;
    normalizeCoord(retrievedEvolution: number, retrievedVisibility: number): {
        evolution: number;
        visibility: number;
    };
}
declare const mapEditorStoreInstance: MapEditorStore;
export default mapEditorStoreInstance;
