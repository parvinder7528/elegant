import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const Nundah = () => {
  return (
   <>
   <Header/>
     <section className="relative h-screen flex items-center justify-center overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        'url("https://readdy.ai/api/search-image?query=sophisticated%20beauty%20salon%20in%20Nundah%20Queensland%2C%20modern%20luxury%20spa%20exterior%20with%20elegant%20signage%2C%20professional%20wellness%20center%20with%20contemporary%20architecture&width=1920&height=1080&seq=ndhero&orientation=landscape")'
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
  <div className="relative z-10 text-center text-white px-6 max-w-4xl">
    <h1 className="font-serif text-5xl md:text-7xl mb-6">
      E'LAN BEAUTY
      <span className="block text-3xl md:text-4xl font-light mt-2 text-rose-200">
        Nundah
      </span>
    </h1>
    <p className="text-xl md:text-2xl mb-8 font-light">
      Experience luxury beauty services with extended hours for your convenience
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-rose-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-rose-600 transition-colors whitespace-nowrap">
        Book Your Appointment
      </button>
      <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-colors whitespace-nowrap">
        View Services
      </button>
    </div>
  </div>
</section>
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="font-serif text-4xl text-gray-800 mb-6">
          About Our Nundah Location
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Located on the bustling Sandgate Road, our Nundah location is designed
          for the modern lifestyle. With extended operating hours and expanded
          services, we cater to busy professionals and beauty enthusiasts alike.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Our spacious, contemporary facility features the latest in beauty
          technology and wellness amenities. From advanced skincare treatments
          to precision hair styling, every service is delivered with the highest
          standards of excellence.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-map-pin-line text-rose-500" />
            </div>
            <div>
              <p className="font-medium text-gray-800">1220 Sandgate Rd</p>
              <p className="text-gray-600">Nundah QLD 4012</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-phone-line text-rose-500" />
            </div>
            <a
              href="tel:(07) 3456 7890"
              className="text-gray-700 hover:text-rose-500 transition-colors"
            >
              (07) 3456 7890
            </a>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 flex items-center justify-center mt-1">
              <i className="ri-time-line text-rose-500" />
            </div>
            <div>
              <p className="text-gray-700">
                Monday - Wednesday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-700">
                Thursday - Friday: 9:00 AM - 8:00 PM
              </p>
              <p className="text-gray-700">Saturday: 8:00 AM - 5:00 PM</p>
              <p className="text-gray-700">Sunday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          alt="E'LAN BEAUTY Nundah Interior"
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
          src="https://readdy.ai/api/search-image?query=modern%20beauty%20salon%20interior%20in%20Nundah%2C%20spacious%20luxury%20spa%20with%20contemporary%20design%2C%20professional%20treatment%20rooms%20with%20elegant%20decor&width=600&height=400&seq=ndabout&orientation=landscape"
        />
      </div>
    </div>
  </div>
</section>
<section
  id="services"
  className="py-20 bg-gradient-to-br from-rose-50 to-pink-50"
>
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-serif text-4xl text-gray-800 mb-4">
        Services &amp; Pricing
      </h2>
      <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Explore our comprehensive menu of beauty and wellness services,
        featuring the latest techniques and premium products.
      </p>
    </div>
    <div className="space-y-12">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-6">
          <h3 className="text-2xl font-serif text-white">
            Spa &amp; Aesthetics
          </h3>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">Signature Facial</h4>
                <p className="text-sm text-gray-600">60 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$125</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">
                  Anti-Aging Treatment
                </h4>
                <p className="text-sm text-gray-600">75 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$155</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">Hydrating Facial</h4>
                <p className="text-sm text-gray-600">45 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$100</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">
                  Deep Cleansing Facial
                </h4>
                <p className="text-sm text-gray-600">60 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$115</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">Microdermabrasion</h4>
                <p className="text-sm text-gray-600">45 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$130</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-6">
          <h3 className="text-2xl font-serif text-white">Hair Beauty</h3>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">Cut &amp; Style</h4>
                <p className="text-sm text-gray-600">90 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$90</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">
                  Color &amp; Highlights
                </h4>
                <p className="text-sm text-gray-600">180 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$190</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">Hair Treatment</h4>
                <p className="text-sm text-gray-600">60 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$70</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">Bridal Hair</h4>
                <p className="text-sm text-gray-600">120 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$160</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">Hair Extensions</h4>
                <p className="text-sm text-gray-600">150 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$250</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-6">
          <h3 className="text-2xl font-serif text-white">Nails</h3>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">Gel Manicure</h4>
                <p className="text-sm text-gray-600">45 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$50</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">Gel Pedicure</h4>
                <p className="text-sm text-gray-600">60 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$60</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">Nail Art</h4>
                <p className="text-sm text-gray-600">30 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$30</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">French Manicure</h4>
                <p className="text-sm text-gray-600">45 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$55</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">
                  Acrylic Extensions
                </h4>
                <p className="text-sm text-gray-600">90 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$80</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-6">
          <h3 className="text-2xl font-serif text-white">Head Spa</h3>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">Scalp Treatment</h4>
                <p className="text-sm text-gray-600">45 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$75</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">Hair Mask Therapy</h4>
                <p className="text-sm text-gray-600">60 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$85</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">
                  Stress Relief Head Massage
                </h4>
                <p className="text-sm text-gray-600">30 min</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-rose-600">$55</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-serif text-4xl text-gray-800 mb-4">Gallery</h2>
      <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
      <p className="text-lg text-gray-600">
        Discover the beauty and sophistication of our Nundah location
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="group relative overflow-hidden rounded-xl shadow-lg">
        <img
          alt="E'LAN BEAUTY Nundah Gallery 1"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          src="https://public.readdy.ai/ai/img_res/5368557df3167788e32046a36f189853.jpg"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="group relative overflow-hidden rounded-xl shadow-lg">
        <img
          alt="E'LAN BEAUTY Nundah Gallery 2"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          src="https://readdy.ai/api/search-image?query=advanced%20hair%20styling%20station%20with%20modern%20equipment%2C%20professional%20salon%20setup%2C%20luxury%20hair%20care%20environment&width=400&height=300&seq=nd2&orientation=landscape"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="group relative overflow-hidden rounded-xl shadow-lg">
        <img
          alt="E'LAN BEAUTY Nundah Gallery 3"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          src="https://readdy.ai/api/search-image?query=premium%20nail%20salon%20with%20multiple%20stations%2C%20elegant%20manicure%20setup%2C%20professional%20nail%20art%20workspace&width=400&height=300&seq=nd3&orientation=landscape"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="group relative overflow-hidden rounded-xl shadow-lg">
        <img
          alt="E'LAN BEAUTY Nundah Gallery 4"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          src="https://readdy.ai/api/search-image?query=relaxing%20head%20spa%20treatment%20room%2C%20serene%20atmosphere%20with%20calming%20lighting%2C%20luxury%20wellness%20space&width=400&height=300&seq=nd4&orientation=landscape"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="group relative overflow-hidden rounded-xl shadow-lg">
        <img
          alt="E'LAN BEAUTY Nundah Gallery 5"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          src="https://readdy.ai/api/search-image?query=elegant%20beauty%20salon%20reception%20area%2C%20modern%20waiting%20lounge%20with%20comfortable%20seating&width=400&height=300&seq=nd5&orientation=landscape"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="group relative overflow-hidden rounded-xl shadow-lg">
        <img
          alt="E'LAN BEAUTY Nundah Gallery 6"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          src="https://readdy.ai/api/search-image?query=professional%20facial%20treatment%20in%20progress%2C%20advanced%20skincare%20equipment%2C%20luxury%20spa%20treatment&width=400&height=300&seq=nd6&orientation=landscape"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-serif text-4xl text-gray-800 mb-4">
        What Our Clients Say
      </h2>
      <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
      <p className="text-lg text-gray-600">
        Hear from our satisfied clients at our Nundah location
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center mb-4">
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-star-fill text-yellow-400" />
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-star-fill text-yellow-400" />
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-star-fill text-yellow-400" />
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-star-fill text-yellow-400" />
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-star-fill text-yellow-400" />
          </div>
        </div>
        <p className="text-gray-600 mb-6 italic">
          "The team at Nundah are absolute artists! My hair has never looked
          better. The extended hours make it so convenient too."
        </p>
        <div className="border-t pt-4">
          <p className="font-medium text-gray-800">Rachel Williams</p>
          <p className="text-sm text-gray-500">
            Hair Color &amp; Extensions • 1 week ago
          </p>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center mb-4">
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-star-fill text-yellow-400" />
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-star-fill text-yellow-400" />
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-star-fill text-yellow-400" />
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-star-fill text-yellow-400" />
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-star-fill text-yellow-400" />
          </div>
        </div>
        <p className="text-gray-600 mb-6 italic">
          "What an incredible experience! The facilities are top-notch and the
          staff made me feel so pampered and relaxed."
        </p>
        <div className="border-t pt-4">
          <p className="font-medium text-gray-800">Sophie Anderson</p>
          <p className="text-sm text-gray-500">Spa Package • 2 weeks ago</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center mb-4">
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-star-fill text-yellow-400" />
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-star-fill text-yellow-400" />
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-star-fill text-yellow-400" />
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-star-fill text-yellow-400" />
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-star-fill text-yellow-400" />
          </div>
        </div>
        <p className="text-gray-600 mb-6 italic">
          "Perfect nails every single time. The nail technicians are so skilled
          and the designs are always flawless."
        </p>
        <div className="border-t pt-4">
          <p className="font-medium text-gray-800">Maria Rodriguez</p>
          <p className="text-sm text-gray-500">Acrylic Nails • 1 month ago</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="booking" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="font-serif text-4xl text-gray-800 mb-4">
        Book Your Appointment
      </h2>
      <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
      <p className="text-lg text-gray-600">
        Schedule your visit to our Nundah location with flexible hours to suit
        your lifestyle
      </p>
    </div>
    <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-xl p-8 md:p-12">
      <form data-readdy-form="true" id="nundah-booking">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name *
            </label>
            <input
              id="fullName"
              placeholder="Your name"
              required=""
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
              type="text"
              defaultValue=""
              name="fullName"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <input
              id="email"
              placeholder="your@email.com"
              required=""
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
              type="email"
              defaultValue=""
              name="email"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number *
            </label>
            <input
              id="phone"
              placeholder="+61 4XX XXX XXX"
              required=""
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
              type="tel"
              defaultValue=""
              name="phone"
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Service Type *
            </label>
            <select
              id="service"
              name="service"
              required=""
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
            >
              <option value="">Select service</option>
              <option value="Spa & Aesthetics">Spa &amp; Aesthetics</option>
              <option value="Hair Beauty">Hair Beauty</option>
              <option value="Nails">Nails</option>
              <option value="Head Spa">Head Spa</option>
              <option value="Makeover">Makeover</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Preferred Date *
            </label>
            <input
              id="date"
              required=""
              min="2025-12-19"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
              type="date"
              defaultValue=""
              name="date"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Preferred Time *
            </label>
            <select
              id="time"
              name="time"
              required=""
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
            >
              <option value="">Select time</option>
              <option value="8:00 AM">8:00 AM (Saturday only)</option>
              <option value="8:30 AM">8:30 AM (Saturday only)</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="9:30 AM">9:30 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="10:30 AM">10:30 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="11:30 AM">11:30 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="12:30 PM">12:30 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="1:30 PM">1:30 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="2:30 PM">2:30 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="3:30 PM">3:30 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="4:30 PM">4:30 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="5:30 PM">5:30 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="6:30 PM">6:30 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="7:30 PM">7:30 PM</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="guests"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Number of Guests
            </label>
            <select
              id="guests"
              name="guests"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
              <option value={4}>4 Guests</option>
              <option value={5}>5+ Guests</option>
            </select>
          </div>
        </div>
        <div className="mb-8">
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Special Requests or Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Any special requests or additional information..."
            maxLength={500}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm resize-none"
            defaultValue={""}
          />
          <div className="text-right text-xs text-gray-500 mt-1">
            0/500 characters
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-4 px-8 rounded-lg font-medium hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap text-lg"
        >
          Book at Nundah
        </button>
      </form>
    </div>
  </div>
</section>
<Footer/>
</>
  )
}

export default Nundah