/* Furnitrade Site JavaScript File 
   Everything here should be in functions that are well
   commented so this file can be used throughout the site */


// ok tbh i dont think most of these functions were necessary in hindsight

   function loggedin(){
      //the button of the class account will change what it says if the user has
      //created an account????

      window.location="create_account.html";
   }

   
   
   
   
   // function user_icon(){
   //    //when this function is called make the login button class change the div to contain an image only
   //    document.getElementById("header-account").innerHTML = "<img src='user_icon.png' alt='user'/>";
      
   // }

   function passinfo(){
      //alerts user of password shit

      alert("At least 8 characters\nMust contain at least one number\nMust contain at least one capital letter");
      window.location="create_account.html";
   }

   function validate(formObj) {
  
      if (formObj.file.value === '') {
        alert('Please choose an image');
        formObj.file.focus();
        return false;
      }
      
      if (formObj.category.value === '') {
        alert('Please enter a category');
        formObj.category.focus();
        return false;
      }
      
      if (formObj.location.value === '') {
        alert('Please select a location');
        formObj.location.focus();
        return false;
      }

      if (formObj.price.value === '') {
         alert('Please enter a price');
         formObj.price.focus();
         return false;
       }
        
      return true;
    }






   /*
      ***

       sell page

      ***
   */
 




   /*
      ***

       buy page

      ***
   */
	


function bought(){

   alert("You have chosen to claim this product. \n To complete the transaction please contact the seller. \n\n Contact provided below: \n charlottestantonrpi@gmail.com \n 917-453-2019");

}



//the code to make the login button change to a user-icon is below but decided to remove

// $(document).ready(function () {
//    $(".logs").click(function() {
//       $(".header-account").html("<img src='user_icon.png' alt='user'/>");
//       $("#test13").html("<img src='user_icon.png' alt='user' width='40px' height='40px'/>");
//    });
// });

