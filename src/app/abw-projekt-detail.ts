import {AbwProjektKosten} from "./abw-projekt-kosten";

export class AbwProjektDetail {
        // ABW_PROJEKT
    projektId: string = "LIxxxxxx";
    phase: string = "LAK A";
    projektNr: string = "LAK -";
    projektName: string = "erstes  ";
    durchfStelle: string = "  Ludwigslust";
    projektLeiter: string = "Peter Leiter";
    auftraggeber: string = "KompZ Düsseldorf";
    beginn: Date = new Date("1000-01-01");
    ende: Date = new Date("1000-01-01");
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
