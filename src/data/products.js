import productStones from '../assets/product-stones.jpg'
import productStump from '../assets/product-box-stump.jpg'
import productFabric from '../assets/product-dark-fabric.jpg'
import productOrganic from '../assets/product-organic-dark.jpg'
import productHand from '../assets/product-in-hand.jpg'
import lifestyleFace from '../assets/lifestyle-serum-face.jpg'

export const products = [
  {
    id: 'skin-reset-serum',
    name: 'Skin Reset Serum',
    claim: 'Your daily serum, made for better skin days.',
    price: 58,
    size: '30ml / 1.01 fl.oz.',
    ingredients: ['Niacinamide', 'Hyaluronic Acid', 'Ceramides'],
    description:
      'A lightweight daily serum built to support the skin barrier, restore hydration, and leave skin looking calmer and more balanced. Niacinamide works to even tone and refine texture, hyaluronic acid pulls in moisture, and ceramides help lock it all in. Meet your skin\u2019s new favorite.',
    directions:
      'Apply 2\u20133 drops to clean, dry skin morning and night. Gently press into face and neck. Follow with moisturizer and SPF during the day.',
    image: productStump,
    gallery: [productStump, productStones, lifestyleFace, productHand],
    hero: true,
  },
  {
    id: 'barrier-repair-cream',
    name: 'Barrier Repair Cream',
    claim: 'Rich hydration, without the heaviness.',
    price: 46,
    size: '50ml / 1.7 fl.oz.',
    ingredients: ['Ceramides', 'Squalane', 'Shea Butter'],
    description:
      'A cushiony daily moisturizer designed to work alongside Skin Reset Serum. It reinforces the skin barrier with ceramides and squalane, sealing in hydration for a soft, plump, resilient finish \u2014 morning or night.',
    directions:
      'Warm a small amount between fingertips and press into face and neck as the last step of your routine, morning and night.',
    image: productFabric,
    gallery: [productFabric, productHand, productStones],
    hero: false,
  },
  {
    id: 'gentle-reset-cleanser',
    name: 'Gentle Reset Cleanser',
    claim: 'A clean start, every single day.',
    price: 32,
    size: '120ml / 4.06 fl.oz.',
    ingredients: ['Amino Acids', 'Oat Extract', 'Panthenol'],
    description:
      'A soft, non-stripping cleanser that clears away the day without disrupting the skin barrier. Amino acids and oat extract keep the wash feeling calm and comfortable, so skin is left clean, soft, and ready for what comes next.',
    directions:
      'Massage onto damp skin morning and night, then rinse with lukewarm water. Follow with Skin Reset Serum.',
    image: productOrganic,
    gallery: [productOrganic, productStones, lifestyleFace],
    hero: false,
  },
]

export const getProduct = (id) => products.find((p) => p.id === id)
