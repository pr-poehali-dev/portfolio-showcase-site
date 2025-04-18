import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Иван Иванов
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Frontend-разработчик
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Специализируюсь на создании современных веб-приложений с использованием 
              React, TypeScript и современных инструментов разработки. Более 5 лет опыта 
              в разработке пользовательских интерфейсов.
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
                src="/placeholder.svg"
                alt="Фотография разработчика"
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