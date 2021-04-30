import React from 'react'
import QuoteSection from './QuoteSection'
import ContentPreviewSection from './ContentPreviewSection'
import FriendlyOrganisationsSection from './FriendlyOrganisationsSection'
import content from './content/copy'
import MainSlider from './MainSlider'
import ScrollToTop from '../../components/ScrollToTop'

const Home = () => (
  <>
    <ScrollToTop />
    <MainSlider />
    <QuoteSection />
    <ContentPreviewSection content={content[0]} />
    <ContentPreviewSection reversed content={content[1]} />
    <FriendlyOrganisationsSection />
  </>
)

export default Home
