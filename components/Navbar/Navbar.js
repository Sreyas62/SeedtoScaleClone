import React, { useState } from "react";

import Logo from "../Logo";
import Link from "next/link";

import Search from "../Search";
import BottomNav from "./BottomNav";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
  <div>
    <nav className="bg-white">
      
      <div className="flex justify-between py-10 relative mx-auto px-5 xl:px-32 max-w-lg;">
        <Logo />

        <ul className="lg:flex hidden items-center inline pt-0 gap-6">
          <li>
            <Link href="/" className="inline-block">
              Content hub
            </Link>
          </li>
          <li>
            <Link href="/" className="inline-block">
              Startup School
            </Link>
          </li>
          <li>
            <Link href="/" className="inline-block">
              Jobs
            </Link>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <a tabIndex={0} className="m-1 flex inline">
                <div>Community</div>
                <div className="pt-1 pl-1">
                  <IoIosArrowDown />
                </div>
              </a>

              <ul className="text-[#825abe] dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60">
                <li>
                  <div className="block">
                    <div className="flex inline">
                      <img className="pr-1" src="/events.svg" alt="events" />
                      <a>Events</a>
                    </div>
                    <div className="pl-7 text-sm">
                      Learn, connect, network with our in-person or online
                      meetings
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block">
                    <div className="flex inline">
                      <img className="pr-1" src="/startup.svg" alt="startup" />
                      <a>Startup Schools</a>
                    </div>
                    <div className="pl-7 text-xs">
                      Explore our unique courses and cohort-based programs for
                      founders at different stages
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block">
                    <div className="flex inline">
                      <img className="pr-1" src="/partner.svg" alt="startup" />
                      <a>Partners Perks</a>
                    </div>
                    <div className="pl-7 text-sm">
                      Companies offering deals and services for community
                      members
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <a tabIndex={0} className="m-1 flex inline">
                <div>About</div>
                <div className="pt-1 pl-1">
                  <IoIosArrowDown />
                </div>
              </a>

              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-[#825abe]">
                <li>
                  <div className="block">
                    <div className="flex inline">
                      <img className="pr-1" src="/events.svg" alt="events" />
                      <a>Story</a>
                    </div>
                    <div className="pl-7 text-sm">
                      SeedToScale’s success lies entirely with the founders who
                      have used it
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block">
                    <div className="flex inline">
                      <img className="pr-1" src="/startup.svg" alt="startup" />
                      <a>People</a>
                    </div>
                    <div className="pl-7 text-sm">
                      Amazing humans of the SeedToScale community
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block">
                    <div className="flex inline">
                      <img className="pr-1" src="/partner.svg" alt="partner" />
                      <a>Testimonials</a>
                    </div>
                    <div className="pl-7 text-sm">
                      Trusted by thousands of entrepreneurs all across the globe
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <div className="flex inline">
          <Search />
          <div>
            <button
              className="scale-150 lg:hidden mb-0 mt-5 py-0 px-5"
              onClick={() => setOpen(!open)}
            >
              <img src="/menu-icon.svg" alt="menu icon " />
            </button>
          </div>
        </div>





        {/*Mobile view*/}
        <ul
          className={`lg:hidden bg-white absolute w-full py-10 pl-4 mt-10 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link href="/" className="pt-5 px-3 inline-block">
              Content hub
            </Link>
          </li>
          <li>
            <Link href="/" className="pt-5 px-3 inline-block">
              Startup School
            </Link>
          </li>
          <li>
            <Link href="/" className="pt-5 px-3 inline-block">
              Jobs
            </Link>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <a
                tabIndex={0}
                className="m-1 flex inline pt-3 px-2 inline-block"
              >
                <div>Community</div>
                <div className="pt-1 pl-1">
                  <IoIosArrowDown />
                </div>
              </a>

              <ul className="text-[#825abe] dropdown-content menu p-2 shadow bg-base-100 rounded-box w-80">
                <li>
                  <div className="block">
                    <div className="flex inline">
                      <img className="pr-1" src="/events.svg" alt="events" />
                      <a>Events</a>
                    </div>
                    <div className="pl-7 text-sm">
                      Learn, connect, network with our in-person or online
                      meetings
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block">
                    <div className="flex inline">
                      <img className="pr-1" src="/startup.svg" alt="startup" />
                      <a>Startup Schools</a>
                    </div>
                    <div className="pl-7 text-xs">
                      Explore our unique courses and cohort-based programs for
                      founders at different stages
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block">
                    <div className="flex inline">
                      <img className="pr-1" src="/partner.svg" alt="startup" />
                      <a>Partners Perks</a>
                    </div>
                    <div className="pl-7 text-sm">
                      Learn, connect, network with our in-person or online
                      meetings
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <a tabIndex={0} className="m-1 flex inline pt-3 px-2 inline-block">
                <div>About</div>
                <div className="pt-1 pl-1">
                  <IoIosArrowDown />
                </div>
              </a>

              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-80 text-[#825abe]">
                <li>
                  <div className="block">
                    <div className="flex inline">
                      <img className="pr-1" src="/events.svg" alt="events" />
                      <a>Story</a>
                    </div>
                    <div className="pl-7 text-sm">
                      SeedToScale’s success lies entirely with the founders who
                      have used it
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block">
                    <div className="flex inline">
                      <img className="pr-1" src="/startup.svg" alt="startup" />
                      <a>People</a>
                    </div>
                    <div className="pl-7 text-sm">
                      Amazing humans of the SeedToScale community
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block">
                    <div className="flex inline">
                      <img className="pr-1" src="/partner.svg" alt="partner" />
                      <a>Testimonials</a>
                    </div>
                    <div className="pl-7 text-sm">
                      Trusted by thousands of entrepreneurs all across the globe
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <BottomNav />
    </nav>
    </div>
  );
}
