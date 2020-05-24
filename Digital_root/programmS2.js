function ErgebnisseBasis2() {

    var Zahl1 = 2;

    var Zahl2 = 0;
    Zahl2 = Zahl2 - 1;
    var ZahlObenEnde = 54;
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


        document.write(Zahl1 + '^' + Zahl2 + ' = ' + Zahl3);
        document.write('<br>');
        document.write('Digital root = ' + digital_root(Zahl3));
        document.write('<br>');
        document.write('Anzahl der Quersummen = ' + n);
        document.write('<br>');
        document.write('<br>');









    } while (Zahl2 != ZahlObenEnde);

    document.write('<br>');
    document.write('<body style="background-color: #031321; color:white">');


    document.write('<br>');
    document.write('<hr>');
    document.write('<a href="seite2.html" style=color:blue><-- zurück</a>');
    document.write('<hr>');
}




function ErgebnisseBasis3() {

    var Zahl1 = 3;

    var Zahl2 = 0;
    Zahl2 = Zahl2 - 1;
    var ZahlObenEnde = 34;
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


        document.write(Zahl1 + '^' + Zahl2 + ' = ' + Zahl3);
        document.write('<br>');
        document.write('Digital root = ' + digital_root(Zahl3));
        document.write('<br>');
        document.write('Anzahl der Quersummen = ' + n);
        document.write('<br>');
        document.write('<br>');









    } while (Zahl2 != ZahlObenEnde);

    document.write('<br>');
    document.write('<body style="background-color: #031321; color:white">');


    document.write('<br>');
    document.write('<hr>');
    document.write('<a href="seite2.html" style=color:blue><-- zurück</a>');
    document.write('<hr>');
}

function ErgebnisseBasis4() {

    var Zahl1 = 4;

    var Zahl2 = 0;
    Zahl2 = Zahl2 - 1;
    var ZahlObenEnde = 27;
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


        document.write(Zahl1 + '^' + Zahl2 + ' = ' + Zahl3);
        document.write('<br>');
        document.write('Digital root = ' + digital_root(Zahl3));
        document.write('<br>');
        document.write('Anzahl der Quersummen = ' + n);
        document.write('<br>');
        document.write('<br>');









    } while (Zahl2 != ZahlObenEnde);

    document.write('<br>');
    document.write('<body style="background-color: #031321; color:white">');


    document.write('<br>');
    document.write('<hr>');
    document.write('<a href="seite2.html" style=color:blue><-- zurück</a>');
    document.write('<hr>');
}


function ErgebnisseBasis5() {

    var Zahl1 = 5;

    var Zahl2 = 0;
    Zahl2 = Zahl2 - 1;
    var ZahlObenEnde = 23;
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


        document.write(Zahl1 + '^' + Zahl2 + ' = ' + Zahl3);
        document.write('<br>');
        document.write('Digital root = ' + digital_root(Zahl3));
        document.write('<br>');
        document.write('Anzahl der Quersummen = ' + n);
        document.write('<br>');
        document.write('<br>');









    } while (Zahl2 != ZahlObenEnde);

    document.write('<br>');
    document.write('<body style="background-color: #031321; color:white">');


    document.write('<br>');
    document.write('<hr>');
    document.write('<a href="seite2.html" style=color:blue><-- zurück</a>');
    document.write('<hr>');
}


function ErgebnisseBasis6() {

    var Zahl1 = 6;

    var Zahl2 = 0;
    Zahl2 = Zahl2 - 1;
    var ZahlObenEnde = 21;
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


        document.write(Zahl1 + '^' + Zahl2 + ' = ' + Zahl3);
        document.write('<br>');
        document.write('Digital root = ' + digital_root(Zahl3));
        document.write('<br>');
        document.write('Anzahl der Quersummen = ' + n);
        document.write('<br>');
        document.write('<br>');









    } while (Zahl2 != ZahlObenEnde);

    document.write('<br>');
    document.write('<body style="background-color: #031321; color:white">');


    document.write('<br>');
    document.write('<hr>');
    document.write('<a href="seite2.html" style=color:blue><-- zurück</a>');
    document.write('<hr>');
}

function ErgebnisseBasis7() {

    var Zahl1 = 7;

    var Zahl2 = 0;
    Zahl2 = Zahl2 - 1;
    var ZahlObenEnde = 19;
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


        document.write(Zahl1 + '^' + Zahl2 + ' = ' + Zahl3);
        document.write('<br>');
        document.write('Digital root = ' + digital_root(Zahl3));
        document.write('<br>');
        document.write('Anzahl der Quersummen = ' + n);
        document.write('<br>');
        document.write('<br>');









    } while (Zahl2 != ZahlObenEnde);

    document.write('<br>');
    document.write('<body style="background-color: #031321; color:white">');


    document.write('<br>');
    document.write('<hr>');
    document.write('<a href="seite2.html" style=color:blue><-- zurück</a>');
    document.write('<hr>');
}

function ErgebnisseBasis8() {

    var Zahl1 = 8;

    var Zahl2 = 0;
    Zahl2 = Zahl2 - 1;
    var ZahlObenEnde = 18;
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


        document.write(Zahl1 + '^' + Zahl2 + ' = ' + Zahl3);
        document.write('<br>');
        document.write('Digital root = ' + digital_root(Zahl3));
        document.write('<br>');
        document.write('Anzahl der Quersummen = ' + n);
        document.write('<br>');
        document.write('<br>');









    } while (Zahl2 != ZahlObenEnde);

    document.write('<br>');
    document.write('<body style="background-color: #031321; color:white">');


    document.write('<br>');
    document.write('<hr>');
    document.write('<a href="seite2.html" style=color:blue><-- zurück</a>');
    document.write('<hr>');
}

function ErgebnisseBasis9() {

    var Zahl1 = 9;

    var Zahl2 = 0;
    Zahl2 = Zahl2 - 1;
    var ZahlObenEnde = 17;
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


        document.write(Zahl1 + '^' + Zahl2 + ' = ' + Zahl3);
        document.write('<br>');
        document.write('Digital root = ' + digital_root(Zahl3));
        document.write('<br>');
        document.write('Anzahl der Quersummen = ' + n);
        document.write('<br>');
        document.write('<br>');









    } while (Zahl2 != ZahlObenEnde);

    document.write('<br>');
    document.write('<body style="background-color: #031321; color:white">');


    document.write('<br>');
    document.write('<hr>');
    document.write('<a href="seite2.html" style=color:blue><-- zurück</a>');
    document.write('<hr>');
}