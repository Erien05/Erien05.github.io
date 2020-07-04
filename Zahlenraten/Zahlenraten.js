var input1;
var input2;
var buttonBestätigen;
var buttonGenerieren;

var ausgedachteZahl;
var obereGrenze;
var gerateneZahl;
var anzahlDerVersuche = 0;



function setup() {
    noCanvas();

    createP('Bis wohin soll geraten werden?');




    input1 = createInput();


    //input1.changed(newText);

    createP();

    buttonGenerieren = createButton('Zahl generieren');
    buttonGenerieren.mousePressed(generieren);



    createP();

    input1.changed(newText);




}


function generieren() {
    obereGrenze = input1.value();

    ausgedachteZahl = Math.random() * obereGrenze;
    ausgedachteZahl = Math.round(ausgedachteZahl + 0.5);
    console.log(ausgedachteZahl);

    createP('Rate eine Zahl zwischen 1 und ' + input1.value());

    input2 = createInput();
    input2.changed(newText);


    createP();



    buttonBestätigen = createButton('Raten');
    buttonBestätigen.mousePressed(bestätigen);

}


function bestätigen() {

    gerateneZahl = input2.value();



    if (gerateneZahl > ausgedachteZahl) {
        alert('Deine Zahl ist zu gross');

    }
    if (gerateneZahl < ausgedachteZahl) {
        alert('Deine Zahl ist zu klein');

    }
    anzahlDerVersuche++;





    if (gerateneZahl == ausgedachteZahl) {
        alert('Richtig geraten!');
        alert('Du hast ' + anzahlDerVersuche + ' Mal geraten');
        anzahlDerVersuche = 0;
    }


    //gerateneZahl = '';

}


function newText() {
    createP(input2.value());


}