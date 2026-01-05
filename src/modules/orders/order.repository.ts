import { Order } from './order.entity.ts';

export class OrderRepository {
    async findMyOrders(userId: string): Promise<Order[]> {
        // userId é ignorado por enquanto pois é mock
        return [
            {
                id: '#8823',
                productName: 'BM REESTABELECIDA 🇧🇷',
                purchaseDate: '05/01/2026',
                price: 139.90,
                status: 'approved',
                credentials: {
                    accessLogin: 'admin_fb_8823@adsly.store',
                    accessPass: 'Meta@2026#Secure',
                    backupCode: '1234-5678-9012'
                }
            },
            {
                id: '#8710',
                productName: 'CONTA TIKTOK ADS EUA 🇺🇸',
                purchaseDate: '02/01/2026',
                price: 79.90,
                status: 'approved',
                credentials: {
                    accessLogin: 'tiktok_usa_user',
                    accessPass: 'DanceToTheMoon!'
                }
            }
        ];
    }
}