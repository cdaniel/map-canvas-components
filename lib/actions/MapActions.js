"use strict";
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
exports.__esModule = true;
/* tslint:disable max-classes-per-file */
var MapEditorDispatcher_1 = require("../dispatcher/MapEditorDispatcher");
var NewNodeIntentEvent = /** @class */ (function (_super) {
    __extends(NewNodeIntentEvent, _super);
    function NewNodeIntentEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewNodeIntentEvent;
}(MapEditorDispatcher_1.TypedEvent));
exports.NewNodeIntentEvent = NewNodeIntentEvent;
var LoadMapEvent = /** @class */ (function (_super) {
    __extends(LoadMapEvent, _super);
    function LoadMapEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LoadMapEvent;
}(MapEditorDispatcher_1.TypedEvent));
exports.LoadMapEvent = LoadMapEvent;
;
var NodeDraggedEvent = /** @class */ (function (_super) {
    __extends(NodeDraggedEvent, _super);
    function NodeDraggedEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NodeDraggedEvent;
}(MapEditorDispatcher_1.TypedEvent));
exports.NodeDraggedEvent = NodeDraggedEvent;
var InitiateNodeDeletionEvent = /** @class */ (function (_super) {
    __extends(InitiateNodeDeletionEvent, _super);
    function InitiateNodeDeletionEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InitiateNodeDeletionEvent;
}(MapEditorDispatcher_1.TypedEvent));
exports.InitiateNodeDeletionEvent = InitiateNodeDeletionEvent;
var InitiateConnection = /** @class */ (function (_super) {
    __extends(InitiateConnection, _super);
    function InitiateConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InitiateConnection;
}(MapEditorDispatcher_1.TypedEvent));
exports.InitiateConnection = InitiateConnection;
var InitiateConnectionDeletion = /** @class */ (function (_super) {
    __extends(InitiateConnectionDeletion, _super);
    function InitiateConnectionDeletion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InitiateConnectionDeletion;
}(MapEditorDispatcher_1.TypedEvent));
exports.InitiateConnectionDeletion = InitiateConnectionDeletion;
var InitiateConnectionEdit = /** @class */ (function (_super) {
    __extends(InitiateConnectionEdit, _super);
    function InitiateConnectionEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InitiateConnectionEdit;
}(MapEditorDispatcher_1.TypedEvent));
exports.InitiateConnectionEdit = InitiateConnectionEdit;
function initiateNewNodeCreationProcess(type, coords) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new NewNodeIntentEvent({
        coords: coords, type: type
    }));
}
exports.initiateNewNodeCreationProcess = initiateNewNodeCreationProcess;
function loadMap(map) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new LoadMapEvent({
        map: map
    }));
}
exports.loadMap = loadMap;
function nodeWasMoved(id, coords) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new NodeDraggedEvent({ id: id, coords: coords }));
}
exports.nodeWasMoved = nodeWasMoved;
function initiateNodeDeletion(id) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new InitiateNodeDeletionEvent({ id: id }));
}
exports.initiateNodeDeletion = initiateNodeDeletion;
function connectionInitiated(scope, sourceId, targetId) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new InitiateConnection({ scope: scope, sourceId: sourceId, targetId: targetId }));
}
exports.connectionInitiated = connectionInitiated;
function initiateConnectionDeletion(sourceId, targetId, scope) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new InitiateConnectionDeletion({ scope: scope, sourceId: sourceId, targetId: targetId }));
}
exports.initiateConnectionDeletion = initiateConnectionDeletion;
function initiateConnectionEdit(sourceId, targetId, scope) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new InitiateConnectionEdit({ scope: scope, sourceId: sourceId, targetId: targetId }));
}
exports.initiateConnectionEdit = initiateConnectionEdit;
//# sourceMappingURL=MapActions.js.map