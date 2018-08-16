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
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as MapEditorActions from '../actions/MapEditorActions';
import NodeConnectionMenu from "./NodeConnectionMenu";
var NodeConnection = /** @class */ (function (_super) {
    __extends(NodeConnection, _super);
    function NodeConnection(props) {
        var _this = _super.call(this, props) || this;
        _this.buildCustomMenuOverlay = function (menu) {
            var menuItems = [];
            for (var _i = 0, menu_1 = menu; _i < menu_1.length; _i++) {
                var menuEntry = menu_1[_i];
                menuItems.push(React.createElement(NodeConnectionMenu, { name: menuEntry[0], key: menuEntry[0], action: menuEntry[2], icon: menuEntry[1], connection: _this.props }));
            }
            var menuDiv = React.createElement("div", null, menuItems);
            var root = document.createElement('div');
            ReactDOM.render(menuDiv, root);
            return root;
        };
        _this.componentDidMount = function () {
            var computedStyle = _this.props.styler(_this.props.scope);
            var label = _this.props.label || "&nbsp;";
            var customOverlay = _this.buildCustomMenuOverlay(computedStyle.menu);
            var params = {
                anchors: [computedStyle.sourceAnchors, computedStyle.targetAnchors],
                connector: computedStyle.connector,
                detachable: false,
                endpoints: [computedStyle.endpoint, computedStyle.endpoint],
                overlays: [
                    ["Label", { labelStyle: { padding: 1, font: '11px  sans-serif' }, label: label, id: 'Label' }],
                    ["Custom", {
                            create: function (component) {
                                return customOverlay;
                            },
                            id: "menuOverlay",
                            key: "menuOverlay",
                            location: 0.5
                        }
                    ]
                ],
                paintStyle: computedStyle.endpointStyle,
                scope: _this.props.scope,
                source: _this.props.sourceId,
                target: _this.props.targetId,
            };
            if (!params.paintStyle) {
                // @ts-ignore
                params.paintStyle = {};
            }
            // @ts-ignore
            if (!params.paintStyle.stroke) {
                params.paintStyle.stroke = 1;
                params.paintStyle.strokeWidth = 1;
            }
            // @ts-ignore
            params.paintStyle.outlineStroke = 'transparent';
            // @ts-ignore
            params.paintStyle.outlineWidth = 10;
            var connection = _this.jsPlumbInstance.connect(params);
            _this.setState({ connection: connection });
            // @ts-ignore
            connection.bind('mousedown', _this.clickHandler);
        };
        _this.componentDidUpdate = function () {
            if (!_this.state.connection) {
                return;
            }
            if (_this.props.focused) {
                _this.state.connection.hideOverlay('Label');
                _this.state.connection.addType('focused');
                _this.state.connection.addType(_this.props.scope + '-focused');
                _this.state.connection.showOverlay('menuOverlay');
            }
            else {
                _this.state.connection.hideOverlay('menuOverlay');
                _this.state.connection.removeType('focused');
                _this.state.connection.removeType(_this.props.scope + '-focused');
                _this.state.connection.showOverlay('Label');
                _this.state.connection.getOverlay('Label').setLabel(_this.props.label || '&nbsp;');
            }
            _this.jsPlumbInstance.revalidate(_this.props.sourceId);
            _this.jsPlumbInstance.revalidate(_this.props.targetId);
        };
        _this.componentWillUnmount = function () {
            if (!_this.state.connection) {
                return;
            }
            _this.state.connection.hideOverlay('Label');
            _this.state.connection.hideOverlay('menuOverlay');
            _this.jsPlumbInstance.deleteConnection(_this.state.connection);
            _this.setState({ connection: null });
        };
        _this.clickHandler = function (obj, e) {
            e.preventDefault();
            e.stopPropagation();
            if (!_this.props.focused) {
                MapEditorActions.focusConnection(_this.props.sourceId, _this.props.targetId, _this.props.scope);
                return;
            }
            if (obj.component && obj.id !== 'Label') { // non label overlay clicked
                var connection = obj.component;
                console.log(connection);
                return;
            }
            MapEditorActions.blurConnection(_this.props.sourceId, _this.props.targetId, _this.props.scope);
        };
        _this.jsPlumbInstance = props.jsPlumbInstance;
        _this.state = {};
        return _this;
    }
    NodeConnection.prototype.render = function () {
        // this is noop, as connections are rendered using jsplumb
        return null;
    };
    return NodeConnection;
}(React.Component));
export default NodeConnection;
//# sourceMappingURL=NodeConnection.js.map