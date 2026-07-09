import React, { ReactNode } from 'react'

export const metadata = {
  title: 'Interactive Map',
  description:
    'Interactive Map Practice Project',
}
export default function Portfolio({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}