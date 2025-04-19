import { Mail, MessageSquare, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "WhatsApp",
      value: "+7 (999) 123-45-67",
      link: "https://wa.me/79991234567"
    },
    {
      id: 2,
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Telegram",
      value: "@yasminakulova",
      link: "https://t.me/yasminakulova"
    },
    {
      id: 3,
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "yasmina@example.com",
      link: "mailto:yasmina@example.com"
    }
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Связаться со мной</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contactInfo.map((item) => (
            <Card key={item.id} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mx-auto bg-primary/10 rounded-full p-4 mb-4">
                  {item.icon}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href={item.link} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {item.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;