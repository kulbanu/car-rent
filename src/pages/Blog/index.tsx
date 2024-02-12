import { useSearchParams } from 'react-router-dom'
import { Section, PostCard } from '../../components'
import { data } from './data'
import { PostCategory } from '../../types'

const categoryConfig = {
  [PostCategory.PREGNANT]: 'Жүктілерге',
  [PostCategory.ONE_YEAR]: '1+ жас',
  [PostCategory.TODDLER]: 'Нәрестелер жайлы',
  [PostCategory.OTHER]: '',
}

export const Blog = () => {
  let filtredData = data
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  let categoryName = ''
  if (category && category in PostCategory) {
    filtredData = filtredData.filter((post) => post.category === category)
    categoryName = categoryConfig[category as PostCategory]
  }
  return (
    <Section>
      <h1 className="font-medium text-center text-3xl mb-5">
        {category ? categoryName : 'Блог'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {filtredData.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </Section>
  )
}

export default Blog
