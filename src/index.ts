import {Application} from "./bootstrap/node-app-simple-starter";
import {Container} from "./container/container";
import {route} from "./decorators/router.decorator";
import {TYPES_ROUTE_ENUM} from "./enums/api-method.enum";
import {METHOD} from "./enums/http-methods.enum";
import {BaseComponentInterface} from "./interfaces/base-component.interface";
import {BaseModuleInterface} from "./interfaces/base-module.interface";
import {RouteConfigProps, RouteTypesInterface} from "./interfaces/route-config-props.interfface";
import {OnRunInterface} from "./interfaces/on-run.interface";


export {Application, Container, route, TYPES_ROUTE_ENUM, METHOD, BaseComponentInterface, BaseModuleInterface, RouteConfigProps, OnRunInterface, RouteTypesInterface };
