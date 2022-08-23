const forms = document.querySelector(".forms"),
	pwShowHide = document.querySelectorAll(".eye-icon"),
	links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
	eyeIcon.addEventListener("click", () => {
		let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

		pwFields.forEach(password => {
			if (password.type === "password") {
				password.type = "text";
				eyeIcon.classList.replace("bx-hide", "bx-show");
				return;
			}
			password.type = "password";
			eyeIcon.classList.replace("bx-show", "bx-hide");
		})

	})
})

links.forEach(link => {
	link.addEventListener("click", e => {
		e.preventDefault(); //preventing form submit
		forms.classList.toggle("show-signup");
	})
 })


const objUsers = [
	{
		user: 'vitjola29@gmail.com',
		password: 'Password25'
	},
	{
		user: 'aleks23@gmail.com',
		password: 'Password88'
	},

]

// login 
const login = () => {	
	let user = document.getElementById('email').value
	let password = document.getElementById('pasw').value

	for (let i = 0; i < objUsers.length; i++) {
		if (user == objUsers[i].user && password == objUsers[i].password) {
			alert(user + ' you are now logged in!!!')
			break
		} 
 		  else{
	  	  	alert('You are not register or incorrect email/password.')
 		   	return false
 		  }	   
 	  }
}

// register 
const registerUser = () => {
	// store new users 
	let registerUser = document.getElementById('newemail').value
	let registerPassword = document.getElementById('newpasw').value
	// store new data in an object
	let newUser = {
		user: registerUser,
		password: registerPassword
	}
	// loop to see if the user exist, or password invalid
	for (let i = 0; i < objUsers.length; i++) {
		// checking if new user already created
		if (registerUser === objUsers[i].user) {
	     alert(registerUser + ' is already registered')
		 break
		}
	}	
	for (let i = 0; i < objUsers.length; i++) {
		if (registerPassword.match(/[a-z]/g) && registerPassword.match(/[A-Z]/g) && registerPassword.match(/[0-9]/g) && registerPassword.length >= 8) {
			// stop the statement if result is found true
			     break
		}
		 else {
			alert('Password must containt 8 or more characters (at least 1 number 1 leter 1 capital letter')
			   return false
		}
	}

	objUsers.push(newUser)
	console.log(objUsers)
}