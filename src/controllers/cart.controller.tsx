// Exemplo no Controller
import { calculateCartTotal } from '../utils/cart.utils.ts';

// ... dentro da rota
const items = []; // Busque do banco/sessão
const total = calculateCartTotal(items);

return c.html(<CartPage isAuthenticated={true} items={items} total={total} />);