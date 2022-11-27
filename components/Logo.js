import Link from "next/link";


export default function Logo() {
    return(
        <div className="scale-75 lg:scale-100 relative z-50 mt-2 md:w-auto px-0 lg:px-5">
            <Link href="/">
            <img className="relative" src="/logo.svg" alt="logo"/>
            </Link>
            
        </div>       
    )
};