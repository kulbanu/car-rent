const Card = ({
  week,
  description,
  image,
}: {
  week: string
  description: string
  image: string
}) => {
  return (
    <div className="flex text-center flex-col md:flex-row justify-center items-center md:items-start relative">
      <img
        className="relative md:left-16 md:top-2 mb-2 md:mb-0"
        src={`/assets/pregnancyCalendar/${image}`}
      />
      <div className="text-sm mx-10 bg-primary p-4 pt-0 md:pl-20 rounded-xl">
        <h2 className="text-2xl font-bold">{week}</h2>
        <p className=" max-w-xs">{description}</p>
      </div>
    </div>
  )
}

export default Card
