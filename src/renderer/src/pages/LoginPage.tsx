import Logo from '@renderer/components/logo'
import axios from 'axios'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage(): JSX.Element {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formIsValid, setFormIsValid] = useState(true)

  const handleFormError = () => {
    setFormIsValid(false)
    setPassword('')
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    axios
      .post('http://localhost:8000/api/v1/sign-in/', {
        email: email,
        password: password
      })
      .then((response) => {
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('refresh_token', response.data.refresh_token)

        navigate('/', { replace: true })
      })
      .catch((err) => {
        // TODO: handle errors
        console.error(err)
        handleFormError()
      })
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center text-text-color">
        <div className="flex min-h-full flex-col justify-center px-6 lg:px-8">
          <div className="py-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <Logo height={100} width={100} />
            <h1 className="mb-7 text-center text-3xl font-medium">Sign in to account</h1>
            <form className="space-y-4" onSubmit={onSubmit}>
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
                <a
                  href="#"
                  className="w-max ml-auto font-medium text-sm text-primary-color hover:text-primary-hover-color transition ease-linear"
                >
                  Forgot password?
                </a>
              </div>
              <div className="pt-3">
                <button className="button text-base md:text-sm bg-primary-color hover:bg-primary-hover-color w-full h-8 rounded-sm transition ease-linear">
                  Sign in
                </button>
              </div>
            </form>
            <div className="my-3 leading-6 font-medium text-sm">
              <p className="text-center text-muted">
                Don&apos;t have an account?&nbsp;
                <a
                  href="/register"
                  className="text-primary-color hover:text-primary-hover-color transition ease-linear"
                >
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
