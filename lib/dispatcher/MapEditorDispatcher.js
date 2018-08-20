"use strict";
exports.__esModule = true;
var flux_1 = require("flux");
var TypedEvent = /** @class */ (function () {
    function TypedEvent(payload) {
        this.payload = payload;
    }
    return TypedEvent;
}());
exports.TypedEvent = TypedEvent;
var dispatcherInstance = new flux_1.Dispatcher();
exports.MapEditorDispatcher = dispatcherInstance;
//# sourceMappingURL=MapEditorDispatcher.js.map