export class AuthService {
    async validateUser(email: string, pass: string): Promise<boolean> {
        // Login Hardcoded para teste
        return email === 'admin@adsly.com' && pass === '123456';
    }
}