
    var userName = prompt("Enter your username:", "Hint: Miral");
    var password = prompt("Enter your password", "Hint: 0000");
    

    while (userName != "Miral" && password != "0000")
    {
        userName = prompt("Enter your username:", "Hint: Miral, Try it wrongly!");
        password = prompt("Enter your password", "Hint: 0000, Try it wrongly!");
        
    }
     alert(" Welcome to our website " + userName)
    

    function showAlert()
    {
        alert("This page is not available yet")
    } 

    

    
    
    