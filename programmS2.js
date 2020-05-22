function Quadrat() {
    var Zahl1 = document.getElementById('Eingabe1');
    var Zahl2 = document.getElementById('Eingabe2');
    var ZahlObenEnde = document.getElementById('Eingabe3');
    //Aktion für eingabe feld 1-3



    Zahl2.value = Zahl2.value - 1


    do {

        Zahl2.value++;

        var Zahl3 = Math.pow(Zahl1.value, Zahl2.value);


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



        console.log(Zahl1.value + '^' + Zahl2.value + ' = ' + Zahl3);

        console.log('Digital root = ' + digital_root(Zahl3));


        var n = AdditivePersistence(Zahl3);
        console.log('Anzahl der Quersummen = ' + n);
        //alert('Anzahl der Quersummen = '+n);
        console.log('');





    } while (Zahl2.value != ZahlObenEnde.value);



    Eingabe1.value = '';
    Eingabe2.value = '';
    Eingabe3.value = '';
}

var los = document.getElementById('los');
los.addEventListener('click', Quadrat, true);