import React from 'react'
import PublishBlueBanner from '../Components/PublishPageComponents/PublishBlueBanner'
import PublishInstaSection395 from '../Components/PublishPageComponents/PublishInstaSection395'
// import styled from "styled-components"
import PublishIntro395 from '../Components/PublishPageComponents/PublishIntro395'
import PublishPageClients395 from '../Components/PublishPageComponents/PublishPageClients395'

const PublishPage = () => {
  return (
    <div>
        {/* Intro*/}
        
        <PublishIntro395/>
        {/* Plan and Dashboard */}
        {/* Client */}
        
        <PublishPageClients395/>
        
        {/* {Instagram Section} */}
        
        <PublishInstaSection395/>
        <PublishBlueBanner/>
        {/* Colab section */}
        <section>
          <h3>Colab Section</h3>
        </section>
         {/* Quote section */}
         <section>
          <h3>Quote Section</h3>
        </section>
         {/* {banner} */}
         <section>
          <h3>Banners 2</h3>
        </section>
    </div>
  )
}

export default PublishPage