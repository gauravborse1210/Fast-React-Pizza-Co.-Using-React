import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

const pizza_img = [
  {
    img: "pizzas/01-margherita.jpg",
    id: 1,
    pizzaName: "Margherita",
  },
  {
    img: "pizzas/02-Capricciosa.jpg",
    id: 2,
    pizzaName: "Capricciosa",
  },
  {
    img: "pizzas/03-Romana.jpg",
    id: 3,
    pizzaName: "Romana",
  },
  {
    img: "pizzas/04-Prosciutto e Rucola.jpg",
    id: 4,
    pizzaName: "Prosciutto e Rucola",
  },
  {
    img: "pizzas/05-Diavola.jpg",
    id: 5,
    pizzaName: "Diavola",
  },
  {
    img: "pizzas/06-Vegetale.jpg",
    id: 6,
    pizzaName: "Vegetale",
  },
  {
    img: "pizzas/07-Napoli.jpg",
    id: 7,
    pizzaName: "Napoli",
  },
  {
    img: "pizzas/08-Siciliana.jpg",
    id: 8,
    pizzaName: "Siciliana",
  },
  {
    img: "pizzas/09-Pepperoni.jpg",
    id: 9,
    pizzaName: "Pepperoni",
  },
  {
    img: "pizzas/10-Hawaiian.jpg",
    id: 10,
    pizzaName: "Hawaiian",
  },
  {
    img: "pizzas/11-Spinach and Mushroom.jpg",
    id: 11,
    pizzaName: "Spinach and Mushroom",
  },
  {
    img: "pizzas/12-Mediterranean.jpg",
    id: 12,
    pizzaName: "Mediterranean",
  },
  {
    img: "pizzas/13-Greek.jpg",
    id: 13,
    pizzaName: "Greek",
  },
  {
    img: "pizzas/14-Abruzzese.jpg",
    id: 14,
    pizzaName: "Abruzzese",
  },
  {
    img: "pizzas/15-Pesto Chicken.jpg",
    id: 15,
    pizzaName: "Pesto Chicken",
  },
  {
    img: "pizzas/16-Eggplant Parmesan.jpg",
    id: 16,
    pizzaName: "Eggplant Parmesan",
  },
  {
    img: "pizzas/17-Roasted Veggie.jpg",
    id: 17,
    pizzaName: "Roasted Veggie",
  },
  {
    img: "pizzas/18-Tofu and Mushroom.jpg",
    id: 18,
    pizzaName: "Tofu and Mushroom",
  },
];

// const pizzas = pizza_img.map((pizza) => pizza.img);

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut } = pizza;
  const image = pizza_img.find((p) => p.pizzaName === name);

  return (
    <li className="flex gap-4 py-2">
      <img
        src={image?.img}
        alt={pizza_img.pizzaName}
        className={`w-40 h-24 ${soldOut ? "grayscale opacity-70" : ""}`}
      />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="flex items-center justify-between mt-auto">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
