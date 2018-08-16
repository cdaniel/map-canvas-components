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
import { MapEditorDispatcher, TypedEvent } from '../dispatcher/MapEditorDispatcher';
var DragStartedEvent = /** @class */ (function (_super) {
    __extends(DragStartedEvent, _super);
    function DragStartedEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DragStartedEvent;
}(TypedEvent));
export { DragStartedEvent };
var DragStoppedEvent = /** @class */ (function (_super) {
    __extends(DragStoppedEvent, _super);
    function DragStoppedEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DragStoppedEvent;
}(TypedEvent));
export { DragStoppedEvent };
var MapResizeEvent = /** @class */ (function (_super) {
    __extends(MapResizeEvent, _super);
    function MapResizeEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MapResizeEvent;
}(TypedEvent));
export { MapResizeEvent };
var FocusNodeEvent = /** @class */ (function (_super) {
    __extends(FocusNodeEvent, _super);
    function FocusNodeEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FocusNodeEvent;
}(TypedEvent));
export { FocusNodeEvent };
var FocusAddNodeEvent = /** @class */ (function (_super) {
    __extends(FocusAddNodeEvent, _super);
    function FocusAddNodeEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FocusAddNodeEvent;
}(TypedEvent));
export { FocusAddNodeEvent };
var BlurAllEvent = /** @class */ (function (_super) {
    __extends(BlurAllEvent, _super);
    function BlurAllEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BlurAllEvent;
}(TypedEvent));
export { BlurAllEvent };
var BlurNodeEvent = /** @class */ (function (_super) {
    __extends(BlurNodeEvent, _super);
    function BlurNodeEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BlurNodeEvent;
}(TypedEvent));
export { BlurNodeEvent };
var ScopeActivatedEvent = /** @class */ (function (_super) {
    __extends(ScopeActivatedEvent, _super);
    function ScopeActivatedEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ScopeActivatedEvent;
}(TypedEvent));
export { ScopeActivatedEvent };
var ScopeDectivatedEvent = /** @class */ (function (_super) {
    __extends(ScopeDectivatedEvent, _super);
    function ScopeDectivatedEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ScopeDectivatedEvent;
}(TypedEvent));
export { ScopeDectivatedEvent };
var ConnectionSendForProcessing = /** @class */ (function (_super) {
    __extends(ConnectionSendForProcessing, _super);
    function ConnectionSendForProcessing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConnectionSendForProcessing;
}(TypedEvent));
export { ConnectionSendForProcessing };
var FocusConnectionEvent = /** @class */ (function (_super) {
    __extends(FocusConnectionEvent, _super);
    function FocusConnectionEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FocusConnectionEvent;
}(TypedEvent));
export { FocusConnectionEvent };
var BlurConnectionEvent = /** @class */ (function (_super) {
    __extends(BlurConnectionEvent, _super);
    function BlurConnectionEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BlurConnectionEvent;
}(TypedEvent));
export { BlurConnectionEvent };
export function startDrag() {
    MapEditorDispatcher.dispatch(new DragStartedEvent(null));
}
export function stopDrag(type, params) {
    MapEditorDispatcher.dispatch(new DragStoppedEvent({ type: type, params: params }));
}
export function resize(width, height, input) {
    MapEditorDispatcher.dispatch(new MapResizeEvent({ height: height, width: width, input: input }));
}
export function focusNode(id) {
    MapEditorDispatcher.dispatch(new FocusNodeEvent({ id: id }));
}
export function addNodeToFocus(id) {
    MapEditorDispatcher.dispatch(new FocusAddNodeEvent({ id: id }));
}
export function blurAll() {
    MapEditorDispatcher.dispatch(new BlurAllEvent(null));
}
export function blurNode(id) {
    MapEditorDispatcher.dispatch(new BlurAllEvent({ id: id }));
}
export function scopeDragActivated(scopeId, sourceId) {
    MapEditorDispatcher.dispatch(new ScopeActivatedEvent({ scopeId: scopeId, sourceId: sourceId }));
}
export function scopeDragDectivated(scopeId, targetId) {
    MapEditorDispatcher.dispatch(new ScopeDectivatedEvent({ scopeId: scopeId, targetId: targetId }));
}
export function turnOffRecentDropTarget() {
    MapEditorDispatcher.dispatch(new ConnectionSendForProcessing(null));
}
export function focusConnection(sourceId, targetId, scope) {
    MapEditorDispatcher.dispatch(new FocusConnectionEvent({ sourceId: sourceId, targetId: targetId, scope: scope }));
}
export function blurConnection(sourceId, targetId, scope) {
    MapEditorDispatcher.dispatch(new BlurConnectionEvent({ sourceId: sourceId, targetId: targetId, scope: scope }));
}
//# sourceMappingURL=MapEditorActions.js.map