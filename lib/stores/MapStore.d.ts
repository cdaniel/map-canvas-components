import { Dispatcher } from "flux";
import FluxStore from './FluxStore';
import { Event } from '../dispatcher/MapEditorDispatcher';
import IMapState from '../types/MapState';
declare class MapStore extends FluxStore<IMapState> {
    constructor(dispatcher: Dispatcher<Event>);
    getState(): IMapState;
}
declare const mapStoreInstance: MapStore;
export default mapStoreInstance;
