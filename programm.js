function Digitalroot() {

    var Zahl1 = prompt('Gib die basis der Exponential Rechnung ein', 'Zahl zwischen 1 und 9');


    var Zahl2 = prompt('Gib den Start Exponenten an');
    Zahl2 = Zahl2 - 1
    var ZahlObenEnde = prompt('Gib das obere Ende des Exponenten an');

    do {

        Zahl2++;

        var Zahl3 = Math.pow(Zahl1, Zahl2);


        function digital_root(n) {
            var z = n.toString(),
                i,
                y = 0;

            if (z.length === 1) {
                return +z;
            }
            for (i = 0; i < z.length; i++) {
                y += +z[i];
            }
            return digital_root(y);


        }

        //HIER wird Anzahl der Quersummen berechnet

        function AdditivePersistence(num) {

            let str = String(num); //number into string
            let arr = str.split(""); //string into array
            // adds numbers in array, then repeats until left with single digit
            let count = 0;
            while (arr.length > 1) {
                // set `arr` to string then array with values returned from `.reduce()`
                arr = String(arr.reduce(function (a, b) {
                    return Number(a) + Number(b)
                })).split("");
                count++;
            }

            return count;

        };


        //HIER kommen die ganzen Ergebnise



        //alert('Ergebis von '+Zahl1+'^'+Zahl2+' = '+Zahl3);
        //alert('Digital root = '+digital_root(Zahl3));



        console.log(Zahl1 + '^' + Zahl2 + ' = ' + Zahl3);

        console.log('Digital root = ' + digital_root(Zahl3));


        var n = AdditivePersistence(Zahl3);
        console.log('Anzahl der Quersummen = ' + n);
        //alert('Anzahl der Quersummen = '+n);
        console.log('');
    } while (Zahl2 != ZahlObenEnde);





    document.write('Fertig! ');

    document.write('Die Ergebnise werden in der Console angezeigt.');





    //WAS HIER KOMMT wird erst ausgeführt, wenn man Klickt
}

//WAS HIER KOMMT wird ausgeführt, wenn das Programm geöfnet wird