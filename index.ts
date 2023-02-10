class Libro
{
    //prop --> dati
    private readonly dataCreazione:Date;
    //titolo:string;
    //prezzo:number;
    //editore:string = "Maggioli Editore";

    //metodi --> Funzionalità
    getInfo() : string
    {
        return `Titolo: ${this.titolo} - Prezzo ${this.prezzo} - Creato il:${this.dataCreazione}`;
    }

    //costruttori --> Funzionalità di setup
    constructor(titolo:string, prezzo:number);
    constructor(titolo:string, prezzo:number, editore:string);
    constructor(public titolo:string, public prezzo:number, public editore:string = "Maggioli Editore")
    {
        this.dataCreazione = new Date();
        //this.titolo = titolo;
        //this.prezzo = prezzo;
        //this.editore = editore;
    }
}

let l1 : Libro = new Libro('I promessi sposi',10,'Mondadori');
let l2 = new Libro('La divina commedia',12);

console.log(l1.getInfo());