import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

const pizzas = [
  {
    name: 'Margherita',
    PizzaName: 'pizzas/01-margherita.jpg',
    id: 1,
  },
  {
    name: 'Capricciosa',
    PizzaName: 'pizzas/02-Capricciosa.jpg',
    id: 2,
  },
  {
    name: 'Romana',
    PizzaName: 'pizzas/03-Romana.jpg',
    id: 3,
  },
  {
    name: 'Prosciutto e Rucola',
    PizzaName: 'pizzas/04-Prosciutto e Rucola.jpg',
    id: 4,
  },
  {
    name: 'Diavola',
    PizzaName: 'pizzas/05-Diavola.jpg',
    id: 5,
  },
  {
    name: 'Vegetale',
    PizzaName: 'pizzas/06-Vegetale.jpg',
    id: 6,
  },
  {
    name: 'Napoli',
    PizzaName: 'pizzas/07-Napoli.jpg',
    id: 7,
  },
  {
    name: 'Siciliana',
    PizzaName: 'pizzas/08-Siciliana.jpg',
    id: 8,
  },
  {
    name: 'Pepperoni',
    PizzaName: 'pizzas/09-Pepperoni.jpg',
    id: 9,
  },
  {
    name: 'Hawaiian',
    PizzaName: 'pizzas/10-Hawaiian.jpg',
    id: 10,
  },
  {
    name: 'Spinach and Mushroom',
    PizzaName: 'pizzas/11-Spinach and Mushroom.jpg',
    id: 11,
  },
  {
    name: 'Mediterranean',
    PizzaName: 'pizzas/12-Mediterranean.jpg',
    id: 12,
  },
  {
    name: 'Greek',
    PizzaName: 'pizzas/13-Greek.jpg',
    id: 13,
  },
  {
    name: 'Abruzzese',
    PizzaName: 'pizzas/14-Abruzzese.jpg',
    id: 14,
  },
  {
    name: 'Pesto Chicken',
    PizzaName: 'pizzas/15-Pesto Chicken.jpg',
    id: 15,
  },
  {
    name: 'Eggplant Parmesan',
    PizzaName: 'pizzas/16-Eggplant Parmesan.jpg',
    id: 16,
  },
  {
    name: 'Roasted Veggie',
    PizzaName: 'pizzas/17-Roasted Veggie.jpg',
    id: 17,
  },
  {
    name: 'Tofu and Mushroom',
    PizzaName: 'pizzas/18-Tofu and Mushroom.jpg',
    id: 18,
  },
];

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isIncart = currentQuantity > 0;

  const image = pizzas.find((pizzas) => pizzas.name === name);

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={image.PizzaName}
        alt={name}
        className={`h-40 w-40 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isIncart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isIncart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
