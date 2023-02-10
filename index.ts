class Libro
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
    getInfo() : string
    {
        return `Titolo: ${this.titolo} - Prezzo ${this._prezzo} - Creato il:${this.dataCreazione}`;
    }

    get prezzo() : number { return this._prezzo; }
    set prezzo(p:number) { this._prezzo = p<=0 ? 1000 : p }
}


class LibroCartaceo extends Libro
{
    constructor(titolo:string, prezzo:number, public pagine:number, editore:string ="Maggioli")
    {
        super(titolo,prezzo,editore);
    }
}




let l1 : Libro = new Libro('I promessi sposi',10,'Mondadori');
let l2 = new Libro('La divina commedia',12);


let l3 : LibroCartaceo = new LibroCartaceo('Ritratto in seppia',14,123);






/*
let l3 : Libro = l1;
l3.prezzo = 20;
console.log(l1.prezzo);



class MathUtils
{
    static readonly pi : number = 3.1415;
}

let raggio = 10;

//let m = new MathUtils();
let area = raggio*raggio*MathUtils.pi;*/