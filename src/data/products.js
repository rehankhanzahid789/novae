import serumMain from '../assets/product-serum-main.jpg'
import serumSide from '../assets/product-serum-side.jpg'
import serumClose from '../assets/product-serum-close.jpg'
import sunblockMain from '../assets/product-sunblock-main.jpg'
import sunblockSquare1 from '../assets/product-sunblock-square-1.jpg'
import sunblockSquare2 from '../assets/product-sunblock-square-2.jpg'
import eyecreamMain from '../assets/product-eyecream-main.jpg'
import eyecreamOpen from '../assets/product-eyecream-open.jpg'
import eyecreamBox from '../assets/product-eyecream-box.jpg'

export const products = [
  {
    id: 'skin-reset-serum',
    name: 'Skin Reset Serum',
    claim: 'Your daily serum, made for better skin days.',
    price: 58,
    size: '30 ml / 1.01 fl. oz.',
    ingredients: ['Niacinamide', 'Hyaluronic Acid', 'Ceramides'],
    description:
      'A daily hydrating serum with Niacinamide, Hyaluronic Acid and Ceramides. Helps support the skin barrier, improve hydration and leave skin looking smoother and refreshed.',
    directions:
      'Apply 2\u20133 drops to clean, dry skin. Gently pat until absorbed. Use morning and night before moisturizer.',
    image: serumMain,
    gallery: [serumMain, serumSide, serumClose],
    hero: true,
  },
  {
    id: 'daily-sun-block',
    name: 'Daily Sun Block',
    claim: 'Everyday SPF 50+, without the heavy feel.',
    price: 34,
    size: '50 ml / 1.69 fl. oz.',
    ingredients: ['Niacinamide', 'Vitamin E', 'Centella Asiatica'],
    description:
      'Lightweight broad-spectrum SPF 50+ sun protection for everyday use. Helps protect skin from UVA/UVB rays while Niacinamide, Vitamin E and Centella Asiatica help keep skin calm and comfortable.',
    directions:
      'Apply generously to face and neck 15 minutes before sun exposure. Reapply every 2 hours, especially after sweating or swimming.',
    image: sunblockMain,
    gallery: [sunblockMain, sunblockSquare1, sunblockSquare2],
    hero: false,
  },
  {
    id: 'under-eye-cream',
    name: 'Under Eye Cream',
    claim: 'Refresh tired eyes, morning and night.',
    price: 38,
    size: '15 ml / 0.50 fl. oz.',
    ingredients: ['Caffeine', 'Peptides', 'Hyaluronic Acid', 'Niacinamide'],
    description:
      'A lightweight eye cream designed to refresh tired-looking eyes. Caffeine, Peptides, Hyaluronic Acid and Niacinamide help reduce the appearance of puffiness, hydrate and smooth the under-eye area.',
    directions:
      'Apply a small amount under each eye morning and night. Gently tap with your fingertip until absorbed. Avoid direct contact with eyes.',
    image: eyecreamMain,
    gallery: [eyecreamMain, eyecreamOpen, eyecreamBox],
    hero: false,
  },
]

export const getProduct = (id) => products.find((p) => p.id === id)
