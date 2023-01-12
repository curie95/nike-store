import React from 'react'
import heroimg from "./assets/hero.png";
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI} from './data/data.js'
import './index.css'
import { Cart, Hero, Sales, FlexContent, Stories, Footer, Navbar} from './components';

const App = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
    <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker}/>
        <Stories story={story}/>
        </main>
      <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App
