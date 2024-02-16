"use client"

import { Benefits, Button, Card } from "@/components"
import { TextsProvider } from "@/translation"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [navBarVisible, setNavBarVisible] = useState(false)
  const texts = TextsProvider.get()

  function toogleNavVisible() {
    setNavBarVisible((prev) => !prev)
  }

  return (
    <main>
      <header className="flex items-center justify-between border-b border-dark850 py-5 px-6 md:py-8 lg:px-28">
        <Image
          src="logo.svg"
          alt="logo"
          width={208}
          height={26}
          className="w-40 h-5 md:w-52 md:h-6"
        />
        <nav
          className={`bg-pageBG grid transition-all duration-500 overflow-hidden absolute right-14 top-4 z-10 md:w-max md:flex md:flex-row-reverse md:items-center md:right-6 lg:right-28 ${
            navBarVisible ? "w-40" : "w-0"
          }`}
        >
          <Button variant={{ type: "containedNav" }}>
            {texts.BUTTON_TEXT_CONTACT}
          </Button>
          <Button>{texts.BUTTON_TEXT_GALERY}</Button>
          <Button>{texts.BUTTON_TEXT_DIFFERENTIALS}</Button>
          <Button>{texts.BUTTON_TEXT_HOME}</Button>
        </nav>
        <button
          className={`w-7 h-6 hamb--squeeze md:hidden cursor-pointer hover:opacity-90 z-10 ${
            navBarVisible && "is-active"
          }`}
          type="button"
          onClick={() => toogleNavVisible()}
        >
          <span
            className={`hamb-box w-7 h-6 inline-block relative ${
              navBarVisible && "is-active"
            }`}
          >
            <span
              className={`duration-200 ease-in-out block top-2/4 hamb-inner before:hamb-inner after:hamb-inner before:hamb-inner-bef after:hamb-inner-aft ${
                navBarVisible && "is-active"
              }`}
            ></span>
          </span>
        </button>
      </header>
      <section className="pt-16 flex flex-col text-center items-center relative">
        <h1 className="text-headings3 font-semibold tracking-tight max-w-screen-md md:text-headings1">
          {texts.FIRST_SECTION_TITLE}
        </h1>
        <Image
          width={599}
          height={22}
          alt="underline"
          src="/underline.svg"
          className="px-2 -mt-3 md:-mt-4"
        />
        <div className="relative flex flex-col items-center px-6 gap-6 mt-1 max-w-xl md:gap-8 md:mt-8">
          <p className="text-dark400">{texts.FIRST_SECTION_SUBTITLE}</p>
          <Button variant={{ type: "contained" }}>
            {texts.BUTTON_TEXT_MAKE_PART}
          </Button>
          <Image
            width={110}
            height={75}
            alt="arrow"
            src="/arrow.svg"
            className="absolute left-0 bottom-4 hidden md:block"
          />
        </div>
        <Image
          priority
          width={1348}
          height={600}
          alt="desktop"
          src="/group_desktop.svg"
          className="mt-12 z-10 hidden md:block"
        />
        <Image
          priority
          width={363}
          height={460}
          alt="mobile"
          src="/group_mobile.svg"
          className="mt-12 z-10 self-end block md:hidden"
        />
        <div className="w-full h-44 bg-primaryPink absolute bottom-0 lg:h-56" />
      </section>
      <section className="flex flex-col items-center gap-16 pt-20 px-7 text-center md:pt-32 md:px-28">
        <h2 className="text-headings4 max-w-screen-sm font-semibold tracking-tight md:text-headings3">
          {texts.SECOND_SECTION_TITLE}
        </h2>
        <div className="flex flex-col gap-16 border-b border-b-dark850 pb-20 sm:flex-row sm:justify-between md:pb-32">
          <Benefits
            src="/face.svg"
            title={texts.SECOND_SECTION_CARD_1_TITLE}
            text={texts.SECOND_SECTION_CARD_1_CONTENT}
          />
          <Benefits
            src="/notebook.svg"
            title={texts.SECOND_SECTION_CARD_2_TITLE}
            text={texts.SECOND_SECTION_CARD_2_CONTENT}
          />
          <Benefits
            src="/graph.svg"
            title={texts.SECOND_SECTION_CARD_3_TITLE}
            text={texts.SECOND_SECTION_CARD_3_CONTENT}
          />
        </div>
      </section>
      <section className="flex flex-col gap-4 py-20 px-7 md:py-32 md:px-28 md:gap-16">
        <div className="grid gap-4 text-center lg:text-start lg:grid-cols-2 lg:grid-rows-2">
          <h2 className="text-headings4 lg:max-w-screen-sm font-semibold tracking-tight md:text-headings3">
            {texts.THIRD_SECTION_TITLE}
          </h2>
          <p className="hidden text-lg w-4/5 row-span-2 place-self-end self-center lg:block">
            {texts.THIRD_SECTION_TEXT}
          </p>
          <p className="lg:w-5/6 lg:text-lg">{texts.THIRD_SECTION_SUBTITLE}</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <Card
            style="lg:col-span-2"
            chipText={texts.THIRD_SECTION_CARD_1_CHIP}
            title={texts.THIRD_SECTION_CARD_1_TITLE}
            text={texts.THIRD_SECTION_CARD_1_CONTENT}
          />
          <Card
            chipText={texts.THIRD_SECTION_CARD_2_CHIP}
            title={texts.THIRD_SECTION_CARD_2_TITLE}
            text={texts.THIRD_SECTION_CARD_2_CONTENT}
          />
          <Card
            chipText={texts.THIRD_SECTION_CARD_3_CHIP}
            title={texts.THIRD_SECTION_CARD_3_TITLE}
            text={texts.THIRD_SECTION_CARD_3_CONTENT}
          />
          <Card
            chipText={texts.THIRD_SECTION_CARD_4_CHIP}
            title={texts.THIRD_SECTION_CARD_4_TITLE}
            text={texts.THIRD_SECTION_CARD_4_CONTENT}
          />
          <Card
            chipText={texts.THIRD_SECTION_CARD_5_CHIP}
            title={texts.THIRD_SECTION_CARD_5_TITLE}
            text={texts.THIRD_SECTION_CARD_5_CONTENT}
          />
        </div>
      </section>
      <section className="grid place-content-center gap-4 text-center bg-primaryPink py-20 px-6 md:gap-6 md:py-32 md:px-28">
        <h2 className="text-headings3 font-semibold tracking-tighter md:text-headings2 md:max-w-3xl">
          {texts.FOURTH_SECTION_TITLE}
        </h2>
        <p className="text-dark100 text-lg md:text-xl md:max-w-3xl">
          {texts.FIRST_SECTION_SUBTITLE}
        </p>
        <Button variant={{ type: "white" }}>
          {texts.BUTTON_TEXT_MAKE_PART}
        </Button>
      </section>
      <footer></footer>
    </main>
  )
}
