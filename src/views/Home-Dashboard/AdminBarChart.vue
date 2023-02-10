<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import axios from 'axios';
export default {
  data() {
    return {
      chart: null,
    };
  },
  methods: {
    renderChart() {
      const ctx = document.getElementById('myChart').getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First Dataset',
              backgroundColor: '#11101d',
              borderColor: '#fff',
              data: [0, 10, 5, 2, 20, 30, 45],
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    },
  },
  mounted() {
    axios.get(`http://localhost:8080/chart`).then(response => {
      this.list = response.data;
      console.log(this.list);
      this.chart.data.datasets[0].data = this.list
      this.chart.update();
    })
    .catch(error => {
      this.errors.push(error);
      console.log(error);
    })
    

    this.renderChart();
  },
  
};
</script>

  