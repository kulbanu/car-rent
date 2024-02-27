import { useState } from 'react'
import { Button } from '../../components'

const Calculator = () => {
  const [lmp, setLmp] = useState<string | null>(null)
  const [dueDate, setDueDate] = useState<string | null>(null)

  const calculateDueDate = () => {
    if (!lmp) return

    const lmpDate = new Date(lmp)
    lmpDate.setDate(lmpDate.getDate() + 280) // Add 280 days to LMP
    setDueDate(lmpDate.toLocaleDateString().split('T')[0]) // Format date as YYYY-MM-DD
  }

  return (
    <div className="flex gap-10 mt-20 justify-center items-center">
      <img className="hidden md:flex" src="assets/baby.png" width={300} />
      <div className="flex flex-col gap-5">
        <h2 className="font-medium text-xl">
          Босану күнің болжау калькуляторы
        </h2>
        <label className="flex flex-col">
          Соңғы менструалды период:
          <input
            type="date"
            value={lmp || ''}
            onChange={(e) => setLmp(e.target.value)}
          />
        </label>
        <Button primary onClick={calculateDueDate}>
          Есептеу
        </Button>
        <p>Болжалған босану күні: {dueDate}</p>
      </div>
    </div>
  )
}

export default Calculator
