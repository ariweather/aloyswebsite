  
$(document).ready(function () {
                  
$("#submitButton").click(function () {
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var emailAddress = $("#emailAddress").val();
  $("#changeText").text("Success! You contacted Aloy as" + " " + firstName + " " + lastName + " with the email address " + " " + emailAddress + ".")
  /*console.log("Success! You contacted Aloy as" + " " + firstName + " " + lastName + " with the email address " + " " + emailAddress + ". She will contact you as soon as she can!");*/
})
  
                  
$("#submitButton").click(function (){
  $("#submitButton").css("color","darkorange")
})
                         
});

