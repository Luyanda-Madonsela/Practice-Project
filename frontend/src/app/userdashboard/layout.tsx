import React, { ReactNode } from 'react'

export const metadata = {
  title: 'User Dashboard',
  description:
    'User Dashboard Practice Project',
}
export default function Portfolio({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}