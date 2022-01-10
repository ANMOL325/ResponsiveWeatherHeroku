
const PrintTime = document.getElementById("Time");
const PrintCity = document.getElementById("City");
const PrintCountry = document.getElementById("Country"); 
const InputButton = document.getElementsByClassName("InputButton");
const Input = document.getElementsByClassName("Input");
const TempData = document.getElementById("TempData");
console.log(Input[0]);

InputButton[0].addEventListener("click",(e)=> {

    if(Input[0].value == ""){
        // console.log("EMPTY");
        TempData.innerText = "Enter City Name";
    }
    else{
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Input[0].value}&appid=16dbec9c866831e62ac9e2d0506b47ac`).then ( (apidata) => {
        //    console.log(apidata);// This is in the form of object
           // and we need to convert it in the form of object
           return apidata.json();// Now it is in the form of Object

    })
    .then ( (actualdata) => {
        console.log(actualdata.name);
        PrintCity.innerText = actualdata.name;
        CurrentTemperatureKelvin = actualdata.main.temp;
        CurrentTemperatureCelsius = CurrentTemperatureKelvin - 273;
        // console.log(parseInt(CurrentTemperatureCelsius));
        TempData.innerText = parseInt(CurrentTemperatureCelsius);
        PrintCountry.innerText = actualdata.sys.country;

    })
    .catch( (error) => {
        console.log(`The Error Is ${error}`);
    })
    }

})


let DateObject = new Date().toDateString();


console.log(DateObject);

// PrintDay.innerText = new Date().getDay();
PrintTime.innerText = new Date().toDateString();




