import { Button, Card } from "@/components"

export default function Home() {
  return (
    <main>
      <header></header>
      <section>
        <h1>Hello World</h1>
        <p>inter</p>
        <Button variant={{ type: "white" }}>Contact</Button>
        <div className="flex px-4 gap-4">
          <Card
            chipText="Potencializando"
            title="JavaScript Moderno"
            text="Aprenda a programar com Javascript moderno e torne suas páginas interativas e dinâmicas, proporcionando uma experiência única ."
          />
          <Card chipText="" title="" text="" />
          <Card chipText="" title="" text="" />
        </div>
      </section>
      <footer></footer>
    </main>
  )
}
