import { InfiniteMovingCardsDemo } from '@/components/AutoScrollDemo/AutoScrollDemo'
import { GridBackgroundDemo } from '@/components/Background/Background'
import { CardDemo } from '@/components/CardDemo/CardDemo'
import ClientReview from '@/components/ClientReview/ClientReview'
import Compare from '@/components/Compare/Compare'
import { HeroParallaxDemo } from '@/components/HeroParallaxDemo/HeroParallaxDemo'
import HowHelp from '@/components/HowHelp/HowHelp'
import { PlaceholdersAndVanishInputDemo } from '@/components/PlaceholdersAndVanishInputDemo/PlaceholdersAndVanishInputDemo'
import ProductDemo from '@/components/ProductDemo/ProductDemo'
import Counting from "@/components/Counting/Counting"
import React from 'react'
import { WobbleCardDemo } from '@/components/WobbleCardDemo/WobbleCardDemo'

const HomePage = () => {
  return (
    <div>
      <GridBackgroundDemo />
      <InfiniteMovingCardsDemo />
      {/* <DirectionAwareHoverDemo/> */}
      <Counting/>
      <HowHelp />
      <PlaceholdersAndVanishInputDemo />
      <ProductDemo />
      <Compare />
      <ClientReview />
      <HeroParallaxDemo />
      <WobbleCardDemo/>
    </div>
  )
}

export default HomePage
