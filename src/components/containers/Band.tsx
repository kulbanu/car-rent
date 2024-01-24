import { ReactNode } from 'react'

export const Band = ({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) => {
  return <div className={`w-screen mb-5 ${className}`}>{children}</div>
}

export default Band
