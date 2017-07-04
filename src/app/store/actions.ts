import { Action } from './action';
//import { State } from './state';
export class Actions {
    static setTitle(s: string): Action {
    return {
      type: 'SET_TITLE',
      parm:s
    };
  }
   static setLgId(id: string): Action {
    return {
      type: 'SET_LIEGENSCHAFT_ID',
      parm:id
    };
  }
  static setProjektId(id: string): Action {
    return {
      type: 'SET_PROJEKT_ID',
      parm:id
    };
  }
}
