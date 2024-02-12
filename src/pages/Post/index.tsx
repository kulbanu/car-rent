import { useParams } from 'react-router-dom'
import { Section } from '../../components'
import { data } from '../Blog/data'
export const Post = () => {
  const { id } = useParams()
  const post = data.find((post) => post.id == parseInt(id || '1'))
  return (
    <Section>
      {post && (
        <>
          <div className="relative h-60 flex items-center justify-center mb-10">
            <img
              className="absolute left-0 top-0 max-h-60 object-cover w-full mb-5 brightness-50"
              src={`/assets/posts/${post.image}`}
            />
            <h1 className="absolute text-white text-3xl m-10 text-center">
              {post.title}
            </h1>
          </div>
          {id && (
            <div
              className="mb-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}
        </>
      )}
    </Section>
  )
}

export default Post
