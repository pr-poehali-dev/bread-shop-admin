import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ProductProps } from "@/components/ProductCard";
import { Edit, Plus, Search, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";

// Example data
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

const orders = [
  { id: "ORD-001", customer: "Иванов Иван", total: 1350, date: "30.04.2025", status: "Новый" },
  { id: "ORD-002", customer: "Петрова Анна", total: 820, date: "29.04.2025", status: "Оплачен" },
  { id: "ORD-003", customer: "Сидоров Петр", total: 2100, date: "28.04.2025", status: "Выполнен" }
];

const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    const filtered = productsData.filter(
      product => 
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-muted bg-opacity-30">
      <Navbar />
      
      <div className="container py-8">
        <h1 className="mb-8 text-3xl font-bold">Панель администратора</h1>
        
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-3">
            <TabsTrigger value="products">Товары</TabsTrigger>
            <TabsTrigger value="orders">Заказы</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>
          
          {/* Products Tab */}
          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Управление товарами</CardTitle>
                <CardDescription>
                  Добавляйте, редактируйте и удаляйте товары вашей пекарни.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 flex items-center justify-between">
                  <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Поиск товаров..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </div>
                  
                  <Button className="bg-bakery hover:bg-bakery-dark">
                    <Plus className="mr-2 h-4 w-4" /> Добавить товар
                  </Button>
                </div>
                
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Название</TableHead>
                        <TableHead>Категория</TableHead>
                        <TableHead className="text-right">Цена</TableHead>
                        <TableHead className="text-center">Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                          <TableRow key={product.id}>
                            <TableCell className="font-medium">{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell className="text-right">{product.price} ₽</TableCell>
                            <TableCell>
                              <div className="flex justify-center gap-2">
                                <Button variant="outline" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="destructive" size="icon">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={5} className="h-24 text-center">
                            Товаров не найдено.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Добавить/Редактировать товар</CardTitle>
                <CardDescription>
                  Заполните форму, чтобы добавить новый товар или отредактировать существующий.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Название товара</Label>
                      <Input id="name" placeholder="Название товара" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Категория</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="хлеб">Хлеб</SelectItem>
                          <SelectItem value="выпечка">Выпечка</SelectItem>
                          <SelectItem value="торты">Торты</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Описание</Label>
                    <Textarea id="description" placeholder="Описание товара" className="min-h-24" />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="price">Цена (₽)</Label>
                      <Input id="price" type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image">Ссылка на изображение</Label>
                      <Input id="image" placeholder="https://..." />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Отмена</Button>
                <Button className="bg-bakery hover:bg-bakery-dark">Сохранить</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Управление заказами</CardTitle>
                <CardDescription>
                  Просмотр и обработка заказов клиентов.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>№ заказа</TableHead>
                        <TableHead>Клиент</TableHead>
                        <TableHead>Дата</TableHead>
                        <TableHead className="text-right">Сумма</TableHead>
                        <TableHead>Статус</TableHead>
                        <TableHead className="text-center">Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell className="text-right">{order.total} ₽</TableCell>
                          <TableCell>
                            <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold 
                              ${order.status === "Новый" ? "bg-blue-100 text-blue-800" : 
                                order.status === "Оплачен" ? "bg-yellow-100 text-yellow-800" : 
                                "bg-green-100 text-green-800"}`}>
                              {order.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex justify-center gap-2">
                              <Button variant="outline" size="sm">
                                Подробнее
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Настройки магазина</CardTitle>
                <CardDescription>
                  Управляйте основными настройками вашей пекарни.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="store-name">Название пекарни</Label>
                    <Input id="store-name" defaultValue="Пекарня «Хлебушек»" />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" defaultValue="+7 (123) 456-78-90" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue="info@хлебушек.рф" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Адрес</Label>
                    <Input id="address" defaultValue="ул. Хлебная, 15, Москва" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="working-hours">Часы работы</Label>
                    <Input id="working-hours" defaultValue="Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00" />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto bg-bakery hover:bg-bakery-dark">Сохранить изменения</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
