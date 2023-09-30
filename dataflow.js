// Hàm tạo số ngẫu nhiên trong khoảng min và max (bao gồm cả min và max)
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRealTime() {
    // Create a Date object representing the current date and time
    const currentTime = new Date();

    // Extract the current components (hour, minute, second, and millisecond)
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();
    const currentMillisecond = currentTime.getMilliseconds();

// Display the current time
    return `${currentHour}:${currentMinute}:${currentSecond}.${currentMillisecond}`;
}

// Hàm tạo dữ liệu giả
const tableBody = document.getElementById("data-table");
const rowCount = tableBody.children.length;
var id_table = rowCount;

function generateFakeData() {

    const rowCount = tableBody.children.length;
    // Số lần đo hiện tại
    // const measurementNumber = rowCount + 1;
    id_table += 1;

    const realTime = getRealTime();
    // Tạo dữ liệu giả cho nhiệt độ, độ ẩm và ánh sáng
    const temperature = getRandom(10, 40);
    const humidity = getRandom(40, 60);
    const light = getRandom(100, 1000);
    const voltage = getRandom(1, 20);

    // Tạo một hàng mới trong bảng và cập nhật dữ liệu
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td> ${id_table}</td>
        <td> ${realTime} </td>
        <td> ${temperature}°C </td>
        <td> <strong> ${humidity}% </strong></td>
        <td> <strong> ${light} Lux </strong></td>
        <td> <strong> ${voltage} Vol </strong></td>                   
        <td>
            <p class="status delivered">Good</p>
        </td>     
    `;
    // <td>${measurementNumber}</td>
    // <td>${temperature} °C</td>
    // <td>${humidity} %</td>
    // <td>${light} lux</td>
    // Thêm hàng mới vào bảng
    tableBody.appendChild(newRow);

    // Nếu có hơn 8 dòng, loại bỏ dòng đầu tiên (để giữ 8 dòng)
    if (rowCount >= 8) {
        tableBody.removeChild(tableBody.firstChild);
    }
}

// Cập nhật dữ liệu giả liên tục mỗi giây
setInterval(generateFakeData, 1000);
