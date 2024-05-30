import Image from "next/image"
import Link from "next/link"


const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href={"/"} className="flex items-center">
        <Image 
          src={`/logo.svg`}
          height={36.94}
          width={54.13}
          alt="logo"
          className="mr-[9.7px]"
        />
        <h1 className="text-primary font-sixHundrend text-twentyTwo italic">Viral</h1>
      </Link>
    </header>
  )
}

export default Header