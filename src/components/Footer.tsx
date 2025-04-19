import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground font-lora">
              © 2025 Ясмина Кулова. Все права защищены.
            </p>
          </div>
          
          <nav className="flex gap-4 font-lora">
            <Link to="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
              Обо мне
            </Link>
            <Link to="/#samples" className="text-muted-foreground hover:text-foreground transition-colors">
              Примеры работ
            </Link>
            <Link to="/#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Навыки
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;