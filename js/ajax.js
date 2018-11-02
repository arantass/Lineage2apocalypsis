$(document).ready(function(){
$("#submit").click(function(){
	alert("clicked submit");
var name = $("#name").val();
var leader = $("#leader").val();
var email = $("#email").val();
var mem2 = $("#mem2").val();
var mem3 = $("#mem3").val();
var mem4 = $("#mem4").val();
var mem5 = $("#mem5").val();
var mem6 = $("#mem6").val();
var mem7 = $("#mem7").val();
var mem8 = $("#mem8").val();
var mem9 = $("#mem9").val();
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'name='+ name + '&leader='+ leader + '&email='+ email + '&mem2='+ mem2 + '&mem3='+ mem3 + '&mem4='+ mem4 + '&mem5='+ mem5 + '&mem6='+ mem6 + '&mem7='+ mem7 + '&mem8='+ mem8 + '&mem9='+ mem9;
if(name==''||leader==''||email==''||mem2=='')
{
alert("Please Fill All Fields");
}
else
{
// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "ajaxsubmit.php",
data: dataString,
cache: false,
success: function(result){
alert(result);
}
});
}
return false;
});
});