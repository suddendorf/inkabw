import { Action } from './action';
import { State } from './state';

export class Reducer {
    reduce(state: State, action: Action): State {
        switch (action.type) {
            case 'SET_TITLE': state.setTitle(action.parm);
                break;
            case 'SET_LIEGENSCHAFT_ID': state.setLgId(action.parm);
                break;
            case 'SET_PROJEKT_ID': state.setProjektId(action.parm);
                break;
        }
        return state;
    }
}
