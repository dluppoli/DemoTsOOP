import {Libro,Iprezzo} from './libri.module';

//Modifica fatta da Github
class LibroCartaceo extends Libro
{
    constructor(titolo:string, prezzo:number, public pagine:number, editore:string ="Maggioli")
    {
        super(titolo,prezzo,editore);
    }

    override getInfo(): string {
        return `Libro cartaceo: ${this.titolo} - pagine: ${this.pagine}`;
    }
}

enum formatoLibroDigitale { Pdf, Epub };

class LibroDigitale extends Libro
{
    constructor(titolo:string, prezzo:number, 
        public readonly dimensioneKb:number, 
        public readonly formato: formatoLibroDigitale,
        editore:string="")
    {
        super(titolo,prezzo,editore);
    }

    getInfo(): string {
        return `Libro Digitale: ${this.titolo} - ${this.dimensioneKb} Kb`;
    }
}

class Dvd implements Iprezzo
{
    constructor(public titolo:string, public prezzo:number)
    {}

    getInfo(): string {
        return 'Dvd: '+this.titolo;
    }  
}

class Libreria
{
    private _dati : Libro[] = [];
    
    add(l:Libro) { this._dati.push(l);}

    get count() { return this._dati.length; }

    aumentoPercentuale(aumento:number):void
    {
        for(let d of this._dati)
        {
            d.prezzo *= aumento;
        }
    }
}

class Videoteca
{
    private _dati : Dvd[] =[];
    add(v:Dvd) { this._dati.push(v); }
    get count() { return this._dati.length;}
    
    aumentoPercentuale(aumento:number):void
    {
        for(let d of this._dati)
        {
            d.prezzo *= aumento;
        }
    }
}

class Archivio<T extends Iprezzo>
{
    private _dati : T[] =[];
    add(v:T) { this._dati.push(v); }
    get count() { return this._dati.length;}
    
    get first() : T { return this._dati[0];}
    aumentoPercentuale(aumento:number):void
    {
        for(let d of this._dati)
        {
            d.prezzo *= aumento;
        }
    }
}

let a1 = new Archivio<Libro>();
let a2 = new Archivio<Dvd>();
let x = a2.first;