import React, { ReactNode } from 'react'

export const metadata = {
  title: 'Dark and Light Mode',
  description:
    'Dark and Light Mode Practice Project',
}
export default function Portfolio({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}