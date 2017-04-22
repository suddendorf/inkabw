import { WE } from './we';

export class LakA {
    // ABW_PROJEKT
    private _projektId: string = "LIxxxxxx";
    private _phase: string = "LAK A";
    private _projektNr: string = "LAK 1767_1A";
    private _projektName: string = "erstes LAK auf WE";
    private _projektLeiter: string = "Peter Leiter";
    private _bedinn: Date = new Date("February 4, 2016 10:13:00");
    private _ende:  Date = new Date("February 5, 2016 10:13:00");
    private _kostenBrutto: number = 1000000;
    private _bemerkung: string = "Dies ist die Bemerkung ";
    private _auftraggeber: string = "KompZ Düsseldorf";
    private _extAuftragnehmer: string = "Ester Nehmer";
    private _durchfStelle: string = "Bauamt Ludwigslust";
    private _status: string = "fertiggestellt";
    // ABW_PROJEKT_LAK_A
    private _inspektionBeginn: number=1995;
    private _inspektionEnde: number=1996;
    private _inspekteur: string = " Inge Spekteur";
    private _sachstandZkl5: string = "in Bearbeitung";
    private _kommentarFfe: string = "Kommentar FFE";
    private _inspektionsKosten:number=19960;
    private _reinigungsKosten:number=119960;
    private _ingenieurKosten:number=19970;
    
    private _primaereWw: WE=new WE();
    private _sekundaereWe: WE[]=new Array(0);
    
}
