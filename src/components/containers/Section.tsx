import { ReactNode } from 'react'

export const Section = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <section className={`m-auto p-2 max-w-5xl ${className}`}>
      {children}
    </section>
  )
}

export default Section
