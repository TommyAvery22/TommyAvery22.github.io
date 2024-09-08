let temp = prompt("What is the temperature (celcius)?"); // Ask user for temperature

temp = parseInt(temp); // Convert input to integer 

let feeling;

if(temp < 15){
    feeling = "Brrrr...";
} else if(temp >= 30){
    feeling = "Whew it's hot!";
}

alert("The temperature is " + temp + "°C, which feels like: " + feeling);