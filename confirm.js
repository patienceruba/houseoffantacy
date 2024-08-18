document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#btn').onclick = function(){
		let pass = document.querySelector("#num");
		let pass1 = document.querySelector("#num1");
		let pass2 = document.querySelector("#num2");
		let pass3 = document.querySelector("#num3");
		let pass4 = document.querySelector("#num4");
		let pass5 = document.querySelector("#num5");
		if(!pass.value || !pass1.value || 
			!pass2.value || !pass3.value || 
			!pass4.value || !pass5.value){
			alert("enter one time 6 digits we sent you on email");
			elements = [
				document.querySelector("#num"), 
				document.querySelector("#num1"),
				document.querySelector("#num2"),
				document.querySelector("#num3"),
				document.querySelector("#num4"),
				document.querySelector("#num5")]
			elements.forEach(element => {
				element.style.border = "1px solid red";
			})
			
			return false;
		}
		else{
			return true

		}
	}
});
/*let inputs = document.querySelectorAll(".confirm");
inputs.forEach(function(input, index){
	inputs.addEventListener('input', (e)=>{
		let value=e.target.value;
		if(value.length===1 && !isNaN(value)){
			let nextInput=input[index+1];
			if(nextInput){
				nextInput.focus();
			}
		}
	});
});
inputs.forEach((input) =>{
	inputs.addEventListener('keydown',(e)=>{
		if(e.target.value.length>=1 && e.key!="BackSpace"){
			e.preventDefault();
		}
	});
});*/

function moveFocus(current, event){
	if(current.value.length ===1){
		let next = current.nextElementSibling;
		if(next){
			next.focus();
		}
	
	}
	else if(event.inputType==='deleteContentBackward'){
		let prev = current.previousElementSibling;
		if(prev){
			prev.focus();
		}
	}
}
