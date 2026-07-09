import React, { ReactNode } from 'react'

export const metadata = {
  title: 'Images Practice',
  description:
    'Images Practice Project',
}
export default function Portfolio({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}