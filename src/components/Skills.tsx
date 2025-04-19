import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Globe } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center font-playfair">Навыки и квалификация</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-playfair">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Копирайтинг</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Продающие тексты", "Сочинения", "Стихотворения", 
                  "Лендинги", "Email-рассылки", "Контент для соцсетей", 
                  "Рекламные тексты", "Пресс-релизы", "Описания товаров", 
                  "Статьи"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-playfair">
                <Globe className="h-5 w-5 text-primary" />
                <span>Языки</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Английский язык</span>
                    <Badge>C1 (CAE)</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Cambridge Assessment English Certificate
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Немецкий язык</span>
                    <Badge>B1</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Goethe-Institut Zertifikat
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Русский язык</span>
                    <Badge>Родной</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-playfair">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span>Сертификаты</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="font-medium mb-1">Курс по копирайтингу</div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Таня Фишер
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Сертификат о прохождении курса "Мастер продающих текстов"
                  </div>
                </div>
                
                <div>
                  <div className="font-medium mb-1">Литературное мастерство</div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Литературный институт
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Сертификат о прохождении курса "Основы художественной прозы"
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;