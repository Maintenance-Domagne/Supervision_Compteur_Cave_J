fetch("data.json")
    .then(res => res.json())
    .then(data => {
        const tableBody = document.getElementById("tableBody");
        const labels = [];
        const values = [];

        data.data.forEach(item => {
            labels.push(item.index);
            values.push(item.value);

            const row = document.createElement("tr");
            row.innerHTML = `<td>${item.index}</td><td>${item.value}</td>`;
            tableBody.appendChild(row);
        });

        new Chart(document.getElementById("chart"), {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    label: "Valeur mesurée",
                    data: values,
                    borderColor: "blue",
                    fill: false
                }]
            },
            options: { responsive: true }
        });
    })
    .catch(err => console.error(err));