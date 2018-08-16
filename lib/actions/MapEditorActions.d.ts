import { TypedEvent } from '../dispatcher/MapEditorDispatcher';
export declare class DragStartedEvent extends TypedEvent<any> {
}
export declare class DragStoppedEvent extends TypedEvent<any> {
}
export declare class MapResizeEvent extends TypedEvent<any> {
}
export declare class FocusNodeEvent extends TypedEvent<any> {
}
export declare class FocusAddNodeEvent extends TypedEvent<any> {
}
export declare class BlurAllEvent extends TypedEvent<any> {
}
export declare class BlurNodeEvent extends TypedEvent<any> {
}
export declare class ScopeActivatedEvent extends TypedEvent<any> {
}
export declare class ScopeDectivatedEvent extends TypedEvent<any> {
}
export declare class ConnectionSendForProcessing extends TypedEvent<any> {
}
export declare class FocusConnectionEvent extends TypedEvent<any> {
}
export declare class BlurConnectionEvent extends TypedEvent<any> {
}
export declare function startDrag(): void;
export declare function stopDrag(type: string, params: any): void;
export declare function resize(width: number, height: number, input: HTMLDivElement | null): void;
export declare function focusNode(id: string): void;
export declare function addNodeToFocus(id: string): void;
export declare function blurAll(): void;
export declare function blurNode(id: string): void;
export declare function scopeDragActivated(scopeId: string, sourceId: string): void;
export declare function scopeDragDectivated(scopeId: string, targetId: string): void;
export declare function turnOffRecentDropTarget(): void;
export declare function focusConnection(sourceId: string, targetId: string, scope: string): void;
export declare function blurConnection(sourceId: string, targetId: string, scope: string): void;
