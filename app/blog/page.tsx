import { AppleCardsCarouselDemo } from '@/components/AppleCardsCarouselDemo/AppleCardsCarouselDemo'
import { FocusCardsDemo } from '@/components/FocusCardsDemo/FocusCardsDemo'
import FullLayout from '@/components/FullLayout/FullLayout'
import { HeroScrollDemo } from '@/components/HeroScrollDemo/HeroScrollDemo'
import ProductDemo from '@/components/ProductDemo/ProductDemo'
import { TabsDemo } from '@/components/TabsDemo/TabsDemo'
import { WobbleCardDemo } from '@/components/WobbleCardDemo/WobbleCardDemo'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroScrollDemo />
      <FocusCardsDemo/>
      <AppleCardsCarouselDemo />
      <FullLayout />
      <TabsDemo />
      <WobbleCardDemo />
    </div>
  )
}

export default page
