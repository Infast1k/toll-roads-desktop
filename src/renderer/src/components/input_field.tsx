import React from 'react'

interface Props {
  label: string
  type: string
  formIsValid: boolean
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> = ({ label, type, formIsValid, value, setValue }) => {
  return (
    <div>
      <label className="input-label" htmlFor="labeled-input">
        {label}
      </label>
      <input
        className={`block input w-full rounded-sm h-8 pl-2 bg-foreground-color border-[0.5px] ${formIsValid ? 'border-border-color' : 'border-border-exception-color'} focus:border-primary-color outline-none`}
        type={type}
        id="labeled-input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        required
      />
    </div>
  )
}

export default InputField
