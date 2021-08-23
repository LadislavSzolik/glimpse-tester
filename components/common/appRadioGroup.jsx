import React from 'react'
import { RadioGroup } from '@headlessui/react'
import { useField } from 'formik'

import FormError from '../formError'

import { House, Apartment } from '../icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const AppRadioGroup = ({ name, items }) => {
  const [field, meta, helpers] = useField(name)

  const { value } = meta
  const { setValue } = helpers

  return (
    <div className="my-8">
      <RadioGroup className="flex" value={value} onChange={setValue}>
        {items.map((item, itemIdx) => (
          <RadioGroup.Option
            value={item.name}
            key={item.name}
            className={({ checked }) =>
              classNames(
                itemIdx === 0 ? 'rounded-tl-md rounded-bl-md' : '',
                itemIdx === items.length - 1
                  ? 'rounded-tr-md rounded-br-md'
                  : '',
                checked
                  ? 'bg-indigo-50 border-indigo-200 z-10'
                  : 'border-gray-200',
                'relative border p-4 flex cursor-pointer focus:outline-none'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={classNames(
                    checked
                      ? 'bg-indigo-600 border-transparent'
                      : 'bg-white border-gray-300',
                    active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                    'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <div className="ml-3 flex flex-row items-center">
                  {item.icon && item.icon('h-6 w-6 text-gray-400 mr-2')}
                  <RadioGroup.Label
                    as="span"
                    className={classNames(
                      checked ? 'text-indigo-900' : 'text-gray-900',
                      'block font-medium'
                    )}
                  >
                    {item.name}
                  </RadioGroup.Label>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
      {meta.touched && meta.error ? <FormError error={meta.error} /> : null}
    </div>
  )
}

export default AppRadioGroup
