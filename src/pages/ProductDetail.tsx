import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Minus, Plus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import ProductCard, { ProductProps } from "@/components/ProductCard";

// Моковые данные продукта
const productData = {
  id: "1",
  name: "Багет классический",
  description: "Хрустящий багет с мягким мякишем, приготовленный по традиционному французскому рецепту. Идеально подходит для бутербродов, гренок и в качестве дополнения к основным блюдам.",
  price: 120,
  image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80",
  category: "Хлеб",
  ingredients: "Мука пшеничная высшего сорта, вода, соль, закваска, дрожжи.",
  weight: 350,
  nutritionFacts: {
    calories: 275,
    proteins: 9,
    fats: 1.2,
    carbs: 52,
  },
  allergens: ["глютен"],
  storage: "24 часа при комнатной температуре, до 3 дней в холодильнике.",
};

// Похожие товары
const relatedProducts: ProductProps[] = [
  {
    id: "4",
    name: "Чиабатта",
    description: "Итальянский хлеб с хрустящей корочкой и мягким мякишем с крупными порами.",
    price: 135,
    image: "https://images.unsplash.com/photo-1600398138041-7c81bfc50131?auto=format&fit=crop&q=80",
    category: "Хлеб"
  },
  {
    id: "5",
    name: "Багет цельнозерновой",
    description: "Полезный багет из цельнозерновой муки с добавлением семян.",
    price: 140,
    image: "https://images.unsplash.com/photo-1586444248822-60f8ddad8622?auto=format&fit=crop&q=80",
    category: "Хлеб"
  },
  {
    id: "6",
    name: "Фокачча с розмарином",
    description: "Итальянский хлеб с оливковым маслом, розмарином и крупной солью.",
    price: 190,
    image: "https://images.unsplash.com/photo-1612549223926-d53328cbc69b?auto=format&fit=crop&q=80",
    category: "Хлеб"
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);

  // В реальном приложении здесь был бы запрос к API для получения данных о товаре по id
  const product = productData;

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCart = () => {
    // Здесь будет логика добавления в корзину
    console.log(`Added ${quantity} of ${product.name} to cart`);
    // В реальном приложении это обновило бы состояние корзины
  };

  return (
    <div className="min-h-screen bg-bakery-bg bg-opacity-30">
      <Navbar />

      <div className="container py-8">
        <Link to="/" className="mb-4 inline-flex items-center text-bakery hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад к каталогу
        </Link>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Изображение товара */}
          <div className="overflow-hidden rounded-lg bg-white shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Информация о товаре */}
          <div>
            <div className="mb-2">
              <Badge className="bg-secondary">{product.category}</Badge>
            </div>
            <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>
            <p className="mb-4 text-muted-foreground">{product.description}</p>
            
            <div className="mb-6">
              <div className="mb-2 text-2xl font-bold text-bakery">
                {product.price} ₽
              </div>
              <div className="text-sm text-muted-foreground">
                Вес: {product.weight} г
              </div>
            </div>

            <Separator className="mb-6" />

            {/* Выбор количества и добавление в корзину */}
            <div className="mb-8">
              <div className="mb-4 flex items-center">
                <span className="mr-4">Количество:</span>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="mx-4 w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={incrementQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button
                onClick={addToCart}
                className="w-full bg-bakery hover:bg-bakery-dark"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Добавить в корзину
              </Button>
            </div>

            {/* Табы с информацией */}
            <Tabs defaultValue="ingredients">
              <TabsList className="w-full">
                <TabsTrigger value="ingredients" className="flex-1">
                  Состав
                </TabsTrigger>
                <TabsTrigger value="nutrition" className="flex-1">
                  Пищевая ценность
                </TabsTrigger>
                <TabsTrigger value="storage" className="flex-1">
                  Хранение
                </TabsTrigger>
              </TabsList>
              <TabsContent value="ingredients" className="rounded-md border p-4">
                <h3 className="mb-2 font-semibold">Ингредиенты:</h3>
                <p>{product.ingredients}</p>
                {product.allergens && product.allergens.length > 0 && (
                  <>
                    <h3 className="mb-2 mt-4 font-semibold">Аллергены:</h3>
                    <ul className="list-inside list-disc">
                      {product.allergens.map((allergen) => (
                        <li key={allergen}>{allergen}</li>
                      ))}
                    </ul>
                  </>
                )}
              </TabsContent>
              <TabsContent value="nutrition" className="rounded-md border p-4">
                <h3 className="mb-2 font-semibold">Пищевая ценность на 100г:</h3>
                <ul className="space-y-1">
                  <li>Калории: {product.nutritionFacts.calories} ккал</li>
                  <li>Белки: {product.nutritionFacts.proteins} г</li>
                  <li>Жиры: {product.nutritionFacts.fats} г</li>
                  <li>Углеводы: {product.nutritionFacts.carbs} г</li>
                </ul>
              </TabsContent>
              <TabsContent value="storage" className="rounded-md border p-4">
                <h3 className="mb-2 font-semibold">Условия хранения:</h3>
                <p>{product.storage}</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Похожие товары */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Похожие товары</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
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

export default ProductDetail;
