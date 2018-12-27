function validator(){

var check = document.getElementById("username");
var check2 = document.getElementById("realname");
var check3 = document.getElementById("email_address");

		if(check.value.length < 5 ||  check2.value.length <  5 ||  check3.value.length < 5 ) {
		alert("Please enter at least 5 characters");
		check.focus();
		check.style.border = "solid 3px red";
		return false;
		}			
		}

	
// list catalogues
function showCata(){
	var checkbox = document.getElementById("list_cata");
	var hiddenList = document.getElementsByClassName("hidden");
	
	for(var i=0; i != hiddenList.length; i++){
		if(checkbox.checked){
			hiddenList[i].style.display = "inline";
		}
		else{
			hiddenList[i].style.display = "none";
		}
	}
}
	
// const listbox = document.querySelector("#list_cata");
//listbox.addEventListener('change',function(event){
//		if(listbox.checked){
//			list.style.display = "none";
//		} else {
//			list.style.display = "
			
//		}
//});