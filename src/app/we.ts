export class WE {
    private _liegenschaftId: string = '';
    private _liegenschaftNr: string = '';
    private _bezeichnung: string = '%';
    private _bezeichnungBw: string = '';
    private _bezeichnungBima: string = '';
    private _nutzung: string = '';

    private _kompzBauMgmt: string = ' ';
    private _weNrBw: string = '*';
    private _weNrBima: string = '*';
    private _bwdlz: string = '';
    private _kompz: string = ' ';
    private _bimaFm: string = '';
    private _bundesland: string = '';
    private _plz: string = '';
    private _ort: string = '';
    private _regBez: string = '';
    private _ffe: string = '';
    private _flaeche: string = '';
    private _hbt: string = '';
    private _bde: string = '';
    private _imSdm: boolean;
    private _imBima: boolean;

    get liegenschaftId(): string {
        return this._liegenschaftId;
    }
    get liegenschaftNr(): string {
        return this._liegenschaftNr;
    }
    get bezeichnung(): string {
        return this._bezeichnung;
    }
    set bezeichnung(b:string ) {
         this._bezeichnung=b;
    }
   
   
     get bezeichnungBw(): string {
        return this._bezeichnungBw;
    }
     get bezeichnungBima(): string {
        return this._bezeichnungBima;
    }
    get nutzung(): string {
        return this._nutzung;
    }

    get kompzBauMgmt(): string {
        return this._kompzBauMgmt;
    }
    get weNrBw(): string {
        return this._weNrBw;
    }
    get weNrBima(): string {
        return this._weNrBima;
    }
    get bwdlz(): string {
        return this._bwdlz;
    }
    get kompz(): string {
        return this._kompz;
    }
    get bimaFm(): string {
        return this._bimaFm;
    }
    get bundesland(): string {
        return this._bundesland;
    }
    get plz(): string {
        return this._plz;
    }
    get ort(): string {
        return this._ort;
    }
    get regBez(): string {
        return this._regBez;
    }
    get ffe(): string {
        return this._ffe;
    }
    get flaeche(): string {
        return this._flaeche;
    }
    get hbt(): string {
        return this._hbt;
    }
    get bde(): string {
        return this._bde;
    }


}
