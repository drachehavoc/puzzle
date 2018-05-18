"use strict";
var MainLoop = /** @class */ (function () {
    function MainLoop() {
        this.tasks = new Array();
        this.stopped = true;
        this.start();
    }
    MainLoop.prototype.remove = function (fn) {
    };
    MainLoop.prototype.add = function (fn) {
        this.tasks.push(fn);
    };
    MainLoop.prototype.stop = function () {
        this.stopped = true;
    };
    MainLoop.prototype.start = function () {
        this.stopped = false;
        window.requestAnimationFrame(this.loop.bind(this));
    };
    MainLoop.prototype.loop = function (time) {
        this.tasks.forEach(function (task) { return task(time); });
        window.requestAnimationFrame(this.loop.bind(this));
        if (this.stopped)
            return;
    };
    return MainLoop;
}());
//# sourceMappingURL=MainLoop.js.map