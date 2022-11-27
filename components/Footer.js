export default function Footer(){
    return(
        <div className="bg-[#200051] mx-auto px-40 w-full">
            <div className="grid lg:grid-cols-3 pt-10 pb-10 gap-10 border-b-2">
                <div>
                    <img src="/people.png" alt="people" />
                </div>
                <div className="pt-10 text-white">
                    <h1 className="text-2xl">Get the latest insights and news from Accel straight to your inbox</h1>
                    <p>Updates on new launches and latest content</p>
                </div>
                <div>
                    <form>
                        <div className="">
                            <div className="pb-5"> 
                                <input type="email" className="bg-[url('/mailbox.svg')] bg-[#4f317d] bg-no-repeat w-full py-2 bg-left rounded-lg bg-[center_left_1rem]" placeholder="&emsp;&emsp;&emsp;Enter your email address"/>
                            </div>
                            <div className="pb-3">
                                <input type="url" className="bg-[url('/linkedin1.svg')] bg-[#4f317d] bg-no-repeat w-full py-2 bg-left rounded-lg bg-[center_left_1rem]" placeholder="&emsp;&emsp;&emsp;Paste your LinkedIn profile URL"/>
                            </div>
                            <div className="pb-3">
                                <label className="text-white">
                                <input type="checkbox"/>&nbsp;I agree to recieve latest updates and newsletters from Accel
                                </label>
                            </div>
                            <div>
                                <input type="Submit" value="Subscribe" className="py-2 px-10 bg-[#511e9f] rounded-xl text-white"/>
                            </div>
                        </div>
                    </form>
                </div>

            </div>


            <div className="grid lg:grid-cols-5 pt-10 pb-10 gap-2">
                <div className=" pr-10">
                    <a className="cursor-pointer" href="https://www.accel.com/">
                        <img src="/accel.svg" alt="accel" className="scale-50"/>
                    </a>
                    <a className="flex inline pl-12 text-white text-sm cursor-pointer" href="https://www.accel.com/">
                        <div className="pr-3">Visit Website</div>
                        <img src="/arrowright.svg" alt="arrowright" className="transition ease-in-out delay-50 hover:translate-x-2 hover:scale-150"/>
                    </a>
                </div>
                <div>
                    <div>
                        <div className="mb-4 text-[#abb5bf] text-[10px]">COURSES</div>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Consumertech</a>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">SAAS</a>
                    </div>
                    <div>
                        <div className="mb-4 text-[#abb5bf] text-[10px]">COMMUNITY</div>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Events</a>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Deals</a>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Stories</a>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">News</a>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="mb-4 text-[#abb5bf] text-[10px]">COLLECTIONS</div>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Accel + Agritech</a>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Playbooks for SaaS Startups</a>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Building a Healthcare Startup?</a>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Building a people first org structure </a>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Product Growth Famework for Early Stage Startups</a>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Getting started with a SaaS Startup</a>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Stories of First 500 Days of a Consumer Tech Startup</a>

                    </div>
                    <div>
                        <div className="mb-4 text-[#abb5bf] text-[10px]">FOLLOW US ON</div>
                        <div className="grid lg:grid-cols-4">
                            <a><img src="/linkedin2.svg" alt="linkedin2"/></a>
                            <a><img src="/twitter.svg" alt="twitter"/></a>
                            <a><img src="/yt.svg" alt="youtube"/></a>
                            <a><img src="/spotify.svg" alt="spotify"/></a>

                        </div>
                    </div>    
                    
                </div>

                <div>
                    <div>
                        <div className="mb-4 text-[#abb5bf] text-[10px]">Podcast Series</div>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Future X</a>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Insights</a>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Untold Seed Stories</a>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">The Scale Playbook</a>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Grit Stories</a>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="mb-4 text-[#abb5bf] text-[10px]">ABOUT</div>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">About us</a>
                    </div>
                    <div>
                        <div className="mb-4 text-[#abb5bf] text-[10px]">LEGAL</div>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Privacy Policy</a>
                        <a className="block text-[#f4f4f4] text-[12px] mb-4">Terms of Use</a>
                    </div>
                </div>

            </div>
            
        </div>
    )
}