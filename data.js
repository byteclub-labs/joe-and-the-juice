// ─── Menu data ────────────────────────────────────────────────────────────────
// Prices are integer cents so cart totals are exact.
const MENU_ITEMS = [
  { id: 'coffee-01', name: 'Espresso', category: 'Coffee', description: 'Short, strong, and straight to the point', price: 300, emoji: '☕' },
  { id: 'coffee-02', name: 'Cortado', category: 'Coffee', description: 'Espresso softened with a splash of warm milk', price: 375, emoji: '☕' },
  { id: 'coffee-03', name: 'Flat White', category: 'Coffee', description: 'Silky steamed milk over a double shot', price: 450, emoji: '☕' },
  { id: 'coffee-04', name: 'Cappuccino', category: 'Coffee', description: 'Classic foam-topped Italian favourite', price: 450, emoji: '☕' },
  { id: 'coffee-05', name: 'Latte', category: 'Coffee', description: 'Smooth espresso with lots of steamed milk', price: 475, emoji: '🥛' },
  { id: 'coffee-06', name: 'Americano', category: 'Coffee', description: 'Espresso lengthened with hot water', price: 350, emoji: '☕' },
  { id: 'coffee-07', name: 'Mocha', category: 'Coffee', description: 'Espresso meets chocolate and steamed milk', price: 525, emoji: '🍫' },
  { id: 'coffee-08', name: 'Cold Brew', category: 'Coffee', description: 'Slow-steeped, smooth, and ice cold', price: 500, emoji: '🧊' },
  { id: 'coffee-09', name: 'Caramel Latte', category: 'Coffee', description: 'Latte with a drizzle of caramel', price: 550, emoji: '🍮' },
  { id: 'coffee-10', name: 'Vanilla Latte', category: 'Coffee', description: 'Latte sweetened with vanilla', price: 550, emoji: '🌼' },
  { id: 'juice-01', name: 'Orange Sunrise', category: 'Juice', description: 'Freshly squeezed oranges, nothing else', price: 550, emoji: '🍊' },
  { id: 'juice-02', name: 'Green Machine', category: 'Juice', description: 'Kale, apple, cucumber, and lemon', price: 695, emoji: '🥬' },
  { id: 'juice-03', name: 'Berry Blast', category: 'Juice', description: 'Strawberry, blueberry, and raspberry blend', price: 650, emoji: '🫐' },
  { id: 'juice-04', name: 'Tropical Mango', category: 'Juice', description: 'Mango, pineapple, and passion fruit', price: 650, emoji: '🥭' },
  { id: 'juice-05', name: 'Watermelon Wave', category: 'Juice', description: 'Watermelon with a hint of lime', price: 595, emoji: '🍉' },
  { id: 'juice-06', name: 'Beet Boost', category: 'Juice', description: 'Beetroot, apple, carrot, and ginger', price: 695, emoji: '🟣' },
  { id: 'juice-07', name: 'Pineapple Mint', category: 'Juice', description: 'Pineapple brightened with fresh mint', price: 625, emoji: '🍍' },
  { id: 'juice-08', name: 'Carrot Kick', category: 'Juice', description: 'Carrot, orange, and a kick of ginger', price: 595, emoji: '🥕' },
  { id: 'juice-09', name: 'Citrus Cooler', category: 'Juice', description: 'Grapefruit, orange, and lemon over ice', price: 575, emoji: '🍋' },
  { id: 'juice-10', name: 'Apple Ginger', category: 'Juice', description: 'Crisp apple warmed with ginger', price: 595, emoji: '🍎' },
];
