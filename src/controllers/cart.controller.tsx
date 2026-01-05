// Exemplo no Controller
import { calculateCartTotal } from '../utils/cart.utils.ts';
import { loadDrawerScript } from '../core/scripts/loadUiScripts.ts';

// ... dentro da rota
const items = []; // Busque do banco/sessão
const total = calculateCartTotal(items);
const drawerScript = loadDrawerScript();

return c.html(<CartPage isAuthenticated={true} items={items} total={total} drawerScript={drawerScript} />);