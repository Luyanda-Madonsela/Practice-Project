import React, { ReactNode } from 'react'

export const metadata = {
  title: 'Video Display Practice',
  description:
    'Video Display Practice Project',
}
export default function Portfolio({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}