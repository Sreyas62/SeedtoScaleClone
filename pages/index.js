import Link from "next/link";


export default function Home() {
  return (
  <div className="text-center py-80">
  <Link className="flex w-28 bg-violet-700 px-7 py-2 rounded-3xl text-white mx-auto transition ease-in-out animate-bounce" 
        href='/partners'>
    partners
    </Link>
  </div>   
  )
}
