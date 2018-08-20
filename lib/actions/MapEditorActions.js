"use strict";
/* tslint:disable max-classes-per-file */
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
var MapEditorDispatcher_1 = require("../dispatcher/MapEditorDispatcher");
var DragStartedEvent = /** @class */ (function (_super) {
    __extends(DragStartedEvent, _super);
    function DragStartedEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DragStartedEvent;
}(MapEditorDispatcher_1.TypedEvent));
exports.DragStartedEvent = DragStartedEvent;
var DragStoppedEvent = /** @class */ (function (_super) {
    __extends(DragStoppedEvent, _super);
    function DragStoppedEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DragStoppedEvent;
}(MapEditorDispatcher_1.TypedEvent));
exports.DragStoppedEvent = DragStoppedEvent;
var MapResizeEvent = /** @class */ (function (_super) {
    __extends(MapResizeEvent, _super);
    function MapResizeEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MapResizeEvent;
}(MapEditorDispatcher_1.TypedEvent));
exports.MapResizeEvent = MapResizeEvent;
var FocusNodeEvent = /** @class */ (function (_super) {
    __extends(FocusNodeEvent, _super);
    function FocusNodeEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FocusNodeEvent;
}(MapEditorDispatcher_1.TypedEvent));
exports.FocusNodeEvent = FocusNodeEvent;
var FocusAddNodeEvent = /** @class */ (function (_super) {
    __extends(FocusAddNodeEvent, _super);
    function FocusAddNodeEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FocusAddNodeEvent;
}(MapEditorDispatcher_1.TypedEvent));
exports.FocusAddNodeEvent = FocusAddNodeEvent;
var BlurAllEvent = /** @class */ (function (_super) {
    __extends(BlurAllEvent, _super);
    function BlurAllEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BlurAllEvent;
}(MapEditorDispatcher_1.TypedEvent));
exports.BlurAllEvent = BlurAllEvent;
var BlurNodeEvent = /** @class */ (function (_super) {
    __extends(BlurNodeEvent, _super);
    function BlurNodeEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BlurNodeEvent;
}(MapEditorDispatcher_1.TypedEvent));
exports.BlurNodeEvent = BlurNodeEvent;
var ScopeActivatedEvent = /** @class */ (function (_super) {
    __extends(ScopeActivatedEvent, _super);
    function ScopeActivatedEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ScopeActivatedEvent;
}(MapEditorDispatcher_1.TypedEvent));
exports.ScopeActivatedEvent = ScopeActivatedEvent;
var ScopeDectivatedEvent = /** @class */ (function (_super) {
    __extends(ScopeDectivatedEvent, _super);
    function ScopeDectivatedEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ScopeDectivatedEvent;
}(MapEditorDispatcher_1.TypedEvent));
exports.ScopeDectivatedEvent = ScopeDectivatedEvent;
var ConnectionSendForProcessing = /** @class */ (function (_super) {
    __extends(ConnectionSendForProcessing, _super);
    function ConnectionSendForProcessing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConnectionSendForProcessing;
}(MapEditorDispatcher_1.TypedEvent));
exports.ConnectionSendForProcessing = ConnectionSendForProcessing;
var FocusConnectionEvent = /** @class */ (function (_super) {
    __extends(FocusConnectionEvent, _super);
    function FocusConnectionEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FocusConnectionEvent;
}(MapEditorDispatcher_1.TypedEvent));
exports.FocusConnectionEvent = FocusConnectionEvent;
var BlurConnectionEvent = /** @class */ (function (_super) {
    __extends(BlurConnectionEvent, _super);
    function BlurConnectionEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BlurConnectionEvent;
}(MapEditorDispatcher_1.TypedEvent));
exports.BlurConnectionEvent = BlurConnectionEvent;
function startDrag() {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new DragStartedEvent(null));
}
exports.startDrag = startDrag;
function stopDrag(type, params) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new DragStoppedEvent({ type: type, params: params }));
}
exports.stopDrag = stopDrag;
function resize(width, height, input) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new MapResizeEvent({ height: height, width: width, input: input }));
}
exports.resize = resize;
function focusNode(id) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new FocusNodeEvent({ id: id }));
}
exports.focusNode = focusNode;
function addNodeToFocus(id) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new FocusAddNodeEvent({ id: id }));
}
exports.addNodeToFocus = addNodeToFocus;
function blurAll() {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new BlurAllEvent(null));
}
exports.blurAll = blurAll;
function blurNode(id) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new BlurAllEvent({ id: id }));
}
exports.blurNode = blurNode;
function scopeDragActivated(scopeId, sourceId) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new ScopeActivatedEvent({ scopeId: scopeId, sourceId: sourceId }));
}
exports.scopeDragActivated = scopeDragActivated;
function scopeDragDectivated(scopeId, targetId) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new ScopeDectivatedEvent({ scopeId: scopeId, targetId: targetId }));
}
exports.scopeDragDectivated = scopeDragDectivated;
function turnOffRecentDropTarget() {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new ConnectionSendForProcessing(null));
}
exports.turnOffRecentDropTarget = turnOffRecentDropTarget;
function focusConnection(sourceId, targetId, scope) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new FocusConnectionEvent({ sourceId: sourceId, targetId: targetId, scope: scope }));
}
exports.focusConnection = focusConnection;
function blurConnection(sourceId, targetId, scope) {
    MapEditorDispatcher_1.MapEditorDispatcher.dispatch(new BlurConnectionEvent({ sourceId: sourceId, targetId: targetId, scope: scope }));
}
exports.blurConnection = blurConnection;
//# sourceMappingURL=MapEditorActions.js.map