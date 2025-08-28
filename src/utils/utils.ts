class Shops {
  price: string
  number: number = 0
  constructor(price: string, number: number) {
    this.price = price
    this.number = number
  }

  get totalPrice() {
    return Number(this.price) * this.number
  }
}
export { Shops }
