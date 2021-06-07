## Node app simple starter

It is simple starter for node.js + express + Socket.io

###Install starter

```npm i node-app-simple-starter```

### Start App app.ts

Application must be defined 
```node
import express  from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import {Application} from "node-app-simple-starter";
import {container} from "@application/container";
import socketOptions from "@application/config/socket-options.config.json";
import {AppModule} from "@application/module";


const appModule = new AppModule(container);
Application.app = express();
Application.httpServer = createServer(Application.app);
Application.io = new Server(Application.httpServer, socketOptions);
Application.port = 3000;

Application.startApp(appModule);
Application.routing(async() => await import("@application/router")).then(() => console.log('router run'));
Application.startHttpServer();
```

### Add router ./router.ts

```typescript
import {Request, Response} from "express";
import {METHOD, route, TYPES_ROUTE_ENUM} from "node-app-simple-starter";

export class Router {
    @route({
        method: METHOD.GET,
        type: TYPES_ROUTE_ENUM.TEXT,
        path: "/"
    })
    public index(req: Request, res: Response) {
        return ( "Hello world!" );
    }

    @route({
        method: METHOD.GET,
        type: TYPES_ROUTE_ENUM.FILE,
        path: "/test"
    })
    public async test(req: Request, res: Response) {
        return ( __dirname + '/index.html');
    }

    @route({
        method: METHOD.GET,
        type: TYPES_ROUTE_ENUM.API,
        path: "/some"
    })
    public some(req: Request, res: Response) {
        return {test: 'some test'};
    }
}
```

### Add container

```typescript
import {Container} from "node-app-simple-starter";
import {MainComponent} from "@application/main.component";
import {HomeComponent} from "@application/nome.component";
import {OrderService} from "@application/order.service";
import {DataService} from "@application/data.service";


const cont = new Container();

cont
    .build(OrderService)
    .build(DataService)
        .find(DataService)
        .build(HomeComponent)
    .clear()
     .find(DataService)
     .find(OrderService)
     .build(MainComponent);


export const container = cont;
```


### Add module

```typescript
import {BaseComponentInterface, BaseModuleInterface, Container} from "node-app-simple-starter";

import {MainComponent} from "@application/main.component";


export class AppModule implements BaseModuleInterface {
    private container: Container;
    private bootstrap: BaseComponentInterface;
    constructor(container: Container) {
        this.container = container;
        this.bootstrap = this.container.get(MainComponent);
    }
    public run(): void {
        this.bootstrap.run();
    }
}

```


### Components

```typescript
import {BaseComponentInterface} from "node-app-simple-starter";

export class MainComponent implements BaseComponentInterface {


    public run() {
        // logic of run component
    }
}

```


