import { ButtonHTMLAttributes, ReactNode } from 'react'

export const Button = ({
  children,
  transparent,
  primary,
  ...props
}: {
  children: ReactNode
  transparent?: boolean
  primary?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`rounded-full ${
        primary ? 'bg-primary' : 'bg-white'
      } uppercase whitespace-nowrap text-sm font-poppins font-bold px-3 py-2 ${
        transparent
          ? 'bg-white bg-opacity-55 border-white border-2 text-white'
          : 'text-black'
      } ${props.className}`}
    >
      {children}
    </button>
  )
}

export default Button
