import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-secondary/50">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Свяжитесь со мной</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
              <CardDescription>Свяжитесь со мной любым удобным способом</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <MailIcon className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:example@example.com" className="hover:underline">example@example.com</a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+71234567890" className="hover:underline">+7 (123) 456-78-90</a>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-3 text-primary" />
                <span>Москва, Россия</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Отправить сообщение</CardTitle>
              <CardDescription>Заполните форму, и я свяжусь с вами</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Textarea placeholder="Сообщение" rows={4} />
                </div>
                <Button type="submit" className="w-full">
                  Отправить <SendIcon className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
