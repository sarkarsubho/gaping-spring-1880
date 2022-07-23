import { border, Box,Button } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import Card659 from './Card659';


const CardNav659 = () => {

    const [card, setcard] = useState("small");

  return (
    <Box>
      <Button
        onClick={() => {
          setcard("small");
        }}
        bgColor="white"
        _hover={"white"}
      >

        Small business
      </Button>
      <Button
        onClick={() => {
          setcard("coach");
        }}
        bgColor="white"
        _hover={"white"}
      >
        Coach
      </Button>
      <Button
        onClick={() => {
          setcard("music");
        }}
        bgColor="white"
        _hover={"white"}
      >
        Music
      </Button>
      <Button
        onClick={() => {
          setcard("photo");
        }}
        bgColor="white"
        _hover={"white"}
      >
        Photograph
      </Button>
      <Button
        onClick={() => {
          setcard("wedding");
        }}
        bgColor="white"
        _hover={"white"}
      >
        Wedding
      </Button>
      <Button
        onClick={() => {
          setcard("nft");
        }}
        bgColor="white"
        _hover={"white"}
      >
        NFT
      </Button>
      <Button
        onClick={() => {
          setcard("pet");
        }}
        bgColor="white"
        _hover={"white"}
      >
        Pet
      </Button>
      <Button
        onClick={() => {
          setcard("links");
        }}
        bgColor="white"
        _hover={"white"}
      >
        Links
      </Button>
      <Box transition="ease-in-out">
        {card == "small" && (
          <Card659
            head="Start selling online, 100% free"
            txt="With Start Page, you can create a completely free microsite to start selling your products and services. Stay in touch with your customers by adding your WhatsApp or any other messaging platform."
            imglink="https://static.buffer.com/cdn-cgi/image/w=3840,quality=90,format=auto/marketing/static/start-page/navigation/Small-business-1.png"
          />
        )}
        {card == "coach" && (
          <Card659
            head="Build a coaching website you can’t stop showing off"
            txt="Create a beautiful page for your coaching business, Zero code or design skills required. All for free!"
            imglink="https://static.buffer.com/cdn-cgi/image/w=3840,quality=90,format=auto/marketing/static/start-page/navigation/Coach-1.png"
          />
        )}
        {card == "music" && (
          <Card659
            head="Drive more fans to your music and live shows"
            txt="Create a beautiful page for your fans to buy your music, merch, and gig tickets. All for free!"
            imglink="https://static.buffer.com/cdn-cgi/image/w=3840,quality=90,format=auto/marketing/static/start-page/navigation/Music-1.png"
          />
        )}
        {card == "photo" && (
          <Card659
            head="Create a microsite that acts as your online photo gallery"
            txt="Showcase your photography, sell your prints, and make it easy for your audience to book photo shoots, all through your unique link in bio."
            imglink="https://static.buffer.com/cdn-cgi/image/w=3840,quality=90,format=auto/marketing/static/start-page/navigation/Photographer-1.png"
          />
        )}
        {card == "wedding" && (
          <Card659
            head="Create your free wedding website in minutes"
            txt="Give the special people in your life a beautiful online experience leading up to your special day. All for free!"
            imglink="https://static.buffer.com/cdn-cgi/image/w=3840,quality=90,format=auto/marketing/static/start-page/navigation/Wedding-1.png"
          />
        )}
        {card == "nft" && (
          <Card659
            head="Stand out among the NFT crowd"
            txt="Create a beautiful page to delight your community, show off your NFT collection, and increase your NFT sales. All for free!"
            imglink="https://static.buffer.com/cdn-cgi/image/w=3840,quality=90,format=auto/marketing/static/start-page/navigation/NFT-1.png"
          />
        )}
        {card == "pet" && (
          <Card659
            head="Give your pet the internet-attention that they deserve"
            txt="You can use Start Page to share important details about your pet or really anything else that your furry, fuzzy, scaly, or hairy friend might want shared online as they either climb to internet-stardome or just make someone’s day a bit better purely by existing."
            imglink="https://static.buffer.com/cdn-cgi/image/w=3840,quality=90,format=auto/marketing/static/start-page/navigation/Pet-1.png"
          />
        )}
        {card == "links" && (
          <Card659
            head="A one link for all your links"
            txt="Easily drive more traffic from Instagram, TikTok, YouTube, or wherever else to your most valuable links and content. All for free!"
            imglink="https://static.buffer.com/cdn-cgi/image/w=3840,quality=90,format=auto/marketing/static/start-page/navigation/Links-1.png"
          />
        )}
      </Box>
    </Box>
  );
}

export default CardNav659