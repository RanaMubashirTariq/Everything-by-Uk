export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  details: string[];
  badge?: string;
  rating: number;
  reviews: number;
};

export const categories = [
  { name: 'Fashion', slug: 'fashion', description: 'Considered pieces for the modern wardrobe.', image: 'https://images.pexels.com/photos/19166246/pexels-photo-19166246.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Beauty', slug: 'beauty', description: 'Small rituals for a life lived beautifully.', image: 'https://images.pexels.com/photos/36339051/pexels-photo-36339051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Home', slug: 'home', description: 'Objects with a place in your story.', image: 'https://images.pexels.com/photos/29904622/pexels-photo-29904622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Tech', slug: 'tech', description: 'Tools that quietly improve your day.', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Accessories', slug: 'accessories', description: 'The finishing touches that matter.', image: 'https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Gifts', slug: 'gifts', description: 'Composed boxes for someone special.', image: 'https://images.pexels.com/photos/3631685/pexels-photo-3631685.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export const products: Product[] = [
  {
    id: '1', slug: 'obsidian-elixir', name: 'Obsidian Elixir', category: 'Beauty',
    price: 4950, originalPrice: 6200,
    image: 'https://images.pexels.com/photos/36339051/pexels-photo-36339051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      'https://images.pexels.com/photos/36339051/pexels-photo-36339051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/28481966/pexels-photo-28481966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6958875/pexels-photo-6958875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A warm, mysterious fragrance built around amber, oud and dark spice. Designed to linger without overwhelming — the signature scent of the house.',
    details: ['50ml eau de parfum', 'Amber, oud, dark spice', 'Long-lasting sillage', 'Unisex formulation'],
    badge: 'Bestseller', rating: 4.9, reviews: 214,
  },
  {
    id: '2', slug: 'matte-leather-wallet', name: 'Matte Leather Wallet', category: 'Accessories',
    price: 3200,
    image: 'https://images.pexels.com/photos/36343444/pexels-photo-36343444.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      'https://images.pexels.com/photos/36343444/pexels-photo-36343444.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/12495667/pexels-photo-12495667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/12495668/pexels-photo-12495668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Full-grain leather, hand-finished edges, and a slim profile that wears beautifully with age. Six card slots and a note pocket in a matte black finish.',
    details: ['Full-grain leather', '6 card slots', 'Hand-finished edges', 'Slim profile'],
    badge: 'New', rating: 4.8, reviews: 89,
  },
  {
    id: '3', slug: 'golden-hour-ritual', name: 'Golden Hour Ritual', category: 'Beauty',
    price: 5400,
    image: 'https://images.pexels.com/photos/14656279/pexels-photo-14656279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      'https://images.pexels.com/photos/14656279/pexels-photo-14656279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4841179/pexels-photo-4841179.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/5113049/pexels-photo-5113049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A three-step serum ritual designed for evening restoration. Botanical oils meet modern formulation in a set that leaves skin calm and luminous.',
    details: ['3-piece serum set', 'Botanical oil blend', 'Evening restoration', 'All skin types'],
    rating: 4.7, reviews: 132,
  },
  {
    id: '4', slug: 'minimal-ceramic-vase', name: 'Minimal Ceramic Vase', category: 'Home',
    price: 2850,
    image: 'https://images.pexels.com/photos/29904622/pexels-photo-29904622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      'https://images.pexels.com/photos/29904622/pexels-photo-29904622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/15028227/pexels-photo-15028227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/32473239/pexels-photo-32473239.png?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A warm-toned ceramic vase with a sculptural silhouette. Each piece is wheel-thrown and finished by hand, making every vase subtly unique.',
    details: ['Wheel-thrown ceramic', 'Warm matte glaze', 'Approx. 24cm tall', 'Handmade variation'],
    rating: 4.6, reviews: 47,
  },
  {
    id: '5', slug: 'wireless-studio-headphones', name: 'Wireless Studio Headphones', category: 'Tech',
    price: 12500, originalPrice: 15000,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/3394648/pexels-photo-3394648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Studio-grade sound with active noise cancellation and a 40-hour battery. Memory-foam ear cushions and a featherweight frame for all-day comfort.',
    details: ['Active noise cancellation', '40-hour battery life', 'Bluetooth 5.3', 'Memory-foam cushions'],
    badge: 'Bestseller', rating: 4.9, reviews: 387,
  },
  {
    id: '6', slug: 'heritage-leather-shoes', name: 'Heritage Leather Shoes', category: 'Fashion',
    price: 8900,
    image: 'https://images.pexels.com/photos/19166246/pexels-photo-19166246.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      'https://images.pexels.com/photos/19166246/pexels-photo-19166246.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/19915595/pexels-photo-19915595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Goodyear-welted leather shoes in a timeless silhouette. Crafted to be resoled and worn for decades — the kind of pair that only gets better.',
    details: ['Goodyear-welted construction', 'Full-grain leather', 'Resoleable design', 'Cushioned insole'],
    rating: 4.8, reviews: 76,
  },
  {
    id: '7', slug: 'noir-chronograph-watch', name: 'Noir Chronograph Watch', category: 'Accessories',
    price: 18500, originalPrice: 22000,
    image: 'https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      'https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/28977357/pexels-photo-28977357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/16958879/pexels-photo-16958879.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A precision chronograph with a matte black case and sapphire crystal. Water-resistant to 100m, finished with a hand-stitched leather strap.',
    details: ['Sapphire crystal', '100m water resistance', 'Hand-stitched leather strap', 'Swiss movement'],
    badge: 'Limited', rating: 4.9, reviews: 158,
  },
  {
    id: '8', slug: 'over-the-moon-candle', name: 'Over The Moon Candle', category: 'Home',
    price: 1950,
    image: 'https://images.pexels.com/photos/278664/pexels-photo-278664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      'https://images.pexels.com/photos/278664/pexels-photo-278664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/38489187/pexels-photo-38489187.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A soy-wax candle in a reusable glass vessel. Notes of fig, cedar and white musk — designed for slow evenings and quiet rooms.',
    details: ['Soy wax blend', 'Fig, cedar, white musk', '45-hour burn time', 'Reusable glass vessel'],
    rating: 4.7, reviews: 94,
  },
  {
    id: '9', slug: 'the-gift-box', name: 'The Curated Gift Box', category: 'Gifts',
    price: 7500, originalPrice: 9500,
    image: 'https://images.pexels.com/photos/3631685/pexels-photo-3631685.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      'https://images.pexels.com/photos/3631685/pexels-photo-3631685.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/30999236/pexels-photo-30999236.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A composed box with a leather wallet, a travel candle and a 10ml fragrance — tied with a satin ribbon and a handwritten note card.',
    details: ['Leather wallet included', 'Travel candle', '10ml fragrance', 'Handwritten note card'],
    badge: 'Gift set', rating: 5.0, reviews: 61,
  },
  {
    id: '10', slug: 'everyday-pullover', name: 'Everyday Pullover', category: 'Fashion',
    price: 4200,
    image: 'https://images.pexels.com/photos/6342786/pexels-photo-6342786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      'https://images.pexels.com/photos/6342786/pexels-photo-6342786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A heavyweight cotton pullover with a relaxed drape and a clean logo detail. The kind of piece you reach for without thinking.',
    details: ['Heavyweight cotton', 'Relaxed fit', 'Ribbed cuffs', 'Machine washable'],
    rating: 4.6, reviews: 52,
  },
  {
    id: '11', slug: 'serum-dropper', name: 'Botanical Serum Dropper', category: 'Beauty',
    price: 3600,
    image: 'https://images.pexels.com/photos/4841460/pexels-photo-4841460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      'https://images.pexels.com/photos/4841460/pexels-photo-4841460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4841179/pexels-photo-4841179.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A lightweight serum with botanical extracts and hyaluronic acid. Absorbs quickly, leaves no residue, and works under makeup or alone.',
    details: ['30ml dropper bottle', 'Hyaluronic acid', 'Botanical extracts', 'Fragrance-free'],
    rating: 4.8, reviews: 118,
  },
  {
    id: '12', slug: 'sculptural-bust', name: 'Sculptural Bust', category: 'Home',
    price: 3900,
    image: 'https://images.pexels.com/photos/32541183/pexels-photo-32541183.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      'https://images.pexels.com/photos/32541183/pexels-photo-32541183.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A minimalist abstract bust in a warm stone finish. A quiet sculptural object for a shelf, console or bedside table.',
    details: ['Resin composite', 'Warm stone finish', 'Approx. 28cm tall', 'Felt base protection'],
    rating: 4.5, reviews: 29,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const product = getProduct(slug);
  if (!product) return products.slice(0, limit);
  return products.filter((p) => p.category === product.category && p.slug !== slug).slice(0, limit);
}

export function formatPrice(price: number): string {
  return `PKR ${price.toLocaleString('en-PK')}`;
}
