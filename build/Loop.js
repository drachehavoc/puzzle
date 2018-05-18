"use strict";
var Loop = /** @class */ (function () {
    function Loop() {
        this.tasks = new Array();
        this.stopped = true;
        this.start();
    }
    Loop.prototype.remove = function (fn) {
    };
    Loop.prototype.add = function (fn) {
        this.tasks.push(fn);
    };
    Loop.prototype.stop = function () {
        this.stopped = true;
    };
    Loop.prototype.start = function () {
        this.stopped = false;
        window.requestAnimationFrame(this.loop.bind(this));
    };
    Loop.prototype.loop = function (time) {
        this.tasks.forEach(function (task) { return task(time); });
        window.requestAnimationFrame(this.loop.bind(this));
        if (this.stopped)
            return;
    };
    return Loop;
}());
//# sourceMappingURL=Loop.js.map