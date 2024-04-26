import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

  return (
    <nav className="flex justify-between items-center w-[95%] mx-auto">
      <div>
        <Image src="/navicon.png" width={50}
      height={50}
      alt="moon stars"></Image>
      </div>
      <div className="">
          <ul className="flex items-center gap-[4vw]">
            <li>
              <Link className="text-lg font-serif hover:text-pink-500" href="/quotes">Quotes</Link>
            </li>
            <li>
            <Link className="text-lg font-serif hover:text-pink-500" href="/quotes-add">Add Quotes</Link>
            </li>
            <li>
            <Link className="text-lg font-serif hover:text-pink-500" href="/quotes-search">Search</Link>
            </li>
          </ul>
      </div>

    </nav>
  )
}