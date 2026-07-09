import React, { ReactNode } from 'react'

export const metadata = {
  title: 'Admin Dashboard',
  description:
    'Admin Dashboard Practice Project',
}
export default function Portfolio({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}