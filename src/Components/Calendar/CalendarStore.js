import {makeAutoObservable} from 'mobx';

class ObservableCalendarStore {
    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }
}

export default new ObservableCalendarStore();
