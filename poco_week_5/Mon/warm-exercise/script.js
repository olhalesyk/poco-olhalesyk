let users = [
    {
        username: "Khalid",
        password: "thisIspass1",
        email: "khalid@powercoders.org"

    },
    {
        username: "Olha",
        password: "Pass2New",
        email: "olha@powercoders.org"

    },
    {
        username: "Anna",
        password: "thisddfklpepLL4?",
        email: "anna@powercoders.org"

    }
]

const loginForm = document.querySelector("form");
loginForm.addEventListener("submit", gatherUserInput);

function gatherUserInput(event){
    event.preventDefault();
    // let formData = new FormData(event.target);
    // console.log(event);
    // console.table(formData);
    let user = document.querySelector("#user").value;
    let pwd = document.querySelector("#pwd").value;
    checkIfLoginExists(user, pwd);
    
}

function checkIfLoginExists(loginUser, loginPwd){
    let userExists = false; 
    // Check if login user 
    users.forEach(function(user){
        if(user.email === loginUser){
            userExists = true;
            if(user.password === loginPwd){
                // if password is correct, call changeViewIfLoggedIn 
                changeViewIfLoggedIn();
            } else {
                //else call showErrorMessage
                showErrorMessage();
            }
        }
    });
    // only after checking all objects in ou loop, we can decide if the user exasts or not
    if(!userExists){
        showErrorMessage();
    }   
}

function changeViewIfLoggedIn(){
    console.log("Logged in state")
}

function showErrorMessage(){
    console.log("Login not found")
}