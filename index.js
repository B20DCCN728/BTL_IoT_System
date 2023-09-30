function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateSensorLabel() {
    const temperatureElement = document.getElementById("temperature");
    const humidityElement = document.getElementById("humidity");
    const lightValueElement = document.getElementById("lightvalue");
    const voltageElement = document.getElementById("voltage");

    const temperature = getRandom(10, 40);
    const humidity = getRandom(20, 100);
    const lightValue = getRandom(56, 1500);
    const voltage = getRandom(1, 20);
    
    temperatureElement.textContent = `${temperature}°C`;
    humidityElement.textContent = `${humidity}%`;
    lightValueElement.textContent = `${lightValue} Lux`;
    voltageElement.textContent = `${voltage} Vol`;

    if (temperature > 25) {
        temperatureElement.classList.add("red");
    } else {
        temperatureElement.classList.remove("red");
    }
}

setInterval(updateSensorLabel, 1000);

// const led = document.getElementById("led");
// led.addEventListener("click", function () {
//     var OFF = document.getElementById("ON");
// });



const fan = document.getElementById("fan");