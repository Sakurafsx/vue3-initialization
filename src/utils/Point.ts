function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
class Point {
  r = 4
  x: number
  y: number
  cvs: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  xSpeed: number = getRandom(-50, 50)
  ySpeed: number = getRandom(-50, 50)
  lastDrawTime: number = Date.now()
  constructor(cvs: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.cvs = cvs
    this.ctx = ctx
    this.x = getRandom(0, cvs.width - this.r / 2)
    this.y = getRandom(0, cvs.height - this.r / 2)
  }

  draw() {
    if (this.lastDrawTime) {
      const duration = (Date.now() - this.lastDrawTime) / 1000
      this.x += this.xSpeed * duration
      this.y += this.ySpeed * duration
      if (this.x < this.r || this.x > this.cvs.width - this.r) {
        this.xSpeed = -this.xSpeed
        this.x = Math.min(Math.max(this.r, this.x), this.cvs.width - this.r)
      }
      if (this.y < this.r || this.y > this.cvs.height - this.r) {
        this.ySpeed = -this.ySpeed
        this.y = Math.min(Math.max(this.r, this.y), this.cvs.height - this.r)
      }
    }
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    this.ctx.fillStyle = "#fff"
    this.ctx.closePath()
    this.ctx.fill()
    this.lastDrawTime = Date.now()
  }
}
class Graph {
  points: Point[] = []
  cvs: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  constructor(nums: number = 30, public maxDistance: number = 150, cvs: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.points = Array.from({ length: nums })
      .fill(0)
      .map(() => new Point(cvs, ctx))
    this.maxDistance = maxDistance
    this.cvs = cvs
    this.ctx = ctx
  }

  draw() {
    requestAnimationFrame(() => this.draw())
    this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height)
    for (let i = 0; i < this.points.length; i++) {
      this.points[i].draw()
      for (let k = i + 1; k < this.points.length; k++) {
        const d = Math.sqrt((this.points[i].x - this.points[k].x) ** 2 + (this.points[i].y - this.points[k].y) ** 2)
        if (d > this.maxDistance) continue
        const p2 = this.points[k]
        this.ctx.beginPath()
        this.ctx.moveTo(this.points[i].x, this.points[i].y)
        this.ctx.lineTo(p2.x, p2.y)
        this.ctx.closePath()
        this.ctx.strokeStyle = `rgba(255, 255, 255, ${1 - d / this.maxDistance})`
        this.ctx.stroke()
      }
    }
  }
}
// 文字流动效果
class ContentCanvas {
  cvs: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  charIndexList: number[] = []
  constructor(cvs: HTMLCanvasElement, ctx: CanvasRenderingContext2D, charIndexList: number[]) {
    this.cvs = cvs
    this.ctx = ctx
    this.charIndexList = charIndexList
  }

  drawText(columnCount: number, fontSize: number) {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
    this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height)
    this.ctx.fillStyle = "#a6a7bbff"
    this.ctx.textBaseline = "top"
    for (let i = 0; i < columnCount; i++) {
      const char = getRandomChar()
      const x = i * fontSize
      const y = this.charIndexList[i] * fontSize
      this.ctx.fillText(char, x, y)
      if (y > this.cvs.height && Math.random() > 0.97) {
        this.charIndexList[i] = 0
      } else {
        this.charIndexList[i]++
      }
    }
  }
}
// 生成随机字符
function getRandomChar() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  return chars.charAt(Math.floor(Math.random() * chars.length))
}
export { ContentCanvas, Graph, Point }
