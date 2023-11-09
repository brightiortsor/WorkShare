import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "../constants/index";
// import { getCurrentUser } from "@/lib/session";

import AuthProviders from "./AuthProviders";
import Button from "./Button";
// import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = {};

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="logo"
            className="ml-2"
          />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              <p className="text-gray-700 hover:text-gray-50 transition duration-300 ease-in-out cursor-pointer">
                {link.text}
              </p>
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            {/* <ProfileMenu session={session} /> */}
            UserPhoto |
            <Link href="/create-project">
              <Button title="Share work" />
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
