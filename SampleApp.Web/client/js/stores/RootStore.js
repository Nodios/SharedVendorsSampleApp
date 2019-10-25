import { CounterViewStore } from './';

class RootStore {
    constructor() {
        this.counterViewStore = new CounterViewStore();
    }
}

export default RootStore;
