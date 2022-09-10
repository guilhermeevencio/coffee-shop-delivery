import coffeeImgs from '../../assets/coffee-images'

interface CoffeeMock {
  image: string
  tag: string[]
  title: string
  description: string
  price: number
}

export const coffeeInfoArray: CoffeeMock[] = [
  {
    title: 'Expresso Tradicional',
    image: coffeeImgs.expressoTradicional,
    tag: ['TRADICIONAL'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    title: 'Expresso Americano',
    image: coffeeImgs.expressoAmericano,
    tag: ['TRADICIONAL'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    title: 'Café com Leite',
    image: coffeeImgs.cafeComLeite,
    tag: ['TRADICIONAL', 'COM LEITE'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    title: 'Latte',
    image: coffeeImgs.latte,
    tag: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    title: 'Capuccino',
    image: coffeeImgs.capuccino,
    tag: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    title: 'Macchiato',
    image: coffeeImgs.macchiato,
    tag: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    title: 'Mocaccino',
    image: coffeeImgs.mocaccino,
    tag: ['TRADICIONAL', 'COM LEITE'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    title: 'Chocolate Quente',
    image: coffeeImgs.chocQuente,
    tag: ['ESPECIAL', 'COM LEITE'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    title: 'Cubano',
    image: coffeeImgs.cubano,
    tag: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    title: 'Havaiano',
    image: coffeeImgs.havaiano,
    tag: ['ESPECIAL'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    title: 'Árabe',
    image: coffeeImgs.arabe,
    tag: ['ESPECIAL'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    title: 'Irlandês',
    image: coffeeImgs.irlandes,
    tag: ['ESPECIAL', 'ALCOÓLICO'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
