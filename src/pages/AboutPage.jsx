export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero / Overview */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-white/10 rounded-full">
              About Sabbey Feeds
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Nourishing Dairy Farms, <br className="hidden md:block" />
              Strengthening Rural Communities
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Since 2011, Sabbey Feeds has grown from a small village-focused
              manufacturer into a trusted cattle feed partner for leading dairy
              farmers across India—built on science, quality, and farmer-first
              relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <div className="h-1.5 w-20 bg-primary rounded-full mb-6" />
            <p className="text-slate-700 leading-relaxed mb-4">
              From our modest inception as a small-scale feed manufacturer in
              2011, catering to the nutritional needs of villages surrounding
              Doraha, we have embarked on a remarkable journey of growth and
              progress. Over the years, our dedication and commitment have
              propelled us to new heights. Today, we proudly serve as a leading
              provider of cattle feed to prominent dairy farmers spanning across
              more than five states throughout India.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our evolution has been marked by strategic partnerships and
              collaborations with esteemed professionals in the field. We work
              closely with world-class veterinarians, experienced nutritionists,
              reputable vitamin suppliers, and trusted dealers to ensure the
              highest standards of quality and efficacy in our products.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This transformative journey is a testament to our unwavering
              dedication to excellence and our steadfast commitment to meeting
              the evolving needs of our customers. As we continue to expand our
              horizons and innovate within the industry, we remain deeply rooted
              in our mission to provide superior quality feed solutions that
              contribute to the success and well-being of dairy farming
              communities across the nation.
            </p>
          </div>

          {/* Impact summary cards */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-primary/10 bg-primary/5 p-6">
              <h3 className="text-lg font-bold text-primary mb-2">
                Farmers We Serve
              </h3>
              <p className="text-slate-700">
                From villages near Doraha to dairy hubs across India, we now
                support leading dairy farmers in more than five states.
              </p>
            </div>
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
              <h3 className="text-lg font-bold text-amber-800 mb-2">
                Partnerships That Matter
              </h3>
              <p className="text-slate-700">
                Collaborations with veterinarians, nutritionists, vitamin
                suppliers, and dealers help us deliver consistently reliable and
                performance-driven feed.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Built on Trust
              </h3>
              <p className="text-slate-700">
                Many of the region&apos;s leading dairy farmers have been with
                us since the very beginning and continue to rely on Sabbey
                Feeds year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Impact on Dairy Farms
            </h2>
            <p className="text-slate-600">
              Real improvements in milk production, animal health, and farmer
              prosperity driven by better nutrition and continuous support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Major Achievements
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dairy farmers associated with us have recorded significant
                increases in milk production. Cattle producing 25 liters per day
                have reached 35 liters per day, with many farmers observing up
                to 40% higher milk yield.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Expansion &amp; Reach
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Starting with mash feed, Sabbey Feeds now also produces pellet
                feed, helping farmers achieve around 10% more milk production.
                Our in-house labs rigorously test raw materials and
                supplements to ensure consistent quality.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Customer Growth
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Most leading dairy farmers in our region have been connected
                with us from the very beginning and remain fully satisfied with
                both our products and our on-ground service support.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Community Engagement
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We regularly conduct seminars and knowledge-sharing sessions on
                advanced nutrition and technology. We also support initiatives
                like &quot;Khelo India&quot; by sponsoring football tournaments
                in neighboring villages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sabbey Feeds */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Why Dairy Farmers Choose Us
            </h2>
            <p className="text-slate-600">
              A complete approach to cattle nutrition that combines premium
              raw materials, scientific formulations, and real-world guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-slate-100 rounded-2xl p-6 bg-bg-light">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Premium Ingredients
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We source the finest ingredients, carefully selected for their
                nutritional value and quality, ensuring optimal feed
                formulation.
              </p>
            </div>

            <div className="border border-slate-100 rounded-2xl p-6 bg-bg-light">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Expert Formulations
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our team of experienced nutritionists develops feed formulas
                tailored to the specific needs of different livestock stages and
                production goals.
              </p>
            </div>

            <div className="border border-slate-100 rounded-2xl p-6 bg-bg-light">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Quality Assurance
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Stringent quality control measures are implemented at every step
                of the manufacturing process, guaranteeing consistent feed
                quality and safety.
              </p>
            </div>

            <div className="border border-slate-100 rounded-2xl p-6 bg-bg-light">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Customized Solutions
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every operation is unique. Our team works closely with farmers
                to design customized feed programs aligned with their herd size,
                resources, and long-term goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

