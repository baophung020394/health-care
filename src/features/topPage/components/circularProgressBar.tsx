import React from 'react'

interface CircleProgressbarProps {
  percentage: number
  circleWidth: number
}

const CircleProgressbar: React.FC<CircleProgressbarProps> = ({ percentage, circleWidth }) => {
  const radius = circleWidth / 2 - 3 // Giảm 3px để làm cho nó không bị cắt
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * percentage) / 100

  return (
    <div className='parent-layer'>
      <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
        <circle cx={circleWidth / 2} cy={circleWidth / 2} strokeWidth='3px' r={radius} className='circle-background' />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth='5px'
          r={radius}
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          className='circle-progress'
        />
        <text x='50%' y='50%' textAnchor='middle' className='circle-text'>
          <tspan dy='0.7em'>05/21</tspan>
          <tspan dy='0.1em' dx='0.2em'>
            {percentage}%
          </tspan>
        </text>
      </svg>
    </div>
  )
}

export default CircleProgressbar
