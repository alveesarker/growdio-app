import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import Button from '../Button/Button'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center gap-2'>
            <div className='w-full flex items-center justify-center mt-40 borderfooter'>
                <div className='max-w-[80rem] w-[80%] flex md:flex-row flex-col items-start gap-12 md:gap-0 justify-between flex-wrap py-20'>
                    <div className='md:w-[38%] w-full h-full flex flex-col items-start gap-10 md:pr-8'>
                        <img src="/images/growdio.png" className='h-20' alt="" />
                        <p className='text-white'>we are dedicated to building functional, intuitive, and user-friendly digital solutions to shape our tomorrows.</p>
                        <div className='flex flex-col items-start gap-8'>
                            <Button />
                            <div className='flex items-center gap-5'>
                                <Link href='https://www.facebook.com/growdio' target='_black'>
                                    <FaFacebookF className='text-white hover:text-blue-500 transition-all h-6 w-6 cursor-pointer' />
                                </Link>
                                <Link href='https://www.instagram.com/team.growdio/' target='_black'>
                                    <FaInstagram className='text-white hover:text-pink-500 transition-all h-6 w-6 cursor-pointer' />
                                </Link>
                                <Link href='https://www.linkedin.com/company/growdio/posts/?feedView=all' target='_black'>
                                    <FaLinkedinIn className='text-white hover:text-blue-400 transition-all h-6 w-6 cursor-pointer' />
                                </Link>
                                <Link href=''>
                                    <FaBehance className='text-white h-6 hover:text-blue-600 transition-all w-6 cursor-pointer' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[20%] w-full flex flex-col items-start gap-2'>
                        <h3 className='text-white mb-3 text-[20px] font-semibold'>Quick Link</h3>
                        <Link href='/' className='text-neutral-300 hover:text-white transition-all'>Home</Link>
                        <Link href='/about-us' className='text-neutral-300 hover:text-white transition-all'>About</Link>
                        <Link href='/contact-us' className='text-neutral-300 hover:text-white transition-all'>Contact</Link>
                        <Link href='/blog' className='text-neutral-300 hover:text-white transition-all'>Blog</Link>
                        <Link href='/learn-more' className='text-neutral-300 hover:text-white transition-all'>Learn More</Link>
                    </div>
                    <div className='md:w-[20%] w-full flex flex-col items-start gap-2'>
                        <h3 className='text-white mb-3 text-[20px] font-semibold'>Resources</h3>
                        <Link href='/creative-design' className='text-neutral-300 hover:text-white transition-all'>Creative Design</Link>
                        <Link href='/page-management' className='text-neutral-300 hover:text-white transition-all'>Page Management</Link>
                        <Link href='/campaign-setup' className='text-neutral-300 hover:text-white transition-all'>Campaign Setup</Link>
                        <Link href='/video-editing' className='text-neutral-300 hover:text-white transition-all'>Video Editing</Link>
                        <Link href='/web-design' className='text-neutral-300 hover:text-white transition-all'>Web Desing</Link>
                        <Link href='/motion-design' className='text-neutral-300 hover:text-white transition-all'>Motion Design</Link>
                        <Link href='/reels-editing' className='text-neutral-300 hover:text-white transition-all'>Reels Editing</Link>
                        <Link href='/photography' className='text-neutral-300 hover:text-white transition-all'>Photography</Link>
                    </div>
                    <div className='md:w-[20%] w-full flex flex-col items-start gap-2'>
                        <h3 className='text-white mb-3 text-[20px] font-semibold'>Location</h3>
                    </div>
                </div>
            </div>
            <p className=' text-[13px] text-neutral-400 mb-3 '>© All rights reserved by Growdio</p>
        </div>
    )
}

export default Footer