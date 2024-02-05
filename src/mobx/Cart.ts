import { makeAutoObservable } from 'mobx'

class Cart {
  cart: number[] = [1, 3]
  constructor() {
    makeAutoObservable(this)
  }
  addProduct(id: number) {
    this.cart.push(id)
  }
  deleteProduct(id: number) {
    this.cart = this.cart.filter((elem) => elem !== id)
  }
}

export const cart = new Cart()
