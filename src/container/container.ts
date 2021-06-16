export class Container {
    private arr: any[] = [];
    private fondClasses: any[] = [];

    public add(obj: any) {
        this.arr.push(obj);

        return this;
    }


    public build(className: any) {
        let obj;
        if(!this.fondClasses.length) {
            obj = new className();
        } else {
            obj = new className(...this.fondClasses);
        }

        this.arr.push(obj);
        return this;
    }


    public bind(obj: any) {
        this.fondClasses.push(obj);

        return this;
    }

    public find(nameClass: any) {
        try {
            const obj = this.arr.find(item => item.constructor.name === nameClass.prototype.constructor.name);
            if(!obj) throw new Error('cant find object in container');
            this.fondClasses.push(obj);
        } catch (e) {
            console.log(e.message);
        }

        return this;
    }

    public findByName(nameClass: string) {
        try {
            const obj = this.arr.find(item => item.constructor.name === nameClass);
            if(!obj) throw new Error('cant find by name object in container');
            this.fondClasses.push(obj);
        } catch (e) {
            console.log(e.message);
        }

        return this;
    }


    public get(nameClass: any) {
        try {
            const obj = this.arr.find(item => item.constructor.name === nameClass.prototype.constructor.name);
            if(!obj) throw new Error('cant get object in container');
            return obj;
        } catch (e) {
            console.log(e.message);
        }
    }

    public clear() {
        this.fondClasses = [];
        return this;
    }

}
