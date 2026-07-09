import React, { ReactNode } from 'react'

export const metadata = {
  title: 'Chakra UI Components',
  description:
    'Chakra UI Components Practice Project',
}
export default function Portfolio({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}