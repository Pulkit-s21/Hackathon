const signUp = document.querySelector("#signUp")

signUp.addEventListener("click",()=>{
    validation();
})


function validation(){
    if(document.forms["signUpForm"]["username"].value.length < 8){
        document.querySelector(".err1").innerHTML = "Username must be atleast 8 characters"
    }else{
        document.querySelector(".err1").innerHTML = ""
    }

    if(document.forms["signUpForm"]["email"].value.length < 8){
        document.querySelector(".err2").innerHTML = "Please enter a valid email address"
    }else{
        document.querySelector(".err2").innerHTML = ""
    }

    if(document.forms["signUpForm"]["password"].value.length < 8){
        document.querySelector(".err3").innerHTML = "Please enter a valid password"
    }else{
        document.querySelector(".err3").innerHTML = ""
    }

    
}