import { InfiniteMovingCardsDemo } from '@/components/AutoScrollDemo/AutoScrollDemo'
import { GridBackgroundDemo } from '@/components/Background/Background'
import ClientReview from '@/components/ClientReview/ClientReview'
import Compare from '@/components/Compare/Compare'
import { HeroParallaxDemo } from '@/components/HeroParallaxDemo/HeroParallaxDemo'
import HowHelp from '@/components/HowHelp/HowHelp'
import { PlaceholdersAndVanishInputDemo } from '@/components/PlaceholdersAndVanishInputDemo/PlaceholdersAndVanishInputDemo'
import ProductDemo from '@/components/ProductDemo/ProductDemo'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <GridBackgroundDemo/>
      <InfiniteMovingCardsDemo/>
      {/* <DirectionAwareHoverDemo/> */}
      <HeroParallaxDemo/>
      <PlaceholdersAndVanishInputDemo/>
      <ProductDemo/>
      <HowHelp/>
      <Compare/>
      <ClientReview/>
    </div>
  )
}

export default HomePage
