import { Request, Response } from "express"

export class AuthController {
    async signIn(request: Request, response: Response) {
        return response.send({
            message: "Log - in"
        });
    }

    async signUp(request: Request, response: Response) {
        return  response.send({
            message: "Sign - up"
        })
    }
}