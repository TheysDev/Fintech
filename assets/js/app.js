let ctx = document.getElementById('revenueChart').getContext('2d');
let revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [{
            label: 'Total Débitos',
            data: [1200, 1900, 3000, 1500, 2000, 2400, 2800],
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: false
        }, {
            label: 'Total Créditos',
            data: [1500, 2500, 4000, 2000, 3000, 3500, 4200],
            borderColor: 'rgba(54, 162, 235, 1)',
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});