import Header from "../components/Header";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Book from "../components/Book";
import "./globals.css"


export default function Home() {
  return (
    <main>
    <Book />
    <Header />
    <Hero />
    <Info />
    <Footer />
  </main>
  );
}
