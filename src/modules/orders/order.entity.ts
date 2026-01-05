export interface Order {
    id: string;
    productName: string;
    purchaseDate: string;
    price: number;
    status: 'approved' | 'pending';
    // As credenciais que o cliente comprou
    credentials: {
        accessLogin: string;
        accessPass: string;
        backupCode?: string;
    };
}