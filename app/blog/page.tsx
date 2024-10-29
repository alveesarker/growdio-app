import { AppleCardsCarouselDemo } from '@/components/AppleCardsCarouselDemo/AppleCardsCarouselDemo'
import { FocusCardsDemo } from '@/components/FocusCardsDemo/FocusCardsDemo'
import FullLayout from '@/components/FullLayout/FullLayout'
import { HeroScrollDemo } from '@/components/HeroScrollDemo/HeroScrollDemo'
import ProductDemo from '@/components/ProductDemo/ProductDemo'
import { TabsDemo } from '@/components/TabsDemo/TabsDemo'
import { WobbleCardDemo } from '@/components/WobbleCardDemo/WobbleCardDemo'
import React from 'react'

const page = () => {

  const person = {
    name: "Sabbir Ahmed Probal",
    title: "Hi! I’m Sabbir Ahmed Probal. I’m the COO at Growdio, and I’m here to answer any questions you might have!",
    src: "/images/sabbir.jpg"
  }

  return (
    <div>
      <HeroScrollDemo />
      <FocusCardsDemo/>
      <AppleCardsCarouselDemo />
      <FullLayout />
      <TabsDemo />
      <WobbleCardDemo person={person}/>
    </div>
  )
}

export default page
