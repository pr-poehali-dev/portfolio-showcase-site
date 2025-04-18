import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, Pen } from "lucide-react";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: "Старший копирайтер",
      company: "Медиа Мастерс",
      period: "2020 - настоящее время",
      description: "Создание SEO-контента для крупных брендов, разработка контент-стратегий, координация работы с командой копирайтеров, редактирование текстов."
    },
    {
      id: 2,
      title: "Копирайтер",
      company: "Текст-Про",
      period: "2018 - 2020",
      description: "Написание информационных статей, продающих текстов и e-mail рассылок для компаний из разных отраслей. Оптимизация контента для поисковых систем."
    },
    {
      id: 3,
      title: "Младший копирайтер",
      company: "Контент Хаус",
      period: "2016 - 2018",
      description: "Подготовка текстов для социальных сетей, создание описаний товаров для интернет-магазинов, участие в разработке рекламных кампаний."
    }
  ];

  return (
    <section id="experience" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Опыт работы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceData.map((item) => (
            <Card key={item.id} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Pen className="h-5 w-5 mt-1 text-primary" />
                  <span>{item.title}</span>
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-base font-medium">
                  {item.company}
                </CardDescription>
                <CardDescription className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{item.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;