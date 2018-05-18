class Loop {
    private tasks: Array<Function> = new Array()
    private stopped = true

    constructor() {
        this.start()
    }
    
    remove(fn: Function) {

    }

    add(fn: Function) {
        this.tasks.push(fn)
    }

    stop() {
        this.stopped = true
    }

    start() {
        this.stopped = false
        window.requestAnimationFrame(this.loop.bind(this))
    }

    private loop(time: number) {
        this.tasks.forEach(task => task(time))
        window.requestAnimationFrame(this.loop.bind(this))
        if (this.stopped) return
    }
}