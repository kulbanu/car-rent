import { ReactNode } from 'react'

export const Section = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className="px-2 md:px-0">
      <section className={`m-auto p-2 max-w-5xl w-full ${className}`}>
        {children}
      </section>
    </div>
  )
}

export default Section
