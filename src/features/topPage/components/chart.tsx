import { faker } from '@faker-js/faker'
import { Box } from '@mui/material'
import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  // maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    }
  },
  scales: {
    x: {
      grid: {
        color: '#777'
      },
      ticks: {
        font: {
          size: 8
        },
        color: '#fff'
      }
    },
    y: {
      display: false,
      grid: {
        drawOnChartArea: false, // Ẩn lưới trên trục x
        color: '#FF0000'
      }
    }
  }
}

const labels = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: '#8FE9D0', // Màu cho cột Dataset 1
      borderColor: '#8FE9D0',
      borderWidth: 1
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: '#FFCC21', // Màu cho cột Dataset 2
      borderColor: '#FFCC21',
      borderWidth: 1
    }
  ]
}

const Chart: React.FC = () => {
  return (
    <Box className='chart-container'>
      <Line options={options} data={data} />
    </Box>
  )
}

export default Chart
