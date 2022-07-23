import React from 'react'
import PublishBlueBanner from '../Components/PublishPageComponents/PublishBlueBanner'
import PublishColab395 from '../Components/PublishPageComponents/PublishColab395'
import PublishIconsSection395 from '../Components/PublishPageComponents/PublishIconsSection395'
import PublishInstaSection395 from '../Components/PublishPageComponents/PublishInstaSection395'
// import styled from "styled-components"
import PublishIntro395 from '../Components/PublishPageComponents/PublishIntro395'
import PublishPageClients395 from '../Components/PublishPageComponents/PublishPageClients395'
import PublishPlanningSection from '../Components/PublishPageComponents/PublishPlanningSection'
import PublishQuote395 from '../Components/PublishPageComponents/PublishQuote395'
import PublishTasks395 from '../Components/PublishPageComponents/PublishTasks395'
import PublishTikTokSection395 from '../Components/PublishPageComponents/PublishTikTokSection395'

const PublishPage = () => {
  return (
    <div>     
        <PublishIntro395/>
        <PublishPageClients395/>
        <PublishInstaSection395/>
        <PublishIconsSection395/>
        <PublishTikTokSection395/>
        <PublishBlueBanner/>
        <PublishColab395/>
        <br /> <br /> 
        <PublishQuote395/>
       <br /> <br />
        <PublishPlanningSection/>
        <PublishTasks395/>
        <PublishBlueBanner/>
    </div>
  )
}

export default PublishPage