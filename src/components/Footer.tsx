import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {currentYear} Портфолио. Все права защищены.
        </p>
        <nav className="flex gap-4 text-sm">
          <Link to="/#about" className="text-muted-foreground hover:text-foreground">
            Обо мне
          </Link>
          <Link to="/#experience" className="text-muted-foreground hover:text-foreground">
            Опыт
          </Link>
          <Link to="/#skills" className="text-muted-foreground hover:text-foreground">
            Навыки
          </Link>
          <Link to="/#contact" className="text-muted-foreground hover:text-foreground">
            Контакты
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
