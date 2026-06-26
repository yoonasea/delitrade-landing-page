import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

interface Props {
  icon: LucideIcon
  label: string
  children: ReactNode
}

export default function ContactCard({ icon: Icon, label, children }: Props) {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-yellow-500 rounded-full">
          <Icon className="w-6 h-6 text-gray-900" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-2">{label}</h3>
          {children}
        </div>
      </div>
    </div>
  )
}
