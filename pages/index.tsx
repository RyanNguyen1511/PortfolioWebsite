

import Head from 'next/head'
import {AiFillLinkedin,AiOutlineGithub } from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {SiPostgresql,SiSelenium,SiApachejmeter,SiPython,SiJava,SiAndroidstudio,SiFirebase,SiGooglecolab,SiJirasoftware,SiConfluence,SiOpencv,SiKeras,SiDjango, SiMysql,SiJupyter,SiIntellijidea} from 'react-icons/si';
import {ImEmbed2} from 'react-icons/im';
import {GiArtificialIntelligence} from 'react-icons/gi';
import {IoLogoHtml5,IoLogoCss3,IoLogoJavascript,IoLogoPython} from 'react-icons/io';
import Image from "next/image";
import tuandev from '../public/TuanAvatar.png';
import bp1 from '../public/bp1.png';
import bp2 from '../public/bp2.png';
import bp3 from '../public/bp3.png';
import ML1 from '../public/ML1.png';
import ML2 from '../public/ML2.png';
import ML3 from '../public/ML3.png';
import PE1 from '../public/PE1.png';
import PE2 from '../public/PE2.png';
import PE3 from '../public/PE3.png';
import LI1 from '../public/logit1.png';
import LI3 from '../public/logit3.png';
import ST1 from '../public/ST1.png';
import ST2 from '../public/ST2.png';
import ST3 from '../public/ST3.png';
import SL1 from '../public/SL1.png';
import SL2 from '../public/SL2.png';
import SL3 from '../public/SL3.png';
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';




