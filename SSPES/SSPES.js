var symbolComputer;
var symbolSpieler;
var anzahlRunden = 0;
var gewinneComputer = 0;
var gewinneSpieler = 0;

var input;
var buttonInput;
var buttonSchere;
var buttonStein;
var buttonPapier;
var buttonEchse;
var buttonSpock;


function setup() {
    noCanvas();
    createP('Mit wievielen Ruden soll man gewinnen');

    input = createInput();

    buttonInput = createButton('Los');
    buttonInput.mousePressed(Los);

    createP();
    //buttonSchere = createButton('Schere', [1]);
    //buttonSchere.mousePressed(Los);

    //buttonPapier = createButton('Papier', [2]);
    //buttonPapier.mousePressed(Los);

    //buttonStein = createButton('Stein', [3]);
    //buttonStein.mousePressed(Los);

    //createP();
    //buttonEchse = createButton('Echse', [4]);
    //buttonEchse.mousePressed(Los);

    //buttonSpock = createButton('Spock', [5]);
    //buttonSpocks.mousePressed(Los);

}


function Los() {





    var gewinnBedingung = input.value();

    do {
        ausgedachteZahl = Math.random() * 5;
        ausgedachteZahl = Math.round(ausgedachteZahl + 0.5);

        if (ausgedachteZahl == 1) {
            symbolComputer = 'Schere'
        };
        if (ausgedachteZahl == 2) {
            symbolComputer = 'Papier'
        };
        if (ausgedachteZahl == 3) {
            symbolComputer = 'Stein'
        };
        if (ausgedachteZahl == 4) {
            symbolComputer = 'Echse'
        };
        if (ausgedachteZahl == 5) {
            symbolComputer = 'Spock'
        };






        wahlSpieler = prompt();


        // wahlSpieler = 1;







        if (wahlSpieler == 1 || wahlSpieler == 'Schere' || wahlSpieler == 'schere') {
            symbolSpieler = 'Schere'
        } else if (wahlSpieler == 2 || wahlSpieler == 'Papier' || wahlSpieler == 'papier') {
            symbolSpieler = 'Papier'
        } else if (wahlSpieler == 3 || wahlSpieler == 'Stein' || wahlSpieler == 'stein') {
            symbolSpieler = 'Stein'
        } else if (wahlSpieler == 4 || wahlSpieler == 'Echse' || wahlSpieler == 'echse') {
            symbolSpieler = 'Echse'
        } else if (wahlSpieler == 5 || wahlSpieler == 'Spock' || wahlSpieler == 'spock') {
            symbolSpieler = 'Spock'
        } else {

            alert('Du hast etwas Ungültiges eingegeben');
        };



        if (symbolComputer == symbolSpieler) {
            alert('Unentschieden');
        }





        if (symbolComputer == 'Schere' && symbolSpieler == 'Stein') {
            gewinneSpieler++;
            alert('Du gewinnst gegen Schere');
        }
        if (symbolComputer == 'Echse' && symbolSpieler == 'Stein') {
            gewinneSpieler++;
            alert('Du gewinnst gegen Echse');
        }
        if (symbolComputer == 'Spock' && symbolSpieler == 'Echse') {
            gewinneSpieler++;
            alert('Du gewinnst gegen Spock');
        }
        if (symbolComputer == 'Papier' && symbolSpieler == 'Echse') {
            gewinneSpieler++;
            alert('Du gewinnst gegen Papier');
        }
        if (symbolComputer == 'Schere' && symbolSpieler == 'Spock') {
            gewinneSpieler++;
            alert('Du gewinnst gegen Schere');
        }
        if (symbolComputer == 'Stein' && symbolSpieler == 'Spock') {
            gewinneSpieler++;
            alert('Du gewinnst gegen Stein');
        }
        if (symbolComputer == 'Papier' && symbolSpieler == 'Schere') {
            gewinneSpieler++;
            alert('Du gewinnst gegen Papier');
        }
        if (symbolComputer == 'Echse' && symbolSpieler == 'Schere') {
            gewinneSpieler++;
            alert('Du gewinnst gegen Echse');
        }
        if (symbolComputer == 'Stein' && symbolSpieler == 'Papier') {
            gewinneSpieler++;
            alert('Du gewinnst gegen Stein');
        }
        if (symbolComputer == 'Spock' && symbolSpieler == 'Papier') {
            gewinneSpieler++;
            alert('Du gewinnst gegen Spock');
        }






        if (symbolSpieler == 'Schere' && symbolComputer == 'Stein') {
            gewinneComputer++;
            alert('Computer gewinnt mit Stein');
        }
        if (symbolSpieler == 'Echse' && symbolComputer == 'Stein') {
            gewinneComputer++;
            alert('Computer gewinnt mit Stein');
        }
        if (symbolSpieler == 'Spock' && symbolComputer == 'Echse') {
            gewinneComputer++;
            alert('Computer gewinnt mit Echse');
        }
        if (symbolSpieler == 'Papier' && symbolComputer == 'Echse') {
            gewinneComputer++;
            alert('Computer gewinnt mit Echse');
        }
        if (symbolSpieler == 'Schere' && symbolComputer == 'Spock') {
            gewinneComputer++;
            alert('Computer gewinnt mit Spock');
        }
        if (symbolSpieler == 'Stein' && symbolComputer == 'Spock') {
            gewinneComputer++;
            alert('Computer gewinnt mit Spock');
        }
        if (symbolSpieler == 'Papier' && symbolComputer == 'Schere') {
            gewinneComputer++;
            alert('Computer gewinnt mit Schere');
        }
        if (symbolSpieler == 'Echse' && symbolComputer == 'Schere') {
            gewinneComputer++;
            alert('Computer gewinnt mit Schere');
        }
        if (symbolSpieler == 'Stein' && symbolComputer == 'Papier') {
            gewinneSpieler++;
            alert('Computer gewinnt mit Papier');
        }
        if (symbolSpieler == 'Spock' && symbolComputer == 'Papier') {
            gewinneComputer++;
            alert('Computer gewinnt mit Papier');
        }

        anzahlRunden++;






    } while (gewinneComputer < gewinnBedingung && gewinneSpieler < gewinnBedingung)

    if (gewinneSpieler >= gewinnBedingung) {
        alert('Du hast gewonnen!');
    } else {
        alert('Der Computer gewinnt');
    }

    alert(gewinneSpieler + ' zu ' + gewinneComputer);





}