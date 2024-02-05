import { makeAutoObservable } from 'mobx'

export enum MODALS {
  CART_MODAL = 'CART_MODAL',
  CONFIRMATION_MODAL = 'CONFIRMATION_MODAL',
}

class Modal {
  status = false
  modal: MODALS | null = null
  constructor() {
    makeAutoObservable(this)
  }
  openModal(modal: MODALS) {
    this.modal = modal
    this.status = true
  }
  closeModal() {
    this.modal = null
    this.status = false
  }
}

export const modal = new Modal()
