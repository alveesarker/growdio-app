import BackgroundContact from '@/components/BackgroundContact/BackgroundContact'
import Collaborate from '@/components/Collaborate/Collaborate'
import FindUs from '@/components/FindUs/FindUs'
import { LinkPreviewDemo } from '@/components/LinkPreviewDemo/LinkPreviewDemo'
import SendMail from '@/components/SendMail/SendMail'
import { WobbleCardDemo } from '@/components/WobbleCardDemo/WobbleCardDemo'
import React from 'react'

const page = () => {

  const person = {
    name: "Mehedi Hasan Emon",
    title: "Hi! Mehedi Hasan Emon. I’m the COO at Growdio, and I’m here to answer any questions you might have!",
    src: "/images/mehedi_hasan.jpg"
  }

  return (
    <main>
      <BackgroundContact />
      <SendMail />
      <Collaborate/>
      <FindUs />
      <LinkPreviewDemo />
      <WobbleCardDemo person={person}/>
    </main>
  )
}

export default page
