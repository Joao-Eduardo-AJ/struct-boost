import { ButtonHTMLAttributes } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const button = tv({
  base: "py-4 px-6 text-dark900 font-semibold",
  variants: {
    type: {
      text: "text-md text-dark100 font-normal",
      containedNav: "text-md bg-primaryPink ",
      contained: "text-lg bg-primaryPink ",
      white: "text-lg bg-dark100"
    }
  },
  defaultVariants: {
    type: "text"
  }
})

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof button>
}

export function Button({ variant, ...props }: IButton) {
  return <button {...props} className={button(variant)} />
}
