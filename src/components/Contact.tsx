import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Contact = () => {
  return (
<>
<Header/>
<section className="relative pt-32 pb-20 bg-gradient-to-br from-rose-50 to-pink-50">
  <div className="absolute inset-0">
    <img
      alt="E'LAN BEAUTY Contact"
      className="w-full h-full object-cover object-center"
      src="https://public.readdy.ai/ai/img_res/f2976356b31d9e42321bd4c93514dd55.jpg"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
  </div>
  <div className="relative max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
      Get In Touch
    </h1>
    <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
      We'd love to hear from you. Visit us at either location or send us a
      message.
    </p>
  </div>
</section>
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-serif text-gray-800 mb-4">Our Locations</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Visit us at either of our beautiful locations across Brisbane
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl overflow-hidden shadow-lg">
        <div className="h-64 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.123456789!2d153.0123456!3d-27.6123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM2JzQ0LjQiUyAxNTPCsDAwJzQ0LjQiRQ!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
            width="100%"
            height="100%"
            // // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Regents Park Location Map"
            style={{ border: 0 }}
          />
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-serif text-gray-800 mb-4">
            Regents Park
          </h3>
          <div className="flex items-start space-x-3 mb-4">
            <div className="w-5 h-5 flex items-center justify-center mt-1">
              <i className="ri-map-pin-line text-rose-500" />
            </div>
            <div>
              <p className="text-gray-700 font-medium">
                Shop 5/57/61 Emerald Dr
              </p>
              <p className="text-gray-600">Regents Park QLD 4118</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 mb-4">
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
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-mail-line text-rose-500" />
            </div>
            <a
              href="mailto:regentspark@elanbeauty.com.au"
              className="text-gray-700 hover:text-rose-500 transition-colors"
            >
              regentspark@elanbeauty.com.au
            </a>
          </div>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-time-line text-rose-500" />
              </div>
              Opening Hours
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="text-gray-800 font-medium">
                  9:00 AM - 5:30 PM
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Saturday</span>
                <span className="text-gray-800 font-medium">
                  9:00 AM - 4:00 PM
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Sunday</span>
                <span className="text-gray-800 font-medium">
                  10:00 AM - 3:00 PM
                </span>
              </div>
            </div>
          </div>
          <a
            href="/locations/regents-park"
            className="block w-full bg-rose-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-rose-600 transition-colors text-center whitespace-nowrap"
          >
            Visit Regents Park Page
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl overflow-hidden shadow-lg">
        <div className="h-64 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.987654321!2d153.0987654!3d-27.3987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDIzJzU1LjYiUyAxNTPCsDA1JzU1LjYiRQ!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
            width="100%"
            height="100%"
            // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nundah Location Map"
            style={{ border: 0 }}
          />
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-serif text-gray-800 mb-4">Nundah</h3>
          <div className="flex items-start space-x-3 mb-4">
            <div className="w-5 h-5 flex items-center justify-center mt-1">
              <i className="ri-map-pin-line text-rose-500" />
            </div>
            <div>
              <p className="text-gray-700 font-medium">1220 Sandgate Rd</p>
              <p className="text-gray-600">Nundah QLD 4012</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 mb-4">
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
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-mail-line text-rose-500" />
            </div>
            <a
              href="mailto:nundah@elanbeauty.com.au"
              className="text-gray-700 hover:text-rose-500 transition-colors"
            >
              nundah@elanbeauty.com.au
            </a>
          </div>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-time-line text-rose-500" />
              </div>
              Opening Hours
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Monday - Wednesday</span>
                <span className="text-gray-800 font-medium">
                  9:00 AM - 6:00 PM
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Thursday - Friday</span>
                <span className="text-gray-800 font-medium">
                  9:00 AM - 8:00 PM
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Saturday</span>
                <span className="text-gray-800 font-medium">
                  8:00 AM - 5:00 PM
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Sunday</span>
                <span className="text-gray-800 font-medium">
                  10:00 AM - 4:00 PM
                </span>
              </div>
            </div>
          </div>
          <a
            href="/locations/nundah"
            className="block w-full bg-rose-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-rose-600 transition-colors text-center whitespace-nowrap"
          >
            Visit Nundah Page
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
  <div className="max-w-4xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-serif text-gray-800 mb-4">
        Send Us a Message
      </h2>
      <p className="text-lg text-gray-600">
        Have a question? We're here to help.
      </p>
    </div>
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
      <form data-readdy-form="true" id="contact-message">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Name *
            </label>
            <input
              id="name"
              placeholder="Full name"
              // allowFullScreen=""
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
              type="text"
              defaultValue=""
              name="name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email *
            </label>
            <input
              id="email"
              placeholder="your@email.com"
              // allowFullScreen=""
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
              Phone
            </label>
            <input
              id="phone"
              placeholder="+61 4XX XXX XXX"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
              type="tel"
              defaultValue=""
              name="phone"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              // allowFullScreen=""
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
            >
              <option value="">What's this about?</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Booking Question">Booking Question</option>
              <option value="Service Information">Service Information</option>
              <option value="Pricing">Pricing</option>
              <option value="Feedback">Feedback</option>
              <option value="Partnership">Partnership</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="mb-8">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            // allowFullScreen=""
            maxLength={500}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm resize-none"
            defaultValue={""}
          />
          <div className="text-right text-xs text-gray-500 mt-1">
            0/500 characters
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-4 px-8 rounded-lg font-medium hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>
<section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6">
    <div className="text-center mb-12">
      <p className="text-rose-500 font-medium mb-2 tracking-wider uppercase text-sm">
        RESERVE YOUR SPOT
      </p>
      <h2 className="text-4xl font-serif text-gray-800 mb-4">
        Book Your Appointment
      </h2>
      <p className="text-lg text-gray-600">
        Select your preferred location, service, and time to schedule your
        beauty experience.
      </p>
    </div>
    <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-xl p-8 md:p-12">
      <form data-readdy-form="true" id="appointment-booking">
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
              // allowFullScreen=""
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
              // allowFullScreen=""
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
              // allowFullScreen=""
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
              type="tel"
              defaultValue=""
              name="phone"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Preferred Location *
            </label>
            <select
              id="location"
              name="location"
              // allowFullScreen=""
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
            >
              <option value="">Select location</option>
              <option value="Regents Park">Regents Park</option>
              <option value="Nundah">Nundah</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <div className="w-4 h-4 flex items-center justify-center mr-2 inline-block">
                <i className="ri-calendar-line text-rose-500" />
              </div>
              Preferred Date *
            </label>
            <input
              id="date"
              // allowFullScreen=""
              min="2025-12-18"
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
              <div className="w-4 h-4 flex items-center justify-center mr-2 inline-block">
                <i className="ri-time-line text-rose-500" />
              </div>
              Preferred Time *
            </label>
            <select
              id="time"
              name="time"
              // allowFullScreen=""
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
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <div className="w-4 h-4 flex items-center justify-center mr-2 inline-block">
                <i className="ri-scissors-line text-rose-500" />
              </div>
              Service Type *
            </label>
            <select
              id="service"
              name="service"
              // allowFullScreen=""
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
            >
              <option value="">Select service</option>
              <option value="Spa & Aesthetics">Spa &amp; Aesthetics</option>
              <option value="Hair Beauty">Hair Beauty</option>
              <option value="Nails">Nails</option>
              <option value="Head Spa">Head Spa</option>
              <option value="Makeover">Makeover</option>
              <option value="Essential Beauty Package">
                Essential Beauty Package
              </option>
              <option value="Complete Transformation Package">
                Complete Transformation Package
              </option>
              <option value="Bridal Luxury Package">
                Bridal Luxury Package
              </option>
              <option value="Consultation">Consultation</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="guests"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <div className="w-4 h-4 flex items-center justify-center mr-2 inline-block">
                <i className="ri-user-line text-rose-500" />
              </div>
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
          Confirm Booking
        </button>
      </form>
    </div>
  </div>
</section>
<Footer/>
</>
  )
}

export default Contact