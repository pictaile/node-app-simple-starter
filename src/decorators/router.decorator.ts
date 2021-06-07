import { Request, Response } from "express";
import {Application} from "../bootstrap/node-app-simple-starter";
import {RouteConfigProps, RouteTypesInterface} from "../interfaces/route-config-props.interfface";
import {TYPES_ROUTE_ENUM} from "../enums/api-method.enum";

const types: any = {
    [TYPES_ROUTE_ENUM.API]: (res: Response, original: any) =>  res.status(200).json(original),
    [TYPES_ROUTE_ENUM.TEXT]: (res: Response, original: any) => res.send( original),
    [TYPES_ROUTE_ENUM.FILE]: (res: Response, original: any) =>  res.sendFile( original),
};

export function route({method, path, type}: RouteConfigProps): MethodDecorator {
    return (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const response = async (req: Request, res: Response) => {
            try {
                const original = await descriptor.value(req, res);
                types[type!](res, original);
            } catch (e) {
                res.status(500).json({
                    message: "Some error occurred",
                    error: e.message,
                    stack: e.stack
                });
            }
        };

        Application.app[method](path, response);
    };
}
