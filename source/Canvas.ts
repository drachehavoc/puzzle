interface point {
    0: number
    1: number
}

class Sprite {
    protected position = { x: 0, y: 0 }

    constructor(protected canvas: Canvas) {
        //
    }

    setPosition(x: number, y: number) {
        this.position.x = x
        this.position.y = y
    }

    draw() {
        // rewrite
    }
}

class Square extends Sprite {
    draw() {
        this.canvas.native.context.fillRect(
            this.position.x + 10, this.position.x + 10,
            50, 50)
    }
}

class Canvas {
    private canvas = <HTMLCanvasElement>document.createElement('canvas')
    private context = <CanvasRenderingContext2D>this.canvas.getContext('2d')
    private sprites: Sprite[] = []

    appendTo(element: HTMLElement) {
        element.appendChild(this.canvas)
    }

    get native() {
        return {
            canvas: this.canvas,
            context: this.context
        }
    }

    get width() {
        return this.canvas.width
    }

    get height() {
        return this.canvas.height
    }

    remove(sprte: Sprite) {

    }

    add(sprite: Sprite) {
        this.sprites.push(sprite)
    }

    setSize(width: number, height: number) {
        this.canvas.width = width
        this.canvas.height = height
    }

    draw() {
        this.sprites.forEach(sprite => sprite.draw())
    }

    clear() {
        this.context.clearRect(0, 0, this.width, this.height)
    }
}