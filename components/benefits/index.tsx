import Image from "next/image"

interface IBenefits {
  src: string
  title: string
  text: string
}

export const Benefits = ({ src, title, text }: IBenefits) => (
  <article className="flex flex-col items-center text-center gap-2 md:items-start md:text-start">
    <Image src={src} alt="benefit image" width={40} height={40} className="" />
    <h6 className="text-xl font-semibold tracking-tight md:text-xl2 min-w-40">
      {title}
    </h6>
    <p className="text-lg tracking-tight max-w-80">{text}</p>
  </article>
)
