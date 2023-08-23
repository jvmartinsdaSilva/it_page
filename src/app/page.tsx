"use client"

import { CompanySection } from "@/components/CompanySection"
import { Header } from "@/components/Header"
import { HomeSection } from "@/components/HomeSection"
import { ImgContainer } from "@/components/ImageContainer"
import { NewsSection } from "@/components/NewsSections"
import { ProductSection } from "@/components/ProductSection"
import { SectionTestimonials } from "@/components/SectionTestimonials"
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
      <ImgContainer heigth="300" img="/image2.jpg"/>
      <ProductSection />
      <SectionTestimonials />
      <NewsSection />
    </>
  )
}
