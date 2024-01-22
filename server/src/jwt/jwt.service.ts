import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthService {
    constructor() {}

    private readonly secret = 'your-secret-key';


    generateToken(payload: any): string {
        return jwt.sign(payload, this.secret, { expiresIn: '6h'}); // Adjust expiration as needed
    }

    verifyToken(token: string): any {
        return jwt.verify(token, this.secret);
    }
}
