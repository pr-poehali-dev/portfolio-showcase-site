import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileIcon, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "yasmina@example.com",
      link: "mailto:yasmina@example.com"
    },
    {
      id: 2,
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      link: "tel:+79991234567"
    },
    {
      id: 3,
      icon: <FileIcon className="h-5 w-5 text-primary" />,
      title: "Портфолио",
      value: "portfolio.yasmina.ru",
      link: "https://portfolio.yasmina.ru"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет отправка формы
    console.log("Форма отправлена");
  };

  return (
    <section id="contact" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Связаться со мной</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item) => (
                <Card key={item.id}>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base flex items-center gap-2">
                      {item.icon}
                      <span>{item.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm hover:underline text-primary"
                    >
                      {item.value}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Местоположение</span>
                </CardTitle>
                <CardDescription>
                  Москва, Россия
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Карта местоположения</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Имя
                      </label>
                      <Input id="name" placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Ваш email" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Тема
                    </label>
                    <Input id="subject" placeholder="Тема сообщения" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Ваше сообщение..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;