export default function Home() {
  const parallax = useRef<IParallax>(null!);
  const ref =useRef();
  

  return (
    <div>
      <Head>
        <title>Tuan Nguyen Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet"></link>
        
        {/* <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script> */}
      </Head>

      <main className="bg-white">
          
          <Parallax ref={parallax} pages={11}>
          <ParallaxLayer sticky={{start:2, end:6}} style={{
            display: 'flex',
            marginLeft:'50px',
            }} >
              <div>
                <h2 className=" phone:text-4xl lg:text-8xl font-semibold text-gray-700 text-opacity-20 absolute mt-9
                ">PROJECTS</h2>
              </div>
          </ParallaxLayer>
          <ParallaxLayer sticky={{start:7, end:7}} style={{
            display: 'flex',
            marginLeft:'50px',
            }}>
            <div>
              <h2 className=" phone:text-4xl lg:text-8xl font-semibold text-gray-700 text-opacity-20 absolute mt-9
                ">EXPERIENCE</h2>
            </div>
          </ParallaxLayer>
          <ParallaxLayer sticky={{start:8, end:9}} style={{
            display: 'flex',
            marginLeft:'50px',
            }}>
            <div>
              <h2 className=" phone:text-4xl lg:text-8xl font-semibold text-gray-700 text-opacity-20 absolute mt-9
                ">EDUCATION</h2>
            </div>
          </ParallaxLayer>
          {/* PAGE 1 : MAIN */}
          <ParallaxLayer offset ={0} >
          <section id="main" className="min-h-screen px-5 grid content-center">
            {/* <nav className="sticky py-10 mb-12 flex justify-between"> 
              <h1 className="text-xl font-burtons"> <a href="#main">TUANPORTFOLIO</a> </h1>
              <ul className="items-center phone:hidden lg:flex">
                <li className="text-xl text-gray-800 font-arcuta px-2">
                <a href="#AboutMe" > 
                  <span className="link link-underline link-underline-black text-black">
                    About
                  </span> 
                </a> 
                </li>
                <li className="text-xl text-gray-800 font-arcuta px-2">
                  <a href="#Projects">
                    <span className="link link-underline link-underline-black text-black">
                      Project
                    </span>
                  </a> 
                </li>
                <li className="text-xl text-gray-800 font-arcuta px-2">
                  <a href="#Experience">
                    <span className="link link-underline link-underline-black text-black">
                      Experience
                    </span>
                  </a> 
                </li>
                <li className="text-xl text-gray-800 font-arcuta px-2">
                  <a href="#Education">
                    <span className="link link-underline link-underline-black text-black">
                      Other 
                    </span>
                    
                  </a> 
                </li>
              </ul>
            </nav> */}
            <div className="text-center p-10" >
              <h2 id="MainTextName" className="text-8xl py-8 text-gray-800 font-vegan"
              data-aos = "fade-up"
              data-aos-duration = "1000"
              data-aos-easing="ease-in-sine"
              data-aos-mirror="true"
              data-aos-delay="100" >Tuan Nguyen</h2>
              <h3 className=" text-4xl py-5 font-arcuta"
              data-aos = "fade-up"
              data-aos-duration = "1000"
              data-aos-easing ="ease-in-sine" 
              data-aos-delay = "200"
              >Software Developer and Tester</h3>
              
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600"  data-aos = "fade-up"
              data-aos-duration = "1000"
              data-aos-easing="ease-in-sine"
              data-aos-mirror="true"
              data-aos-delay="300">

              <a href="https://www.linkedin.com/in/tuann1511/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>

              <a  href="https://github.com/RyanNguyen1511" target="_blank" rel="noopener noreferrer"><AiOutlineGithub/></a>
              
              <a  href="https://drive.google.com/file/d/1we8YNxJSYLvny98GNfrRoIZtnn-_KY-D/view?usp=sharing" target="_blank" rel="noopener noreferrer"><CgProfile/></a>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-emerald-500 to-cyan-400 rounded-full w-32 h-32 overflow-hidden my-6"  data-aos = "fade-up"
              data-aos-duration = "1000"
              data-aos-easing="ease-in-sine"
              data-aos-mirror="true"
              data-aos-delay="400">
              <Image src={tuandev} alt='TuanNguyen'/>
            </div>

          </section>
          </ParallaxLayer>
          {/* PAGE 2 : ABOUT ME */}
          <ParallaxLayer offset ={1} >
          <section id="AboutMe" className="min-h-screen px-5">
            <div className="flex h-screen">
              
              <div className="my-auto">
              <ParallaxLayer offset ={-1} horizontal speed={-0.55} style={{
                    display: 'flex',
                    alignItems: 'center',
                  }} >
              <h2 className=" phone:text-9xl lg:text-10xl text py-1 font-semibold text-gray-700 text-opacity-20 absolute
              " >
                ABOUT ME
              </h2>
              </ParallaxLayer>
              <p className="phone:text-xl lg:text-4xl phone:pl-9 lg:pl-80 phone:pr-9 lg:pr-36 font-confortaa text-gray-600">
              Software developer who have enthusiasm for coding and testing software. With a serious passionate about new technologies and commit with lifelong learning.
              </p>
              </div>

            </div>
          </section>
          </ParallaxLayer>
          {/* PAGE 3 : Flight Hub Web scraping*/}
          <ParallaxLayer offset ={2}>
          <section id = "Projects" className="min-h-screen min-w-screen text-gray-700 px-5">
            <div className="flex h-screen">

              {/* 3 Text illustration section */}
              <ParallaxLayer offset={0} horizontal speed ={0.5} style={{ 
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}>
              <div className="my-auto w-10/12 pl-50%">
                <h2 className="phone:text-4xl lg:text-6xl text font-bold font-arcuta " >
                  FlightHub Web scraping
                  </h2>
                <h3 className='phone:text-lg lg:text-2xl py-4 font-arcuta'
                  data-aos = "zoom-in-up"
                  data-aos-offset = "100"
                  data-aos-duration = "1000"
                  data-aos-delay ="200"> Selenium <span className="px-4">●</span> Java <span className="px-4">●</span> Intellij</h3>         
                <ul className="phone:text-base lg:text-xl list-outside list-disc font-confortaa "
                  data-aos = "zoom-in-up"
                  data-aos-offset = "100"
                  data-aos-duration = "1000"
                  data-aos-delay ="300">
                  <li className="py-2">The FlightHub Web Scraping Project aims to collect data on flight prices, schedules, and availability from the FlightHub website. 
                  </li>
                  <li className="py-2">
                  This project will involve developing a web scraping script to automatically extract the necessary information from the FlightHub website and store it in a structured format for further analysis.
                  </li>
                  <li className="py-2">This project using Selenium and Java as the main  framework and programming language.
                  </li>
                </ul>
                <div className="text-4xl flex gap-16 py-3 text-gray-600"
                data-aos = "zoom-in-up"
                data-aos-offset = "100"
                data-aos-duration = "1000"
                data-aos-delay ="400">
                  <SiSelenium/>
                  <SiJava/>
                  <SiIntellijidea/>
                </div>
              </div>

              </ParallaxLayer>
              {/* 3 Image illustration section */}
              <div className='mt-32 ml-24 flex w-6/12 lg:inline phone:hidden'>
                
                  <ParallaxLayer offset={0} speed={0.2}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop :'450px',
                    marginLeft: "55%",
                    
                  }} 
                  >

                  <div className="mt-24 absolute object-none object-left-top mx-auto">
                    <Image src={SL3} alt='TuanNguyen' />
                  </div>
                  </ParallaxLayer>

                  <ParallaxLayer offset={0} speed={0.35}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop :'450px',
                    marginLeft: "53%",
                    
                  }}>
                  <div className="mt-52 ml-24 absolute  object-none object-center mx-auto">
                    <Image src={SL1} alt='TuanNguyen' />
                  </div>
                  </ParallaxLayer>
                  <ParallaxLayer offset={0} speed={0.25}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop :'450px',
                    marginLeft: "56%", 
                  }}>
                  <div className=" mt-52 ml-72 absolute object-none object-right-bottom mx-auto bg-gradient-to-b w-auto h-auto overflow-hidden my-6">
                    <Image src={SL2} alt='TuanNguyen' />
                  </div>
                  </ParallaxLayer>

              </div>
            </div>
          </section>
          </ParallaxLayer>
          {/* PAGE 4 : BLOOD PRESSURE*/}
          <ParallaxLayer offset ={3}>
          <section id = "Projects" className="min-h-screen min-w-screen text-gray-700 px-5">
            <div className="flex h-screen">

              {/* 3 Text illustration section */}
              <ParallaxLayer offset={1} horizontal speed ={1.03} style={{ 
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}>
              <div className="my-auto w-10/12 pl-50%">
                <h2 className="phone:text-4xl lg:text-6xl text font-bold font-arcuta " >
                  Blood Tracker 
                  </h2>
                <h3 className='phone:text-lg lg:text-2xl py-4 font-arcuta'
                  data-aos = "zoom-in-up"
                  data-aos-offset = "100"
                  data-aos-duration = "1000"
                  data-aos-delay ="200"> Android development <span className="px-4">●</span> Database </h3>
                <ul className="phone:text-base lg:text-xl list-outside list-disc font-confortaa "
                  data-aos = "zoom-in-up"
                  data-aos-offset = "100"
                  data-aos-duration = "1000"
                  data-aos-delay ="300">
                  <li className="py-2">Develop an app to let users to input, modify and tracking their Blood pressure.
                  </li>
                  <li className="py-2">
                  Built options to filter listing by criteria such as record in periods, maximum, average data.
                  </li>
                  <li className="py-2">Visualize the Data with graph chart and adjust the representation by modifying the criteria of
                  data.
                  </li>
                </ul>
                <div className="text-4xl flex gap-16 py-3 text-gray-600"
                data-aos = "zoom-in-up"
                data-aos-offset = "100"
                data-aos-duration = "1000"
                data-aos-delay ="400">
                  <SiAndroidstudio/>
                  <SiJava/>
                  <SiFirebase/>
                </div>
              </div>

              </ParallaxLayer>
              {/* 3 Image illustration section */}
              <div className='mt-32 ml-24 flex w-6/12 lg:inline phone:hidden'>
                
                  <ParallaxLayer offset={0} speed={0.2}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop :'550px',
                    marginLeft: "55%",
                    
                  }} 
                  >

                  <div className="mt-24 absolute object-none object-left-top mx-auto">
                    <Image src={bp3} alt='TuanNguyen' />
                  </div>
                  </ParallaxLayer>

                  <ParallaxLayer offset={0} speed={0.35}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop :'950px',
                    marginLeft: "53%",
                    
                  }}>
                  <div className="mt-24 ml-60 absolute  object-none object-center mx-auto">
                    <Image src={bp2} alt='TuanNguyen' />
                  </div>
                  </ParallaxLayer>
                  <ParallaxLayer offset={0} speed={0.25}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop :'550px',
                    marginLeft: "56%", 
                  }}>
                  <div className=" mt-52 ml-96 absolute object-none object-right-bottom mx-auto bg-gradient-to-b w-auto h-auto overflow-hidden my-6">
                    <Image src={bp1} alt='TuanNguyen' />
                  </div>
                  </ParallaxLayer>

              </div>
            </div>
          </section>
          </ParallaxLayer>

          {/* PAGE 5 : MACHINE LEARNING */}
          <ParallaxLayer offset={4}>
          <section className="min-h-screen text-gray-700 px-5">

            <div className="flex h-screen">

              <ParallaxLayer offset={2} horizontal speed ={1.55} style={{ 
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}>
              {/* 4 Text illustration section */}
              <div className="my-auto w-10/12 pl-50%">
                <h2 className="phone:text-2xl lg:text-6xl text font-bold font-arcuta "
                > Miami Housing Data Analysis </h2>
                <h3 className='phone:text-lg lg:text-2xl py-4 font-arcuta'> Machine Learning  <span className="px-4">●</span> Data Analysis  </h3>
                <ul className="phone:text-sm lg:text-xl list-outside list-disc font-confortaa ">
                  <li className="py-2">Clean, transform and explore the data set with visualizing, PCA and decision before using Machine Learning algorithms.
                  </li>
                  <li className="py-2">
                  Using Random Forest, AdaBoost, GradientBoost and Multi-layer Perceptron and other ML algorithm to find the best fit model with dataset.
                  </li>
                  <li className="py-2">Implement A/B Testing and hyperparameter turning to search for the ideal model architecture.
                  </li>
                </ul>
                <div className="text-4xl flex gap-16 py-3 text-gray-600"
                data-aos = "zoom-in-up"
                data-aos-offset = "100"
                data-aos-duration = "1000"
                data-aos-delay ="400">
                  <SiPython/>
                  <GiArtificialIntelligence/>
                  <SiGooglecolab/>
                </div>
              </div>
              </ParallaxLayer>

              {/* 4 Image illustration section */}
              <div className='mt-32 ml-24 flex w-6/12 lg:inline phone:hidden'>
                <ParallaxLayer offset={0} speed={0.75}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop :'2800px',
                      marginLeft: "45%",
                      
                }}>
                <div className="ml-24 absolute object-none object-left-top mx-auto w-auto h-auto overflow-hidden">
                  <Image src={ML1} alt='TuanNguyen' />
                </div>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={0.5}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop :'1900px',
                      marginLeft: "55%",
                      
                }}>
                <div className="mt-20 ml-80 absolute  object-none object-center mx-auto">
                  <Image src={ML2} alt='TuanNguyen' />
                </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.25}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop :'1000px',
                      marginLeft: "50%",
                      
                }}>
                <div className=" mt-80 ml-32 absolute mx-auto w-auto h-auto overflow-hidden my-6">
                  <Image src={ML3} alt='TuanNguyen' />
                </div>
                </ParallaxLayer>
              </div>
            </div>
          </section>
          </ParallaxLayer>

          {/* PAGE 6 : Prexeco */}
          <ParallaxLayer offset={5}>
          <section className="min-h-screen text-gray-700 px-5">
            <div className="flex h-screen">
              {/* 5 Text illustration section */}
              <ParallaxLayer offset={2} horizontal speed ={0.68} style={{ 
                display: 'flex',
                justifyContent: 'center',
              }}>
              <div className="my-auto w-10/12">
                <h2 className="phone:text-4xl lg:text-6xl text font-bold font-arcuta"> Bill of Material Extracting </h2>
                <h3 className='phone:text-lg lg:text-2xl py-4 font-arcuta'> Machine Learning <span className="px-4">●</span> Object detection </h3>
                <ul className="phone:text-base lg:text-xl list-outside list-disc font-confortaa ">
                  <li className="py-2">
                  Gather a dataset of engineering schematics with labeled BOM tables for training the algorithm.
                  </li>
                  <li className="py-2">Extract content of Bill of Materials (BOM) table from engineering schematic using Deep Learning Algorithm.
                  </li>
                </ul>
                <div>
                  <div className="text-4xl flex gap-16 py-3 text-gray-600">
                    <SiPython/>
                    <GiArtificialIntelligence/>
                    <SiGooglecolab/>
                  </div>
                  <div className="text-4xl flex gap-16 py-3 text-gray-600">
                    <SiKeras/>
                    <SiOpencv/>
                  </div>
                </div>
                
              </div>
              </ParallaxLayer>

              {/* 5 Image illustration section */}
              <div className='mt-32 ml-24 flex w-6/12 lg:inline phone:hidden'>
              <ParallaxLayer offset={1} speed={1}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop :'3000px',
                      marginLeft: "45%",
                }}>
                <div className="ml-24 absolute object-none object-left-top mx-auto w-auto h-auto overflow-hidden">
                  <Image src={PE1} alt='TuanNguyen' />
                </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.75}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop :'1900px',
                      marginLeft: "50%",
                      
                }}>
                <div className="mt-20 ml-96 absolute object-none object-center mx-auto">
                  <Image src={PE2} alt='TuanNguyen' />
                </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.5}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop :'700px',
                      marginLeft: "45%",
                      
                }}>
                <div className=" mt-80 ml-32 absolute mx-auto w-auto h-auto overflow-hidden my-6">
                  <Image src={PE3} alt='TuanNguyen' />
                </div>
                </ParallaxLayer>
              </div>
            </div>
          </section>
          </ParallaxLayer>
          
          {/* PAGE 7 : Logit Website */}
          <ParallaxLayer offset={6}> 
          <section className="min-h-screen text-gray-700 px-5">
            <div className="flex h-screen">
              {/* Text illustration section */}
              <ParallaxLayer offset={3} horizontal speed ={1.04} style={{ 
                display: 'flex',
                justifyContent: 'center',
              }}>
              <div className="my-auto w-10/12">
                <h2 className="phone:text-4xl lg:text-6xl text font-bold font-arcuta"> LogIt Website</h2>
                <h3 className='phone:text-lg lg:text-2xl py-4 font-arcuta'> Front-end Development <span className="px-4">●</span> Django </h3>
                <ul className="phone:text-base lg:text-xl list-outside list-disc font-confortaa ">
                  <li className="py-2">Designed and developed website for Timber buyers to access information about Timber Sales in BC.
                  </li>
                  <li className="py-2">Website using Django framework for backend and Bootstrap framework for frontend.
                  </li>
                </ul>
                <div>
                  <div className="text-4xl flex gap-16 py-3 text-gray-600">
                    <IoLogoHtml5/>
                    <IoLogoCss3/>
                    <IoLogoJavascript/>
                  </div>
                  <div className="text-4xl flex gap-16 py-3 text-gray-600">
                    <SiDjango/>
                    <SiJupyter/>
                  </div>
                </div>
              </div>
              </ParallaxLayer>
              {/* Image illustration section */}
              <div className='mt-64 ml-4 flex w-6/12 lg:inline phone:hidden'>
              <ParallaxLayer offset={1} speed={0.5}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop :'1300px',
                      marginLeft: "50%",
                }}>
                <div className="ml-12 absolute object-none object-left-top mx-auto w-auto h-auto overflow-hidden">
                  <Image src={LI1} alt='TuanNguyen' />
                </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop :'3800px',
                      marginLeft: "50%",
                }}>
                <div className="mt-52 ml-64 absolute  object-none object-center mx-auto">
                  <Image src={LI3} alt='TuanNguyen' />
                </div>
                </ParallaxLayer>
              </div>
            </div>
          </section>
          </ParallaxLayer>

          {/* PAGE 8 : Experience */}
          <ParallaxLayer offset={7}>
          <section id= "Experience" className="min-h-screen text-gray-700 px-5">
            <div className="flex h-screen">
              
              <ParallaxLayer offset={4} horizontal speed ={1.32} style={{ 
                display: 'flex',
                justifyContent: 'center',
              }}>
              <div className="my-auto w-10/12">
                <h2 className="phone:text-4xl lg:text-6xl text font-bold font-arcuta"> Software Developer QA </h2>
                <h3 className='phone:text-lg lg:text-2xl py-4 font-arcuta'> Manual Testing <span className="px-4">●</span> Automation Testing </h3>
                <ul className="phone:text-base lg:text-xl list-outside list-disc font-confortaa ">
                  <li className="py-2">Develop and execute manual and automated test cases to verify software functionality, performance, security, and usability.
                  </li>
                  <li className="py-2">
                  Create and maintain test reports, defect tracking, and metrics to provide feedback on software quality and help improve the software development process.
                  </li>
                  <li className="py-2">
                  Validating that defects have been properly fixed and that the software meets the specified requirements.
                  </li>
                  <li className="py-2">
                  Maintained the bug tracking system and ensured that all defects were documented and resolved in a timely manner.
                  </li>
                </ul>
                <div>
                  <div className="text-4xl flex gap-16 py-3 text-gray-600">
                    <SiSelenium/>
                    <SiApachejmeter/>
                    <SiPostgresql/>
                    <SiMysql/>
                  </div>
                  <div className="text-4xl flex gap-16 py-3 text-gray-600">
                    <SiJirasoftware/>
                    <SiConfluence/>
                    <ImEmbed2/>
                  </div>
                </div>
              </div>
              </ParallaxLayer>
              {/* Image illustration section */}
              <div className='mt-64 ml-24 flex w-6/12 lg:inline phone:hidden'>
              <ParallaxLayer offset={1} speed={0.5}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop :'2000px',
                      marginLeft: "50%",
                }}>
                <div className="ml-12 absolute object-none object-left-top mx-auto w-auto h-auto overflow-hidden">
                  <Image src={ST2} alt='TuanNguyen' />
                </div>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={1}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop :'900px',
                      marginLeft: "50%",
                }}>
                <div className="mt-52 ml-96 absolute  object-none object-center mx-auto">
                  <Image src={ST3} alt='TuanNguyen' />
                </div>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={1.5}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop :'3000px',
                      marginLeft: "55%",
                }}>
                <div className=" mt-80 ml-32 absolute mx-auto w-auto h-auto overflow-hidden my-6">
                  <Image src={ST1} alt='TuanNguyen' />
                </div>
                </ParallaxLayer>
              </div>
            </div>
          </section>
          </ParallaxLayer>
          {/* PAGE 9 : Education */}
          <ParallaxLayer offset={8}>
          <section id="Education" className="min-h-screen text-gray-700 px-5">
            <div className="flex h-screen">
              <div>
                <h2 className="text-2xl absolute pt-10 font-semibold"></h2>
              </div>
              <ParallaxLayer offset ={3} horizontal speed={0.6} style={{ 
                display: 'flex',
                justifyContent: 'center',
              }}>
              <div className="my-auto phone:ml-6 lg:ml-12 w-10/12">
                <h2 className="phone:text-4xl lg:text-6xl text font-bold font-arcuta "> Bachelor of Computer Science </h2>
                <h3 className='phone:text-lg lg:text-2xl pt-4 font-arcuta'> Thompson Rivers University </h3>
                <h3 className='phone:text-lg lg:text-2xl py-2 font-arcuta'>GPA: 3.8</h3>
                <h3 className="phone:text-base lg:text-xl font-confortaa">Relevant coursework:</h3>
                <ul className="phone:text-base lg:text-xl list-outside list-disc font-confortaa ">
                  <li className="py-2">
                    Algorithms
                  </li>
                  <li className="py-2">
                  Data Structures
                  </li>
                  <li className="py-2">
                  Database System
                  </li>
                  <li className="py-2">
                  Object-oriented Programming
                  </li>
                  <li className="py-2">
                  Machine Learning
                  </li>
                  <li className="py-2">
                  Testing
                  </li>
                </ul>
              </div>
              </ParallaxLayer>
              <ParallaxLayer offset ={-2} horizontal speed={-0.3} style={{ 
                display: 'flex',
                justifyContent: 'center',
              }}>
              <div className="my-auto ml-12 w-10/12">

                <h2 className="phone:text-4xl lg:text-6xl text font-bold font-arcuta "> Certificate </h2>
                <ul className="phone:text-base lg:text-xl mt-4 list-outside list-disc font-confortaa ">
                  <h3 className='phone:text-lg lg:text-2xl py-1 font-arcuta text-purple-500'>Udemy</h3>
                  <li className="py-2">
                  The Complete Python Bootcamp From Zero to Hero in Python Certificate.
                  </li>
                  <li className="py-2">
                  The Complete SQL Bootcamp: Go from Zero to Hero Certificate.
                  </li>
                  <li className="py-2">
                  Learn Web and API Automation using Cypress with JavaScript Certificate.
                  </li>
                  <li className="py-2">
                  IT Support Technical Skills Bootcamp Certificate.
                  </li>
                  <li className="py-2">
                  Learn SDET Essentials - Full Stack QA Automation, Udemy
                  </li>
                  
                </ul>
                </div>
              </ParallaxLayer>
            </div>
            
          </section>
          </ParallaxLayer>
          
          {/* PAGE 10 : SKILLS */}
          <ParallaxLayer offset={9}>
          <section id="Education" className="min-h-screen text-gray-700 px-5">
            <div className="flex h-screen">
              <div>
                <h2 className="text-2xl absolute pt-10 font-semibold"></h2>
              </div>
              <ParallaxLayer offset ={3} horizontal speed={0.5} style={{ 
                display: 'flex',
                justifyContent: 'center',
              }}>
              <div className="my-auto phone:ml-6 lg:ml-12 w-10/12">
                <h2 className="phone:text-4xl lg:text-6xl text font-bold font-arcuta mb-7 "> Programming Languages </h2>
                <ul className="phone:text-base lg:text-xl list-outside list-disc font-confortaa ">
                  <li className="py-2">
                    Python
                  </li>
                  <li className="py-2">
                    Java
                  </li>
                  <li className="py-2">
                    JavaScript
                  </li>
                  <li className="py-2">
                    TypeScript
                  </li>
                  <li className="py-2">
                    C
                  </li>
                  <li className="py-2">
                    C++
                  </li>
                  <li className="py-2">
                    HTML
                  </li>
                  <li className="py-2">
                    CSS
                  </li>
                  <li className="py-2">
                    PHP
                  </li>
                  <li className="py-2">
                    SQL
                  </li>
                </ul>
              </div>
              </ParallaxLayer>
              <ParallaxLayer offset ={-3} horizontal speed={-0.34} style={{ 
                display: 'flex',
                justifyContent: 'center',
              }}>
              <div className="my-auto ml-12 w-10/12">

                <h2 className="phone:text-2xl lg:text-5xl text font-bold font-arcuta mb-7 "> Tools and frameworks </h2>
                <ul className="phone:text-base lg:text-xl list-outside list-disc font-confortaa ">
                  <li className="py-2">
                    Selenium
                  </li>
                  <li className="py-2">
                    TestNG
                  </li>
                  <li className="py-2">
                    Jmeter
                  </li>
                  <li className="py-2">
                    PostgreSQL
                  </li>
                  <li className="py-2">
                    Cypress
                  </li>
                  <li className="py-2">
                    Jenkins
                  </li>
                  <li className="py-2">
                    Postman
                  </li>
                  <li className="py-2">
                    Git
                  </li>
                </ul>
                <h2 className="phone:text-2xl lg:text-4xl text font-bold font-arcuta mb-7 "> Other </h2>
                <ul className="phone:text-base lg:text-xl list-outside list-disc font-confortaa ">
                  <li className="py-2">
                    Visual studio Code
                  </li>
                  <li className="py-2">
                    Jira
                  </li>
                  <li className="py-2">
                    Confluence
                  </li>
                  <li className="py-2">
                    Android Studio
                  </li>
                </ul>
                </div>
              </ParallaxLayer>
            </div>
            
          </section>
          </ParallaxLayer>

          {/* PAGE 11   : Form */}
          <ParallaxLayer offset={10}>
          <section className="min-h-screen text-gray-700 min-w-screen px-5">
            <div className=" mt-24 flex items-center justify-center">
            <hr className="min-w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-200"/>
            <span className="absolute mx-auto bg-gradient-to-b from-emerald-400 to-cyan-500 rounded-full w-36 h-36 overflow-hidden my-6 ">
              <Image src={tuandev} alt='TuanNguyen'/>
            </span>
            </div>
            <div className="flex relative">
              <div className="mx-auto py-16">
                <h2 className="text-center text-3xl pt-5 font-arcuta"> Interested in working together ?</h2>
                <h2 className="text-center text-3xl py-5 font-arcuta">  We could schedule for coffee and talk about that. </h2>
                <div className=" mt-6 inline-flex items-center justify-center w-full">

                <form className="items-center w-9/12" action="https://formsubmit.co/TuanNguyenMinh@protonmail.com" method="POST">

                  <label className="text-2xl text-gray-400 font-arcuta w-full">Name</label><br />
                  <input className="bg-white border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-400" type="text" name='name' required/><br />

                  <label className="text-2xl text-gray-400 font-arcuta w-full">Email</label><br />
                  <input className="bg-white appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-400" type="email" name='email' required/><br />

                  <label className="text-2xl text-gray-400 font-arcuta w-full">Additional Detail</label><br />
                  <textarea className="bg-white appearance-none border border-gray-200 rounded w-full h-72 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-400" name = 'message' required/><br />

                  <div className=" mt-6 inline-flex items-center justify-center w-full">
                  <button 
                  // onClick={thankYou} 
                  type="submit" className="bg-gradient-to-r from-emerald-500 to-cyan-400 text-white px-6 py-3 rounded-md font-bold"> Submit</button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </section>
          </ParallaxLayer>
          </Parallax>



      </main>
    
    </div>
  );
}
