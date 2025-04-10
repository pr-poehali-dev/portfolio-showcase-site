import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 px-4 md:py-32 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="container max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Привет, я <span className="text-primary">Ваше Имя</span></h1>
        <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-primary">
          <img 
            src="/placeholder.svg" 
            alt="Фото профиля" 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
          Специалист по веб-разработке с фокусом на создание современных пользовательских интерфейсов
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={scrollToContact}>
            Связаться со мной
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#experience">
              Узнать больше <ArrowDownIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
