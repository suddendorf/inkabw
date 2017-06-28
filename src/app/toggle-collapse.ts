import { LISA2Component } from './lisa2-component';

export class ToggleCollapse extends LISA2Component {
    protected collapse: boolean = false;
     title:string;

    constructor() {
        super();
        this.init();
    }

    init(){
        let lid: string = sessionStorage.getItem('title');
        this.title = lid;

        let c: string = localStorage.getItem('collapsed');

        if (c == 'true') {
            this.collapse = true;
        } else {
            this.collapse = false;
        }
    }

    toggleCollapse() {
        this.collapse = !this.collapse;
        let c: string = (this.collapse ? 'true' : 'false');
        localStorage.setItem('collapsed', c);
    }

    colSize(): string {
        if (this.collapse) {
            return 'col-sm-12';
        } else {
            return 'col-sm-8';
        }
    }
    public  setTitle(s:string){
        this.title=s;
    }
}
