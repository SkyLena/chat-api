import { Request, Response } from "express"

export class AuthController {
    async logIn(request: Request, response: Response) {
        return response.send({
            message: "Log - in"
        });
    }
}