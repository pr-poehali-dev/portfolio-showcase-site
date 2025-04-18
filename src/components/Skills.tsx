import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Lightbulb, Workflow } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Копирайтинг",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      skills: [
        "SEO-копирайтинг", "Продающие тексты", "Лендинги", 
        "Email-рассылки", "Контент для соцсетей", "Рекламные тексты",
        "Пресс-релизы", "Описания товаров", "Статьи"
      ]
    },
    {
      id: 2,
      title: "Маркетинг",
      icon: <Workflow className="h-5 w-5 text-primary" />,
      skills: [
        "Контент-маркетинг", "SEO-оптимизация", "SMM", 
        "Email-маркетинг", "Анализ аудитории", "Стратегическое планирование"
      ]
    },
    {
      id: 3,
      title: "Инструменты",
      icon: <Lightbulb className="h-5 w-5 text-primary" />,
      skills: [
        "Google Docs", "Wordpress", "Tilda", 
        "SEO-инструменты", "Canva", "Ahrefs",
        "Социальные сети", "Яндекс.Метрика", "Google Analytics"
      ]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Навыки</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.id} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;