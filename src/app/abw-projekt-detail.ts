import {AbwProjektKosten} from "./abw-projekt-kosten";

export class AbwProjektDetail {
        // ABW_PROJEKT
    projektId: string = "LIxxxxxx";
    phase: string = "LAK A";
    projektNr: string = "LAK 1767_1A";
    projektName: string = "erstes LAK auf WE";
    durchfStelle: string = "Bauamt Ludwigslust";
    projektLeiter: string = "Peter Leiter";
    auftraggeber: string = "KompZ Düsseldorf";
    beginn: Date = new Date("February 4, 2016 10:13:00");
    ende: Date = new Date("February 5, 2016 10:13:00");
    kostenBrutto: number = 1000000;
    bemerkung: string = "Dies ist die Bemerkung ";
    extAuftragnehmer: string = "Ester Nehmer";
    exportDatum: Date;
    status: string = "fertiggestellt";
    auftragsdatum: Date;
    extAuftragsdatum: Date;
    
    //ABW_PROJEKT_LAK_A
    lakNr: number;
    inspektionBeginn: Date;
    inspektionEnde: Date;
    inspekteur: string;
    sachstandZkl5: string;
    statusZkl5: string;
    kommentarFfe: string;

    //ABW_PROJEKT_LAK_B
    baumassnahmeBeginn: Date;
    baumassnahmeEnde: Date;
    baumassnahmeKosten: Number;
    baumassnahmeNr: String;
    
    kosten: AbwProjektKosten[];

    
}
