export type Post = {
  id: number
  title: string
  content: string
}

export type Product = {
  id: number
  title: string
  price: number
  description: string
  image: string
  bestSelling?: boolean
}
