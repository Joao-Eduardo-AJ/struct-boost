"use client"

import { Button } from "@/components"
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
      <header className="py-6 px-6 md:px-28 border-b border-dark800 flex items-center justify-between">
        <Image
          src="logo.svg"
          alt="logo"
          width={208}
          height={26}
          className="w-40 h-5 md:w-52 md:h-7"
        />
        <nav
          className={`bg-dark800 grid transition-all duration-500 overflow-hidden absolute right-14 top-6 ${
            navBarVisible ? "w-40" : "w-0"
          }`}
        >
          <Button variant={{ type: "containedNav" }}>
            {texts.BUTTON_TEXT_CONTACT}
          </Button>
          <Button>{texts.BUTTON_TEXT_DIFFERENTIALS}</Button>
          <Button>{texts.BUTTON_TEXT_GALERY}</Button>
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
      <section></section>
      <footer></footer>
    </main>
  )
}
