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
var MapEditorActions = require("../actions/MapEditorActions");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var MapActions = require("../actions/MapActions");
var MapEditorStore_1 = require("../stores/MapEditorStore");
var menuItemNormalColor = 'gray';
var menuItemHighlightColor = 'rgb(0,120,155)';
var Node = /** @class */ (function (_super) {
    __extends(Node, _super);
    function Node(props) {
        var _this = _super.call(this, props) || this;
        _this.onDeleteMenuOver = function () {
            _this.onMouseOver('deleteMenuItem');
        };
        _this.onMoveMenuOver = function () {
            _this.onMouseOver('moveMenuItem');
        };
        _this.onMouseOver = function (hoveredMenu) {
            _this.setState({ hoveredMenu: hoveredMenu });
        };
        _this.onMouseLeave = function () {
            _this.setState({ hoveredMenu: null });
        };
        _this.moveStopped = function (event) {
            var coords = MapEditorStore_1["default"].normalizeCoord(event.pos[0], event.pos[1]);
            MapActions.nodeWasMoved(_this.props.id, coords);
        };
        _this.reconcileDragConnectionStubs = function () {
            _this.jsPlumbInstance.revalidate(_this.input);
            if (!_this.state.connections || !_this.state.connections.source) {
                return;
            }
            for (var _i = 0, _a = _this.state.connections.source; _i < _a.length; _i++) {
                var connectionDragStarter = _a[_i];
                _this.jsPlumbInstance.revalidate(_this.props.id + "-" + connectionDragStarter.name + '-parentMenu');
                _this.jsPlumbInstance.revalidate(_this.props.id + "-" + connectionDragStarter.name + '-parentMenuItem');
            }
            // only single nodes can get the dependency connection stub
            if (_this.props.focused && _this.props.multiNodeFocus === false && _this.dependencyStubs.length === 0) {
                for (var _b = 0, _c = _this.state.connections.source; _b < _c.length; _b++) {
                    var connectionDragStarter = _c[_b];
                    var parentName = _this.props.id + "-" + connectionDragStarter.name + '-parentMenuItem';
                    var newSourceEndpointOptions = connectionDragStarter.sourceEndpoint;
                    newSourceEndpointOptions.scope = connectionDragStarter.name;
                    var newTargetEndpointOptions = connectionDragStarter.targetEndpoint;
                    newTargetEndpointOptions.scope = connectionDragStarter.name;
                    var targetEndpoint = _this.jsPlumbInstance.addEndpoint(parentName, connectionDragStarter.targetEndpoint);
                    var sourceEndpoint = _this.jsPlumbInstance.addEndpoint(_this.props.id, connectionDragStarter.sourceEndpoint);
                    var connection = _this.jsPlumbInstance.connect({ source: sourceEndpoint, target: targetEndpoint, deleteEndpointsOnDetach: true });
                    _this.dependencyStubs.push({
                        connection: connection,
                        parentName: parentName,
                        sourceEndpoint: sourceEndpoint,
                        targetEndpoint: targetEndpoint
                    });
                }
            }
        };
        _this.storeNativeHandle = function (input) {
            _this.input = input;
        };
        _this.onMouseDown = function (event) {
            event.preventDefault();
            event.stopPropagation();
            var isCommandOrCtrlPressed = event.nativeEvent.metaKey || event.nativeEvent.ctrlKey;
            if (!_this.props.focused && !isCommandOrCtrlPressed) {
                MapEditorActions.focusNode(_this.props.id);
            }
            else if (!_this.props.focused && isCommandOrCtrlPressed) {
                MapEditorActions.addNodeToFocus(_this.props.id);
            }
            if (_this.props.focused && _this.state.hoveredMenu === 'dragMenuItem') {
                return;
            }
            if (_this.props.focused && _this.state.hoveredMenu === 'deleteMenuItem') {
                MapEditorActions.blurNode(_this.props.id);
                MapActions.initiateNodeDeletion(_this.props.id);
            }
        };
        _this.computedLookUpdate = function (props) {
            var computedLook = _this.props.styler(props.type);
            var newState = {
                connections: computedLook.connections,
                deletable: computedLook.deletable,
                injectedComponent: computedLook.component,
                movable: computedLook.movable,
                style: computedLook.style
            };
            if (computedLook) {
                _this.setState(newState);
            }
            ;
            return newState;
        };
        _this.jsPlumbInstance = props.jsPlumbInstance;
        _this.dependencyStubs = [];
        _this.input = null;
        _this.state = {};
        return _this;
    }
    Node.prototype.prepareDragConnectionComponents = function () {
        if (!this.state || !this.state.connections || !this.state.connections.source) {
            return null;
        }
        var results = new Array();
        for (var _i = 0, _a = this.state.connections.source; _i < _a.length; _i++) {
            var connectionDragStarter = _a[_i];
            results.push(React.createElement("div", { id: this.props.id + "-" + connectionDragStarter.name + '-parentMenu', key: this.props.id + "-" + connectionDragStarter.name + 'parent', style: { position: 'relative', width: 0, height: 0 } },
                React.createElement("div", { id: this.props.id + "-" + connectionDragStarter.name + '-parentMenuItem', style: { position: 'absolute', left: connectionDragStarter.relativePos.left, top: connectionDragStarter.relativePos.top } })));
        }
        return results;
    };
    Node.prototype.shouldBecomeDragTarget = function () {
        if (!this.state || !this.state.connections || !this.state.connections.target || !this.state.connections.target.length) {
            return false;
        }
        // keep state until connection is processed.
        if (this.props.nodeDroppedOntoId === this.props.id) {
            return true;
        }
        if (this.props.activeDragScope) {
            for (var _i = 0, _a = this.state.connections.target; _i < _a.length; _i++) {
                var dropTarget = _a[_i];
                if (dropTarget === this.props.activeDragScope.scopeId && (this.props.id !== this.props.activeDragScope.sourceId) /* do not hint self*/) {
                    return true;
                }
            }
        }
        return false;
    };
    Node.prototype.render = function () {
        var left = this.props.evolution * this.props.parentWidth;
        var top = this.props.visibility * this.props.parentHeight;
        var zIndex = 6;
        var position = 'absolute';
        var componentStyle = { left: left, top: top, zIndex: zIndex, position: position };
        if (this.state.style) {
            componentStyle = _.extend(componentStyle, this.state.style);
        }
        if (this.shouldBecomeDragTarget()) {
            componentStyle = _.extend(componentStyle, { boxShadow: '0 0 7px 7px ' + menuItemHighlightColor, zIndex: 100 });
            // @ts-ignore
            componentStyle.width = componentStyle.width * 1.5;
            // @ts-ignore
            componentStyle.height = componentStyle.height * 1.5;
            // @ts-ignore
            componentStyle.maxWidth = componentStyle.maxWidth * 1.5;
            // @ts-ignore
            componentStyle.maxHeight = componentStyle.maxHeight * 1.5;
            // @ts-ignore
            componentStyle.borderRadius = componentStyle.borderRadius * 1.5;
            if (this.props.activeDragScope) {
                this.jsPlumbInstance.makeTarget(this.input, { isTarget: true, scope: this.props.activeDragScope.scopeId });
            }
        }
        else if (this.input) {
            this.jsPlumbInstance.unmakeTarget(this.input);
        }
        var dragConnectionComponents = null;
        var moveComponent = null;
        var deleteComponent = null;
        if (this.props.focused) {
            // many nodes, many focused - we can only move them
            if (this.state.movable) {
                var color = this.state.hoveredMenu === 'moveMenuItem' ? menuItemHighlightColor : menuItemNormalColor;
                moveComponent = React.createElement("div", { id: this.props.id + '-moveMenuItemParent', key: this.props.id + '-moveMenuItemParent', style: { position: 'relative', width: 0, height: 0 } },
                    React.createElement("div", { id: this.props.id + '-moveMenuItem', style: { position: 'absolute', left: -20, top: -20, zIndex: 10 }, onMouseOver: this.onMoveMenuOver, onMouseLeave: this.onMouseLeave },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowsAlt, color: color })));
            }
        }
        if (this.props.focused && !this.props.multiNodeFocus) {
            // single node focused, full menu
            dragConnectionComponents = this.prepareDragConnectionComponents();
            if (this.state.deletable) {
                var color = this.state.hoveredMenu === 'deleteMenuItem' ? 'orange' : menuItemNormalColor;
                deleteComponent = React.createElement("div", { id: this.props.id + '-deleteMenuItemParent', key: this.props.id + '-deleteMenuItemParent', style: { position: 'relative', width: 0, height: 0 } },
                    React.createElement("div", { id: this.props.id + '-deleteMenuItem', style: { backgroundColor: 'white', position: 'absolute', left: 28, boxShadow: '0 0 3px white', top: -20, zIndex: 10 }, onMouseOver: this.onDeleteMenuOver, onMouseLeave: this.onMouseLeave },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTrashAlt, color: color })));
            }
        }
        return (React.createElement("div", { id: this.props.id, key: this.props.id, style: componentStyle, ref: this.storeNativeHandle, onMouseDown: this.onMouseDown },
            dragConnectionComponents,
            moveComponent,
            deleteComponent,
            React.createElement("div", { style: { position: 'relative', width: 0, height: 0 }, key: "name" },
                React.createElement("div", { style: { position: 'absolute', left: 12, top: -15, fontSize: 'small', maxWidth: 150, width: 100 } }, this.props.name)),
            this.state.injectedComponent));
    };
    Node.prototype.componentDidUpdate = function () {
        if (!this.input) {
            return;
        }
        if (!this.props.focused) {
            return;
        }
        this.reconcileDragConnectionStubs();
        this.updateMovableState();
    };
    Node.prototype.componentDidMount = function () {
        if (!this.input) {
            return;
        }
        this.computedLookUpdate(this.props);
        this.jsPlumbInstance.draggable(this.input, {
            containment: true,
            stop: this.moveStopped
        });
        this.jsPlumbInstance.setDraggable(this.input, false);
        if (!this.props.focused) {
            return;
        }
        this.reconcileDragConnectionStubs();
        this.updateMovableState();
    };
    Node.prototype.updateMovableState = function () {
        this.jsPlumbInstance.setDraggable(this.input, this.state.hoveredMenu === 'moveMenuItem');
    };
    Node.prototype.componentWillUnmount = function () {
        if (this.props.focused && this.dependencyStubs.length !== 0) {
            for (var _i = 0, _a = this.dependencyStubs; _i < _a.length; _i++) {
                var dependencyStub = _a[_i];
                this.jsPlumbInstance.deleteConnection(dependencyStub.connection);
                this.jsPlumbInstance.deleteEndpoint(dependencyStub.sourceEndpoint);
                this.jsPlumbInstance.remove(dependencyStub.parentName);
                this.jsPlumbInstance.deleteEndpoint(dependencyStub.targetEndpoint);
            }
            this.dependencyStubs = [];
        }
    };
    Node.prototype.componentWillReceiveProps = function (nextProps) {
        this.computedLookUpdate(nextProps);
        if ((this.props.focused && !this.props.multiNodeFocus /* single node focused */ && !nextProps.focused /* will be unfocused */)
            || (this.props.focused && !this.props.multiNodeFocus /* single node focused */ && nextProps.multiNodeFocus /* will become a part of focus group */)) {
            for (var _i = 0, _a = this.dependencyStubs; _i < _a.length; _i++) {
                var dependencyStub = _a[_i];
                this.jsPlumbInstance.deleteConnection(dependencyStub.connection);
                this.jsPlumbInstance.deleteEndpoint(dependencyStub.sourceEndpoint);
                this.jsPlumbInstance.remove(dependencyStub.parentName);
                this.jsPlumbInstance.deleteEndpoint(dependencyStub.targetEndpoint);
            }
            this.dependencyStubs = [];
        }
        if (this.props.focused && !nextProps.focused) {
            // stop highlighting any menu
            this.setState({ hoveredMenu: null });
        }
    };
    return Node;
}(React.Component));
exports["default"] = Node;
//# sourceMappingURL=Node.js.map