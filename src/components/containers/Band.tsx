import { ReactNode } from 'react'

export const Band = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return <div className={`w-screen relative mt-8 ${className}`}>{children}</div>
}

export default Band
