import { ReactNode } from 'react'

export const Button = ({
  children,
  transparent,
}: {
  children: ReactNode
  transparent?: boolean
}) => {
  return (
    <button
      className={`rounded-full bg-primary text-white uppercase text-sm font-arial px-3 py-2 ${
        transparent ? 'bg-white bg-opacity-55 border-white border-2' : ''
      }`}
    >
      {children}
    </button>
  )
}

export default Button
