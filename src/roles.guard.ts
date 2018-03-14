import {Guard, CanActivate, ExecutionContext, HttpException} from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { Reflector } from '@nestjs/core';

@Guard()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(req, context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const { parent, handler } = context;
        const roles = this.reflector.get<string[]>('roles', parent);
        if (!roles) {
            return true;
        }

        const user = req.user;
        const hasRole = () => !!user.roles.find((role) => !!roles.find((item) => item === role));
        const result = user && user.roles && hasRole();
        if (!result) {
            throw new HttpException('Ha ha', 350);
        }

        return result;
    }
}