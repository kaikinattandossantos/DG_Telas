import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Products } from "@/components/products"
import { Testimonials } from "@/components/testemunhas"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ProductCatalog } from "@/components/product-catalog"
import { Gallery } from "@/components/gallery"
import { Faq } from "@/components/faq"; // importe o componente


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Products />
      <ProductCatalog />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
