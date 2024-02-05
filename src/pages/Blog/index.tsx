import { Section } from '../../components'
import Card from './components/Card'
import { data } from './data'

export const Blog = () => {
  return (
    <Section>
      <div className="grid grid-cols-3">
        {data.map((post) => (
          <Card post={post} />
        ))}
      </div>
    </Section>
  )
}

export default Blog
