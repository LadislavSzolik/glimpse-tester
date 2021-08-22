import { Form, Formik } from 'formik'
import React, { useState } from 'react'

import Button from './common/button'
import Secondary from './common/secondary'
import Progress from './common/progress'

const Wizard = ({ children, initialValues, onSubmit, stepLabels }) => {
  const [stepNumber, setStepNumber] = useState(0)
  const steps = React.Children.toArray(children)
  const [snapshot, setSnapshot] = useState(initialValues)

  const step = steps[stepNumber]

  const totalSteps = steps.length
  const isLastStep = stepNumber === totalSteps - 1

  const next = (values) => {
    setSnapshot(values)
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1))
  }

  const previous = (values) => {
    setSnapshot(values)
    setStepNumber(Math.max(stepNumber - 1, 0))
  }

  const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag)
    }

    if (isLastStep) {
      return onSubmit(values, bag)
    } else {
      bag.setTouched({})
      next(values)
    }
  }

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form>
          <Progress
            stepLabels={stepLabels}
            currentStep={stepNumber}
            totalSteps={totalSteps}
          />

          <div className="my-8">{step}</div>

          <div className="flex gap-5">
            {stepNumber > 0 && (
              <Secondary onClick={() => previous(formik.values)} label="Back" />
            )}
            <Button
              type="submit"
              disabled={formik.isSubmitting}
              label={isLastStep ? 'Submit' : 'Next'}
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Wizard
