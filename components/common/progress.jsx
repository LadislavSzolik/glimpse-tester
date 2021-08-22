import React from 'react'
import ProgressStep from './progressStep'
import _ from 'lodash'

const Progress = ({ stepLabels, currentStep, totalSteps }) => {
  const steps = _.range(1, totalSteps + 1)
  return (
    <nav aria-label="Progress">
      <ol
        role="list"
        className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0"
      >
        {steps.map((step) => (
          <ProgressStep
            key={step}
            stepNumber={step}
            label={stepLabels[step - 1]}
            current={currentStep === step - 1}
            completed={step - 1 < currentStep}
            last={totalSteps - 1 === step - 1}
          />
        ))}
      </ol>
    </nav>
  )
}

export default Progress
