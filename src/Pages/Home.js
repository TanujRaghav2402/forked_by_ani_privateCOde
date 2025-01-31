/** @format */

import React from "react";
import Cities from "../Components/HomePageComponents/Cities";
import FormHome from "../Components/HomePageComponents/form";
import WhyChoose from "../Components/HomePageComponents/WhyChoose";
import StarCarousel from "../Components/HomePageComponents/Carousel";
import SpacesAvailable from "../Components/HomePageComponents/Spaces";
import SearchBar from "../Components/HomePageComponents/SearchBar";
import styled from "styled-components";
import FeaturedSection from "../Components/HomePageComponents/featured";
import DeveloperSlider from "../Components/HomePageComponents/DeveloperSlider";
import OurServices from "../Components/HomePageComponents/ourServices";
import { useProductContext } from "../Context/productContext";
import SimilarCarousel from "../Components/HomePageComponents/SimiliarCarousel";
import { Helmet } from "react-helmet";
import Search from "../anirudh_comps/Search";

function Home() {
  const {
    PreLaunchProperties,
    isPreLaunchLoading,
    getPreLaunchProducts,
    PreLuanchFeatProperties,
    PreLuanchSimilarProperties,
  } = useProductContext();

  console.log(PreLuanchSimilarProperties);
  return (
    <Wrapper className='section'>
      <Helmet>
        <meta
          name='description'
          content='100acress.com Gurgaon Fastest Growing Property Website, Buy Residential &amp; Commercial Property in Gurgaon. Flats in Gurgaon. Real Estate in Gurgaon'
        />
        <title>
          Property in Gurgaon, Buy Sell Property in India, Real Estate -
          100acress.com
        </title>
      </Helmet>
      <div
        style={{
          height: "70vh",
          width: "100%",
          // paddingTop: "16rem", // to adjust the height of SearchBar
          paddingTop: "2rem", // to update once done
          boxSizing: "border-box",
        }}
        className='djqwUUJNCO'>
        <SearchBar />
        {/*<Search />*/}
      </div>
      <div
        className='xjUWI'
        style={{
          fontSize: "xx-large",
          margin: "30px 60px",
          fontWeight: "600",
        }}>
        Trending Properties
      </div>
      <StarCarousel />
      <div
        className='xjUWI'
        style={{
          fontSize: "xx-large",
          margin: "20px 60px",
          fontWeight: "600",
        }}>
        Similar Properties You Viewed
      </div>
      <SimilarCarousel />
      <SpacesAvailable />
      <div
        className='xjUWI'
        style={{
          fontSize: "xx-large",
          margin: "20px 60px",
          fontWeight: "600",
        }}>
        Featured Projects
      </div>
      <FeaturedSection />
      <Cities />
      <div
        className='xjUWI'
        style={{
          fontSize: "xx-large",
          margin: "30px 60px",
          fontWeight: "600",
        }}>
        Projects You May find Interesting
      </div>
      <StarCarousel />
      <FormHome />
      <div
        className='xjUWI'
        style={{
          fontSize: "xx-large",
          margin: "30px 60px 0px 60px",
          fontWeight: "600",
        }}>
        Services We Offer
      </div>
      <OurServices />
      <WhyChoose />
      <div
        className='xjUWI'
        style={{
          fontSize: "xx-large",
          margin: "20px 60px 0px 60px",
          fontWeight: "600",
        }}>
        Our Partners
      </div>
      <div
        className='xjUWI'
        style={{
          fontSize: "medium",
          margin: "0px 60px 30px 60px",
          fontWeight: "500",
        }}>
        We are working with Top Builders and Developers across India
      </div>
      <DeveloperSlider />
      <div>
        <div>
          <a
            href='https://api.whatsapp.com/send?phone=9811750130'
            class='dd-m-whatsapp'
            target='_blank'>
            <span class='icon'></span>
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
const Wrapper = styled.section`
  .dd-m-whatsapp {
    position: fixed;
    z-index: 999;
    bottom: 40px;
    right: 10px;
    width: 55px;
    height: 55px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background-color: #25d366;
    -webkit-transition: 0.3s all ease;
    -o-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;
    transition: 0.3s all ease;
    cursor: pointer;
    text-decoration: none;
    color: #25d366;
  }

  .dd-m-whatsapp:hover {
    -webkit-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    -o-transform: translateY(-5px);
    transform: translateY(-5px);
    -webkit-box-shadow: 0 5px 15px 2px rgba(37, 211, 102, 0.3);
    -moz-box-shadow: 0 5px 15px 2px rgba(37, 211, 102, 0.3);
    box-shadow: 0 5px 15px 2px rgba(37, 211, 102, 0.3);
  }

  .dd-m-whatsapp .icon {
    width: 50%;
    height: 50%;
    display: block;
    fill: #fff;
    -webkit-transform: translateX(1px);
    -moz-transform: translateX(1px);
    -ms-transform: translateX(1px);
    -o-transform: translateX(1px);
    transform: translateX(1px);
  }

  .dd-m-whatsapp .icon {
    width: 70%;
    height: 70%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 39 39'%3E%3Cpath d='M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z' fill='%2325d366'/%3E%3Cpath d='M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z' fill='%23fff'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }
  @media screen and (max-width: 600px) {
    .xjUWI {
      font-size: x-large;
      margin: 30px 30px !important;
    }
    .djqwUUJNCO {
      height: 60vh !important;
      background-image: url("../../Images/Capture2Mobile.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: left;
    }
  }
  @media screen and (max-width: 1800px) and (min-width: 601px) {
    .djqwUUJNCO {
      background-image: url("../../Images/Capture1.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;
// capture 1 is at home
