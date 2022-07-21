import React from 'react'
import styled from "styled-components"
import PublishIntro395 from '../Components/PublishPageComponents/PublishIntro395'
import PublishPageClients395 from '../Components/PublishPageComponents/PublishPageClients395'

const PublishPage = () => {
  return (
    <div>
        {/* Intro*/}
        {/* <section>
          Intro
          <p>Build your audience and grow your brand on social media<br/>
            Plan and publish your content for Instagram, TikTok, Facebook, Twitter, Pinterest, and LinkedIn, all from one simple dashboard.</p>
        <button>getStarted</button>
        <video autoPlay loop muted>
            <source />
        </video>
        </section> */}
        <PublishIntro395/>
        {/* Client5 */}
        {/* <section>
            Client
            <h2>imags of logo for display</h2>
            <h3>Craft the perfect post for each social network, all in one place <br/>
           Plan and publish your content for Instagram, Facebook, Twitter, Pinterest, and LinkedIn, all     one simple dashboard.</h3>
<img alt="calendar-image"></img>
        </section> */}
        <PublishPageClients395/>
        {/* Plan and Dashboard */}
        <section>
          <h3>Plan and Dashboard</h3>
        </section>
        {/* {Instagram Section} */}
        <section>
          <h3>Instagram Section</h3>
        </section>
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