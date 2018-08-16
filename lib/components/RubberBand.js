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
var menuItemHighlightColor = 'rgb(0,120,155)';
var RubberBand = /** @class */ (function (_super) {
    __extends(RubberBand, _super);
    function RubberBand(props) {
        return _super.call(this, props) || this;
    }
    RubberBand.prototype.render = function () {
        var trueLeft = this.props.startPos.left < this.props.endPos.left ? this.props.startPos.left : this.props.endPos.left;
        var trueTop = this.props.startPos.top < this.props.endPos.top ? this.props.startPos.top : this.props.endPos.top;
        var trueRight = this.props.startPos.left > this.props.endPos.left ? this.props.startPos.left : this.props.endPos.left;
        var trueBottom = this.props.startPos.top > this.props.endPos.top ? this.props.startPos.top : this.props.endPos.top;
        var left = trueLeft * this.props.parentWidth;
        var top = trueTop * this.props.parentHeight;
        var right = (1 - trueRight) * this.props.parentWidth;
        var bottom = (1 - trueBottom) * this.props.parentHeight;
        if (trueRight * this.props.parentWidth - left < 20 && trueBottom * this.props.parentHeight - top < 20) {
            return null;
        }
        var zIndex = 4;
        var position = 'absolute';
        var boxShadow = '0 0 3px ' + menuItemHighlightColor;
        var border = '1px solid ' + menuItemHighlightColor;
        var componentStyle = { border: border, bottom: bottom, boxShadow: boxShadow, left: left, right: right, top: top, zIndex: zIndex, position: position };
        return (React.createElement("div", { key: "rubberband", style: componentStyle }));
    };
    return RubberBand;
}(React.Component));
export default RubberBand;
//# sourceMappingURL=RubberBand.js.map