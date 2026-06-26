import { useState, useEffect, useRef, type ReactNode, type CSSProperties } from 'react'

function useScrollAnim(options: { threshold?: number } = {}) {
  const { threshold = 0.18 } = options
  const ref = useRef<HTMLDivElement>(null)
  const [ratio, setRatio] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => setRatio(entry.intersectionRatio),
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const visible = ratio >= threshold
  return [ref, visible] as const
}

const variants: Record<string, (v: boolean) => CSSProperties> = {
  fadeUp:    (v) => ({ opacity: v ? 1 : 0, transform: v ? 'translateY(0)' : 'translateY(36px)' }),
  fadeDown:  (v) => ({ opacity: v ? 1 : 0, transform: v ? 'translateY(0)' : 'translateY(-36px)' }),
  fadeLeft:  (v) => ({ opacity: v ? 1 : 0, transform: v ? 'translateX(0)' : 'translateX(-48px)' }),
  fadeRight: (v) => ({ opacity: v ? 1 : 0, transform: v ? 'translateX(0)' : 'translateX(48px)' }),
  scale:     (v) => ({ opacity: v ? 1 : 0, transform: v ? 'scale(1)' : 'scale(0.88)' }),
  rotate:    (v) => ({ opacity: v ? 1 : 0, transform: v ? 'rotate(0deg) scale(1)' : 'rotate(-6deg) scale(0.92)' }),
  slideUp:   (v) => ({ opacity: v ? 1 : 0, transform: v ? 'translateY(0) scaleY(1)' : 'translateY(20px) scaleY(0.95)' }),
}

export function Anim({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  style,
}: {
  children: ReactNode
  variant?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'rotate' | 'slideUp'
  delay?: number
  duration?: number
  style?: CSSProperties
}) {
  const [ref, visible] = useScrollAnim()
  const anim = variants[variant](visible)

  return (
    <div
      ref={ref}
      style={{
        ...anim,
        transition: `opacity ${duration}s cubic-bezier(0.4,0,0.2,1) ${delay}s, transform ${duration}s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
