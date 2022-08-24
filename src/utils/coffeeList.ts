// Images //
import AmericanExpressImage from './../assets/coffees/american-express.png'
import TradicionalExpressImage from './../assets/coffees/tradicional-express.png'
import ArabianCoffeeImage from './../assets/coffees/arabian-coffee.png'
import CapuccinoImage from './../assets/coffees/capuccino.png'
import CoffeeWithMilkImage from './../assets/coffees/coffee-with-milk.png'
import CreamyExpressImage from './../assets/coffees/creamy-express.png'
import CubanCoffeeImage from './../assets/coffees/cuban-coffee.png'
import HawaiianCoffeeImage from './../assets/coffees/hawaiian-coffee.png'
import HotCoffeeImage from './../assets/coffees/hot-chocolate.png'
import IceExpressImage from './../assets/coffees/ice-express.png'
import IrishCoffeeImage from './../assets/coffees/irish-coffee.png'
import LatteImage from './../assets/coffees/latte.png'
import MacchiatoImage from './../assets/coffees/macchiato.png'
import MocaccinoImage from './../assets/coffees/mocaccino.png'

export interface Coffee {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  image: string
  isAvaliable?: boolean
}

export const coffeesList: Coffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['tradicional'],
    image: TradicionalExpressImage,
    isAvaliable: true,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 8.9,
    tags: ['tradicional'],
    image: AmericanExpressImage,
    isAvaliable: true,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 12.9,
    tags: ['tradicional'],
    image: CreamyExpressImage,
    isAvaliable: true,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 10.9,
    tags: ['tradicional', 'gelado'],
    image: IceExpressImage,
    isAvaliable: true,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 10.9,
    tags: ['tradicional', 'com leite'],
    image: CoffeeWithMilkImage,
    isAvaliable: true,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 13.9,
    tags: ['tradicional', 'com leite'],
    image: LatteImage,
    isAvaliable: true,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 15.9,
    tags: ['tradicional', 'com leite'],
    image: CapuccinoImage,
    isAvaliable: true,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 14.9,
    tags: ['tradicional', 'com leite'],
    image: MacchiatoImage,
    isAvaliable: true,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 17.9,
    tags: ['tradicional', 'com leite'],
    image: MocaccinoImage,
    isAvaliable: true,
  },
  {
    id: 9,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 10.9,
    tags: ['especial', 'com leite'],
    image: HotCoffeeImage,
    isAvaliable: true,
  },
  {
    id: 10,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 13.9,
    tags: ['especial', 'alcoólico', 'gelado'],
    image: CubanCoffeeImage,
    isAvaliable: true,
  },
  {
    id: 11,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 19.9,
    tags: ['especial'],
    image: HawaiianCoffeeImage,
    isAvaliable: true,
  },
  {
    id: 12,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 25.9,
    tags: ['especial'],
    image: ArabianCoffeeImage,
    isAvaliable: true,
  },
  {
    id: 13,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 22.9,
    tags: ['especial', 'alcoólico'],
    image: IrishCoffeeImage,
    isAvaliable: true,
  },
]
