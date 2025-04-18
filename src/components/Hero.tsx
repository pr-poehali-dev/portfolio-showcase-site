import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-hero-pattern bg-cover bg-center bg-no-repeat dark:bg-hero-pattern-dark">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-background/90 dark:bg-background/80 p-6 rounded-lg backdrop-blur">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Ясмина Кулова
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Копирайтер
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Создаю привлекательные и убедительные тексты, которые превращают читателей в клиентов. 
              Специализируюсь на SEO-копирайтинге, рекламных текстах и контент-маркетинге.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link to="/#contact">Связаться</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/#experience">Посмотреть опыт</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=500"
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