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
import FluxStore from './FluxStore';
import { MapEditorDispatcher } from '../dispatcher/MapEditorDispatcher';
import { InitiateConnection, InitiateConnectionDeletion, InitiateConnectionEdit, InitiateNodeDeletionEvent, LoadMapEvent, NewNodeIntentEvent, NodeDraggedEvent } from "../actions/MapActions";
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
var MapStore = /** @class */ (function (_super) {
    __extends(MapStore, _super);
    function MapStore(dispatcher) {
        var _this = this;
        var onDispatch = function (action) {
            if (action instanceof LoadMapEvent) {
                _this.state = action.payload.map;
                _this.emitChange();
            }
            else if (action instanceof NewNodeIntentEvent) {
                _this.state.nodes.push({
                    evolution: action.payload.coords.evolution,
                    id: makeid(),
                    name: makeid(),
                    type: action.payload.type,
                    visibility: action.payload.coords.visibility,
                });
                _this.emitChange();
            }
            else if (action instanceof NodeDraggedEvent) {
                var coords = action.payload.coords;
                var id = action.payload.id;
                for (var _i = 0, _a = _this.state.nodes; _i < _a.length; _i++) {
                    var node = _a[_i];
                    if (node.id === id) {
                        node.visibility = coords.visibility;
                        node.evolution = coords.evolution;
                    }
                }
                _this.emitChange();
            }
            else if (action instanceof InitiateNodeDeletionEvent) {
                var id_1 = action.payload.id;
                _this.state.nodes = _this.state.nodes.filter(function (node) { return node.id !== id_1; });
                _this.emitChange();
            }
            else if (action instanceof InitiateConnection) {
                var found = false;
                for (var _b = 0, _c = _this.state.connections; _b < _c.length; _b++) {
                    var existingConnection = _c[_b];
                    if (existingConnection.scope === action.payload.scope
                        && existingConnection.targetId === action.payload.targetId
                        && existingConnection.sourceId === action.payload.sourceId) {
                        found = true;
                    }
                }
                if (!found) {
                    _this.state.connections.push({
                        scope: action.payload.scope,
                        sourceId: action.payload.sourceId,
                        targetId: action.payload.targetId
                    });
                    _this.emitChange();
                }
            }
            else if (action instanceof InitiateConnectionDeletion) {
                _this.state.connections = _this.state.connections.filter(function (c) { return !(c.scope === action.payload.scope
                    && c.targetId === action.payload.targetId
                    && c.sourceId === action.payload.sourceId); });
                _this.emitChange();
            }
            else if (action instanceof InitiateConnectionEdit) {
                for (var _d = 0, _e = _this.state.connections; _d < _e.length; _d++) {
                    var existingConnection = _e[_d];
                    if (existingConnection.scope === action.payload.scope
                        && existingConnection.targetId === action.payload.targetId
                        && existingConnection.sourceId === action.payload.sourceId) {
                        existingConnection.label = makeid();
                    }
                }
                _this.emitChange();
            }
        };
        _this = _super.call(this, dispatcher, onDispatch, function () { return ({
            connections: [
                {
                    label: 'important',
                    scope: 'user-userneed-dependency',
                    sourceId: 'id1',
                    targetId: 'id2'
                }
            ],
            nodes: [{
                    evolution: 0.5,
                    id: 'id1',
                    name: 'first name',
                    type: 'user-node',
                    visibility: 0.13,
                },
                {
                    evolution: 0.5,
                    id: 'id2',
                    name: 'second name',
                    type: 'user-need-node',
                    visibility: 0.5,
                },
                {
                    evolution: 0.7,
                    id: 'id3',
                    name: 'third name',
                    type: 'default',
                    visibility: 0.6,
                },]
        }); }) || this;
        return _this;
    }
    MapStore.prototype.getState = function () {
        return this.state;
    };
    return MapStore;
}(FluxStore));
var mapStoreInstance = new MapStore(MapEditorDispatcher);
export default mapStoreInstance;
//# sourceMappingURL=MapStore.js.map