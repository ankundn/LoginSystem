/*Ankunda Nisha
Validation of the RegForm, a function called validate that has different methods that validate
different fields in the form*/

const validate = () => {


    /* validating the user id field so that it doesn't accept any empty values and only accepts a length
    of 5-12 */
    const user = document.getElementById('userid');
    if (user.value == '' || user.value.length < 5 || user.value.length > 12) {
        alert('This field is required and userID should be 5-12 charachters');
        user.style.border = "2px green solid";
    }


    /* validating the password field so that it doesn't accept any empty values and only accepts a length
        of 7-12 */
    const password = document.getElementById('pass');
    if (password.value == '' || password.value.length < 7 || password.value.length > 12) {
        alert('This field is required and should be 7-12 characters');
        password.style.border = "2px green solid";
    }

/* validating the name field so that it doesn't accept any empty values and only accepts
alphabete characters*/
    const namev = document.getElementById('name');
    const alpha = /^[A-Za-z]+$/;
    if (namev.value.match(alpha) || namev == '') {
        return true;
    }
    else {
        alert('required and only alphabates');
        namev.style.border = "2px green solid";
    }
    
   /* validating country field so that it doesn't accept any empty values */ 
   const city = document.getElementById('country');
   if(city.value == '(Please select a country)'){
    alert('Please choose a country');
    city.style.border = "2px green solid";
   }
   else{
       return true;
   }



    /* validating zip field so that it doesn't accept any empty values and only accepts numbers */
    const zip = document.getElementById('zipc');
    const code = /^[-+]?[0-9]+$/;
    if (zip.value == '' || zip.value.match(code)) {
        alert('This field is required, please input your zip code');
        zip.style.border = "2px green solid";
    }


    /* validating the email field so that it doesn't accept any empty values and only accepts
    a valid email */
    const mail = document.getElementById('email');
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.value.match(mailformat) || mail.value == ' ') {
        return true;
    }
    else {
        alert('This field is required, a valid email has "@"');
        mail.style.border = "2px green solid";
    }
 //validating the gender field so that it ensures a radio button is checked
 const male = document.getElementById("male");
 const female = document.getElementById("female");
 if (male.checked == false && female.checked == false) {

     alert('This field is required. Please select either female or male');

 }
 

 //validating the language field so that it ensures a box is checked
 const english = document.getElementById("eng");
 const noneng = document.getElementById("noneng");
if (english.checked == false && noneng.checked ==false) {
 alert('Please check a box and select either English or Non English');
}
}


