export class State {
    title:string;
    liegenschaftId:string;
    projektId:string;

    setTitle(s:string){
        this.title=s;
    }
    setLgId(id:string){
        this.liegenschaftId=id;
    }
    setProjektId(id:string){
        this.projektId=id;
    }
}
