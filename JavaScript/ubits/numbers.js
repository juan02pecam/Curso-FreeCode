
        let a = 2;
        let b = new Number(1);
        let c = 7.19;

        let d = "5.6";

        console.log(a, b);
        console.log(c.toFixed(1));//toFixed lo redondea, o indica cuantos decimales tendra un valor o un numero
        console.log(c.toFixed(5));
        
        console.log(parseInt(c));//parseInt nos da la parte entera, en el caso de c el "7"

        console.log(typeof c, typeof d); //muestra que tipo de contenido es, en este caso c es "number" y d es "cadena de texto"
        console.log(a + b);//suma de numeros
        //console.log(c + d); //sale "7.195.6" porque d es un "string" o sea de cadena
        console.log(c + parseInt(d)); //casting, cambio de tipo de dato   solo suma los principales

        console.log(c + parseFloat(d))  //suma todos los numeros que se encuentren

        console.log(c + Number.parseInt(d));
        console.log(c + Number.parseFloat(d));
