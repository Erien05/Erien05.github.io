function DigitalRoot_Programm() {
    var Zahl1 = document.getElementById('Eingabe1');
    var Zahl2 = document.getElementById('Eingabe2');
    var ZahlObenEnde = document.getElementById('Eingabe3');






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

        document.write(Zahl1.value + '^' + Zahl2.value + ' = ' + Zahl3);
        document.write('<br>');
        document.write('Digital root = ' + digital_root(Zahl3));
        document.write('<br>');




        console.log(Zahl1.value + '^' + Zahl2.value + ' = ' + Zahl3);

        console.log('Digital root = ' + digital_root(Zahl3));


        var n = AdditivePersistence(Zahl3);
        console.log('Anzahl der Quersummen = ' + n);


        document.write('Anzahl der Quersummen = ' + n);
        document.write('<br>');
        document.write('<br>');

        console.log('');

    } while (Zahl2.value != ZahlObenEnde.value);






    Zahl1.value = '';
    Zahl2.value = '';
    ZahlObenEnde.value = '';

    document.write('<body style="background-color: #031321; color:white">');


    document.write('<br>');
    document.write('<hr>');
    document.write('<a href="seite3.html" style=color:blue><-- zum Programm zurück</a>');
    document.write('<hr>');
}



var los = document.getElementById('los');
los.addEventListener('click', DigitalRoot_Programm, true);