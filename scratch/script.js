class parent {

    #counter = 0;

    constructor(name, id) {
        this.name = name;
        this.id = 2;

    }

    promote() {
        this.#counter++;
        // this.id = 5;
    }

    get id() {
        return this.id;
    }


    set id(idd) {
        this.id = idd;
    }

    get rank() {
        return this.#counter;
    }
}








