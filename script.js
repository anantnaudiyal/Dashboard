//Sample data for charts
      const barChartData1 = {
        labels: ['prod1', 'prod2', 'prod3', 'prod4', 'prod5'],
        datasets: [
          {
            label: 'Sales (in k USD)',
            data: [220, 130, 180, 160, 190],
            backgroundColor: [
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(153, 102, 255, 0.7)',
            ]
          }
        ]
      };

      const barChartData2 = {
        labels: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
        datasets: [
          {
            label: 'Receivable Days',
            data: [1320, 1728, 1285, 1527, 1320, 1229, 1700, 1100, 1400, 1300, 1900, 1000],
            backgroundColor: [
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
              'rgba(255, 206, 86, 0.7)','rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
              'rgba(255, 206, 86, 0.7)'
            ]
          }
        ]
      };


    // Bar Chart 3: Sales by Product/Category (Actual vs Target)
    const barChartData3 = {
      labels: ['Product A', 'Product B', 'Product C', 'Product D'],
      datasets: [
        {
          label: 'Actual',
          data: [120, 150, 180, 100],
          backgroundColor: 'rgba(54, 162, 235, 0.7)'
        },
        {
          label: 'Target',
          data: [150, 120, 160, 120],
          backgroundColor: 'rgba(128, 128, 128, 0.7)'
        },
        
      ]
    };


  
      // Donut Chart: Sales by Channel
      const donutChartData1 = {
        labels: ['North', 'South', 'East', 'West'],
        datasets: [
          {
            data: [425, 206, 145, 510, 300],
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(0, 86, 144, 0.7)',
              'rgba(255, 185, 7, 0.7)',
              'rgba(99, 255, 99, 0.7)',
              'rgba(235, 54, 54, 0.7)',
            ]
          }
        ]
      };

      const donutChartData2 = {
        labels: ['North', 'South', 'East', 'West'],
        datasets: [
          {
            label: 'Sales by Channel',
            data: [33.3, 33.3, 33.3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)'
            ]
          }
        ]
      };

      // Bar Chart 4: Receivable Days Outstanding
      const barChartData4 = {
        labels: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
        datasets: [
          {
            data: [5,49,2,6,-30,30,-15,-5,26,22,-4,7,-21],
            backgroundColor: [
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
              'rgba(255, 206, 86, 0.7)'
            ]
          }
        ],
        
      };

      const donutChartData3 = {
        labels: ['North', 'South', 'East',],
        datasets: [
          {
            label: 'Sales by Channel',
            data: [33.3,33.3,33.3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)'
            ]
          }
        ]
      };
  
      
  
      // Create Chart Instances
      const ctxBar1 = document.getElementById('barChart1').getContext('2d');
      new Chart(ctxBar1, {
        type: 'bar',
        data: barChartData1,
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
  
      const ctxBar2 = document.getElementById('barChart2').getContext('2d');
      new Chart(ctxBar2, {
        type: 'bar',
        data: barChartData2,
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });

      const ctxBar3 = document.getElementById('barChart3').getContext('2d');
      new Chart(ctxBar3, {
        type: 'bar',
        data: barChartData3,
        options: {
          responsive: true,
          indexAxis: 'y',
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
  
      const ctxDonut1 = document.getElementById('donutChart1').getContext('2d');
      new Chart(ctxDonut1, {
        type: 'doughnut',
        data: donutChartData1,
        options: {
          responsive: true,
          cutout: '60%',
          plugins: {
            legend: {
              display: false // Disable legend to remove labels
            },
          }
        }
      });

      const ctxDonut2 = document.getElementById('donutChart2').getContext('2d');
      new Chart(ctxDonut2, {
        type: 'doughnut',
        data: donutChartData2,
        options: {
          responsive: true,
          cutout: '50%',
          circumference: 180,
          rotation: -90,
          plugins: {
            legend: {
              display: false // Disable legend to remove labels
            },
          }
        }
      });
  
      

      const ctxBar4 = document.getElementById('barChart4').getContext('2d');
      new Chart(ctxBar4, {
        type: 'bar',
        data: barChartData4,
        options: {
          
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          },
          plugins: {
            legend: {
              display: false 
            },
          }
        }
      });

      const ctxDonut3 = document.getElementById('donutChart3').getContext('2d');
      new Chart(ctxDonut3, {
        type: 'doughnut',
        data: donutChartData3,
        options: {
          responsive: true,
          cutout: '50%',
          circumference: 180,
          rotation: -90,
          plugins: {
            legend: {
              display: false 
            },
          }
        }
      });
  
     


