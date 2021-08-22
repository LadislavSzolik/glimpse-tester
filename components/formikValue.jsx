import { useFormikContext } from 'formik'

const FormikValue = ({ valueOf }) => {
  const { values } = useFormikContext()
  if (!values[valueOf]) return null
  return values[valueOf]
}

export default FormikValue
