function HomePage(): JSX.Element {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center text-text-color">
        <div className="flex min-h-full flex-col justify-center px-6 lg:px-8">
          <h1>Hello world</h1>
          <a href="/login">LoginPage</a>
          <a href="/register">RegisterPage</a>
          {localStorage.getItem('access_token')}
          <br />
          {localStorage.getItem('refresh_token')}
        </div>
      </div>
    </>
  )
}

export default HomePage
