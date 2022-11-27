export default function Banner(){
    return(
            
                <div>
                <div className="hidden lg:inline">
                    <img src="/banner.svg" alt="banner" className="float-right"/>
                    <div className="pt-20 pb-20 px-10 xl:px-36 bg-[#f6f3fa]">

                    <h1 className="text-5xl font-['serif'] font-bold">Partner Perks</h1><br/>
                    <h1 className="text-[#20005199]">Companies offering deals and services for community members</h1>
                    
                    </div>
                </div>
                {/*Mobile view */}
                <div className="bg-[url('/banner.svg')] lg:hidden bg-purple-50 w-full h-28 sm:pb-5 py-1 px-10 bg-no-repeat bg-right">
            
                <h1 className="text-3xl mt-5">Partner Perks</h1>
                <p className="">Companies offering deals and services for community members</p>
            
                </div>
                </div>

                
        
    )
}