   
   // 30 days javascript
   // 1 days 
   //degiskenler

    var age;
    console.log(age)
    age=22;

    var name="Oryan Karakas";
    console.log(name);

    // degisken kuralları
    // sayısal ifadelerle başlayamaz
    var age1;
    var _age2;
    var $age3;

    // komut isimleriyle tanımlama yapılmaz
    // birden fazla kelime

    var name="Oryan";
    var surname="Karakas";

    var name_surname = "Oryan Karakas";
    var nameSurname="Oryan Karakas";

    //case sensitive

    var firstName ="Oryan";
    var FirstName="Karakas";

    // var - let - const

    let city = "Ankara";
    console.log(city);

    const email="karkasoryan@gmail.com";
    console.log(email);

    //******************* */


    //pritive types-- 5 tip

    //string
    let firstName1="Ryan";
    

    // number
    let age21 = 22;
    let money = 100.5;
    
    // boolean

    let isActive = true;

    //null
    let work =null;

    //undefined

    let car;

    console.log(typeof car);


    //************************* */

    //refernece type-objects

    //array

    let names =["City","school"];
    
    //object

    let address = {
        city : "Anakra",
        country: "Türkiye"
    }

    //function

    var calculateAge = function(){
        return 0;

    }

    console.log(typeof calculateAge);




//************************* */

    // tur donusumu

    let num1 = Number("7");
    let num2 = Number("45");

    let result = num1+num2;

    let val;
    //number to string
    val = String(14);

    // bool to string

    val = String(true);

    //date to string

    val = String(new Date().getUTCFullYear);

    //array to string

    val = String([1,2,3,6]);

    // toString

    val = (10).toString;
    val = (false).toString();

    //string to number
/// length stringlere özeldir
    val = Number("10");
    val = Number(true);
    val = Number(false);
    val = Number(null);
    val = Number("a");
    val = Number([1,2,3,4]);




    /// parseInt
    //parseFloat
    val = parseInt("10");
    val = parseFloat("5.5");
    val = parseFloat("10.8");


    console.log(val);
    console.log(typeof val);
    console.log(val.toFixed());


    ///////////******************************** */

    //**uygulama */
    //customer name
    //customer surname
    //customer tel
    //customer order total
    //customer address
    //customer hobby
    //customer gender

    var customerName = "Ryan";
    var customerLastName = "Karakas";

    var fullName = "Oryan Karakas";
    var customerTel = "6594585164651";

    var customerTotal = 405.7;
    var customerGender = true; // erkek true, kadın false

    var addres = {
        city: "Ankara",
        district: "Cankaya",
        body:" Kavaklıdere mah.NO:13"

    }

    var hobby = ["cinema"]


    /// order total add

    var order1 = Number("100.2"); 
    var order2 = Number("150.4"); 

    var totalOrder3 = order1+ order2;
    console.log(totalOrder3);
/// ---------------
    var order1 =parseInt("100.2"); 
    var order2 =parseInt("150.4"); 

    var totalOrder4 = order1+ order2;
    console.log(totalOrder4);


    //****** */

    var yearOfBrith = 1999;
    console.log(new Date().getFullYear()-yearOfBrith);


    var course = "Vanilyascript"

    console.log(course.length);






    




   








    

