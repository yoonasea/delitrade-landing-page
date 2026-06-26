interface Props {
  title: string
  subtitle: string
  color?: 'red' | 'yellow'
}

export default function SectionHeader({ title, subtitle, color = 'red' }: Props) {
  const isRed = color === 'red'
  return (
    <div className="text-center mb-16">
      <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${isRed ? 'text-feng-shui-red' : 'text-yellow-400'}`}>
        {title}
      </h2>
      <p className={`text-xl font-semibold ${isRed ? 'text-feng-shui-gold' : 'text-gray-300'}`}>
        {subtitle}
      </p>
      <div className={`w-24 h-1 mx-auto mt-6 ${isRed ? 'bg-feng-shui-gold' : 'bg-yellow-400'}`} />
    </div>
  )
}
