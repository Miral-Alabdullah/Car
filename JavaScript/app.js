
    var userName = prompt("Enter your username:", "Hint: Miral, Try it wrongly!");
    var password = prompt("Enter your password", "Hint: 0000, Try it wrongly!");
    

    function login()
    {
    while (userName != "Miral" && password != "0000")
    {
        userName = prompt("Enter your username again:", "Hint: Miral");
        password = prompt("Enter your password again", "Hint: 0000");   
    }
    }
    alert(" Welcome to our website " + userName)
    login();

 
    
    var image = '';
    var carName = prompt("Choose one of these cars:","BMW, Mercedes, Range Rover");
    var carNumber = prompt("How many times you want this car?");
    function carDisplayed(){
    for (var i=1;i<=carNumber;i++)
        {
            if(carName === "BMW")
            {
                image = image + '<img src="https://www.ccarprice.com/products/BMW-8-Series-840i-xDrive-Coupe-2020_1.jpg"/>';
            } else if (carName === "Mercedes") 
            {
                image = image + '<img src="https://cars.usnews.com/static/images/Auto/izmo/i159580569/2020_mercedes_benz_cla_angularfront.jpg"/>';                
            } else if (carName === "Range Rover")
            {
                 image = image + '<img src="https://i.pinimg.com/originals/26/e6/7f/26e67f0e92d14a8336f825eb5cc2e9a1.jpg"/>';
            } 
        }
    }

    carDisplayed(image);
    console.log(image);
    document.write(image);
       
    
    function showAlert()
     {
         alert("This page is not available yet")
     }
      

        

    

    







    
    