import React, { ReactNode } from 'react'

export const metadata = {
  title: 'Text Practice',
  description:
    'Text Practice Project',
}
export default function Portfolio({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}