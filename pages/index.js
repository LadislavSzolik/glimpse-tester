import { useState } from 'react'
import Button from '../components/common/button'
import Progress from '../components/common/progress'
import FormRouter from '../components/propertyFrom/formRouter'
import TypeForm from '../components/propertyFrom/typeFrom'
import LocationForm from '../components/propertyFrom/locationForm'
import GeneralForm from '../components/propertyFrom/generalForm'
import FinancialForm from '../components/propertyFrom/financialForm'
import DayToDayForm from '../components/propertyFrom/dayToDayForm'

const steps = [
  { id: '01', name: 'Type' },
  { id: '02', name: 'Location' },
  { id: '03', name: 'General' },
  { id: '04', name: 'Financial' },
  { id: '05', name: 'Day-to-Day' }
]

export default function Home() {
  const [selected, setSelected] = useState(steps[0])

  const handleSelect = (step) => {
    setSelected(step)
  }

  const handleNext = () => {
    const index = steps.indexOf(selected)
    console.log(index)
    if (index < steps.length - 1) setSelected(steps[index + 1])
  }

  return (
    <div>
      <Progress steps={steps} onSelect={handleSelect} selected={selected} />

      <div className="py-8">
        <FormRouter step={1} selected={selected} component={TypeForm} />
        <FormRouter step={2} selected={selected} component={LocationForm} />
        <FormRouter step={3} selected={selected} component={GeneralForm} />
        <FormRouter step={4} selected={selected} component={FinancialForm} />
        <FormRouter step={5} selected={selected} component={DayToDayForm} />
      </div>
      <Button label="Next" onClick={handleNext} />
    </div>
  )
}
