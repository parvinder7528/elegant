// import { Footer } from "react-day-picker";
import Footer from "./Footer";
import Header from "./Header";

const Services = () => {
  return (
    <>
    <Header/>
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="E'LAN BEAUTY Services"
          className="w-full h-full object-cover object-center"
          src="https://public.readdy.ai/ai/img_res/0acc6add2061908286ff57e40577e9d1.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
          Our Signature Services
        </h1>
        <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
          Discover our curated collection of luxury treatments, each designed to
          elevate your beauty experience
        </p>
      </div>
    </section>
    <section className="py-20 bg-gradient-to-b from-white to-rose-50/30">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6">
        Curated Beauty Experiences
      </h2>
      <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Each service is thoughtfully designed to provide you with an exceptional
        experience that goes beyond beauty
      </p>
    </div>
    <div className="space-y-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            <img
              alt="Spa & Aesthetics"
              className="w-full h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src="https://public.readdy.ai/ai/img_res/39626a8b45c78508e8fa942f649f2684.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4">
              Spa &amp; Aesthetics
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Rejuvenating treatments that restore your skin's natural radiance
              and vitality
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 text-lg">
              Featured Treatments:
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Signature Facials</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Anti-Aging Treatments</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Hydrating Therapies</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Skin Rejuvenation</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6">
            <div>
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                Starting
              </span>
              <p className="text-2xl font-semibold text-gray-800">From $120</p>
            </div>
            <button className="inline-flex items-center justify-center font-medium transition-all duration-300 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary-700 to-primary-800 text-white hover:from-primary-800 hover:to-primary-900 shadow-lg hover:shadow-xl px-8 py-4 text-lg rounded-lg transform hover:scale-105">
              Book Spa &amp; Aesthetics
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            <img
              alt="Hair Beauty"
              className="w-full h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src="https://readdy.ai/api/search-image?query=luxury%20hair%20salon%20with%20professional%20stylist%20working%20on%20client%20hair%2C%20elegant%20salon%20chair%20and%20mirrors%2C%20sophisticated%20interior%20design%20with%20warm%20lighting%2C%20premium%20hair%20care%20products&width=600&height=400&seq=hair1&orientation=landscape"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4">
              Hair Beauty
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Expert styling and treatments that bring out your hair's natural
              beauty and strength
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 text-lg">
              Featured Treatments:
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Precision Cuts</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Color Artistry</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Hair Treatments</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Styling Services</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6">
            <div>
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                Starting
              </span>
              <p className="text-2xl font-semibold text-gray-800">From $85</p>
            </div>
            <button className="inline-flex items-center justify-center font-medium transition-all duration-300 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary-700 to-primary-800 text-white hover:from-primary-800 hover:to-primary-900 shadow-lg hover:shadow-xl px-8 py-4 text-lg rounded-lg transform hover:scale-105">
              Book Hair Beauty
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            <img
              alt="Nails"
              className="w-full h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src="https://readdy.ai/api/search-image?query=luxury%20nail%20salon%20with%20elegant%20manicure%20station%2C%20professional%20nail%20artist%20creating%20beautiful%20nail%20art%2C%20sophisticated%20workspace%20with%20premium%20nail%20products%2C%20soft%20ambient%20lighting&width=600&height=400&seq=nails1&orientation=landscape"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4">
              Nails
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Meticulous nail artistry that combines creativity with precision
              for stunning results
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 text-lg">
              Featured Treatments:
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Signature Manicures</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Pedicures</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Nail Art</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Gel Extensions</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6">
            <div>
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                Starting
              </span>
              <p className="text-2xl font-semibold text-gray-800">From $45</p>
            </div>
            <button className="inline-flex items-center justify-center font-medium transition-all duration-300 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary-700 to-primary-800 text-white hover:from-primary-800 hover:to-primary-900 shadow-lg hover:shadow-xl px-8 py-4 text-lg rounded-lg transform hover:scale-105">
              Book Nails
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            <img
              alt="Head Spa"
              className="w-full h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src="https://readdy.ai/api/search-image?query=relaxing%20head%20spa%20treatment%20with%20professional%20therapist%20massaging%20client%20scalp%2C%20serene%20spa%20environment%20with%20soft%20lighting%2C%20premium%20scalp%20care%20products%2C%20tranquil%20atmosphere&width=600&height=400&seq=headspa1&orientation=landscape"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4">
              Head Spa
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Therapeutic scalp treatments that promote relaxation and healthy
              hair growth
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 text-lg">
              Featured Treatments:
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Scalp Massage</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Deep Cleansing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Aromatherapy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Stress Relief</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6">
            <div>
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                Starting
              </span>
              <p className="text-2xl font-semibold text-gray-800">From $95</p>
            </div>
            <button className="inline-flex items-center justify-center font-medium transition-all duration-300 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary-700 to-primary-800 text-white hover:from-primary-800 hover:to-primary-900 shadow-lg hover:shadow-xl px-8 py-4 text-lg rounded-lg transform hover:scale-105">
              Book Head Spa
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            <img
              alt="Makeover"
              className="w-full h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src="https://readdy.ai/api/search-image?query=professional%20makeup%20artist%20applying%20elegant%20makeup%20to%20client%20in%20luxury%20beauty%20studio%2C%20high-end%20cosmetics%20and%20brushes%2C%20sophisticated%20makeup%20station%20with%20perfect%20lighting&width=600&height=400&seq=makeover1&orientation=landscape"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4">
              Makeover
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Complete beauty transformations that enhance your natural features
              and confidence
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 text-lg">
              Featured Treatments:
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Bridal Makeup</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Special Events</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Photo Shoots</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-600">Makeup Lessons</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6">
            <div>
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                Starting
              </span>
              <p className="text-2xl font-semibold text-gray-800">From $150</p>
            </div>
            <button className="inline-flex items-center justify-center font-medium transition-all duration-300 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary-700 to-primary-800 text-white hover:from-primary-800 hover:to-primary-900 shadow-lg hover:shadow-xl px-8 py-4 text-lg rounded-lg transform hover:scale-105">
              Book Makeover
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6">
        Signature Packages
      </h2>
      <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Curated combinations of our most beloved treatments, designed for the
        ultimate luxury experience
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ">
        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl text-gray-800 mb-2">
              Essential Beauty
            </h3>
            <p className="text-gray-600 mb-4">
              Perfect introduction to our signature treatments
            </p>
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-4xl font-bold text-gray-800">$280</span>
            </div>
            <p className="text-sm text-gray-500">2 hours experience</p>
          </div>
          <div className="space-y-4 mb-8">
            <h4 className="font-semibold text-gray-800">What's Included:</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">
                  Signature Facial Treatment
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">Express Manicure</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">
                  Relaxing Head Massage
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">
                  Complimentary Refreshments
                </span>
              </li>
            </ul>
          </div>
          <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-rose-50 text-rose-500 hover:bg-rose-100">
            Book This Package
          </button>
        </div>
      </div>
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ring-2 ring-rose-400">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl text-gray-800 mb-2">
              Complete Transformation
            </h3>
            <p className="text-gray-600 mb-4">
              Our most comprehensive beauty experience
            </p>
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-4xl font-bold text-gray-800">$520</span>
            </div>
            <p className="text-sm text-gray-500">4 hours experience</p>
          </div>
          <div className="space-y-4 mb-8">
            <h4 className="font-semibold text-gray-800">What's Included:</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">
                  Full Spa &amp; Aesthetic Treatment
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">
                  Hair Styling &amp; Treatment
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">
                  Luxury Manicure &amp; Pedicure
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">
                  Professional Makeup Application
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">Head Spa Therapy</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">
                  Light Lunch &amp; Refreshments
                </span>
              </li>
            </ul>
          </div>
          <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-rose-500 text-white hover:bg-rose-600">
            Book This Package
          </button>
        </div>
      </div>
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ">
        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl text-gray-800 mb-2">
              Bridal Luxury
            </h3>
            <p className="text-gray-600 mb-4">
              The ultimate bridal beauty experience
            </p>
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-4xl font-bold text-gray-800">$850</span>
            </div>
            <p className="text-sm text-gray-500">6 hours experience</p>
          </div>
          <div className="space-y-4 mb-8">
            <h4 className="font-semibold text-gray-800">What's Included:</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">
                  Bridal Consultation
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">
                  Complete Hair &amp; Makeup
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">
                  Luxury Spa Treatment
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">
                  Nail Art &amp; Extensions
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">Touch-up Kit</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">
                  Photography Session
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-rose-500" />
                </div>
                <span className="text-gray-600 text-sm">
                  Champagne &amp; Gourmet Refreshments
                </span>
              </li>
            </ul>
          </div>
          <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-rose-50 text-rose-500 hover:bg-rose-100">
            Book This Package
          </button>
        </div>
      </div>
    </div>
    <div className="text-center mt-12">
      <p className="text-gray-600 mb-6">
        Need something custom? We're happy to create a personalized experience
        just for you.
      </p>
      <button className="text-rose-500 font-semibold hover:text-rose-600 transition-colors">
        Contact Us for Custom Packages →
      </button>
    </div>
  </div>
</section>
<section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6">
      Ready to Begin Your Beauty Journey?
    </h2>
    <div className="w-24 h-px bg-rose-400 mx-auto mb-8" />
    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
      Book your appointment today and discover why E'LAN BEAUTY is Australia's
      premier destination for luxury beauty experiences.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
      <button className="inline-flex items-center justify-center font-medium transition-all duration-300 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary-700 to-primary-800 text-white hover:from-primary-800 hover:to-primary-900 shadow-lg hover:shadow-xl px-8 py-4 text-lg rounded-lg transform hover:scale-105">
        Book Your Appointment
      </button>
      <button className="inline-flex items-center justify-center font-medium transition-all duration-300 whitespace-nowrap cursor-pointer border-2 border-white text-white hover:bg-white hover:text-primary-800 px-8 py-4 text-lg rounded-lg transform hover:scale-105">
        Call Us: (07) 3123 4567
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
      <div className="text-center">
        <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-time-line text-rose-500 text-xl" />
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">
          Flexible Scheduling
        </h3>
        <p className="text-gray-600 text-sm">
          Book online 24/7 or call during business hours
        </p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-gift-line text-rose-500 text-xl" />
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">
          First Visit Special
        </h3>
        <p className="text-gray-600 text-sm">
          Enjoy 15% off your first service with us
        </p>
      </div>
    </div>
  </div>
</section>
<Footer/>
</>
  );
};

export default Services;
