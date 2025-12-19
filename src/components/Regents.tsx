import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Regents = () => {
  return (
    <>
      <Header />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://readdy.ai/api/search-image?query=luxury%20beauty%20salon%20in%20Regents%20Park%20Queensland%2C%20elegant%20spa%20entrance%20with%20modern%20design%2C%20sophisticated%20wellness%20center%20with%20warm%20lighting%20and%20rose%20gold%20accents&width=1920&height=1080&seq=rphero&orientation=landscape")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            E'LAN BEAUTY
            <span className="block text-3xl md:text-4xl font-light mt-2 text-rose-200">
              Regents Park
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Your sanctuary of beauty and wellness in the heart of Regents Park
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-rose-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-rose-600 transition-colors whitespace-nowrap"
            >
              Book Your Appointment
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-colors whitespace-nowrap"
            >
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
                About Our Regents Park Location
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nestled in the vibrant community of Regents Park, our flagship
                location offers a tranquil escape from the everyday. Our
                beautifully designed space combines modern luxury with warm
                hospitality, creating the perfect environment for your beauty
                journey.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With state-of-the-art facilities and a team of expert
                professionals, we provide personalized treatments that celebrate
                your unique beauty. Every detail has been carefully considered
                to ensure your comfort and satisfaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-map-pin-line text-rose-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Shop 5/57/61 Emerald Dr
                    </p>
                    <p className="text-gray-600">Regents Park QLD 4118</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-phone-line text-rose-500" />
                  </div>
                  <a
                    href="tel:(07) 3123 4567"
                    className="text-gray-700 hover:text-rose-500 transition-colors"
                  >
                    (07) 3123 4567
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-time-line text-rose-500" />
                  </div>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 5:30 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                alt="E'LAN BEAUTY Regents Park Interior"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                src="https://readdy.ai/api/search-image?query=elegant%20beauty%20salon%20reception%20area%20in%20Regents%20Park%2C%20modern%20luxury%20spa%20interior%20with%20comfortable%20seating%2C%20warm%20lighting%20and%20professional%20atmosphere&width=600&height=400&seq=rpabout&orientation=landscape"
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
              Discover our comprehensive range of beauty and wellness services,
              each designed to enhance your natural radiance.
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
                      <h4 className="font-medium text-gray-800">
                        Signature Facial
                      </h4>
                      <p className="text-sm text-gray-600">60 min</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-rose-600">$120</p>
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
                      <p className="font-semibold text-rose-600">$150</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
                    <div>
                      <h4 className="font-medium text-gray-800">
                        Hydrating Facial
                      </h4>
                      <p className="text-sm text-gray-600">45 min</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-rose-600">$95</p>
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
                      <p className="font-semibold text-rose-600">$110</p>
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
                      <h4 className="font-medium text-gray-800">
                        Cut &amp; Style
                      </h4>
                      <p className="text-sm text-gray-600">90 min</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-rose-600">$85</p>
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
                      <p className="font-semibold text-rose-600">$180</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
                    <div>
                      <h4 className="font-medium text-gray-800">
                        Hair Treatment
                      </h4>
                      <p className="text-sm text-gray-600">60 min</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-rose-600">$65</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
                    <div>
                      <h4 className="font-medium text-gray-800">Bridal Hair</h4>
                      <p className="text-sm text-gray-600">120 min</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-rose-600">$150</p>
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
                      <h4 className="font-medium text-gray-800">
                        Gel Manicure
                      </h4>
                      <p className="text-sm text-gray-600">45 min</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-rose-600">$45</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
                    <div>
                      <h4 className="font-medium text-gray-800">
                        Gel Pedicure
                      </h4>
                      <p className="text-sm text-gray-600">60 min</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-rose-600">$55</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
                    <div>
                      <h4 className="font-medium text-gray-800">Nail Art</h4>
                      <p className="text-sm text-gray-600">30 min</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-rose-600">$25</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-rose-50 transition-colors">
                    <div>
                      <h4 className="font-medium text-gray-800">
                        French Manicure
                      </h4>
                      <p className="text-sm text-gray-600">45 min</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-rose-600">$50</p>
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
              Take a glimpse inside our beautiful Regents Park location
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Regents Park Gallery 1"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://public.readdy.ai/ai/img_res/ebcdb081197416e72d25b5c13a091568.jpg"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Regents Park Gallery 2"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://readdy.ai/api/search-image?query=professional%20facial%20treatment%20in%20progress%2C%20serene%20spa%20environment%2C%20luxury%20skincare%20products%20display&width=400&height=300&seq=rp2&orientation=landscape"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Regents Park Gallery 3"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://readdy.ai/api/search-image?query=beautiful%20hair%20styling%20station%2C%20modern%20salon%20chairs%2C%20professional%20hair%20care%20setup&width=400&height=300&seq=rp3&orientation=landscape"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Regents Park Gallery 4"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://readdy.ai/api/search-image?query=elegant%20nail%20station%20with%20luxury%20manicure%20setup%2C%20professional%20nail%20art%20tools%2C%20clean%20modern%20design&width=400&height=300&seq=rp4&orientation=landscape"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Regents Park Gallery 5"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://readdy.ai/api/search-image?query=relaxing%20spa%20waiting%20area%2C%20comfortable%20seating%2C%20calming%20atmosphere%20with%20plants&width=400&height=300&seq=rp5&orientation=landscape"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Regents Park Gallery 6"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://readdy.ai/api/search-image?query=luxury%20beauty%20products%20display%2C%20premium%20skincare%20collection%2C%20elegant%20retail%20area&width=400&height=300&seq=rp6&orientation=landscape"
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
              Real experiences from our valued Regents Park clients
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
                "The most relaxing facial I've ever had. The staff at Regents
                Park are incredibly skilled and the atmosphere is so peaceful."
              </p>
              <div className="border-t pt-4">
                <p className="font-medium text-gray-800">Sarah Mitchell</p>
                <p className="text-sm text-gray-500">
                  Signature Facial • 2 weeks ago
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
                "Amazing transformation! The stylists really listened to what I
                wanted and delivered beyond my expectations."
              </p>
              <div className="border-t pt-4">
                <p className="font-medium text-gray-800">Emma Thompson</p>
                <p className="text-sm text-gray-500">
                  Hair Color &amp; Cut • 1 month ago
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
                "Perfect nails every time. The attention to detail and quality
                of service is outstanding."
              </p>
              <div className="border-t pt-4">
                <p className="font-medium text-gray-800">Jessica Chen</p>
                <p className="text-sm text-gray-500">
                  Gel Manicure • 3 weeks ago
                </p>
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
              Ready to experience the E'LAN difference at our Regents Park
              location?
            </p>
          </div>
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-xl p-8 md:p-12">
            <form data-readdy-form="true" id="regents-park-booking">
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
                    //
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
                    //
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
                    //
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
                    //
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
                  >
                    <option value="">Select service</option>
                    <option value="Spa & Aesthetics">
                      Spa &amp; Aesthetics
                    </option>
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
                    //
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
                    //
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
                  >
                    <option value="">Select time</option>
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
                Book at Regents Park
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Regents;
