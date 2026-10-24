import { useCallback, useState } from 'react';
import { CartProvider } from './cart/CartContext';
import { About } from './components/About';
import { CartDrawer } from './components/CartDrawer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowToOrder } from './components/HowToOrder';
import { ProductGrid } from './components/ProductGrid';
import { ToastProvider } from './components/Toast';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { products } from './data/products';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const closeCart = useCallback(() => setCartOpen(false), []);

  return (
    <CartProvider>
      <ToastProvider>
        <a
          href="#prepizzas"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-flour"
        >
          Ir al catálogo
        </a>
        <Header onOpenCart={() => setCartOpen(true)} />
        <main>
          <Hero />
          <ProductGrid products={products} />
          <HowToOrder />
          <About />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloatingButton />
        <CartDrawer open={cartOpen} onClose={closeCart} />
      </ToastProvider>
    </CartProvider>
  );
}
