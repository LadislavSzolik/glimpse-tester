import { useState } from 'react';
import * as yup from 'yup';

import AppRadioGroup from '../components/common/appRadioGroup';
import Header1 from '../components/common/header1';
import Header2 from '../components/common/header2';
import AppSwitch from '../components/common/appSwitch';
import Description from '../components/description';
import Wizard from '../components/wizard';
import FormikValue from '../components/formikValue';
import AppTextInput from '../components/appTextInput';

import { Lightbulb, Bed, Straighten, House, Apartment } from '../components/icons';
import { useField, useFormikContext } from 'formik';

import _ from 'lodash';
import Header3 from '../components/common/header3';

const steps = ['Type', 'Location', 'General', 'Financial', 'Day-to-Day'];
const types = [
  { name: 'House', icon: (className) => <House className={className} /> },
  {
    name: 'Apartment',
    icon: (className) => <Apartment className={className} />,
  },
  { name: 'Studio', icon: (className) => <Bed className={className} /> },
];

const WizardStep = ({ children }) => children;

const TotalPropertyPrice = () => {
  const { values } = useFormikContext();
  const total = _.sum([
    values.pruchasePrice,
    values.closingCosts,
    values.transactionTaxes,
    values.renovationCosts,
  ]);

  return <Description label="Total price" value={total ? total : '0'} />;
};

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
          energyLabel: '',
          acquireDate: '',
          pruchasePrice: '',
          closingCosts: '',
          transactionTaxes: '',
          renovationCosts: '',
          addLoan: '',
          downPayment: '',
          loanAmount: '',
          loanAnnualInterestRate: '',
          loanStartDate: '',
          loanTerm: '',
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
            propertyType: yup.string().required().label('Property type'),
          })}
        >
          <Header1>The property is a(n)...</Header1>
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
            country: yup.string().required().label('Country'),
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
            <AppTextInput className="col-span-3" label="City" name="city" type="text" />
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
            constructionYear: yup.date().min(1800).required().label('Construction year'),
            surface: yup.number().min(0).required().label('Surface'),
            bedrooms: yup.number().min(0).required().label('Number of bedrooms'),
            energyLabel: yup.string().required().label('Surface'),
          })}
        >
          <Header1>
            <FormikValue valueOf="street" /> <FormikValue valueOf="houseNumber" />,{' '}
            <FormikValue valueOf="city" /> - General information
          </Header1>

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
            acquireDate: yup.date().required().label('Acquired on'),
            pruchasePrice: yup.number().required().label('Purchase price'),
            closingCosts: yup.number().min(0).label('Closing costs'),
            transactionTaxes: yup.number().label('Transaction taxes'),
            renovationCosts: yup.string().label('Rennovation costs'),
            addLoan: yup.boolean(),
            downPayment: yup
              .number()
              .label('Down payment')
              .when('addLoan', { is: true, then: yup.number().required() }),
            loanAmount: yup.number().required().label('Loan Amount'),
            loanAnnualInterestRate: yup.number().required().label('Annual interest rate'),
            loanStartDate: yup.date().required().label('Loan start'),
            loanTerm: yup.number().required().label('Loan term'),
          })}
        >
          <Header1>
            <FormikValue valueOf="street" /> <FormikValue valueOf="houseNumber" />,{' '}
            <FormikValue valueOf="city" /> - Purchase information
          </Header1>

          <div className="my-10 max-w-3xl grid gap-4 grid-cols-6">
            <AppTextInput
              className="col-span-3"
              label="Acquired on"
              name="acquireDate"
              type="date"
            />
            <Header2 className="col-span-6 mt-5">Price breakdown</Header2>

            <AppTextInput
              className="col-start-1 col-span-3"
              label="Purchase price"
              name="pruchasePrice"
              type="number"
            />
            <AppTextInput
              isOptional
              className="col-span-3"
              label="Closing costs"
              name="closingCosts"
              type="number"
            />
            <AppTextInput
              isOptional
              className="col-span-3"
              label="Transaction taxes"
              name="transactionTaxes"
              type="number"
            />
            <AppTextInput
              isOptional
              className="col-span-3"
              label="Rennovation costs"
              name="renovationCosts"
              type="number"
            />

            <TotalPropertyPrice />

            <Header2 className="col-span-6 mt-5">Property financing</Header2>

            <FormSwitch
              name="addLoan"
              className="col-span-6"
              label="Property is financed with loan"
            />

            <FormLoanInput />
          </div>
        </WizardStep>
      </Wizard>
    </>
  );
}

const FormSwitch = ({ className, label, name }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;
  return (
    <AppSwitch value={value} onChange={setValue} className={className} label={label} />
  );
};

const FormLoanInput = () => {
  const formik = useFormikContext();

  if (!formik.values.addLoan) return null;

  return (
    <>
      <Header3 className="col-span-6 mt-5">Down payment</Header3>
      <AppTextInput
        className="col-span-3"
        label="Down payment"
        name="downPayment"
        type="number"
      />
      <Header3 className="col-span-6 mt-5">Loan information</Header3>
      <AppTextInput
        className="col-span-3"
        label="Loan amount"
        name="loanAmount"
        type="number"
      />
      <AppTextInput
        className="col-span-3"
        label="Annual interest rate"
        name="loanAnnualInterestRate"
        type="number"
      />
      <AppTextInput
        className="col-span-3"
        label="Loan start date"
        name="loanStartDate"
        type="date"
      />
      <AppTextInput
        className="col-span-3"
        label="Loan start date"
        name="loanTerm"
        type="number"
      />
    </>
  );
};
