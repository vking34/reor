import { Response, Request } from "express";
import { validationResult } from "express-validator";

export default (validations) => {
    return async (req: Request, res: Response, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty())
            return next();

        res.status(422).json({
            status: false,
            errors: errors.array()
        })
    }
}