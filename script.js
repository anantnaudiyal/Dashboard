
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
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
              'rgba(255, 206, 86, 0.7)'
            ]
          }
        ]
      };


    
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
  
      

      const ctxBar1 = document.getElementById('barChart1').getContext('2d');
      new Chart(ctxBar1, {
        type: 'bar',
        data: barChartData1,
        options: {
          responsive: true,
          
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 10 
                }
              }
            }
          },
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
          
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 10
                }
              }
            }
          },
          maintainAspectRatio: false,
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
          
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 10 
                }
              }
            }
          },
          maintainAspectRatio: false,
          indexAxis: 'y',
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
  

      const ctxDonut1 = document.getElementById('donutChart1').getContext('2d');
      new Chart(ctxDonut1, {
        type: 'doughnut',
        data: donutChartData1, // Ensure this is defined and structured correctly
        options: {
          responsive: true,
          cutout: '60%',
          plugins: {
            legend: { display: false },
            datalabels: {
              display: function(context) {
                // Always return true, so every slice shows its label
                return true;
              },
              clip: false, // Prevent labels from being clipped by the chart area
              color: '#fff',
              font: {
                weight: 'bold',
                size: 12
              },
              align: 'end',    // Adjust as needed based on your design
              anchor: 'end',   // Adjust as needed
              offset: 10,      // Distance from the doughnut edge
              formatter: function(value, context) {
                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(1);
                const label = context.chart.data.labels[context.dataIndex];
                return `${label}\n${percentage}%`;
              }
            }
          }
        },
        plugins: [ChartDataLabels]
      });

      


            const needlePlugin = {
              id: 'needle',
              afterDraw(chart, args, options) {
                const { ctx } = chart;
                const meta = chart.getDatasetMeta(0);
                const arc = meta.data[0];

                const centerX = arc.x;
                const centerY = arc.y;
                const outerRadius = arc.outerRadius;
                const innerRadius = arc.innerRadius || 0; // Default inner radius if not defined

                // Use chart-specific options
                const currentValue = options.currentValue;
                const maxValue = options.maxValue;
                const angle = (Math.PI * (currentValue / maxValue)) - Math.PI; // Start at -π for left alignment

                // Calculate the outer point (end of the line)
                const outerX = Math.cos(angle) * outerRadius + centerX;
                const outerY = Math.sin(angle) * outerRadius + centerY;

                // Calculate the inner point (start of the line)
                const innerX = Math.cos(angle) * innerRadius + centerX;
                const innerY = Math.sin(angle) * innerRadius + centerY;

                // Draw the needle
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(innerX, innerY); // Start at the inner radius
                ctx.lineTo(outerX, outerY); // Draw to the outer radius
                ctx.lineWidth = 3;
                ctx.strokeStyle = '#000'; // Black color for the needle
                ctx.stroke();
                ctx.restore();
              }
            };


Chart.register(needlePlugin);

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
      legend: { display: false },
      needle: { 
        currentValue: 48,
        maxValue: 180
      }
    }
  }
});

const ctxBar4 = document.getElementById('barChart4').getContext('2d');
      new Chart(ctxBar4, {
        type: 'bar',
        data: barChartData4,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          
          plugins: {
            legend: {
              display: false
            }
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
      legend: { display: false },
      needle: { 
        currentValue: 32,
        maxValue: 180
      }
    }
  }
});

  
     


      
