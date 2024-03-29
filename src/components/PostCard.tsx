import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Post } from '../types'

type IProps = {
  post: Post
}

export const PostCard = ({ post }: IProps) => {
  const [showTitle, setShowTitle] = useState(false)
  const onHover = () => {
    setShowTitle(true)
  }
  const onLeave = () => {
    setShowTitle(false)
  }
  return (
    <Link
      to={`/post/${post.id}`}
      onMouseEnter={() => onHover()}
      onMouseLeave={() => onLeave()}
      className="relative overflow-hidden cursor-pointer bg-white p-4 min-h-96 text-white "
    >
      <img
        className={`absolute left-0 top-0 h-full object-cover brightness-${
          showTitle ? '100' : '50'
        } transition-all`}
        src={`/assets/posts/${post.image}`}
      />
      <h3
        style={{ bottom: showTitle ? '0' : '-150px' }}
        className={`absolute bg-primary transition-all w-full left-0 p-5 text-center`}
      >
        {post.title}
      </h3>
    </Link>
  )
}

export default PostCard
