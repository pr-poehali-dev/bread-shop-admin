import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import ProductCard, { ProductProps } from "@/components/ProductCard";

const productsData: ProductProps[] = [
  {
    id: "1",
    name: "Багет классический",
    description: "Хрустящий багет с мягким мякишем, приготовленный по традиционному французскому рецепту.",
    price: 120,
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80",
    category: "Хлеб"
  },
  {
    id: "2",
    name: "Круассан с миндалем",
    description: "Слоеный круассан с миндальным кремом и хрустящими лепестками миндаля сверху.",
    price: 150,
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&q=80",
    category: "Выпечка"
  },
  {
    id: "3",
    name: "Торт Наполеон",
    description: "Классический слоеный торт с нежным заварным кремом, который тает во рту.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1626803775151-61d756612f97?auto=format&fit=crop&q=80",
    category: "Торты"
  }
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const filteredProducts = activeCategory === "all" 
    ? productsData 
    : productsData.filter(product => product.category.toLowerCase() === activeCategory);

  return (
    <div className="min-h-screen bg-bakery-bg bg-opacity-30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="h-[70vh] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556711905-b3357f8e6cd4?auto=format&fit=crop&q=80')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container relative flex h-full flex-col items-center justify-center text-center">
            <h1 className="mb-4 font-cursive text-5xl font-bold text-white md:text-6xl">
              Пекарня "Хлебушек"
            </h1>
            <p className="mb-8 max-w-xl text-lg text-white">
              Свежая выпечка из натуральных ингредиентов каждый день.
              Мы печём с любовью для вас с 2010 года.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-bakery hover:bg-bakery-dark">
                <Link to="/products">Наша продукция</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-bakery">
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Наши популярные товары</h2>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mx-auto">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveCategory("all")}
              >
                Все
              </TabsTrigger>
              <TabsTrigger 
                value="хлеб" 
                onClick={() => setActiveCategory("хлеб")}
              >
                Хлеб
              </TabsTrigger>
              <TabsTrigger 
                value="выпечка" 
                onClick={() => setActiveCategory("выпечка")}
              >
                Выпечка
              </TabsTrigger>
              <TabsTrigger 
                value="торты" 
                onClick={() => setActiveCategory("торты")}
              >
                Торты
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeCategory} className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-bakery hover:bg-bakery-dark">
              <Link to="/products">Смотреть все товары</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg p-6 text-center shadow-sm transition-all hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-bakery-light text-2xl">
                🌾
              </div>
              <h3 className="mb-2 text-xl font-semibold">Натуральные ингредиенты</h3>
              <p className="text-muted-foreground">
                Мы используем только натуральные ингредиенты высшего качества без добавок и консервантов.
              </p>
            </div>
            
            <div className="rounded-lg p-6 text-center shadow-sm transition-all hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-bakery-light text-2xl">
                ⏰
              </div>
              <h3 className="mb-2 text-xl font-semibold">Свежая выпечка каждый день</h3>
              <p className="text-muted-foreground">
                Мы выпекаем свежий хлеб и выпечку каждое утро, чтобы вы всегда получали самое свежее.
              </p>
            </div>
            
            <div className="rounded-lg p-6 text-center shadow-sm transition-all hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-bakery-light text-2xl">
                👨‍🍳
              </div>
              <h3 className="mb-2 text-xl font-semibold">Опытные мастера-пекари</h3>
              <p className="text-muted-foreground">
                Наши пекари имеют многолетний опыт и вкладывают душу в каждое изделие.
              </p>
            </div>
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

export default Index;
