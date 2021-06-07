import {METHOD} from "../enums/http-methods.enum";
import {TYPES_ROUTE_ENUM} from "../enums/api-method.enum";

export interface RouteConfigProps {
    method: METHOD;
    path: string;
    type?: TYPES_ROUTE_ENUM;
}

export interface RouteTypesInterface {
    [TYPES_ROUTE_ENUM.API]: any,
    [TYPES_ROUTE_ENUM.TEXT]: any,
    [TYPES_ROUTE_ENUM.FILE]: any,
}
