import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-bakery-bg bg-opacity-30">
      <Navbar />

      <div className="container py-12">
        <h1 className="mb-6 text-3xl font-bold">Контакты</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-semibold">Свяжитесь с нами</h2>
            
            <div className="mb-8 space-y-6">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Phone className="h-5 w-5 text-bakery" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">+7 (123) 456-78-90</p>
                  <p className="text-sm text-muted-foreground">Ежедневно с 8:00 до 20:00</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Mail className="h-5 w-5 text-bakery" />
                    Электронная почта
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">info@хлебушек.рф</p>
                  <p className="text-sm text-muted-foreground">Отвечаем в течение 24 часов</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <MapPin className="h-5 w-5 text-bakery" />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">ул. Хлебная, 15, Москва</p>
                  <p className="text-sm text-muted-foreground">
                    Метро "Технопарк", 5 минут пешком
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Clock className="h-5 w-5 text-bakery" />
                    Часы работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Понедельник - Пятница:</span>
                      <span>8:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Суббота:</span>
                      <span>9:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Воскресенье:</span>
                      <span>9:00 - 18:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card className="border-bakery-light">
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Имя</Label>
                      <Input id="firstName" placeholder="Введите ваше имя" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Фамилия</Label>
                      <Input id="lastName" placeholder="Введите вашу фамилию" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Тема обращения</Label>
                    <Input id="subject" placeholder="Укажите тему вашего обращения" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Напишите ваше сообщение здесь..."
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-bakery hover:bg-bakery-dark">
                    <Send className="mr-2 h-4 w-4" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Карта */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold">Мы на карте</h2>
          <div className="h-[400px] rounded-lg bg-muted p-2">
            <div className="flex h-full w-full items-center justify-center">
              <p className="text-center text-muted-foreground">
                {/* В реальном проекте здесь будет iframe с Google или Яндекс картой */}
                Здесь будет карта с нашим местоположением
              </p>
            </div>
          </div>
        </div>

        {/* Филиалы */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold">Наши филиалы</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Пекарня в центре</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">ул. Хлебная, 15, Москва</p>
                <p className="mb-2">Телефон: +7 (123) 456-78-90</p>
                <p>Часы работы: 8:00 - 20:00</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Пекарня на Севере</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">ул. Северная, 42, Москва</p>
                <p className="mb-2">Телефон: +7 (123) 456-78-91</p>
                <p>Часы работы: 8:00 - 20:00</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Пекарня на Западе</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">ул. Западная, 23, Москва</p>
                <p className="mb-2">Телефон: +7 (123) 456-78-92</p>
                <p>Часы работы: 8:00 - 20:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-muted py-8">
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

export default Contacts;
