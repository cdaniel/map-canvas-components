import { Dispatcher } from 'flux';
var TypedEvent = /** @class */ (function () {
    function TypedEvent(payload) {
        this.payload = payload;
    }
    return TypedEvent;
}());
export { TypedEvent };
var dispatcherInstance = new Dispatcher();
export var MapEditorDispatcher = dispatcherInstance;
//# sourceMappingURL=MapEditorDispatcher.js.map