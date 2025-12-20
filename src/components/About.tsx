import Footer from "./Footer";
import Header from "./Header";




const About = () => {
  return (
    
 <>
<Header/>
 <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0">
    <img
      alt="About E'LAN BEAUTY"
      className="w-full h-full object-cover object-center"
      src="https://static.readdy.ai/image/42cabbbc9f59707019254de677c0f30c/d031f70c97eb171af241253daa953bfe.png"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
  </div>
  <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
      Our Story
    </h1>
    <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
      Where passion for beauty meets dedication to excellence, creating
      extraordinary experiences for every client
    </p>
  </div>
</section>
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6">
            The E'LAN BEAUTY Journey
          </h2>
          <div className="w-24 h-px bg-rose-400 mb-8" />
        </div>
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            Founded with a vision to redefine luxury beauty experiences in
            Australia, E'LAN BEAUTY began as a dream to create a sanctuary where
            artistry, elegance, and personal care converge.
          </p>
          <p>
            Our journey started with a simple belief: that every individual
            deserves to feel beautiful, confident, and pampered. This philosophy
            has guided us in creating not just a beauty salon, but a destination
            where transformation happens from the inside out.
          </p>
          <p>
            Today, with our two stunning locations in Regents Park and Nundah,
            we continue to set new standards in luxury beauty services,
            combining traditional techniques with innovative treatments to
            deliver exceptional results.
          </p>
          <p>
            At E'LAN BEAUTY, we don't just provide services – we craft
            experiences that celebrate your unique beauty and leave you feeling
            renewed, refreshed, and radiant.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            alt="E'LAN BEAUTY Story"
            className="w-full h-[600px] object-cover object-center"
            src="https://public.readdy.ai/ai/img_res/34b835c1e086d944b2880c0bec878330.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-rose-500 mb-2">5+</div>
            <div className="text-sm text-gray-600">Years of Excellence</div>
          </div>
        </div>
        <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-rose-500 mb-2">2000+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-gradient-to-b from-rose-50/30 to-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6">
        Our Mission &amp; Vision
      </h2>
      <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Guided by purpose and driven by passion, we're committed to excellence
        in everything we do
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform hover:scale-105 transition-all duration-300">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-heart-line text-rose-500 text-2xl" />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4">
            Our Mission
          </h3>
          <div className="w-16 h-px bg-rose-400 mx-auto" />
        </div>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            To provide exceptional beauty experiences that enhance natural
            beauty, boost confidence, and create lasting memories for every
            client who walks through our doors.
          </p>
          <p>
            We are committed to using only the finest products, employing
            skilled artisans, and maintaining the highest standards of hygiene
            and professionalism in all our services.
          </p>
          <p>
            Our mission extends beyond beauty treatments – we aim to create a
            sanctuary where clients can escape, relax, and emerge feeling their
            absolute best.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform hover:scale-105 transition-all duration-300">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-eye-line text-rose-500 text-2xl" />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4">
            Our Vision
          </h3>
          <div className="w-16 h-px bg-rose-400 mx-auto" />
        </div>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            To become Australia's most celebrated luxury beauty destination,
            known for our innovative treatments, exceptional service, and
            transformative experiences.
          </p>
          <p>
            We envision a future where E'LAN BEAUTY sets the gold standard for
            luxury beauty services, inspiring confidence and celebrating the
            unique beauty of every individual.
          </p>
          <p>
            Through continuous innovation and unwavering dedication to
            excellence, we aim to expand our reach while maintaining the
            intimate, personalized service that defines us.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6">
        Our Core Values
      </h2>
      <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        The principles that guide everything we do and shape every interaction
        with our valued clients
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="group text-center p-8 rounded-2xl hover:bg-rose-50 transition-all duration-300 transform hover:scale-105">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-200 transition-colors">
          <i className="ri-star-line text-rose-500 text-2xl" />
        </div>
        <h3 className="font-semibold text-xl text-gray-800 mb-4">Excellence</h3>
        <p className="text-gray-600 leading-relaxed">
          We pursue perfection in every treatment, using premium products and
          advanced techniques to deliver outstanding results.
        </p>
      </div>
      <div className="group text-center p-8 rounded-2xl hover:bg-rose-50 transition-all duration-300 transform hover:scale-105">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-200 transition-colors">
          <i className="ri-user-heart-line text-rose-500 text-2xl" />
        </div>
        <h3 className="font-semibold text-xl text-gray-800 mb-4">
          Personalization
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Every client is unique, and we tailor our services to meet individual
          needs, preferences, and beauty goals.
        </p>
      </div>
      <div className="group text-center p-8 rounded-2xl hover:bg-rose-50 transition-all duration-300 transform hover:scale-105">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-200 transition-colors">
          <i className="ri-shield-check-line text-rose-500 text-2xl" />
        </div>
        <h3 className="font-semibold text-xl text-gray-800 mb-4">Integrity</h3>
        <p className="text-gray-600 leading-relaxed">
          We operate with honesty, transparency, and ethical practices, building
          trust through consistent, reliable service.
        </p>
      </div>
      <div className="group text-center p-8 rounded-2xl hover:bg-rose-50 transition-all duration-300 transform hover:scale-105">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-200 transition-colors">
          <i className="ri-leaf-line text-rose-500 text-2xl" />
        </div>
        <h3 className="font-semibold text-xl text-gray-800 mb-4">
          Sustainability
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We're committed to eco-friendly practices, using sustainable products
          and minimizing our environmental impact.
        </p>
      </div>
      <div className="group text-center p-8 rounded-2xl hover:bg-rose-50 transition-all duration-300 transform hover:scale-105">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-200 transition-colors">
          <i className="ri-lightbulb-line text-rose-500 text-2xl" />
        </div>
        <h3 className="font-semibold text-xl text-gray-800 mb-4">Innovation</h3>
        <p className="text-gray-600 leading-relaxed">
          We stay at the forefront of beauty trends and technologies,
          continuously evolving our services and techniques.
        </p>
      </div>
      <div className="group text-center p-8 rounded-2xl hover:bg-rose-50 transition-all duration-300 transform hover:scale-105">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-200 transition-colors">
          <i className="ri-team-line text-rose-500 text-2xl" />
        </div>
        <h3 className="font-semibold text-xl text-gray-800 mb-4">Community</h3>
        <p className="text-gray-600 leading-relaxed">
          We believe in giving back to our community and creating a positive
          impact beyond our salon walls.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-gradient-to-b from-white to-rose-50/30">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6">
        Meet Our Expert Team
      </h2>
      <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Our passionate team of beauty professionals is dedicated to bringing out
        your natural radiance
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            alt="Isabella Chen"
            className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-110"
            src="https://public.readdy.ai/ai/img_res/630b522217fda334c5e77fb5c6f41746.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-xl text-gray-800 mb-2">
            Isabella Chen
          </h3>
          <p className="text-rose-500 font-medium mb-4">
            Founder &amp; Creative Director
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            With over 15 years in the beauty industry, Isabella founded E'LAN
            BEAUTY with a vision to create transformative experiences.
          </p>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800 text-sm">Specialties:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs">
                Business Leadership
              </span>
              <span className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs">
                Beauty Innovation
              </span>
              <span className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs">
                Client Relations
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            alt="Sophie Martinez"
            className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-110"
            src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20confident%20Latina%20woman%20beauty%20specialist%20in%20elegant%20uniform%2C%20warm%20professional%20smile%2C%20luxury%20spa%20background%20with%20soft%20lighting%2C%20expert%20aesthetician%20headshot&width=400&height=500&seq=team2&orientation=portrait"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-xl text-gray-800 mb-2">
            Sophie Martinez
          </h3>
          <p className="text-rose-500 font-medium mb-4">Senior Aesthetician</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Sophie brings artistry and precision to every facial treatment,
            specializing in advanced skincare techniques.
          </p>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800 text-sm">Specialties:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs">
                Advanced Facials
              </span>
              <span className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs">
                Anti-Aging
              </span>
              <span className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs">
                Skin Analysis
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            alt="Emma Thompson"
            className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-110"
            src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20stylish%20blonde%20woman%20hair%20stylist%20in%20chic%20salon%20attire%2C%20confident%20expression%2C%20luxury%20hair%20salon%20background%20with%20professional%20lighting%2C%20master%20stylist%20headshot&width=400&height=500&seq=team3&orientation=portrait"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-xl text-gray-800 mb-2">
            Emma Thompson
          </h3>
          <p className="text-rose-500 font-medium mb-4">Master Hair Stylist</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Emma's creative vision and technical expertise have made her one of
            Australia's most sought-after hair artists.
          </p>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800 text-sm">Specialties:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs">
                Color Artistry
              </span>
              <span className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs">
                Precision Cuts
              </span>
              <span className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs">
                Hair Treatments
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            alt="Aria Patel"
            className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-110"
            src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20elegant%20Indian%20woman%20nail%20artist%20in%20sophisticated%20salon%20uniform%2C%20artistic%20hands%20visible%2C%20luxury%20nail%20salon%20background%20with%20soft%20lighting%2C%20specialist%20headshot&width=400&height=500&seq=team4&orientation=portrait"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-xl text-gray-800 mb-2">
            Aria Patel
          </h3>
          <p className="text-rose-500 font-medium mb-4">Nail Art Specialist</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Aria transforms nails into works of art, combining traditional
            techniques with contemporary design trends.
          </p>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800 text-sm">Specialties:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs">
                Nail Art
              </span>
              <span className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs">
                Gel Extensions
              </span>
              <span className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs">
                Luxury Manicures
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-16">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
        <h3 className="font-serif text-2xl text-gray-800 mb-4">
          Join Our Team
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Are you passionate about beauty and excellence? We're always looking
          for talented professionals to join our growing team.
        </p>
        <button className="bg-rose-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-600 transition-colors">
          View Career Opportunities
        </button>
      </div>
    </div>
  </div>
</section>
<Footer/>
 </>

  );
};

export default About;
