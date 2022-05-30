<template>
  <div>
    <div>
      <nav class="bg-white font-poppins px-4 lg:px-32">
        <div class="xl:flex hidden justify-between py-[25px] items-center">
          <div class="w-36 ">
            <img src="https://comono.skoutwatch.com/images/logo.png" />
          </div>

          <div class="md:flex sm:hidden">
            <h4 class="text-black font-medium mx-3 cursor-pointer ml-10 text-[14px]">
              <a href="#products">Products</a>
            </h4>

            <h4 class="text-black font-medium mx-3 cursor-pointer ml-10 text-[14px]">
              <a href="#">Developer</a>
            </h4>
            <h4 class="text-black font-medium mx-3 cursor-pointer ml-10 text-[14px]">
              <a href="#why">Why Comono</a>
            </h4>
            <h4 class="text-black font-medium mx-3 cursor-pointer ml-10 text-[14px]">
              <a href="#">Contact Us</a>
            </h4>
          </div>

          <div class="flex items-center">
            <h4 class="text-primary font-medium cursor-pointer mr-4 text-[14px]">
              Log In
            </h4>
            <button class="bg-primary text-white font-light text-[14px] cursor-pointer py-2 px-4 rounded-[4px]">
              Sign Up
            </button>
          </div>
        </div>

        <div class="flex xl:hidden justify-between py-[16px]">
          <div class="w-24">
            <img src="https://comono.skoutwatch.com/images/logo.png" />
          </div>

          <div class="text-right">
            <svg
              v-on:click ="setShow"
              class="w-6 h-6 flex text-primary ml-28 hover:cursor-pointer xl:hidden"
              id="burger"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>

              <div class=" md:block bg-white " id="menu" v-if="menu">
                <h4 class="text-black font-medium cursor-pointer ml-10 text-[14px] my-2">
                  <a href="#products">Products</a>
                </h4>

                <h4
                  class="text-black font-medium cursor-pointer ml-10 text-[14px] my-2"
                  id="main-pricing mt-2"
                >
                  <a href="#">Developer</a>
                </h4>
                <h4 class="text-black font-medium cursor-pointer ml-10 text-[14px] my-2">
                  <a href="#why">Why Comono</a>
                </h4>
                <h4 class="text-black font-medium  cursor-pointer ml-10 text-[14px] my-2">
                  <a href="#">Contact Us</a>
                </h4>
                <h4 class="text-primary font-medium cursor-pointer ml-10 my-2 text-[14px]">
                  <a href="#">Log In</a>
                </h4>
                <button class="bg-primary text-white font-light text-[14px] cursor-pointer py-2 px-4 rounded-[4px] ml-10 my-2">
                  <a href="#">Sign Up</a>
                </button>
              </div>
          </div>
        </div>
      </nav>
    </div>

    <div>
      <div class="font-poppins">
        <div class="px-4 lg:px-32 mt-8 mb-16 lg:grid lg:grid-cols-2 ">
          <div class="flex justify-center  items-center">
            <div>
              <div>
                <h1 class="md:text-3xl text-2xl font-semibold flex justify-center lg:block ">
                  The Future of
                </h1>
                <div class=" ">
                  <h1 class="md:text-3xl font-semibold  text-primary text-2xl flex justify-center lg:-ml-[110px] ">
                    Address Verification
                    <div class="-mt-[15px] -mr-[-5px]">
                      <img class="w-[30px] " src="https://comono.skoutwatch.com/images/stripe2.png" />
                    </div>
                  </h1>
                </div>
              </div>
              <h4 class="text-sm font-medium md:w-[450px] my-6 text-center lg:text-left">
                The best technology to verify your customer’s identity and address
                in minutes.
              </h4>
              <div class="flex justify-center lg:block">
                <button class="bg-primary text-white py-3 md:w-[184px] w-[150px] text-sm rounded-[4px] mr-2 ">
                  View Demo
                </button>
                <button class="bg-blue-100 text-primary py-3 md:w-[184px] w-[150px] text-sm rounded-[4px] ml-2">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <!-- <div class="mt-10 lg:mt-0">
            <img class="mx-auto lg:mx-0" src="https://comono.skoutwatch.com/images/background.png" />
          </div> -->
        </div>

        <div class="px-4 lg:px-32 mb-16">
          <h4 class=" text-xl text-black font-semibold flex justify-center mb-8">
            Trusted by
          </h4>
          <swiper
            :slides-per-view="4"
            :space-between="30"
            :free-mode="true"
            :loop="true"
            :autoplay="{ autoplay: true }"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: false }">

            <swiper-slide class="bg-white">
              <div class=" md:mx-10 lg:mx-16">
                <img class="" src="https://comono.skoutwatch.com/images/fcmb.png" />
              </div>
            </swiper-slide>
            <swiper-slide class="bg-white">
              <div class=" md:mx-10 lg:mx-16">
                <img class="" src="https://comono.skoutwatch.com/images/credit.png" />
              </div>
            </swiper-slide>
            <swiper-slide class="bg-white">
              <div class="md:mx-10 lg:mx-16">
                <img class="" src="https://comono.skoutwatch.com/images/ecobank.png" />
              </div>
            </swiper-slide>
            <swiper-slide class="bg-white">
              <div class=" md:mx-10 lg:mx-16">
                <img class="" src="https://comono.skoutwatch.com/images/fund.png" />
              </div>
            </swiper-slide>
            <swiper-slide class="bg-white">
              <div class=" md:mx-10 lg:mx-16">
                <img class="" src="https://comono.skoutwatch.com/images/fund.png" />
              </div>
            </swiper-slide>
          </swiper>
        </div>

        
        <div class="px-4 lg:px-32 ">
          <h4 class="flex justify-center text-xl text-black font-semibold">
            How It Works
          </h4>
          <h4 class="text-sm  flex justify-center text-center mt-4 mb-6 font-semibold md:w-3/5 w-full mx-auto">
            Comono securely empowers individuals and Businesses to scale and
            seamlessly onboard customers across Africa.
          </h4>
        </div>

        <div class="px-4  lg:px-32">
          <div class="flex justify-center md:w-2/5 w-full mx-auto items-center">
            <div>
              <img class="w-[150px]" src="https://comono.skoutwatch.com/images/clock.png" />
            </div>
            <h4 class="text-xs font-medium text-center">
              By automating your offline procedures in a few simple steps, you can
              save thousands of hours.
            </h4>
          </div>
          <div class="md:grid md:grid-cols-3 md:gap-4 mb-16 items-start mt-2">
            <div class="mt-8">
              <div class="w-[50px] mb-4">
                <img class="" src="https://comono.skoutwatch.com/images/connect.png" />
              </div>
              <h1 class="text-base font-semibold">Connect</h1>
              <h4 class="text-xs font-medium mt-2 leading-5">
                Easily Sign Up or use our API to connect and get the best out of
                Comono.
              </h4>
            </div>

            <div class="mt-8">
              <div class="w-[50px] mb-4">
                <img class="" src="https://comono.skoutwatch.com/images/verify.png" />
              </div>
              <h1 class="text-base font-semibold">Verify</h1>
              <h4 class="text-xs font-medium mt-2 leading-5">
                Securely verify customer’s identity and address data in minutes.
              </h4>
            </div>

            <div class="mt-8">
              <div class="w-[50px] mb-4">
                <img class="" src="https://comono.skoutwatch.com/images/reports.png" />
              </div>
              <h1 class="text-base font-semibold">Get Reports</h1>
              <h4 class="text-xs font-medium mt-2 leading-5">
                Comono gives you credible reports that enable you make smart and
                informed decisions to safely conduct your business transactions.
              </h4>
            </div>
          </div>
        </div>



        <div class="px-4  lg:px-32" id="products">
          <h4 class="flex justify-center text-xl text-black font-semibold">
            Our Products
          </h4>
          <div class="flex justify-center -ml-[80px] mt-1">
            <div class="bg-primary w-12 h-0.5 rounded mr-2"></div>
          </div>

          <h4 class="text-xs  flex justify-center text-center mt-4 mb-6 font-medium md:w-3/5 w-full mx-auto">
            Our solutions enables Individuals, Businesses and Organizations to
            access verified Identity and address data href support their due
            diligence practice in order to safely transact business.
          </h4>
        </div>
        <div class=" md:pb-12 pb-10 bg-white md:pt-0 pt-6 md:block hidden px-4  lg:px-32">
          <div class="md:flex md:justify-between items-center w-full xl:w-4/5 xl:mx-auto">
            <div class="md:w-1/2 w-full md:mr-4 ml-0 flex justify-center text-center md:text-left mt-8 md:mt-0">
              <div>
                <div>
                  <h4 class="text-lg font-semibold mb-4 flex justify-center">
                    Address Verification and Identification
                  </h4>
                </div>
                <div>
                  <div class="border-2 p-2 mb-2">
                    <div class="flex items-center">
                      <div class="w-[40px]">
                        <img class="" src="https://comono.skoutwatch.com/images/mark.png" />
                      </div>
                      <h4 class="text-sm font-medium ml-4">
                        <b>Address Validation</b> - Easily confirm validity of
                        addresses using our service to conduct ‘in-person physical
                        validation’ across Africa.
                      </h4>
                    </div>
                  </div>
                  <div class="border-2 p-2 mb-2">
                    <div class="flex items-center">
                      <div class="w-[40px]">
                        <img class="" src=https://comono.skoutwatch.com/images/mark.png />
                      </div>
                      <h4 class="text-sm font-medium ml-4">
                        <b>Instant Address Verification</b> - Instantly verify
                        addresses in minutes using the Comono ‘i-Confirm’
                        database.
                      </h4>
                    </div>
                  </div>
                  <div class="border-2 p-2 mb-2">
                    <div class="flex items-center">
                      <div class="w-[40px]">
                        <img class="" src="https://comono.skoutwatch.com/images/mark.png" />
                      </div>
                      <h4 class="text-sm font-medium ml-4">
                        <b>Address Autocomplete</b> - Autocomplete addresses at
                        the point - of - entry with correct data integration with
                        your workflow using our autocomplete API.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:w-1/2 w-full ml-4 ">
              <img class="mx-auto" src="https://comono.skoutwatch.com/images/address.png" />
            </div>
          </div>
        </div>
        <div class="px-4  lg:px-32 md:pb-20 pb-10  bg-white md:pt-10 pt-6">
          <div class="md:flex md:justify-between items-center w-full xl:w-4/5 xl:mx-auto">
            <div class="md:w-1/2 w-full mr-4 ">
              <img class="mx-auto" src="https://comono.skoutwatch.com/images/identity.png" />
            </div>
            <div class="md:w-1/2 w-full md:ml-4 ml-0 flex justify-center text-center md:text-left mt-8 md:mt-0">
              <div>
                <div>
                  <h4 class="text-lg font-semibold">Identity Verification</h4>
                </div>
                <div class="">
                  <h4 class="text-xs font-medium mt-6 leading-5">
                    Instantly verify a wide range of recognized ID cards and know
                    the true identity of your customers, partners, suppliers or
                    new hires.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="px-4  lg:px-32 md:pb-20 pb-10  bg-white md:pt-0 pt-6 md:block hidden">
          <div class="md:flex md:justify-between items-center w-full xl:w-4/5 xl:mx-auto">
            <div class="md:w-1/2 w-full md:mr-4 ml-0 flex justify-center text-center md:text-left mt-8 md:mt-0">
              <div>
                <div>
                  <h4 class="text-lg font-semibold">Project Verification</h4>
                </div>
                <div class="">
                  <h4 class="text-xs font-medium mt-6 leading-5">
                    Use the Comono ‘Check-My-Project’ tool to remotely verify and
                    monitor the status of your projects. Let Comono be the third
                    eye that ensures your contractor’s compliance with the agreed
                    project terms and deliverables, detect and prevent fraud
                    before it happens.
                  </h4>
                </div>
              </div>
            </div>
            <div class="md:w-1/2 w-full ml-4 ">
              <img class="mx-auto" src="https://comono.skoutwatch.com/images/project.png" />
            </div>
          </div>
        </div>

        <div class="px-4  lg:px-32 pb-20 bg-white  pt-6 md:hidden flex">
          <div class="items-center w-full">
            <div class="md:w-1/2 w-full ">
              <img class="mx-auto" src="https://comono.skoutwatch.com/images/project.png" />
            </div>
            <div class="md:w-1/2 w-full ml-0 flex justify-center text-center md:text-left mt-8 md:mt-0">
              <div>
                <div>
                  <h4 class="text-lg font-semibold">Project Verification</h4>
                </div>
                <div class="">
                  <h4 class="text-xs font-medium mt-6 leading-5">
                    Use the Comono ‘Check-My-Project’ tool to remotely verify and
                    monitor the status of your projects. Let Comono be the third
                    eye that ensures your contractor’s compliance with the agreed
                    project terms and deliverables, detect and prevent fraud
                    before it happens.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-primary pt-14  mb-6" id="why">
          <div class="md:flex  justify-center px-4  lg:px-32 items-center">
            <div>
              <div class="flex justify-center -ml-[85px] mt-1 mb-2">
                <div class="bg-white w-16 h-0.5 rounded mr-2"></div>
              </div>
              <h4 class="flex justify-center text-4xl text-white font-medium">
                Why <br> Comono
              </h4>
            </div>
            <div class="md:w-3/5 md:ml-12">
              <div>
                <h4 class="text-white text-sm font-light mb-2 mt-4 md:mt-0 text-center md:text-left">
                  With Comono, you can make smart and informed decisions and
                  transact business with the right people.
                </h4>
              </div>
              <div class="">
                <div class="md:grid md:grid-cols-3 md:gap-4 items-center flex justify-between">
                  <div class="mt-4">
                    <div class="w-[25px] mb-2">
                      <img class="" src="https://comono.skoutwatch.com/images/fast.png" />
                    </div>
                    <h1 class="text-sm font-medium text-white">Fast</h1>
                  </div>

                  <div class="mt-4">
                    <div class="w-[25px] mb-2">
                      <img class="" src="https://comono.skoutwatch.com/images/reliable.png" />
                    </div>
                    <h1 class="text-sm font-medium text-white">Reliable</h1>
                  </div>

                  <div class="mt-4">
                    <div class="w-[25px] mb-2">
                      <img class="" src="https://comono.skoutwatch.com/images/affordable.png" />
                    </div>
                    <h1 class="text-sm font-medium text-white">Affordable</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[100px] md:-mt-[50px] -mt-[40px]">
            <img class="" src="https://comono.skoutwatch.com/images/stripe.png" />
          </div>
        </div>

        <div class="px-4 mt-12 lg:px-32">
          <div class="md:w-[500px] mx-auto mb-8">
            <h4 class="flex justify-center text-xl text-black font-semibold text-center ">
              With our automated solutions, streamline all your verification
              processes.
            </h4>
          </div>
          <div class="flex justify-between mb-20">
            <div class="flex items-center">
              <div class="md:w-[80px] w-[30px]">
                <img class="" src="https://comono.skoutwatch.com/images/cheaper.png" />
              </div>
              <div class="md:ml-4 ml-1">
                <h1 class="md:text-5xl font-semibold">50%</h1>
                <h4 class="md:text-sm text-xs  text-primary font-medium">
                  Cheaper
                </h4>
              </div>
            </div>
            <div class="flex items-center">
              <div class="md:w-[80px] w-[30px]">
                <img class="" src="https://comono.skoutwatch.com/images/faster.png" />
              </div>
              <div class="md:ml-4 ml-1">
                <h1 class="md:text-5xl font-semibold">75%</h1>
                <h4 class="md:text-sm text-xs  text-primary font-medium">
                  Faster
                </h4>
              </div>
            </div>
            <div class="flex items-center">
              <div class="md:w-[80px] w-[30px]">
                <img class="" src="https://comono.skoutwatch.com/images/efficient.png" />
              </div>
              <div class="md:ml-4 ml-1">
                <h1 class="md:text-5xl font-semibold">5x</h1>
                <h4 class="md:text-sm text-xs  text-primary font-medium">
                  More Efficiently
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div class="px-4 mt-14 lg:px-32">
          <div>
            <h4 class="flex justify-center text-xl text-black font-semibold text-center">
              Comono has you covered from all sides
            </h4>
          </div>

          <div class="md:grid md:grid-cols-3 md:gap-4 mb-16 items-start mt-2">
            <div class="mt-8">
              <div class="w-[35px] mb-4">
                <img class="" src="https://comono.skoutwatch.com/images/regulatory.png" />
              </div>
              <h1 class="text-base font-semibold">Regulatory Compliance</h1>
              <h4 class="text-xs font-medium mt-2 leading-5">
                Data is handled in accordance with all legal frameworks and
                regulatory requirements.
              </h4>
            </div>

            <div class="mt-8">
              <div class="w-[35px] mb-4">
                <img class="" src="https://comono.skoutwatch.com/images/data.png" />
              </div>
              <h1 class="text-base font-semibold">Data Security</h1>
              <h4 class="text-xs font-medium mt-2 leading-5">
                Your data is handled in the most secure and confidential manner.
              </h4>
            </div>

            <div class="mt-8">
              <div class="w-[35px] mb-4">
                <img class="" src="https://comono.skoutwatch.com/images/scalable.png" />
              </div>
              <h1 class="text-base font-semibold">Scalable Solutions</h1>
              <h4 class="text-xs font-medium mt-2 leading-5">
                Scale your business with ease with our API and Integration
                capabilities.
              </h4>
            </div>
          </div>
        </div>
        <!-- <div class="mt-4">
          
          <div class="flex justify-center -ml-[145px] mt-1">
            <div class="bg-primary w-12 h-0.5 rounded mr-2"></div>
          </div>
        </div> -->

        <div class="px-4 lg:px-32 mt-10 mb-[80px]">
          <div>
            <h4 class="flex justify-center text-xl text-black font-semibold">
              Do More with Comono
            </h4>
          </div>
          <div class="flex justify-center mt-[70px] mb-[74px]">
            <button @click="partnerForm" class="text-white bg-primary text-xs py-[16px] rounded-[4px] w-[220px] mr-3 font-medium">
              Become a Partner
            </button>
            <button class="text-primary bg-blue-100 text-xs py-[16px] rounded-[4px] w-[220px] ml-3 font-medium">
              Become an Affiliate
            </button>
          </div>  
          
                  
          <div v-if="affilate" class="px-4 lg:px-32 mt-10 absolute md:top-[3200px] font-poppins pt-16 md:pb-16 pb-4  items-center bg-white shadow-lg md:w-[700px] left-1/2 md:-ml-[350px] top-[4500px] w-[350px] -ml-[175px] sm:w-[600px] sm:-ml-[300px] lg:w-[900px] lg:-ml-[450px] xl:w-[1200px] xl:-ml-[600px] 2xl:w-[1400px] 2xl:-ml-[700px] rounded-[24px] md:px-16 2xl:px-64 z-40">
            <div>
              <div class="w-8 absolute right-6 top-10 opacity-50">
                <img
                  class="opacity-100"
                  @click="cancelModal(!affilate)"
                  src="https://comono.skoutwatch.com/images/cancel.jpeg"
                />
              </div>
            </div>
            <div class="flex justify-center mb-6 -mt-4">
              <h4 class="text-lg font-semibold">Become a Partner</h4>
            </div>
            <div class="grid grid-cols-2 md:gap-4 gap-2">
              <div>
                <div class="mt-6">
                  <h4 class="text-sm font-medium">First Name</h4>
                  <input
                    class="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-4"
                    name="text"
                    type="text"
                    placeholder="Enter first name here"
                  />
                </div>
                <div class="mt-6">
                  <h4 class="text-sm font-medium">Job Title</h4>
                  <input
                    class="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-4"
                    name="text"
                    type="text"
                    placeholder="Enter job title here"
                  />
                </div>
                <div class="mt-6">
                  <h4 class="text-sm font-medium">Company Name</h4>
                  <input
                    class="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-4"
                    name="text"
                    type="text"
                    placeholder="Enter company name here"
                  />
                </div>
                <div class="mt-6">
                  <h4 class="text-sm font-medium">Industry</h4>
                  <input
                    class="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-4"
                    name="text"
                    type="text"
                    placeholder="Enter industry name here"
                  />
                </div>
                <div class="mt-6">
                  <h4 class="text-sm font-medium">Company Email</h4>
                  <input
                    class="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-4"
                    name="email"
                    type="email"
                    placeholder="Enter company email here"
                  />
                </div>
                <div class="mt-6">
                  <h4 class="text-sm font-medium">Message</h4>
                  <textarea
                    class="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-4"
                    name="message"
                    placeholder="Write your message here"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div>
                <div class="mt-6">
                  <h4 class="text-sm font-medium">Last Name</h4>
                  <input
                    class="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-4"
                    name="text"
                    type="text"
                    placeholder="Enter last name here"
                  />
                </div>
                <div class="mt-6">
                  <h4 class="text-sm font-medium">Phone</h4>
                  <input
                    class="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-4"
                    name="number"
                    type="number"
                    placeholder="Enter phone number here"
                  />
                </div>
                <div class="mt-6">
                  <h4 class="text-sm font-medium">Company Website</h4>
                  <input
                    class="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-4"
                    name="text"
                    type="text"
                    placeholder="Enter company website here"
                  />
                </div>
                <div class="mt-6">
                  <h4 class="text-sm font-medium">Country</h4>
                  <input
                    class="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-4"
                    name="country"
                    type="country"
                    placeholder="Enter country here"
                  />
                </div>
              </div>
            </div>
            <div class="flex justify-center md:mt-[80px] mt-[40px] md:mb-[100px] mb-[70px]">
              <button class="bg-primary text-white rounded-[4px] py-3 text-sm md:w-[400px] w-[300px]">
                Submit
              </button>
            </div>
          </div>
          
        </div>

        <div class="px-4  lg:px-32 pb-16 ">
          <div>
            <h4 class="flex justify-center text-xl text-black font-semibold mb-6 md:mb-10 text-center">
              Join thousand others using Comono
            </h4>
          </div>

          <swiper
            :slides-per-view="3"
            :space-between="30"
            :free-mode="true"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: false }"
            class="h-[200px] hidden md:block"
          >
            <swiper-slide class="bg-white">
              <div>
                <div>
                  <img class="" src="https://comono.skoutwatch.com/images/globe.png" />
                </div>
                <h4 class="text-xs font-medium my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  et egestas lorem. Nulla venenatis semper tortor in cursus Nulla
                  venenatis Nulla venenatis.
                </h4>
                <div class="flex items-center">
                  <div>
                    <img class="" src="https://comono.skoutwatch.com/images/profile.png" />
                  </div>
                  <div class="ml-3">
                    <h4 class="text-xs font-semibold">Atanda Damilare</h4>
                    <h4 class="text-xs font-normal">CEO Access Bank</h4>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide class="bg-white">
              <div>
                <div>
                  <img class="" src="https://comono.skoutwatch.com/images/globe.png" />
                </div>
                <h4 class="text-xs font-medium my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  et egestas lorem. Nulla venenatis semper tortor in cursus Nulla
                  venenatis Nulla venenatis.
                </h4>
                <div class="flex items-center">
                  <div>
                    <img class="" src="https://comono.skoutwatch.com/images/profile.png" />
                  </div>
                  <div class="ml-3">
                    <h4 class="text-xs font-semibold">Atanda Damilare</h4>
                    <h4 class="text-xs font-normal">CEO Access Bank</h4>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide class="bg-white">
              <div>
                <div>
                  <img class="" src="https://comono.skoutwatch.com/images/globe.png" />
                </div>
                <h4 class="text-xs font-medium my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  et egestas lorem. Nulla venenatis semper tortor in cursus Nulla
                  venenatis Nulla venenatis.
                </h4>
                <div class="flex items-center">
                  <div>
                    <img class="" src="https://comono.skoutwatch.com/images/profile.png" />
                  </div>
                  <div class="ml-3">
                    <h4 class="text-xs font-semibold">Atanda Damilare</h4>
                    <h4 class="text-xs font-normal">CEO Access Bank</h4>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide class="bg-white">
              <div>
                <div>
                  <img class="" src="https://comono.skoutwatch.com/images/globe.png" />
                </div>
                <h4 class="text-xs font-medium my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  et egestas lorem. Nulla venenatis semper tortor in cursus Nulla
                  venenatis Nulla venenatis.
                </h4>
                <div class="flex items-center">
                  <div>
                    <img class="" src="https://comono.skoutwatch.com/images/profile.png" />
                  </div>
                  <div class="ml-3">
                    <h4 class="text-xs font-semibold">Atanda Damilare</h4>
                    <h4 class="text-xs font-normal">CEO Access Bank</h4>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="px-4  lg:px-32 pb-16 ">
          <div>
            <h4 class="flex justify-center text-xl text-black font-semibold mb-6 md:mb-10 text-center">
              Contact Us
            </h4>
          </div>

        </div>
    
      </div>
    </div>

    <div>
      <div class="bg-primary text-white pt-10 pb-16 font-poppins px-4 lg:px-32 ">
        <div class="">
          <div class="bg-primary text-white  lg:grid  lg:grid-cols-4 2xl:gap-36 lg:gap-16 sm:gap-10 md:gap-4">
            <div class="">
              <div class="md:w-[210px] w-36 mt-6  md:mt-10 md:-ml-6 -ml-4 mb-6 ">
                <img src="https://comono.skoutwatch.com/images/logo2.png" />
              </div>
              <ul class="lg:w-[200px] xl:w-[250px]">
                <li class="flex text-sm pt-4 font-light xl:text-base">
                  We help you check fast and do more.
                </li>
                <li class="flex text-sm pt-4 font-light xl:text-base">
                  25, Pilot Crescent, Bode Thomas Road, Surulere, Lagos, Nigeria.
                </li>
                <li class="flex text-sm pt-4 font-light xl:text-base">
                  Support@comono.io
                </li>
                <li class="flex text-sm pt-4 font-light xl:text-base">
                  +234 803 430 8666
                </li>
                <li class="flex text-sm pt-4 font-light xl:text-base">
                  +234 803 430 8666
                </li>
              </ul>
            </div>
            <div class="">
              <h4 class="mt-6 font-medium md:text-2xl md:mt-10 ">Quick as</h4>
              <ul>
                <li class="flex text-sm pt-6 font-light xl:text-base">
                  Verify an address
                </li>
                <li class="flex text-sm pt-4 font-light xl:text-base">
                  Proof of address
                </li>
                <li class="flex text-sm pt-4 font-light xl:text-base">
                  Check my project
                </li>
                <li class="flex text-sm pt-4 font-light xl:text-base">Sign Up</li>
                <li class="flex text-sm pt-4 font-light xl:text-base">Login</li>
              </ul>
            </div>
            <div class="">
              <h4 class="mt-6 font-medium md:text-2xl md:mt-10">Resources</h4>
              <ul>
                <li class="flex text-sm pt-6 font-light xl:text-base">About</li>
                <li class="flex text-sm pt-4 font-light xl:text-base">Press</li>
                <li class="flex text-sm pt-4 font-light xl:text-base">Careers</li>
                <li class="flex text-sm pt-4 font-light xl:text-base">
                  Partners
                </li>
              </ul>
            </div>
            <div class="">
              <h4 class="mt-6 font-medium md:text-2xl md:mt-10">Socials</h4>
              <ul>
                <li class="flex text-sm pt-6 font-light xl:text-base ">
                  Facebook
                </li>
                <li class="flex text-sm pt-4 font-light xl:text-base">Twitter</li>
                <li class="flex text-sm pt-4 font-light xl:text-base">
                  Instagram
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 class="flex text-sm font-light xl:text-base justify-center pt-28">
              Copyright &copy; 2022 Comono All rights reserved
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/autoplay';

  
  import { ref } from 'vue'

  const menu = ref(false)
  const affilate = ref(false)


  const setShow = () => {
    if(menu.value == true){
      return menu.value = false
    }
    if(menu.value == false){
      return menu.value = true
    }
  }

  const partnerForm = () => {
    if(affilate.value == true){
      return affilate.value = false
    }
    if(affilate.value == false){
      return affilate.value = true
    }

  }
  
  useHead({
    title: 'Comono Technologies - The Future of Address Verification ',
    meta: [
      {
        name: `description`,
        content: 
        'The best technology to verify your customer’s identity and address in minutes. The best technology to verify your customer’s identity and address in minutes.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'https://comono.skoutwatch.com/images/favicon.ico' }
    ],
  })


</script>