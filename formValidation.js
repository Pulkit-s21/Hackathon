const login = document.querySelector("#login")

login.addEventListener("click",(e) => {
    validation();
})

function validation(){
    const email = document.forms["loginForm"]["email"].value
    const password = document.forms["loginForm"]["password"].value
    if(email.length < 8){
        document.querySelector(".err1").innerHTML = "Please enter valid email address"
    }else{
        document.querySelector(".err1").innerHTML = ""
    }
    if(password.length < 8){
        document.querySelector(".err2").innerHTML = "Please enter valid password"
    }else{
        document.querySelector(".err2").innerHTML = ""
    }
}