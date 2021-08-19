import React from 'react'
import ProgressStep from './progressStep'

const Progress = ({ steps, onSelect, selected }) => {
  return (
    <nav aria-label="Progress">
      <ol
        role="list"
        className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0"
      >
        {steps.map((step, stepIdx) => (
          <ProgressStep
            key={step.name}
            step={step}
            onSelect={onSelect}
            selected={selected}
            isLast={stepIdx !== steps.length - 1}
          />
        ))}
      </ol>
    </nav>
  )
}

export default Progress
