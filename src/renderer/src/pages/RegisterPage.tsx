import Logo from '@renderer/components/logo'

function LoginPage(): JSX.Element {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center text-text-color">
        <div className="flex min-h-full flex-col justify-center px-6 lg:px-8">
          <div className="py-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <Logo height={100} width={100} />
            <h1 className="mb-7 text-center text-3xl font-medium">Sign up an account</h1>
            <form className="space-y-4">
              <div>
                <label className="input-label" htmlFor="labeled-input">
                  Email
                </label>
                <input
                  className="block input w-full rounded-sm h-8 pl-2 bg-foreground-color border-[0.5px] border-border-color focus:border-primary-color outline-none"
                  type="email"
                  id="labeled-input"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <label className="input-label" htmlFor="labeled-input">
                    Password
                  </label>
                  <input
                    className="block input w-full rounded-sm h-8 pl-2 bg-foreground-color border-[0.5px] border-border-color focus:border-primary-color outline-none"
                    type="password"
                    id="labeled-input"
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
                    className="block input w-full rounded-sm h-8 pl-2 bg-foreground-color border-[0.5px] border-border-color focus:border-primary-color outline-none"
                    type="password"
                    id="labeled-input"
                    required
                  />
                </div>
              </div>
              <div className="pt-6">
                <button className="button text-base md:text-sm bg-primary-color hover:bg-primary-hover-color w-full h-8 rounded-sm transition ease-linear">
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

export default LoginPage
