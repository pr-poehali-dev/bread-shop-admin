import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen bg-bakery-bg bg-opacity-30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div
          className="h-[50vh] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container relative flex h-full flex-col items-center justify-center text-center">
            <h1 className="mb-4 font-cursive text-5xl font-bold text-white md:text-6xl">
              О нашей пекарне
            </h1>
            <p className="max-w-xl text-lg text-white">
              Наша история, ценности и люди, которые делают "Хлебушек" особенным
            </p>
          </div>
        </div>
      </section>

      {/* История */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Наша история</h2>
              <p className="mb-4">
                Пекарня "Хлебушек" была основана в 2010 году страстным пекарем Иваном Петровичем с простой миссией — вернуть людям настоящий вкус хлеба, испеченного вручную по традиционным рецептам.
              </p>
              <p className="mb-4">
                Начиналось всё с небольшой пекарни в центре города, где Иван Петрович лично замешивал тесто и выпекал хлеб. Качество его изделий быстро стало известно среди местных жителей, и маленькая пекарня не могла вместить всех желающих.
              </p>
              <p>
                К 2015 году мы открыли ещё две пекарни в разных районах города, а к 2020 году "Хлебушек" стал сетью из 7 пекарен с собственной производственной базой, но с неизменно высоким качеством каждого изделия.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&q=80"
                alt="История пекарни"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Ценности */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Наши ценности</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 text-3xl">🌱</div>
              <h3 className="mb-4 text-xl font-semibold">Натуральные ингредиенты</h3>
              <p className="text-muted-foreground">
                Мы используем только натуральные ингредиенты высшего качества, без химических добавок и консервантов. Наша мука поставляется с проверенных мельниц, а фрукты и ягоды — от местных фермеров.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 text-3xl">👨‍🍳</div>
              <h3 className="mb-4 text-xl font-semibold">Ремесленный подход</h3>
              <p className="text-muted-foreground">
                Каждое изделие готовится вручную нашими опытными пекарями. Мы придерживаемся традиционных методов приготовления теста на натуральной закваске, что требует времени, терпения и мастерства.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 text-3xl">♻️</div>
              <h3 className="mb-4 text-xl font-semibold">Забота об экологии</h3>
              <p className="text-muted-foreground">
                Мы используем экологичную упаковку, сортируем отходы и стремимся минимизировать наш углеродный след. Вся несвежая продукция передается в приюты для животных или на переработку.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Наша команда</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80"
                  alt="Иван Петрович"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-semibold">Иван Петрович</h3>
              <p className="mb-3 text-bakery">Основатель и шеф-пекарь</p>
              <p className="text-sm text-muted-foreground">
                Более 30 лет опыта в хлебопечении. Обучался искусству выпечки во Франции и Италии.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80"
                  alt="Мария Иванова"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-semibold">Мария Иванова</h3>
              <p className="mb-3 text-bakery">Кондитер-технолог</p>
              <p className="text-sm text-muted-foreground">
                Выпускница кулинарной академии, специалист по десертам и кондитерским изделиям.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80"
                  alt="Алексей Смирнов"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-semibold">Алексей Смирнов</h3>
              <p className="mb-3 text-bakery">Пекарь-технолог</p>
              <p className="text-sm text-muted-foreground">
                Специалист по хлебному тесту и закваскам. Отвечает за качество всей хлебной продукции.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Сертификаты */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Сертификаты и награды</h2>
          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg border border-border p-4 text-center">
              <div className="mb-2 text-3xl">🏆</div>
              <h3 className="text-lg font-medium">Лучшая пекарня города</h3>
              <p className="text-sm text-muted-foreground">2023</p>
            </div>
            <div className="rounded-lg border border-border p-4 text-center">
              <div className="mb-2 text-3xl">🥇</div>
              <h3 className="text-lg font-medium">Золотой багет</h3>
              <p className="text-sm text-muted-foreground">2022</p>
            </div>
            <div className="rounded-lg border border-border p-4 text-center">
              <div className="mb-2 text-3xl">📜</div>
              <h3 className="text-lg font-medium">Сертификат качества</h3>
              <p className="text-sm text-muted-foreground">ISO 9001</p>
            </div>
            <div className="rounded-lg border border-border p-4 text-center">
              <div className="mb-2 text-3xl">🌿</div>
              <h3 className="text-lg font-medium">Эко-производство</h3>
              <p className="text-sm text-muted-foreground">2021</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-bakery hover:bg-bakery-dark">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </section>

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

export default About;
