import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, description, price, image, category }: ProductProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="inline-block rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
            {category}
          </span>
        </div>
        <h3 className="mb-1 text-lg font-semibold">{name}</h3>
        <p className="mb-2 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
        <p className="text-lg font-bold text-bakery">{price} ₽</p>
      </CardContent>
      <CardFooter className="flex gap-2 p-4 pt-0">
        <Button
          variant="default"
          size="sm"
          className="flex-1"
          onClick={(e) => {
            e.preventDefault();
            // Add to cart logic here
          }}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          В корзину
        </Button>
        <Link to={`/product/${id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            Подробнее
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
