import React from 'react'
import AnalyzeAnswer from '../Components/AnalyzePageComponents/AnalyzeAnswer'
import AnalyzeBanner from '../Components/AnalyzePageComponents/AnalyzeBanner'
import AnalyzeDashboard from '../Components/AnalyzePageComponents/AnalyzeDashboard'
import AnalyzeIcons from '../Components/AnalyzePageComponents/AnalyzeIcons'
import AnalyzeIntro from '../Components/AnalyzePageComponents/AnalyzeIntro'
import AnalyzeMeasure from '../Components/AnalyzePageComponents/AnalyzeMeasure'
import AnalyzeQuote from '../Components/AnalyzePageComponents/AnalyzeQuote'
import AnalyzeReport from '../Components/AnalyzePageComponents/AnalyzeReport'
import AnalyzeStats from '../Components/AnalyzePageComponents/AnalyzeStats'

const AnalyzePage = () => {
  return (
    <div>
      <AnalyzeIntro></AnalyzeIntro>
      <AnalyzeDashboard></AnalyzeDashboard>
      <AnalyzeMeasure></AnalyzeMeasure>
      <AnalyzeIcons></AnalyzeIcons>
      <AnalyzeBanner color="#2C4BFF"></AnalyzeBanner>
      <AnalyzeReport></AnalyzeReport>
      <AnalyzeQuote></AnalyzeQuote>
      <AnalyzeAnswer></AnalyzeAnswer>
      <AnalyzeStats></AnalyzeStats>
      <AnalyzeBanner color="pink.300"></AnalyzeBanner>
    </div>
  )
}

export default AnalyzePage