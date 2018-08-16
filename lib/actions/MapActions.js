var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* tslint:disable max-classes-per-file */
import { MapEditorDispatcher, TypedEvent } from '../dispatcher/MapEditorDispatcher';
var NewNodeIntentEvent = /** @class */ (function (_super) {
    __extends(NewNodeIntentEvent, _super);
    function NewNodeIntentEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewNodeIntentEvent;
}(TypedEvent));
export { NewNodeIntentEvent };
var LoadMapEvent = /** @class */ (function (_super) {
    __extends(LoadMapEvent, _super);
    function LoadMapEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LoadMapEvent;
}(TypedEvent));
export { LoadMapEvent };
;
var NodeDraggedEvent = /** @class */ (function (_super) {
    __extends(NodeDraggedEvent, _super);
    function NodeDraggedEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NodeDraggedEvent;
}(TypedEvent));
export { NodeDraggedEvent };
var InitiateNodeDeletionEvent = /** @class */ (function (_super) {
    __extends(InitiateNodeDeletionEvent, _super);
    function InitiateNodeDeletionEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InitiateNodeDeletionEvent;
}(TypedEvent));
export { InitiateNodeDeletionEvent };
var InitiateConnection = /** @class */ (function (_super) {
    __extends(InitiateConnection, _super);
    function InitiateConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InitiateConnection;
}(TypedEvent));
export { InitiateConnection };
var InitiateConnectionDeletion = /** @class */ (function (_super) {
    __extends(InitiateConnectionDeletion, _super);
    function InitiateConnectionDeletion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InitiateConnectionDeletion;
}(TypedEvent));
export { InitiateConnectionDeletion };
var InitiateConnectionEdit = /** @class */ (function (_super) {
    __extends(InitiateConnectionEdit, _super);
    function InitiateConnectionEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InitiateConnectionEdit;
}(TypedEvent));
export { InitiateConnectionEdit };
export function initiateNewNodeCreationProcess(type, coords) {
    MapEditorDispatcher.dispatch(new NewNodeIntentEvent({
        coords: coords, type: type,
    }));
}
export function loadMap(map) {
    MapEditorDispatcher.dispatch(new LoadMapEvent({
        map: map,
    }));
}
export function nodeWasMoved(id, coords) {
    MapEditorDispatcher.dispatch(new NodeDraggedEvent({ id: id, coords: coords }));
}
export function initiateNodeDeletion(id) {
    MapEditorDispatcher.dispatch(new InitiateNodeDeletionEvent({ id: id }));
}
export function connectionInitiated(scope, sourceId, targetId) {
    MapEditorDispatcher.dispatch(new InitiateConnection({ scope: scope, sourceId: sourceId, targetId: targetId }));
}
export function initiateConnectionDeletion(sourceId, targetId, scope) {
    MapEditorDispatcher.dispatch(new InitiateConnectionDeletion({ scope: scope, sourceId: sourceId, targetId: targetId }));
}
export function initiateConnectionEdit(sourceId, targetId, scope) {
    MapEditorDispatcher.dispatch(new InitiateConnectionEdit({ scope: scope, sourceId: sourceId, targetId: targetId }));
}
//# sourceMappingURL=MapActions.js.map