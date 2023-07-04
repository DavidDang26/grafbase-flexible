import { NavLinks } from "@/constants/"
import Image from "next/image"
import Link from "next/link"
import AuthProvider from "./AuthProvider"

const Navbar = () => {
  const session = null
  return (
    <nav className="flex justify-between items-center px-10 py-3">
      <div className="flex items-center">
        <Link href={"/"} className="mr-5">
          <Image src={"/logo.svg"} alt="Flexible" width={115} height={43} />
        </Link>
        <ul className="xl:flex hidden gap-10">
          {NavLinks.map(link => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div>{session ? (<div>UserProfile</div>) : <AuthProvider />}</div>
    </nav>
  )
}

export default Navbar