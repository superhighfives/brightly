import type { ReactNode } from 'react'

export default function Section({ children }: { children: ReactNode }) {
  return <div className="grid gap-8">{children}</div>
}
