function show(){
	let nav = document.querySelector(".nav-list");
	if(nav.style.maxHeight === "0px"){
		nav.style.maxHeight = "900px";
	}
	else{
		nav.style.maxHeight = "0px";

	}
}
document.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#profile').onclick = function(){
		let profile = document.querySelector('.login-ops');
		if(profile.style.maxHeight === '0px'){
			profile.style.maxHeight = '150px';
		}
		else{
			profile.style.maxHeight = "0px";
		}
	}
})