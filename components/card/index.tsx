import Image from "next/image"

interface ICard {
  chipText: string
  title: string
  text: string
}

export function Card({ chipText, title, text }: ICard) {
  return (
    <article className="flex flex-col gap-12 border border-dark800 w-full p-6">
      <div className="bg-dark800 w-max px-5 py-1 rounded-full text-dark100 font-semibold text-sm tracking-widest">
        <span>{chipText.toUpperCase()}</span>
      </div>
      <Image
        className="self-center w-36 h-20 md:w-28 md:h-16"
        alt="article image"
        src="hills.svg"
        width={132}
        height={72}
      />
      <div className="grid gap-2">
        <h6 className="font-semibold text-lg md:text-xl">{title}</h6>
        <p className="text-sm md:text-md">{text}</p>
      </div>
    </article>
  )
}
