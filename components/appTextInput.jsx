import { useField } from 'formik'

import FormError from './formError'

const TextField = ({
  label,
  className,
  icon: Icon,
  isOptional = false,
  ...props
}) => {
  const [field, meta] = useField(props)

  let inputStyle = [
    'focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md',
    Icon && 'pl-10'
  ].join(' ')

  return (
    <div className={className}>
      <div className="flex justify-between">
        <label
          className="block text-sm font-medium text-gray-500"
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
        {isOptional && (
          <span className="text-sm text-gray-400" id="email-optional">
            Optional
          </span>
        )}
      </div>
      <div className="mt-1 relative rounded-md shadow-sm">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
        )}
        <input className={inputStyle} {...field} {...props} />
      </div>
      {meta.touched && meta.error ? <FormError error={meta.error} /> : null}
    </div>
  )
}

export default TextField
