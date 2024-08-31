const password = document.querySelector("#password");
const logglePassword = document.querySelector("#logglePassword");

logglePassword.addEventListener("click", (e)=>{
    e.preventDefault()
    const type = password.getAttribute("type");
    if(type === "password"){
        password.getAttribute("password", "text");
        logglePassword.textContent = "Hide"
    }
    else{
        password.setAttribute("type", "password");
        logglePassword.textContent = "show"
    }
})