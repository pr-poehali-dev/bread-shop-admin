import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  // Моковые данные корзины
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Багет классический",
      price: 120,
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80",
      quantity: 2,
    },
    {
      id: "2",
      name: "Круассан с миндалем",
      price: 150,
      image: "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&q=80",
      quantity: 1,
    },
    {
      id: "3",
      name: "Торт Наполеон",
      price: 1200,
      image: "https://images.unsplash.com/photo-1626803775151-61d756612f97?auto=format&fit=crop&q=80",
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = 200;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-bakery-bg bg-opacity-30">
      <Navbar />

      <div className="container py-8">
        <h1 className="mb-8 text-3xl font-bold">Корзина</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-medium">{item.name}</h3>
                          <p className="text-lg font-bold text-bakery">
                            {item.price} ₽
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:bg-red-50 hover:text-red-600"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Итого</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Товары ({cartItems.length})</span>
                      <span>{subtotal} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка</span>
                      <span>{deliveryFee} ₽</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Итого к оплате</span>
                      <span className="text-xl text-bakery">{total} ₽</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-bakery hover:bg-bakery-dark">
                    Оформить заказ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <div className="mt-4 text-center">
                <Link
                  to="/products"
                  className="text-sm text-bakery hover:underline"
                >
                  Продолжить покупки
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-muted-foreground/30 p-12 text-center">
            <div className="mx-auto mb-4 text-4xl">🛒</div>
            <h2 className="mb-2 text-xl font-semibold">Ваша корзина пуста</h2>
            <p className="mb-6 text-muted-foreground">
              Добавьте товары из нашего каталога в корзину для оформления заказа
            </p>
            <Button asChild className="bg-bakery hover:bg-bakery-dark">
              <Link to="/">Перейти в каталог</Link>
            </Button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Пекарня "Хлебушек"</h3>
              <p className="text-sm text-muted-foreground">
                Свежая выпечка из натуральных ингредиентов с 2010 года.
              </p>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-semibold">Навигация</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-muted-foreground hover:text-bakery">Главная</Link></li>
                <li><Link to="/products" className="text-muted-foreground hover:text-bakery">Продукция</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-bakery">О нас</Link></li>
                <li><Link to="/contacts" className="text-muted-foreground hover:text-bakery">Контакты</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-semibold">Контакты</h3>
              <address className="not-italic">
                <p className="mb-2 text-sm text-muted-foreground">ул. Хлебная, 15, Москва</p>
                <p className="mb-2 text-sm text-muted-foreground">Телефон: +7 (123) 456-78-90</p>
                <p className="text-sm text-muted-foreground">Email: info@хлебушек.рф</p>
              </address>
            </div>
          </div>
          
          <div className="mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Пекарня "Хлебушек". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
