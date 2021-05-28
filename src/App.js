import CurrencyInput from './MaskedInput'
import { Formik, Form } from 'formik';

const convertToNumber = (str) => {
  const [, number] = str.split('R$')
  const withoutSpaces = number.trim()
  const numberWithoutSpaces = withoutSpaces.replaceAll('.', '')
  const numberWithDotInJsFormat = numberWithoutSpaces.replaceAll(',', '.')
  const convertedToNumber = Number(numberWithDotInJsFormat)
  return convertedToNumber;
}

export default function App () {
  return (
    <Formik
      initialValues= {{
        currency: ''
      }}
    >
      {({ values }) => (
        <Form>
          <CurrencyInput name='currency' />
          <button onClick={() => {
            alert(convertToNumber(values?.currency))
          }}>SHOW NUMBER</button>
        </Form>
      )}
    </Formik>
  )
}