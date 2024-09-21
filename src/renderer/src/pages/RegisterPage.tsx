import Logo from '@renderer/components/logo'
import axios from 'axios'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function RegisterPage(): JSX.Element {
  const navigate = useNavigate()

  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password1, setPassword1] = useState('')
  const [formIsValid, setFormIsValid] = useState(true)

  const clearFormAfterError = () => {
    setFormIsValid(false)
    setPassword('')
    setPassword1('')
  }

  const notify = (message: string, isError: boolean) => {
    if (isError) {
      toast.error(message)
    } else {
      toast.success(message)
    }
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password !== password1) {
      notify("Error: passwords don't match", true)
      clearFormAfterError()
      return
    }

    await axios
      .post('http://localhost:8000/api/v1/sign-up/', {
        name: companyName,
        account: {
          email: email,
          password: password
        }
      })
      .then(() => {
        notify("Account was successfully created", false)
        navigate('/login', { replace: true })
      })
      .catch((err) => {
        const errorsArray = err.response.data.errors 

        for (const errorObject of errorsArray) {
          switch(errorObject.code) {
            case 'unique':
              notify("Error: " + errorObject.detail, true)
              break
            case 'min_length':
              notify("Error: password must be at least 8 characters", true)
              break
            default:
              notify("Error: something went wrong", true)
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
              <div>
                <label className="input-label" htmlFor="labeled-input">
                  Company name
                </label>
                <input
                  className={`block input w-full rounded-sm h-8 pl-2 bg-foreground-color border-[0.5px] ${formIsValid ? 'border-border-color' : 'border-border-exception-color'} focus:border-primary-color outline-none`}
                  type="text"
                  id="labeled-input"
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                  required
                />
              </div>
              <div>
                <label className="input-label" htmlFor="labeled-input">
                  Email
                </label>
                <input
                  className={`block input w-full rounded-sm h-8 pl-2 bg-foreground-color border-[0.5px] ${formIsValid ? 'border-border-color' : 'border-border-exception-color'} focus:border-primary-color outline-none`}
                  type="email"
                  id="labeled-input"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <label className="input-label" htmlFor="labeled-input">
                    Password
                  </label>
                  <input
                    className={`block input w-full rounded-sm h-8 pl-2 bg-foreground-color border-[0.5px] ${formIsValid ? 'border-border-color' : 'border-border-exception-color'} focus:border-primary-color outline-none`}
                    type="password"
                    id="labeled-input"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <label className="input-label" htmlFor="labeled-input">
                    Repeat password
                  </label>
                  <input
                    className={`block input w-full rounded-sm h-8 pl-2 bg-foreground-color border-[0.5px] ${formIsValid ? 'border-border-color' : 'border-border-exception-color'} focus:border-primary-color outline-none`}
                    type="password"
                    id="labeled-input"
                    onChange={(e) => setPassword1(e.target.value)}
                    value={password1}
                    required
                  />
                </div>
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
          {/* <ToastContainer /> */}
        </div>
      </div>
    </>
  )
}

export default RegisterPage
