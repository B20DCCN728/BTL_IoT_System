<script>
        document.addEventListener("DOMContentLoaded", function () {
            const btoff = document.querySelector(".device.light .button-class:last-child");
            const lightimg = document.querySelector(".device.light img");
            const bton = document.querySelector(".device.light .button-class:first-child");
            const fanon = document.querySelector(".device.fan .button-class:first-child");
            const fanoff = document.querySelector(".device.fan .button-class:last-child");
            const fanimg = document.querySelector(".device.fan img");
            const sidebarItem = document.querySelectorAll(".sidebar li");
            const dashboard = document.getElementById("dashboard");
            const profile = document.getElementById("profile");
            const sensor = document.getElementById("sensor-data");
            const action = document.getElementById("action");
            //const deviceid = document.getElementById();

            let idAction = 1;

            function updateAction(deviceID, action) {
                const actionData = document.getElementById("action").getElementsByTagName('tbody')[0];

                const newRow = actionData.insertRow();

                const currentTime = new Date();

                const IDCell = newRow.insertCell(0)
                const deviceIDCell = newRow.insertCell(1)
                const actionCell = newRow.insertCell(2)
                const timeCell = newRow.insertCell(3)
                
                IDCell.textContent = idAction++;
                deviceIDCell.textContent = deviceID;
                actionCell.textContent = action;
                timeCell.textContent = currentTime.toLocaleTimeString();
                
            }

            btoff.addEventListener("click", function () {
                lightimg.src = "img/images.jpg";
                updateAction(1, "OFF");
            });

            bton.addEventListener("click", function () {
                lightimg.src = "img/images.png";
                updateAction(1, "ON");
            });

            fanoff.addEventListener("click", function () {
                fanimg.src = "img/fan-static2.png";
                updateAction(2, "OFF");
            });

            fanon.addEventListener("click", function () {
                fanimg.src = "img/fan-animate2.gif";
                updateAction(2, "ON");
            });

            sidebarItem.forEach(function (item) {
                item.addEventListener("click", function () {
                    dashboard.style.display = "none";
                    profile.style.display = "none";
                    sensor.style.display = "none";
                    action.style.display = "none";

                    if (item.textContent === "Dashboard") {
                        dashboard.style.display = "block";
                    } else if (item.textContent === "Profile") {
profile.style.display = "flex";
                    } else if (item.textContent === "Sensor Data") {
                        sensor.style.display = "flex";
                    }else if (item.textContent === "Action"){
                        action.style.display = "flex";
                    }
                })
            })

        });

        // Lấy tham chiếu đến thẻ canvas
        const ctx = document.getElementById('chartCanvas');

        // Dữ liệu giả tạo cho độ ẩm, ánh sáng và nhiệt độ
        const humidityData = [];
        const lightData = [];
        const temperatureData = [];


        // Biểu đồ dạng đa đường
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Thời điểm 1', 'Thời điểm 2', 'Thời điểm 3', 'Thời điểm 4', 'Thời điểm 5', 'Thời điểm 6'],
                datasets: [
                    {
                        label: 'Độ ẩm',
                        data: humidityData,
                        borderColor: 'blue',
                        fill: false
                    },
                    {
                        label: 'Ánh sáng',
                        data: lightData,
                        borderColor: 'orange',
                        fill: false
                    },
                    {
                        label: 'Nhiệt độ',
                        data: temperatureData,
                        borderColor: 'red',
                        fill: false
                    }
                ]
            },
            options: {
                //responsive: true,
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Thời gian'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Giá trị'
                        }
                    }
                }
            }
        });
        function updateArrayAndChart() {
            let newData = Math.floor(Math.random() * 100) + 1;
            let newData1 = Math.floor(Math.random() * 100) + 1;
            let newData2 = Math.floor(Math.random() * 100) + 1;
            if (humidityData.length > 5)
                humidityData.shift();
            humidityData.push(newData);
            if (temperatureData.length > 5)
                temperatureData.shift();
            temperatureData.push(newData1);
            if (lightData.length > 5)
                lightData.shift();
            lightData.push(newData2);
            let x = document.getElementById('doam');
            let x1 = document.getElementById('nhietdo');
            let x2 = document.getElementById('as');
            x.textContent = `${newData.toFixed(1)}%`;
x1.textContent = `${newData1.toFixed(1)} độ`;
            x2.textContent = `${newData2.toFixed(1)} LUX`;

            const xs = document.getElementById("tp");
            const xs1 = document.getElementById("hm");
            const xs2 = document.getElementById("lt");


            //chart.data.datasets[0].data = humidityData;
            //chart.data.datasets[1].data = lightData;
            //chart.data.datasets[2].data = temperatureData;
            //console.log(typeof newData1.toFixed(1))
            //console.log(newData1.toFixed(1))
            chart.update();

            if (parseFloat(newData1.toFixed(1)) > 50)
                xs.style.background = "linear-gradient(45deg, #d1bbbf, red)";
            else {
                xs.style.background = "linear-gradient(45deg, yellow, green)";
            }
            if (parseFloat(newData.toFixed(1)) > 50)
                xs1.style.background = "linear-gradient(45deg, rgb(181,181,237), green)";
            else {
                xs1.style.background = "linear-gradient(45deg, white, blue )";
            }
            if (parseFloat(newData2.toFixed(1)) > 50)
                xs2.style.background = "linear-gradient(45deg, yellow , orange)";
            else {
                xs2.style.background = "linear-gradient(45deg, white, yellow)";
            }
        }
        let idcount = 1;

        function updateSensortable() {
            const sensorData = document.getElementById("sensor-data").getElementsByTagName('tbody')[0];

            const newRow = sensorData.insertRow();

            while (sensorData.rows.length > 10) {
                sensorData.deleteRow(0);
            }

            const currentTime = new Date();

            const IDCell = newRow.insertCell(0)
            const timeCell = newRow.insertCell(1)
            const tempCell = newRow.insertCell(2)
            const humidCell = newRow.insertCell(3)
            const lightCell = newRow.insertCell(4)

            IDCell.textContent = idcount++;
            timeCell.textContent = currentTime.toLocaleTimeString();
            tempCell.textContent = temperatureData[temperatureData.length - 1] + " độ";
            humidCell.textContent = humidityData[humidityData.length - 1] + " %";
            lightCell.textContent = lightData[lightData.length - 1] + " lux";

        }


        setInterval(function () {
            updateArrayAndChart(),
                updateSensortable()
        }, 1000);
    </script>
