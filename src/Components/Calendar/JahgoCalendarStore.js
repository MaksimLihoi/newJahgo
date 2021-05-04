import {makeAutoObservable} from 'mobx';

class ObservableJahgoCalendarStore {
    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }
}

export default new ObservableJahgoCalendarStore();
