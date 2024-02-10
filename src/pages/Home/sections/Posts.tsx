import { Link } from 'react-router-dom'
import { Band, Button, Section } from '../../../components'
import { data } from '../../Blog/data'

export const Posts = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold">Yздік посттар</h1>
        <p className="text-gray-400">Керегіңді тап</p>
      </div>
      <Band className="bg-primary">
        <Section className="flex flex-col items-center gap-3 pt-12 mt-0 mb-5">
          <div className="w-full flex justify-around">
            {data.map((post, index) => (
              <Link
                to={`/post/${post.id}`}
                className={`relative ${
                  index % 2 === 0 ? 'top-[-90px]' : ''
                } max-w-48 text-center`}
              >
                <img
                  className="object-cover w-48 h-72 rounded-xl"
                  src={`/assets/posts/${post.id}.jpg`}
                />
              </Link>
            ))}
          </div>
          <p className="text-gray-500">Керегіңді тап</p>
          <Button>Посттарды оқу ➔</Button>
        </Section>
      </Band>
    </>
  )
}

export default Posts
