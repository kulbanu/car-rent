import { Section, PostCard } from '../../components'
import { data } from './data'

export const Blog = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </Section>
  )
}

export default Blog
