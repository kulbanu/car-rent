import { Band, Crown } from '../../../components'

export const KeyWordsLine = () => {
  const words = [
    'jana produkt',
    'qoldanysta onai',
    'ademi dizain',
    'jogary sapa',
    'jana produkt',
    'qoldanysta onai',
    'ademi dizain',
    'jana produkt',
    'qoldanysta onai',
    'ademi dizain',
    'jogary sapa',
    'jana produkt',
    'qoldanysta onai',
    'ademi dizain',
    'jana produkt',
    'qoldanysta onai',
    'ademi dizain',
    'jogary sapa',
    'jana produkt',
    'qoldanysta onai',
    'ademi dizain',
    'jana produkt',
    'qoldanysta onai',
    'ademi dizain',
    'jogary sapa',
    'jana produkt',
    'qoldanysta onai',
    'ademi dizain',
    'jana produkt',
    'qoldanysta onai',
    'ademi dizain',
    'jogary sapa',
    'jana produkt',
    'qoldanysta onai',
    'ademi dizain',
  ]
  return (
    <Band className="flex gap-5 bg-white py-3 px-5">
      {words.map((word) => (
        <div className="flex gap-1 items-center">
          <Crown />
          <p className="font-cherry text-4xl text-nowrap text-primary">
            {word}
          </p>
        </div>
      ))}
    </Band>
  )
}

export default KeyWordsLine
