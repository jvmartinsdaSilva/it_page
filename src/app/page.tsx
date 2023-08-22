"use client"

import { CompanySection } from "@/components/CompanySection"
import { Header } from "@/components/Header"
import { HomeSection } from "@/components/HomeSection"
import { ServiceSection } from "@/components/ServiceSecetion"
import { SoluctionSecetion } from "@/components/SoluctionsSection"

export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <ServiceSection />
      <CompanySection />
      <SoluctionSecetion />
    </>
  )
}
