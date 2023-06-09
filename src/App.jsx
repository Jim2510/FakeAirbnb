import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import data from "./cardsData.jsx";
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
  const cards = data.map(crd => {
    return (
      <Card
        key={crd.id}
        {...crd}
      />
    );
  });
  return (
    <div>
      <Nav />
      <Hero />
      <section className="cards-list">
                {cards}
            </section>
    </div>
  );
}
