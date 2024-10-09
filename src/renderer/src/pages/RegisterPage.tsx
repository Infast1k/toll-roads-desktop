import InputField from '@renderer/components/input_field'
import Logo from '@renderer/components/logo'
import notify from '@renderer/utils/notifyer'
import axios from 'axios'
import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPage: React.FC = () => {
  const navigate = useNavigate()

  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password1, setPassword1] = useState('')
  const [formIsValid, setFormIsValid] = useState(true)

  const clearFormAfterError = (): void => {
    setFormIsValid(false)
    setPassword('')
    setPassword1('')
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    if (password !== password1) {
      notify("Error: passwords don't match", true)
      clearFormAfterError()
      return
    }

    await axios
      .post('http://localhost:8000/api/v1/auth/sign-up/', {
        name: companyName,
        account: {
          email: email,
          password: password
        }
      })
      .then(() => {
        notify('Account was successfully created', false)
        navigate('/login', { replace: true })
      })
      .catch((err) => {
        const errorsArray = err.response.data.errors

        for (const errorObject of errorsArray) {
          switch (errorObject.code) {
            case 'unique':
              notify('Error: ' + errorObject.detail, true)
              break
            case 'min_length':
              notify('Error: password must be at least 8 characters', true)
              break
            default:
              notify('Error: something went wrong', true)
              break
          }
        }

        clearFormAfterError()
      })
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center text-text-color">
        <div className="flex min-h-full flex-col justify-center px-6 lg:px-8">
          <div className="py-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <Logo height={100} width={100} />
            <h1 className="mb-7 text-center text-3xl font-medium">Sign up an account</h1>
            <form className="space-y-4" onSubmit={onSubmit}>
              <InputField
                label="Company name"
                type="text"
                value={companyName}
                setValue={setCompanyName}
                formIsValid={formIsValid}
              />
              <InputField
                label="Email"
                type="email"
                value={email}
                setValue={setEmail}
                formIsValid={formIsValid}
              />
              <div className="flex flex-col gap-2">
                <InputField
                  label="Password"
                  type="password"
                  value={password}
                  setValue={setPassword}
                  formIsValid={formIsValid}
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputField
                  label="Password"
                  type="password"
                  value={password1}
                  setValue={setPassword1}
                  formIsValid={formIsValid}
                />
              </div>
              <div className="pt-6">
                <button
                  className="button text-base md:text-sm bg-primary-color hover:bg-primary-hover-color w-full h-8 rounded-sm transition ease-linear"
                  type="submit"
                >
                  Sign up
                </button>
              </div>
            </form>
            <div className="my-3 leading-6 font-medium text-sm">
              <p className="text-center text-muted">
                Already have an account?&nbsp;
                <a
                  href="/login"
                  className="text-primary-color hover:text-primary-hover-color transition ease-linear"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
