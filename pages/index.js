import AppRadioGroup from '../components/common/appRadioGroup'
import Header1 from '../components/common/header1'
import * as yup from 'yup'

import Wizard from '../components/wizard'
import FormikValue from '../components/formikValue'
import AppTextInput from '../components/appTextInput'

import { Lightbulb, Bed, Straighten } from '../components/icons'

const steps = ['Type', 'Location', 'General', 'Financial', 'Day-to-Day']
const types = [{ name: 'House' }, { name: 'Apartment' }, { name: 'Studio' }]

const WizardStep = ({ children }) => children

export default function Home() {
  return (
    <>
      <Wizard
        initialValues={{
          propertyType: '',
          street: '',
          houseNumber: '',
          postCode: '',
          city: '',
          country: '',
          constructionYear: '',
          surface: '',
          bedrooms: '',
          energyLabel: ''
        }}
        onSubmit={async (values) =>
          sleep(300).then(() => console.log('Wizard submit', values))
        }
        stepLabels={steps}
      >
        {/* STEP 1*/}
        <WizardStep
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={yup.object({
            propertyType: yup.string().required().label('Property type')
          })}
        >
          <Header1>The property is a...</Header1>
          <AppRadioGroup name="propertyType" items={types} />
        </WizardStep>

        {/* STEP 2*/}
        <WizardStep
          onSubmit={() => console.log('Step2 onSubmit')}
          validationSchema={yup.object({
            street: yup.string().required().label('Street'),
            houseNumber: yup.number().required().label('House number'),
            postCode: yup.number().required().label('Postcode'),
            city: yup.string().required().label('City'),
            country: yup.string().required().label('Country')
          })}
        >
          <Header1>
            The <FormikValue valueOf="propertyType" /> is located at...
          </Header1>
          <div className="my-10 max-w-3xl grid gap-4 grid-cols-6">
            <AppTextInput
              className="col-span-4"
              label="Street"
              name="street"
              type="text"
            />
            <AppTextInput
              className="col-span-2"
              label="House number"
              name="houseNumber"
              type="number"
            />
            <AppTextInput
              className="col-span-3"
              label="Postcode"
              name="postCode"
              type="number"
            />
            <AppTextInput
              className="col-span-3"
              label="City"
              name="city"
              type="text"
            />
            <AppTextInput
              className="col-span-3"
              label="Country"
              name="country"
              type="text"
            />
          </div>
        </WizardStep>

        {/* STEP 3*/}
        <WizardStep
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={yup.object({
            constructionYear: yup
              .date()
              .min(1800)
              .required()
              .label('Construction year'),
            surface: yup.number().min(0).required().label('Surface'),
            bedrooms: yup
              .number()
              .min(0)
              .required()
              .label('Number of bedrooms'),
            energyLabel: yup.string().required().label('Surface')
          })}
        >
          <Header1>General information</Header1>

          <div className="my-10 max-w-3xl grid gap-4 grid-cols-6">
            <AppTextInput
              className="col-span-3"
              label="Construction year"
              name="constructionYear"
              type="date"
            />
            <AppTextInput
              icon={Straighten}
              className="col-span-3"
              label="Sufrace in m2"
              name="surface"
              type="number"
            />
            <AppTextInput
              icon={Bed}
              className="col-span-3"
              label="Number of bedrooms"
              name="bedrooms"
              type="number"
            />
            <AppTextInput
              icon={Lightbulb}
              className="col-span-3"
              label="Energy label"
              name="energyLabel"
              type="text"
            />
          </div>
        </WizardStep>

        {/* STEP 4*/}
        <WizardStep
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={yup.object({
            acquireDate: yup.date().min(1800).required().label('Acquired on'),
            pruchasePrice: yup
              .number()
              .min(0)
              .required()
              .label('Purchase price'),
            closingCosts: yup.number().min(0).required().label('Closing costs'),
            transactionTaxes: yup
              .number()
              .required()
              .label('Transaction taxes'),
            renovationCosts: yup.string().required().label('Rennovation costs')
          })}
        >
          <Header1>Purchase information</Header1>

          <div className="my-10 max-w-3xl grid gap-4 grid-cols-6">
            <AppTextInput
              className="col-span-3"
              label="Acquired on"
              name="acquireDate"
              type="date"
            />
            <AppTextInput
              className="col-start-1 col-span-3"
              label="Purchase price"
              name="pruchasePrice"
              type="number"
            />
            <AppTextInput
              className="col-span-3"
              label="Sufrace in m2"
              name="closingCosts"
              type="number"
            />
            <AppTextInput
              className="col-span-3"
              label="Transaction taxes"
              name="transactionTaxes"
              type="number"
            />
            <AppTextInput
              className="col-span-3"
              label="Rennovation costs"
              name="renovationCosts"
              type="number"
            />
          </div>
        </WizardStep>
      </Wizard>
    </>
  )
}
