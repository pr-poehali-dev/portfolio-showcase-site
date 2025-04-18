import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: "Старший Frontend-разработчик",
      company: "Технологии Будущего",
      period: "2020 - настоящее время",
      description: "Разработка и поддержка крупных SPA на React и TypeScript. Внедрение современных практик разработки, оптимизация производительности."
    },
    {
      id: 2,
      title: "Frontend-разработчик",
      company: "Цифровые Решения",
      period: "2018 - 2020",
      description: "Создание пользовательских интерфейсов для веб-приложений. Работа с React, Redux и REST API."
    },
    {
      id: 3,
      title: "Младший разработчик",
      company: "Web Solutions",
      period: "2016 - 2018",
      description: "Верстка интерфейсов, интеграция с бэкендом, поддержка существующих проектов."
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
                  <Briefcase className="h-5 w-5 mt-1 text-primary" />
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