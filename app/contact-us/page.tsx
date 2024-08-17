import BackgroundContact from '@/components/BackgroundContact/BackgroundContact'
import FindUs from '@/components/FindUs/FindUs'
import { LinkPreviewDemo } from '@/components/LinkPreviewDemo/LinkPreviewDemo'
import SendMail from '@/components/SendMail/SendMail'
import { WobbleCardDemo } from '@/components/WobbleCardDemo/WobbleCardDemo'
import React from 'react'

const page = () => {
  return (
    <main>
      <BackgroundContact/>
      <SendMail/>
      <FindUs/>
      <LinkPreviewDemo/>
      <WobbleCardDemo/>
    </main>
  )
}

export default page
