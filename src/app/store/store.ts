import { Reducer } from './reducer';
import { ListenerCallback } from './listener-callback';
import { UnsubscribeCallback } from './unsubscribe-callback';
import { Action } from './action';
import { State } from './state';

export class Store {
    private state: State;
    private listeners: ListenerCallback[] = [];
    private reducer: Reducer = new Reducer();
    constructor() {
        this.state = new State();
    }

    getState(): State {
        return this.state;
    }

    dispatch(action: Action): void {
        this.state = this.reducer.reduce(this.state, action);
        this.listeners.forEach((listener: ListenerCallback) => listener());
    }

    subscribe(listener: ListenerCallback): UnsubscribeCallback {
        this.listeners.push(listener);
        return () => { // returns an "unsubscribe" function
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }
}