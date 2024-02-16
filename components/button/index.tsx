import { ButtonHTMLAttributes } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const button = tv({
  base: "p-4 md:px-6 text-dark900 font-semibold whitespace-nowrap max-w-96",
  variants: {
    type: {
      text: "text-sm text-dark100 font-normal md:text-md",
      containedNav: "text-sm bg-primaryPink md:text-md",
      contained: "text-lg bg-primaryPink font-bold",
      white: "px-6 text-lg bg-dark100 place-self-center"
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
