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
var React = require("react");
var _ = require("underscore");
var react_resize_detector_1 = require("react-resize-detector");
var MapStore_1 = require("../stores/MapStore");
var MapActions = require("../actions/MapActions");
var MapEditorActions = require("../actions/MapEditorActions");
var MapEditorStore_1 = require("../stores/MapEditorStore");
// import {SyntheticEvent} from "react";
var Node_1 = require("./Node");
var NodeConnection_1 = require("./NodeConnection");
var RubberBand_1 = require("./RubberBand");
var axisSupport = {
    border: '1px dashed silver',
    borderWidth: 1,
    bottom: '10px',
    position: 'absolute',
    top: '3%',
    zIndex: '1'
};
var axisSupport1 = _.extend(_.clone(axisSupport), { left: '25.5%' });
var axisSupport2 = _.extend(_.clone(axisSupport), { left: '51%' });
var axisSupport3 = _.extend(_.clone(axisSupport), { left: '76.5%' });
var axisX = {
    backgroundColor: 'gray',
    border: '1px solid gray',
    bottom: '20px',
    height: 1,
    left: '3px',
    marginLeft: 0,
    marginRight: 0,
    position: 'absolute',
    right: '10px',
    zIndex: 2
};
var arrowX = {
    borderBottom: '4px solid transparent',
    borderLeft: '12px solid gray',
    borderTop: '4px solid transparent',
    bottom: '18px',
    height: 0,
    position: 'absolute',
    right: '5px',
    width: 0,
    zIndex: 2
};
var axisY = {
    backgroundColor: 'gray',
    border: '1px solid gray',
    borderWidth: 1,
    bottom: '20px',
    left: '3px',
    position: 'absolute',
    top: '10px',
    width: 1,
    zIndex: 2
};
var arrowY = {
    borderBottom: '12px solid gray',
    borderLeft: '4px solid transparent',
    borderRight: '4px solid transparent',
    height: 0,
    left: '0px',
    position: 'absolute',
    top: '5px',
    width: 0,
    zIndex: 2
};
var valueCaption = {
    fontSize: 'smaller',
    left: '15px',
    position: 'absolute',
    top: '10px',
    zIndex: 3
};
var evolutionCaption = {
    bottom: '23px',
    fontSize: 'smaller',
    position: 'absolute',
    right: '17px',
    zIndex: 3
};
var genesisStyle = {
    fontSize: 'smaller',
    left: '10%',
    marginTop: 2,
    position: 'absolute'
};
var customBuiltStyle = {
    fontSize: 'smaller',
    left: '36%',
    marginTop: 2,
    position: 'absolute'
};
var productStyle = {
    fontSize: 'smaller',
    left: '60%',
    marginTop: 2,
    position: 'absolute'
};
var commodityStyle = {
    fontSize: 'smaller',
    left: '85%',
    marginTop: 2,
    position: 'absolute'
};
;
var MapCanvas = /** @class */ (function (_super) {
    __extends(MapCanvas, _super);
    function MapCanvas(props) {
        var _this = _super.call(this, props) || this;
        _this.componentWillMount = function () {
            MapEditorStore_1["default"].addChangeListener(_this.onChange);
            MapStore_1["default"].addChangeListener(_this.onChange);
        };
        _this.componentWillUnmount = function () {
            MapEditorStore_1["default"].removeChangeListener(_this.onChange);
            MapStore_1["default"].addChangeListener(_this.onChange);
        };
        _this.componentDidUpdate = function () {
            _this.jsPlumbInstance.setSuspendDrawing(false, true);
        };
        _this.constructRubberBand = function () {
            if (!_this.state.mouseDrag) {
                return null;
            }
            else {
                return React.createElement(RubberBand_1["default"], { startPos: _this.state.mouseDragStart, endPos: _this.state.mouseDragStop, parentHeight: _this.state.height, parentWidth: _this.state.width });
            }
        };
        _this.setContainer = function (input) {
            _this.input = input;
            if (!_this.input) {
                // noop - component was destroyed, no need to worry about draggable
                return;
            }
            _this.jsPlumbInstance.setContainer(_this.input);
            _this.jsPlumbInstance.unbind('connectionDrag', _this.connectionDragStarted);
            _this.jsPlumbInstance.unbind('connectionDragStop', _this.connectionDragStopped);
            _this.jsPlumbInstance.unbind('beforeDrop', _this.beforeDropListener);
            _this.jsPlumbInstance.bind('connectionDrag', _this.connectionDragStarted);
            _this.jsPlumbInstance.bind('connectionDragStop', _this.connectionDragStopped);
            _this.jsPlumbInstance.bind('beforeDrop', _this.beforeDropListener);
        };
        _this.mouseDown = function (event) {
            if (_this.state.focusedNodes.length > 0) {
                MapEditorActions.blurAll();
                return;
            }
            if (!_this.state.mouseDrag) {
                event.persist();
                _this.setState({ mouseDrag: true });
                var y = event.nativeEvent.offsetY / _this.state.height;
                var x = event.nativeEvent.offsetX / _this.state.width;
                _this.setState({ mouseDragStart: { left: x, top: y },
                    mouseDragStop: { left: x, top: y } });
            }
        };
        _this.mouseUp = function (event) {
            if (_this.state.mouseDrag) {
                event.persist();
                _this.selectSelectedNodes();
                _this.setState({ mouseDrag: false });
            }
            return true;
        };
        _this.mouseMove = function (event) {
            event.persist();
            if (_this.state.mouseDrag) {
                var y = event.nativeEvent.offsetY / _this.state.height;
                var x = event.nativeEvent.offsetX / _this.state.width;
                _this.setState({
                    mouseDragStop: { left: x, top: y }
                });
            }
        };
        _this.connectionDragStarted = function (event) {
            MapEditorActions.scopeDragActivated(event.scope, event.sourceId);
        };
        _this.connectionDragStopped = function (event) {
            MapEditorActions.scopeDragDectivated(event.scope, event.targetId);
        };
        _this.beforeDropListener = function (connection) {
            MapActions.connectionInitiated(connection.scope, connection.sourceId, connection.targetId);
            MapEditorActions.turnOffRecentDropTarget();
            return false;
        };
        _this.onResize = function (width, height) {
            MapEditorActions.resize(width, height, _this.input);
        };
        _this.onChange = function () {
            _this.setState(MapEditorStore_1["default"].getState());
        };
        _this.jsPlumbInstance = props.jsPlumbInstance;
        _this.input = null;
        _this.state = MapEditorStore_1["default"].getState();
        return _this;
    }
    MapCanvas.prototype.render = function () {
        var _this = this;
        this.jsPlumbInstance.setSuspendDrawing(true);
        var realCanvasDivStyle = {
            bottom: 22,
            left: 4,
            position: 'absolute',
            right: 5,
            top: 5,
            zIndex: 5
        };
        if (this.state.dragInProgress) {
            realCanvasDivStyle = _.extend(realCanvasDivStyle, {
                border: '1px solid #00789b',
                borderColor: "#00789b",
                boxShadow: "0 0 10px 3px #00789b"
            });
        }
        var nodes = [];
        var connections = [];
        if (this.state.width !== 0 && this.state.height !== 0) {
            nodes = this.renderNodes(MapStore_1["default"].getState().nodes);
            connections = this.renderConnections(MapStore_1["default"].getState().connections);
        }
        var rubberBand = this.constructRubberBand();
        return (React.createElement("div", { style: { flex: '1 1 auto', minHeight: 500, minWidth: 600, position: 'relative' }, onMouseDown: this.mouseDown, onMouseUp: this.mouseUp, onMouseMove: this.mouseMove },
            React.createElement("div", null,
                React.createElement("div", { style: realCanvasDivStyle, ref: function (input) { return _this.setContainer(input); } },
                    React.createElement(react_resize_detector_1["default"], { handleWidth: true, handleHeight: true, onResize: this.onResize }),
                    nodes,
                    connections),
                React.createElement("div", { style: axisX },
                    React.createElement("div", { style: genesisStyle }, "Genesis"),
                    React.createElement("div", { style: customBuiltStyle }, "Custom Built"),
                    React.createElement("div", { style: productStyle }, "Product or Rental"),
                    React.createElement("div", { style: commodityStyle }, "Commodity/Utility")),
                React.createElement("div", { style: arrowX }),
                React.createElement("div", { style: valueCaption }, "Visibility"),
                React.createElement("div", { style: axisY }),
                React.createElement("div", { style: arrowY }),
                React.createElement("div", { style: evolutionCaption }, "Evolution"),
                React.createElement("div", { style: axisSupport1 }),
                React.createElement("div", { style: axisSupport2 }),
                React.createElement("div", { style: axisSupport3 }),
                rubberBand)));
    };
    // TODO: fix types
    MapCanvas.prototype.renderNodes = function (nodes) {
        var result = [];
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            var focused = this.state.focusedNodes.indexOf(node.id) > -1;
            result.push(React.createElement(Node_1["default"], { id: node.id, key: node.id, name: node.name, jsPlumbInstance: this.jsPlumbInstance, evolution: node.evolution, visibility: node.visibility, parentWidth: this.state.width, parentHeight: this.state.height, styler: this.props.styler, type: node.type, focused: focused, activeDragScope: this.state.activeScope, multiNodeFocus: this.state.focusedNodes.length > 1, nodeDroppedOntoId: this.state.nodeDroppedOntoId }));
        }
        return result;
    };
    MapCanvas.prototype.selectSelectedNodes = function () {
        MapEditorActions.blurAll();
        if (this.state.mouseDrag) {
            for (var _i = 0, _a = MapStore_1["default"].getState().nodes; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node.evolution > Math.min(this.state.mouseDragStart.left, this.state.mouseDragStop.left)
                    && node.evolution < Math.max(this.state.mouseDragStart.left, this.state.mouseDragStop.left)
                    && node.visibility > Math.min(this.state.mouseDragStart.top, this.state.mouseDragStop.top)
                    && node.visibility < Math.max(this.state.mouseDragStart.top, this.state.mouseDragStop.top)) {
                    MapEditorActions.addNodeToFocus(node.id);
                }
            }
        }
    };
    MapCanvas.prototype.renderConnections = function (connections) {
        var result = [];
        var _loop_1 = function (connectionDescription) {
            var focused = this_1.state.focusedConnections.some(function (c) { return connectionDescription.sourceId === c.sourceId && connectionDescription.targetId === c.targetId && connectionDescription.scope === c.scope; });
            var key = connectionDescription.sourceId + '-' + connectionDescription.targetId + '-' + connectionDescription.scope;
            result.push(React.createElement(NodeConnection_1["default"], { jsPlumbInstance: this_1.jsPlumbInstance, key: key, label: connectionDescription.label, scope: connectionDescription.scope, sourceId: connectionDescription.sourceId, styler: this_1.props.connectionStyler, targetId: connectionDescription.targetId, focused: focused }));
        };
        var this_1 = this;
        for (var _i = 0, connections_1 = connections; _i < connections_1.length; _i++) {
            var connectionDescription = connections_1[_i];
            _loop_1(connectionDescription);
        }
        return result;
    };
    return MapCanvas;
}(React.Component));
exports["default"] = MapCanvas;
//# sourceMappingURL=MapCanvas.js.map