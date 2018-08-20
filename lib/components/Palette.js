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
var MapActions = require("../actions/MapActions");
var MapEditorActions = require("../actions/MapEditorActions");
var MapEditorStore_1 = require("../stores/MapEditorStore");
;
;
var Palette = /** @class */ (function (_super) {
    __extends(Palette, _super);
    function Palette(props) {
        var _this = _super.call(this, props) || this;
        _this.components = props.components;
        _this.jsPlumbInstance = props.jsPlumbInstance;
        return _this;
    }
    Palette.prototype.renderComponent = function (component) {
        var key = component.key;
        var style = component.visualElement.props.style;
        if (style) {
            style.cssFloat = 'left';
            if (!style.height) {
                style.height = '20px';
            }
            if (!style.width) {
                style.width = '20px';
            }
        }
        return React.createElement("div", { ref: this.makeDraggable.bind(this, key), key: key, style: { margin: 10, minWidth: 167,
                width: 167 } },
            React.createElement("div", null, component.visualElement),
            React.createElement("span", null,
                "\u00A0",
                component.label));
    };
    Palette.prototype.makeDraggable = function (type, input) {
        if (input === null) {
            // noop - component was destroyed, no need to worry about draggable
            return;
        }
        var d = this.jsPlumbInstance.draggable(input, {
            clone: true,
            grid: [
                '10', '10'
            ],
            ignoreZoom: true,
            start: function () {
                MapEditorActions.blurAll();
                MapEditorActions.startDrag();
            },
            stop: function (params) {
                MapEditorActions.stopDrag(type, params);
                // if the drop is on the map canvas
                if (MapEditorStore_1["default"].verifyTarget(params)) {
                    var coords = MapEditorStore_1["default"].normalizeCoord(params.e.offsetX, params.e.offsetY);
                    MapActions.initiateNewNodeCreationProcess(type, coords);
                }
            }
        });
        return d;
    };
    Palette.prototype.renderComponents = function (components) {
        var result = [];
        for (var i = 0; i < components.length; i++) {
            var component = this.components[i];
            result.push(this.renderComponent(component));
        }
        return result;
    };
    Palette.prototype.render = function () {
        var renderedComponents = this.renderComponents(this.components);
        return (React.createElement("div", { style: {
                alignSelf: 'flex-start',
                borderColor: 'gray',
                borderStyle: 'dotted',
                borderWidth: 1,
                fontSize: 'smaller',
                margin: 3,
                minWidth: 170,
                width: 170
            } },
            React.createElement("div", { style: { marginLeft: 3 } }, renderedComponents)));
    };
    return Palette;
}(React.Component));
exports["default"] = Palette;
//# sourceMappingURL=Palette.js.map