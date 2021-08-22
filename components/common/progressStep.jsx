import React from 'react'
import { CheckIcon } from '@heroicons/react/solid'

const ProgressStep = ({ stepNumber, label, current, completed, last }) => {
  const getNameClasses = () => {
    let className = 'ml-4 text-sm font-medium '
    if (completed) className += 'text-gray-90'
    else if (current) className += 'text-indigo-600'
    else className += 'text-gray-500 group-hover:text-gray-900'
    return className
  }

  const getIdClasses = () => {
    if (current) return 'text-indigo-600'
    else return 'text-gray-500 group-hover:text-gray-900'
  }

  const getIdContainerClasses = () => {
    let className = 'flex-shrink-0 w-10 h-10 flex items-center justify-center '

    if (completed)
      className += 'bg-indigo-600 rounded-full group-hover:bg-indigo-800'
    else if (current) className += 'border-2 border-indigo-600 rounded-full'
    else
      className +=
        'border-2 border-gray-300 rounded-full group-hover:border-gray-400'
    return className
  }

  return (
    <li className="relative md:flex-1 md:flex">
      <div>
        <span className="px-6 py-4 flex items-center text-sm font-medium">
          <span className={getIdContainerClasses()}>
            {completed ? (
              <CheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
            ) : (
              <span className={getIdClasses()}>{stepNumber}</span>
            )}
          </span>
          <span className={getNameClasses()}>{label}</span>
        </span>
      </div>
      {!last && (
        <div
          className="hidden md:block absolute top-0 right-0 h-full w-5"
          aria-hidden="true"
        >
          <svg
            className="h-full w-full text-gray-300"
            viewBox="0 0 22 80"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 -2L20 40L0 82"
              vectorEffect="non-scaling-stroke"
              stroke="currentcolor"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </li>
  )
}

export default ProgressStep
