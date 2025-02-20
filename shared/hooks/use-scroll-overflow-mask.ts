import { animate, MotionValue, useMotionValue, useMotionValueEvent } from 'motion/react'

const left = `0%`
const right = `100%`
const leftInset = `0%`
const rightInset = `100%`
const transparent = `#0000`
const opaque = `#000`

export default function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`,
  )

  useMotionValueEvent(scrollXProgress, 'change', (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`,
      )
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`,
      )
    } else if (scrollXProgress.getPrevious() === 0 || scrollXProgress.getPrevious() === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`,
      )
    }
  })

  return maskImage
}
