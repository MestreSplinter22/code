import { OrderRepository } from './order.repository.ts';
import { Order } from './order.entity.ts';

export class OrderService {
    constructor(private repo: OrderRepository) {}

    async getUserOrders(userId: string): Promise<Order[]> {
        return this.repo.findMyOrders(userId);
    }
}