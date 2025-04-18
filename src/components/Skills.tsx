import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Lightbulb, Workflow } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Технические навыки",
      icon: <Code className="h-5 w-5 text-primary" />,
      skills: [
        "JavaScript", "TypeScript", "React", "Redux", 
        "HTML5", "CSS3", "Tailwind CSS", "Styled Components",
        "REST API", "GraphQL", "Webpack", "Vite"
      ]
    },
    {
      id: 2,
      title: "Методологии",
      icon: <Workflow className="h-5 w-5 text-primary" />,
      skills: [
        "Agile", "Scrum", "Kanban", 
        "CI/CD", "TDD", "Code Review"
      ]
    },
    {
      id: 3,
      title: "Дополнительные навыки",
      icon: <Lightbulb className="h-5 w-5 text-primary" />,
      skills: [
        "UI/UX", "SEO", "Performance Optimization", 
        "Cross-browser Testing", "Accessibility", "Responsive Design"
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