import { Iprezzo } from "./Iprezzo";

export abstract class Libro implements Iprezzo
{
    //prop --> dati
    private readonly dataCreazione:Date;

    //costruttori --> Funzionalità di setup
    constructor(titolo:string, _prezzo:number);
    constructor(titolo:string, _prezzo:number, editore:string);
    constructor(public readonly titolo:string, private _prezzo:number, public readonly editore:string = "Maggioli Editore")
    {
        this.dataCreazione = new Date();
    }

    //metodi --> Funzionalità
    abstract getInfo() : string;
    /*{
        return `Titolo: ${this.titolo} - Prezzo ${this._prezzo} - Creato il:${this.dataCreazione}`;
    }*/

    get prezzo() : number { return this._prezzo; }
    set prezzo(p:number) { this._prezzo = p<=0 ? 1000 : p }
}