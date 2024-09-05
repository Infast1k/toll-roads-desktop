import logo from '@renderer/assets/logo.svg'

interface LogoProps {
  height: number
  width: number
}

function Logo({ height, width }: LogoProps): JSX.Element {
  return (
    <div className="flex justify-center pb-10">
      <img alt="logo" src={logo} height={height} width={width} />
    </div>
  )
}

export default Logo
