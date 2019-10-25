import { observable, action } from 'mobx';

class CounterViewStore {
    @observable count = 0;

    @action.bound
    increase() {
        this.count++;
    }

    @action.bound
    decrease() {
        this.count--;
    }
}

export default CounterViewStore;