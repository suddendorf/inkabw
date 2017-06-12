import {AbwProjektKosten} from "./abw-projekt-kosten";

export class AbwProjektDetail {
        // ABW_PROJEKT
    projektId: string ;
    phase: string ;
    projektNr: string ;
    projektName: string ;
    durchfStelle: string ;
    projektLeiter: string ;
    auftraggeber: string ;
    beginn: Date ;
    ende: Date ;
    kostenBrutto: number ;
    bemerkung: string ;
    extAuftragnehmer: string ;
    exportDatum: Date;
    status: string ;
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
    liegenschaftIds: string[];

    durchfStellen: String[];

}
