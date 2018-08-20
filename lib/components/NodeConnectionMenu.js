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
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var menuItemNormalColor = 'gray';
var menuItemHighlightColor = 'rgb(0,120,155)';
var NodeConnectionMenu = /** @class */ (function (_super) {
    __extends(NodeConnectionMenu, _super);
    function NodeConnectionMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.onMouseOverFunction = function () {
            _this.setState({ hoveredMenu: true });
        };
        _this.onMouseLeaveFunction = function () {
            _this.setState({ hoveredMenu: null });
        };
        _this.clickWrapper = function () {
            var sourceId = _this.props.connection.sourceId;
            var targetId = _this.props.connection.targetId;
            var scope = _this.props.connection.scope;
            return function (event) {
                event.preventDefault();
                event.stopPropagation();
                _this.props.action(sourceId, targetId, scope);
            };
        };
        _this.state = {};
        return _this;
    }
    NodeConnectionMenu.prototype.render = function () {
        var highlightColor = this.props.name === 'delete' ? 'orange' : menuItemHighlightColor;
        var color = this.state.hoveredMenu ? highlightColor : menuItemNormalColor;
        return React.createElement("span", { id: this.props.name, key: this.props.name, onMouseDown: this.clickWrapper(), onMouseEnter: this.onMouseOverFunction, onMouseLeave: this.onMouseLeaveFunction, style: { zIndex: 50, backgroundColor: 'white', padding: 2, margin: 2 } },
            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: this.props.icon, color: color }));
    };
    return NodeConnectionMenu;
}(React.Component));
exports["default"] = NodeConnectionMenu;
//# sourceMappingURL=NodeConnectionMenu.js.map