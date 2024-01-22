export declare class JwtAuthService {
    constructor();
    private readonly secret;
    generateToken(payload: any): string;
    verifyToken(token: string): any;
}
