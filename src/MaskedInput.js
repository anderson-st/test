import { useField } from 'formik'
import React from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
    prefix: 'R$ ',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2,
    integerLimit: 7,
    allowNegative: false,
    allowLeadingZeroes: false
}

const MaskedInputComp = ({ maskOptions, ...props }) => {
    const currencyMask = createNumberMask({
        ...defaultMaskOptions,
        ...maskOptions
    })

    const [inputProps, meta] = useField(props)
    const id = props.id || props.name

    // erros and toucheds are inside 'meta'
    return (
        <MaskedInput 
            id={id}
            placeholder='R$ 12,00' 
            {...inputProps}
            {...props} 
            mask={currencyMask}
        />
    )
}

export default MaskedInputComp