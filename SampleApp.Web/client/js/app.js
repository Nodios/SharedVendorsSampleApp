import { RootStore } from './stores';
class App {
    constructor() {
        this.rootStore = new RootStore();
    }
}

const app = new App();

export {
    app
}