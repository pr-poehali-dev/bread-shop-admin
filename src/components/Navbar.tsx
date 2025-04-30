import { Link } from "react-router-dom";
import { ShoppingCart, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-bakery">🍞 Хлебушек</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Главная
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Продукция</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {categories.map((category) => (
                      <li key={category.title} className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to={category.href}
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {category.title}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {category.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    О нас
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contacts">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Контакты
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/admin">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Админ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-bakery text-xs text-white">
                3
              </span>
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="outline" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 z-20 bg-white pb-4 shadow-md md:hidden">
          <div className="container flex flex-col gap-2">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-center font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/products"
              className="block rounded-md px-3 py-2 text-center font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Продукция
            </Link>
            <Link
              to="/about"
              className="block rounded-md px-3 py-2 text-center font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link
              to="/contacts"
              className="block rounded-md px-3 py-2 text-center font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Link
              to="/admin"
              className="block rounded-md px-3 py-2 text-center font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Админ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const categories = [
  {
    title: "Хлеб",
    description: "Свежий хлеб из натуральных ингредиентов, выпеченный с любовью.",
    href: "/products/bread",
  },
  {
    title: "Выпечка",
    description: "Сладкая и соленая выпечка для любого случая и на любой вкус.",
    href: "/products/pastry",
  },
  {
    title: "Торты",
    description: "Праздничные торты и десерты ручной работы на заказ.",
    href: "/products/cakes",
  },
];

export default Navbar;
