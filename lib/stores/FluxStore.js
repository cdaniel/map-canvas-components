"use strict";
exports.__esModule = true;
var events_1 = require("events");
var CHANGE_EVENT = 'change';
var FluxStore = /** @class */ (function () {
    function FluxStore(dispatcher, onDispatch, cleanStateFn) {
        var _this = this;
        this.onDispatch = onDispatch;
        this.emitter = new events_1.EventEmitter();
        this.changed = false;
        this.dispatcher = dispatcher;
        this.dispatchToken = dispatcher.register(function (payload) {
            _this.invokeOnDispatch(payload);
        });
        this.cleanStateFn = cleanStateFn;
        this.state = this.cleanStateFn();
    }
    /**
     * Is idempotent per dispatched event
     */
    FluxStore.prototype.emitChange = function () {
        this.changed = true;
    };
    FluxStore.prototype.hasChanged = function () { return this.changed; };
    FluxStore.prototype.addChangeListener = function (callback) {
        this.emitter.on(CHANGE_EVENT, callback);
    };
    FluxStore.prototype.removeChangeListener = function (callback) {
        this.emitter.removeListener(CHANGE_EVENT, callback);
    };
    FluxStore.prototype.cleanState = function () {
        this.changed = false;
        this.state = this.cleanStateFn();
    };
    FluxStore.prototype.invokeOnDispatch = function (payload) {
        this.changed = false;
        this.onDispatch(payload);
        if (this.changed) {
            this.emitter.emit(CHANGE_EVENT);
        }
    };
    return FluxStore;
}());
exports["default"] = FluxStore;
//# sourceMappingURL=FluxStore.js.map