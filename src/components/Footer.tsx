import { Link } from "react-router-dom";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2023 Иван Иванов. Все права защищены.
            </p>
          </div>
          
          <nav className="flex gap-4">
            <Link to="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
              Обо мне
            </Link>
            <Link to="/#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Опыт
            </Link>
            <Link to="/#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Навыки
            </Link>
            <Link to="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </Link>
          </nav>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/ivanov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/ivanov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://twitter.com/ivanov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <TwitterIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;