import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          Портфолио
        </Link>
        <nav className="ml-auto flex gap-4 items-center">
          <Button variant="ghost" asChild>
            <Link to="/#about">Обо мне</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/#samples">Примеры работ</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/#skills">Навыки</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/#contact">Контакты</Link>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;