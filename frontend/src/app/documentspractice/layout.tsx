import React, { ReactNode } from 'react'

export const metadata = {
  title: 'Documents Practice',
  description:
    'Documents Practice Project',
}
export default function Portfolio({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}