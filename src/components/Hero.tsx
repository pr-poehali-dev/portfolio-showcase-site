import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import QuoteCarousel from "./QuoteCarousel";

const Hero = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-hero-pattern bg-cover bg-center bg-no-repeat dark:bg-hero-pattern-dark">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-background/90 dark:bg-background/80 p-6 rounded-lg backdrop-blur">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-playfair">
              Ясмина Кулова
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-playfair">
              Копирайтер
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Создаю привлекательные и убедительные тексты, которые превращают читателей в клиентов. 
              Моя любовь к литературе, искусству слова и широкая эрудиция позволяют находить нестандартные решения и создавать тексты, которые запоминаются.
            </p>
            <QuoteCarousel />
            <div className="flex gap-4">
              <Button asChild>
                <Link to="/#contact">Связаться</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/#samples">Примеры работ</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="https://cdn.poehali.dev/files/2cf969d4-be4b-44f8-957a-03f4e9e4d940.png"
                alt="Фотография Ясмины Куловой"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;