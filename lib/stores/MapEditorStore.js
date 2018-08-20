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
var FluxStore_1 = require("./FluxStore");
var MapEditorActions_1 = require("../actions/MapEditorActions");
var MapEditorDispatcher_1 = require("../dispatcher/MapEditorDispatcher");
var MapEditorStore = /** @class */ (function (_super) {
    __extends(MapEditorStore, _super);
    function MapEditorStore(dispatcher) {
        var _this = this;
        var onDispatch = function (action) {
            if (action instanceof MapEditorActions_1.DragStartedEvent) {
                _this.state.dragInProgress = true;
                _this.emitChange();
            }
            else if (action instanceof MapEditorActions_1.DragStoppedEvent) {
                _this.state.dragInProgress = false;
                _this.emitChange();
            }
            else if (action instanceof MapEditorActions_1.MapResizeEvent) {
                _this.state.width = action.payload.width;
                _this.state.height = action.payload.height;
                _this.state.input = action.payload.input;
                _this.emitChange();
            }
            else if (action instanceof MapEditorActions_1.FocusNodeEvent) {
                // @ts-ignore
                _this.state.jsPlumbInstance.clearDragSelection();
                _this.state.focusedNodes = [action.payload.id];
                // @ts-ignore
                _this.state.jsPlumbInstance.addToDragSelection(action.payload.id);
                _this.state.focusedConnections = [];
                _this.emitChange();
            }
            else if (action instanceof MapEditorActions_1.FocusAddNodeEvent) {
                _this.state.focusedNodes.push(action.payload.id);
                // @ts-ignore
                _this.state.jsPlumbInstance.addToDragSelection(action.payload.id);
                _this.state.focusedConnections = [];
                _this.emitChange();
            }
            else if (action instanceof MapEditorActions_1.BlurAllEvent) {
                _this.state.focusedNodes = [];
                _this.state.focusedConnections = [];
                // @ts-ignore
                _this.state.jsPlumbInstance.clearDragSelection();
                _this.emitChange();
            }
            else if (action instanceof MapEditorActions_1.BlurNodeEvent) {
                // @ts-ignore
                _this.state.jsPlumbInstance.removeFromDragSelection(action.payload.id);
                var index = _this.state.focusedNodes.indexOf(action.payload.id);
                if (index > -1) {
                    _this.state.focusedNodes.splice(index, 1);
                }
                _this.emitChange();
            }
            else if (action instanceof MapEditorActions_1.FocusConnectionEvent) {
                // first - clear node selection
                _this.state.focusedNodes = [];
                // @ts-ignore
                _this.state.jsPlumbInstance.clearDragSelection();
                // focus on a single connection
                // this.state.focusedConnections.push({
                //     scope: action.payload.scope,
                //     sourceId : action.payload.sourceId,
                //     targetId: action.payload.targetId
                // });
                _this.state.focusedConnections = [{
                        scope: action.payload.scope,
                        sourceId: action.payload.sourceId,
                        targetId: action.payload.targetId
                    }];
                _this.emitChange();
            }
            else if (action instanceof MapEditorActions_1.BlurConnectionEvent) {
                _this.state.focusedConnections = _this.state.focusedConnections.filter(function (connection) {
                    if (connection.sourceId === action.payload.sourceId &&
                        connection.targetId === action.payload.targetId
                        && connection.scope === action.payload.scope) {
                        return false;
                    }
                    return true;
                });
                _this.emitChange();
            }
            else if (action instanceof MapEditorActions_1.ScopeActivatedEvent) {
                _this.state.activeScope = {
                    scopeId: action.payload.scopeId,
                    sourceId: action.payload.sourceId
                };
                _this.emitChange();
            }
            else if (action instanceof MapEditorActions_1.ScopeDectivatedEvent) {
                // drag was stopped, but we have to remember WHERE it was stored. If it was stopped on the target node
                // the node will toggle the target state before the connection is processed. We have to postpone that,
                // so we store the target id and clean it after the connection is established. Or not.
                _this.state.nodeDroppedOntoId = action.payload.targetId;
                _this.state.activeScope = null;
                _this.emitChange();
            }
            else if (action instanceof MapEditorActions_1.ConnectionSendForProcessing) {
                // connection captured, clear the target flag
                _this.state.nodeDroppedOntoId = null;
                _this.emitChange();
            }
        };
        _this = _super.call(this, dispatcher, onDispatch, function () { return ({
            activeScope: null,
            dragInProgress: false,
            focusedConnections: [],
            focusedNodes: [],
            height: 0,
            input: null,
            jsPlumbInstance: null,
            mouseDrag: false,
            mouseDragStart: null,
            mouseDragStop: null,
            nodeDroppedOntoId: null,
            width: 0
        }); }) || this;
        return _this;
    }
    MapEditorStore.prototype.getState = function () {
        return this.state;
    };
    MapEditorStore.prototype.setJsPlumbInstance = function (plumb) {
        this.state.jsPlumbInstance = plumb;
    };
    MapEditorStore.prototype.verifyTarget = function (params) {
        var target = params.e.target;
        return target === this.state.input;
    };
    MapEditorStore.prototype.normalizeCoord = function (retrievedEvolution, retrievedVisibility) {
        var evolution = retrievedEvolution / this.state.width;
        var visibility = retrievedVisibility / this.state.height;
        return {
            evolution: evolution,
            visibility: visibility
        };
    };
    return MapEditorStore;
}(FluxStore_1["default"]));
var mapEditorStoreInstance = new MapEditorStore(MapEditorDispatcher_1.MapEditorDispatcher);
exports["default"] = mapEditorStoreInstance;
//# sourceMappingURL=MapEditorStore.js.map