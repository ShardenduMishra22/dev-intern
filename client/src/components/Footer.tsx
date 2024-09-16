import React from 'react'
import { Github, Facebook, Youtube, Twitter, Instagram, Copyright } from 'lucide-react';

const Footer = () => {
    return (
        <>

            <div className="min-h-[50vh] ">
                <div className="cont flex flex-wrap   justify-center gap-10 md:justify-evenly mt-36">

                    <div className="flex ml-2 md:ml-0    flex-col  gap-11 items-start">
                        <div className="logo size-8 ">
                            <img src="/devforces.jpeg" alt="logo" />
                        </div>
                        <div className="text-xl w-full  xl:w-[30vw]">
                            Making the world a better place through constructing elegant hierarchies.
                        </div>
                        <div className="social">
                            <div className="flex gap-8">
                                <a href="/a" className='hover:scale-105'><Facebook /></a>
                                <a href="/a" className='hover:scale-105'><Instagram /></a>
                                <a href="/a" className='hover:scale-105'><Twitter /></a>
                                <a href="/a" className='hover:scale-105'><Github /></a>
                                <a href="/a" className='hover:scale-105'><Youtube /></a>
                            </div>

                        </div>
                    </div>

                    <div className=" flex sm:justify-center   ml-5 gap-20 lg:gap-44  flex-wrap ">
                        <div className="flex gap-20 lg:gap-44">
                            <div className="">
                                <h3 className="font-bold">Solutions</h3>
                                <ul role="list" className="flex flex-col gap-8 mt-12 text-[#b1b1b1]">
                                    <li><a href="" className="">Marketing</a></li>
                                    <li><a href="" className="">Analytics</a></li>
                                    <li><a href="" className="">Commerce</a></li>
                                    <li><a href="" className="">Insights</a></li>
                                </ul>
                            </div>
                            <div className="">
                                <h3 className="font-bold">Support</h3>
                                <ul role="list" className="flex flex-col gap-8 mt-12 text-[#b1b1b1]">
                                    <li><a href="" className="">Pricing</a></li>
                                    <li><a href="" className="">Documentation</a></li>
                                    <li><a href="" className="">Guides</a></li>
                                    <li><a href="" className="">API Status</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className=" flex mr-11 md:mr-0  gap-20 lg:gap-44">
                            <div className="">
                                <h3 className="font-bold">Company</h3>
                                <ul role="list" className="flex flex-col gap-8 mt-12 text-[#b1b1b1]">
                                    <li><a href="" className="">About</a></li>
                                    <li><a href="" className="">Blog</a></li>
                                    <li><a href="" className="">Jobs</a></li>
                                    <li><a href="" className="">Press</a></li>
                                </ul>
                            </div>
                            <div className="">
                                <h3 className="font-bold">Legal</h3>
                                <ul role="list" className="flex flex-col gap-8 mt-12 text-[#b1b1b1]">
                                    <li><a href="" className="">Claim</a></li>
                                    <li><a href="" className="">Privacy</a></li>
                                    <li><a href="" className="">Terms</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center  items-center mt-20">

                    <div className="border  border-[#ece3e377] w-[90vw] ">

                    </div>
                </div>
                <div className="flex lg:ml-24 justify-center  lg:justify-start items-center ">
                    <div className=" mt-5 text-[#908f8f]">
                        © 2020 Your Company, Inc. All rights reserved.
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer
