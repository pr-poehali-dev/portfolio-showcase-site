import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";

const TextSamples = () => {
  const [dialogContent, setDialogContent] = useState({
    isOpen: false,
    title: "",
    content: "",
    type: ""
  });

  const samples = [
    {
      id: 1,
      title: "Продающий текст",
      description: "Пример продающего текста для интернет-магазина одежды",
      icon: <ShoppingBag className="h-5 w-5 text-primary" />,
      content: `В это трудно поверить, но наш магазин стал счастливым обладателем вечернего платья члена королевской семьи Великобритании — самой Кейт Миддлтон. Как подобает герцогине, одевается она скромно, элегантно и со вкусом. Хотели бы также?

Только представьте: перед каждым важным мероприятием вам не нужно думать, в чём пойти. Вы не тратите десятки тысяч на платья, которые наденете всего один раз. 

Чёрное платье из нашей осенней коллекции — копия наряда миссис Миддлтон (смотрите фото в карусели). В отличие от оригинального платья, в составе нашего натуральный шёлк и плотный гипюр. Платье свободное, лёгкое и приятное к телу. Смело надевайте его на свадьбу, выпускной или в театр. Будьте уверены, все взгляды будут прикованы только к вам! 

Спешите! Акция действует до 1 октября включительно.

Для заказа пишите в комментарии «хочу платье» и получите скидку 10% на следующий заказ.`
    },
    {
      id: 2,
      title: "Email-рассылка",
      description: "Пример письма из email-рассылки для курса по изучению языков",
      icon: <Mail className="h-5 w-5 text-primary" />,
      content: `Добрый день!

Спасибо за отклик! Мы обязательно доработаем чек-лист с учётом ваших рекомендаций.

Сегодня предлагаем разобраться: как же КАЧЕСТВЕННО смотреть фильмы и сериалы НЕ на родном языке:

1. Прокачивайте сначала аудирование. Начните с простых диалогов или подкастов на радио. Если речь идёт об английском, советуем «6 minute English» от BBC.

2. Плавно переходите к передачам по типу «My strange addiction» или «Obsessive Compulsive Cleaners». В них нет определённого сюжета и поэтому их легче понимать.  

3. Сериалы смотрим только с субтитрами и стараемся выписывать неизвестные слова, интересные и смешные фразы героев. Поверьте, вам будет приятно их перечитывать.

4. Старайтесь пересказывать просмотренные эпизоды, делитесь впечатлениями. Делайте это на иностранном языке, не стесняясь своих ошибок.

Следуйте нашим рекомендациям, и тогда к моменту выпуска чек-листа уже сможете с пользой и большим удовольствием смотреть английские фильмы, сериалы и телешоу.

Кстати, чек-лист выходит уже через неделю. Приобретайте его в первые три дня после выпуска СО СКИДКОЙ 20%! Приводите друзей и получайте второй такой же чек-лист БЕСПЛАТНО!`
    },
    {
      id: 3,
      title: "Статья для блога",
      description: "Пример статьи о тенденциях в контент-маркетинге",
      icon: <FileText className="h-5 w-5 text-primary" />,
      content: `# 5 главных трендов контент-маркетинга в 2025 году

Контент-маркетинг непрерывно эволюционирует, и успех в этой сфере зависит от умения адаптироваться к новым тенденциям. В этой статье мы рассмотрим пять ключевых направлений, которые будут определять стратегии контент-маркетинга в 2025 году.

## 1. Персонализация достигает нового уровня

Персонализированный контент теперь не просто приятное дополнение, а необходимость. Согласно последним исследованиям, 80% потребителей с большей вероятностью взаимодействуют с брендом, который предлагает персонализированный опыт. 

В 2025 году персонализация становится гиперперсонализацией: контент адаптируется не только к демографическим данным, но и к конкретному контексту, настроению и предыдущему взаимодействию пользователя с брендом.

## 2. Интерактивный контент доминирует

Статичный контент уступает место интерактивному взаимодействию. Квизы, опросы, калькуляторы, интерактивные инфографики и видео с возможностью выбора сюжета — всё это позволяет удерживать внимание аудитории в эпоху информационной перегрузки.

## 3. Аудио- и голосовой контент расширяет границы

С ростом популярности умных колонок и голосовых помощников, оптимизация контента для голосового поиска становится критически важной. Подкасты, аудиоверсии статей и контент, разработанный специально для голосовых интерфейсов, позволяют брендам охватить аудиторию в моменты, когда чтение или просмотр невозможны.

## 4. Этичность и социальная ответственность как стратегия

Современные потребители выбирают бренды, которые разделяют их ценности. Контент, отражающий приверженность экологическим и социальным проблемам, повышает лояльность аудитории и укрепляет репутацию бренда.

## 5. Данные и аналитика как основа создания контента

Решения, основанные на данных, теперь определяют весь процесс создания контента — от выбора темы до форматов и каналов распространения. Предиктивная аналитика помогает создавать контент, который будет востребован еще до его публикации.

---

Адаптация к этим трендам требует гибкости и готовности к экспериментам. Бренды, которые смогут интегрировать эти тенденции в свою контент-стратегию, получат значительное преимущество в привлечении и удержании аудитории в 2025 году.`
    },
  ];

  const openDialog = (sample: any) => {
    setDialogContent({
      isOpen: true,
      title: sample.title,
      content: sample.content,
      type: sample.id === 1 ? "продающего текста" : sample.id === 2 ? "email-рассылки" : "статьи"
    });
  };

  const closeDialog = () => {
    setDialogContent({
      ...dialogContent,
      isOpen: false
    });
  };

  return (
    <section id="samples" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Примеры текстов</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {samples.map((sample) => (
            <Card key={sample.id} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  {sample.icon}
                  <span>{sample.title}</span>
                </CardTitle>
                <CardDescription>{sample.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="line-clamp-4">{sample.content.split('\n')[0]}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={() => openDialog(sample)}>
                  Посмотреть полностью
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={dialogContent.isOpen} onOpenChange={closeDialog}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{dialogContent.title}</DialogTitle>
            <DialogDescription>
              Пример {dialogContent.type}
            </DialogDescription>
          </DialogHeader>
          <div className="whitespace-pre-line py-4">
            {dialogContent.content}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button">Закрыть</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TextSamples;