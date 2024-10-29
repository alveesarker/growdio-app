import { GridBackgroundDemo } from '@/components/BackgroundAbout/BackgroundAbout'
import Compare from '@/components/Compare/Compare'
import DiscoverWork from '@/components/DiscoverWork/DiscoverWork'
import OurServices from '@/components/OurServices/OurServices'
import { SparklesPreview } from '@/components/SparklesPreview/SparklesPreview'
import WeAccept from '@/components/WeAccept/WeAccept'
import { WobbleCardDemo } from '@/components/WobbleCardDemo/WobbleCardDemo'
import FindUs from '@/components/FindUs/FindUs'
import React from 'react'
import { GlobeDemo } from '@/components/GlobeDemo/GlobeDemo'
import { TextGenerateEffectDemo } from '@/components/TextGenerateEffectDemo/TextGenerateEffectDemo'
import Value from '@/components/Value/Value'
import WorkedWith from '@/components/WorkedWith/WorkedWith'
import Uniqueness from '@/components/Uniqueness/Uniqueness'

const About = () => {

  const person = {
    name: "Sabbir Ahmed Probal",
    title: "Hi! I’m Sabbir Ahmed Probal. I’m the COO at Growdio, and I’m here to answer any questions you might have!",
    src: "/images/sabbir.jpg"
  }

  return (
    <main>
      <div>
        <GridBackgroundDemo />
        <Value />
        {/* <DiscoverWork /> */}
        <Uniqueness />
        {/* <OurServices /> */}
        <SparklesPreview />
        <Compare />
        <WorkedWith />
        <FindUs />
        {/* <WeAccept/> */}
        <GlobeDemo />
        <WobbleCardDemo person={person}/>
      </div>
    </main>
  )
}

export default About
