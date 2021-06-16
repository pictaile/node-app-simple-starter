import {Server} from "socket.io";
import {BaseModuleInterface} from "../interfaces/base-module.interface";

export class NodeAppSimpleStarter {
    public app: any;
    public httpServer: any;
    public io!: Server;
    public connection!: any;
    public port!: number;
    public appRoot!: string;


    public startApp(module: BaseModuleInterface) {
        module.run();
    }

    public async routing(fun: any) {
         return new (await fun()).Router();
    }

    public startHttpServer(port?: number) {
        port = port || this.port;

        this.httpServer.listen(port, () => {
            console.log(`Socket.IO server running at http://localhost:${port}/`);
        });
    }

}

export const Application = new NodeAppSimpleStarter();




