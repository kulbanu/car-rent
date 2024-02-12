import { Link } from 'react-router-dom'
import { PostCategory } from '../../../../types'

const config: Record<
  string,
  { title: string; subtitle: string; link: string; image: string }
> = {
  one: {
    title: 'Жүктілерге',
    subtitle: '',
    image: 'pregnant.png',
    link: PostCategory.PREGNANT,
  },
  two: {
    title: 'Нәрестелер жайлы',
    subtitle: '',
    image: 'toddler.png',
    link: PostCategory.TODDLER,
  },
  three: {
    title: '1+ жас',
    subtitle: '',
    image: 'oneyear.png',
    link: PostCategory.ONE_YEAR,
  },
  four: {
    title: 'Басқа тақырыптар',
    subtitle: '',
    image: 'other.png',
    link: PostCategory.OTHER,
  },
}

const MagicCard = ({ num }: { num: string }) => {
  return (
    <Link
      to={`/blog/?category=${config[num].link}`}
      className="flex flex-col items-center w-36 text-center m-8"
    >
      <img src={`/assets/${config[num].image}`} />
      <p className="font-semibold whitespace-nowrap">{config[num].title}</p>
      <p className="text-xs">{config[num].subtitle}</p>
    </Link>
  )
}

export default MagicCard
