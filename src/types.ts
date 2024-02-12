export type Post = {
  id: number
  image: string
  title: string
  category: PostCategory
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

export enum PostCategory {
  PREGNANT = 'PREGNANT',
  ONE_YEAR = 'ONE_YEAR',
  TODDLER = 'TODDLER',
  OTHER = 'OTHER',
}
