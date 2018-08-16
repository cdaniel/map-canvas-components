import { TypedEvent } from '../dispatcher/MapEditorDispatcher';
import IMapState from "../types/MapState";
export declare class NewNodeIntentEvent extends TypedEvent<any> {
}
export declare class LoadMapEvent extends TypedEvent<any> {
}
export declare class NodeDraggedEvent extends TypedEvent<any> {
}
export declare class InitiateNodeDeletionEvent extends TypedEvent<any> {
}
export declare class InitiateConnection extends TypedEvent<any> {
}
export declare class InitiateConnectionDeletion extends TypedEvent<any> {
}
export declare class InitiateConnectionEdit extends TypedEvent<any> {
}
export declare function initiateNewNodeCreationProcess(type: string, coords: any): void;
export declare function loadMap(map: IMapState): void;
export declare function nodeWasMoved(id: string, coords: any): void;
export declare function initiateNodeDeletion(id: string): void;
export declare function connectionInitiated(scope: any, sourceId: string | any, targetId: string): void;
export declare function initiateConnectionDeletion(sourceId: string, targetId: string, scope: string): void;
export declare function initiateConnectionEdit(sourceId: string, targetId: string, scope: string): void;
