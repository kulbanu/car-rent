const ProductCard = () => {
  return (
    <div className="bg-white max-w-72 rounded-xl hover:shadow-sm hover:scale-105 transition ease-in-out cursor-pointer">
      <img src="/assets/kolaska.png" />
      <div className="flex flex-col items-center gap-1">
        <p className="font-thin uppercase">special</p>
        <p className="font-semibold text-primary">Baby Lether Carriage</p>
        <p>$320.00</p>
      </div>
    </div>
  )
}

export default ProductCard
