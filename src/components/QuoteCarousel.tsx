import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

interface QuoteItem {
  text: string;
  author: string;
}

const quotes: QuoteItem[] = [
  {
    text: "«Слово — драгоценный дар, дающий возможность сделать счастливыми других и самого себя.»",
    author: "А.П. Чехов"
  },
  {
    text: "«Всякое слово где-нибудь да оказывается у места.»",
    author: "Ф.М. Достоевский"
  },
  {
    text: "«Слово — одежда всех фактов, всех мыслей.»",
    author: "М. Горький"
  },
  {
    text: "«Хорошее слово — половина счастья.»",
    author: "И.С. Тургенев"
  },
  {
    text: "«Words are, in my not-so-humble opinion, our most inexhaustible source of magic.»",
    author: "J.K. Rowling"
  },
  {
    text: "«The limits of my language mean the limits of my world.»",
    author: "Ludwig Wittgenstein"
  }
];

const QuoteCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % quotes.length);
    }, 5000); // меняем цитату каждые 5 секунд

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-carousel mb-6 p-4 border-l-4 border-primary bg-primary/5 dark:bg-primary/10 rounded">
      <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Любимые цитаты</h3>
      
      {quotes.map((quote, index) => (
        <div key={index} className={`quote-slide ${index === activeIndex ? 'active' : ''}`}>
          <div className="flex gap-2 items-start mb-2">
            <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <p className="italic text-muted-foreground">
              {quote.text}
            </p>
          </div>
          <p className="text-sm text-right text-muted-foreground">
            — {quote.author}
          </p>
        </div>
      ))}
      
      <div className="flex justify-center mt-4 gap-1">
        {quotes.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-muted-foreground/30'}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuoteCarousel;