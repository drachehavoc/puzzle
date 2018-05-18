"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sprite = /** @class */ (function () {
    function Sprite(canvas) {
        this.canvas = canvas;
        this.position = { x: 0, y: 0 };
        //
    }
    Sprite.prototype.setPosition = function (x, y) {
        this.position.x = x;
        this.position.y = y;
    };
    Sprite.prototype.draw = function () {
        // rewrite
    };
    return Sprite;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.draw = function () {
        this.canvas.native.context.fillRect(this.position.x + 10, this.position.x + 10, 50, 50);
    };
    return Square;
}(Sprite));
var Canvas = /** @class */ (function () {
    function Canvas() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.sprites = [];
    }
    Canvas.prototype.appendTo = function (element) {
        element.appendChild(this.canvas);
    };
    Object.defineProperty(Canvas.prototype, "native", {
        get: function () {
            return {
                canvas: this.canvas,
                context: this.context
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "width", {
        get: function () {
            return this.canvas.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "height", {
        get: function () {
            return this.canvas.height;
        },
        enumerable: true,
        configurable: true
    });
    Canvas.prototype.remove = function (sprte) {
    };
    Canvas.prototype.add = function (sprite) {
        this.sprites.push(sprite);
    };
    Canvas.prototype.setSize = function (width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    };
    Canvas.prototype.draw = function () {
        this.sprites.forEach(function (sprite) { return sprite.draw(); });
    };
    Canvas.prototype.clear = function () {
        this.context.clearRect(0, 0, this.width, this.height);
    };
    return Canvas;
}());
//# sourceMappingURL=Canvas.js.map