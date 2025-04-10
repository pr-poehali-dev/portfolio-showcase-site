import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseIcon, CalendarIcon } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "Старший разработчик",
    company: "Компания А",
    period: "2021 - Настоящее время",
    description: "Разработка и поддержка веб-приложений с использованием React, TypeScript и других современных технологий. Руководство командой разработчиков."
  },
  {
    title: "Веб-разработчик",
    company: "Компания Б",
    period: "2018 - 2021",
    description: "Разработка интерфейсов пользователя, интеграция с API, оптимизация производительности веб-приложений."
  },
  {
    title: "Младший разработчик",
    company: "Компания В",
    period: "2016 - 2018",
    description: "Вёрстка, поддержка существующих проектов, изучение и внедрение новых технологий."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-secondary/50">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Опыт работы</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{exp.title}</CardTitle>
                  <div className="flex items-center text-muted-foreground">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <CardDescription className="flex items-center">
                  <BriefcaseIcon className="h-4 w-4 mr-1" />
                  {exp.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
