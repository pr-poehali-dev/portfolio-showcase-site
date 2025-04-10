import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SkillCategory = {
  category: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    category: "Фронтенд",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Next.js"]
  },
  {
    category: "Бэкенд",
    skills: ["Node.js", "Express", "REST API", "GraphQL", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Инструменты",
    skills: ["Git", "Webpack", "Vite", "Jest", "Docker", "CI/CD", "Figma"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Навыки и технологии</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">{skill}</Badge>
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
