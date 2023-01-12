import Image from "next/image"
import Link from "next/link"


function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div className="flex items-center space-x-2 ">
                <Link href="/">
                    <img
                        src="https://res.cloudinary.com/newztrakerapplication/image/upload/v1671436983/pwmbz5fpzai1bifyvsxn.jpg"
                        width={50}
                        className="rounded-full"
                        height={50}
                        alt="logo" />
                </Link>
                <h1 className="text-[#fff]">LetzRead</h1>
            </div>
            <div>
                <Link
                    href="/"
                    className="px-5 py-3 text-sm md:text-base text-gray-900 bg-[#F7AB0A] flex items-center rounded-full text-center ">
                    Posts
                </Link>
            </div>
        </header>
    )
}

export default Header