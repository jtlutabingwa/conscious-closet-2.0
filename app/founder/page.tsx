import Image from "next/image";
 
export default function Founder() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-16 pb-12 text-center">
        <p className="animate-fade-up text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">The Visionary</p>
        <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-5xl font-bold text-brand-darkest mb-4">
          Meet the Founder
        </h2>
        <div className="section-divider mt-4" />
      </section>
 
      {/* Founder Content */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <div className="modern-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-64 md:w-80 shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/holly.JPG"
                  alt="Holly Needham, Founder of The Conscious Closet"
                  width={320}
                  height={420}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest/20 to-transparent" />
              </div>
            </div>
 
            <div className="text-left">
              <h3 className="font-display text-3xl font-bold text-brand-brown mb-2">Holly Needham</h3>
              <p className="text-accent-green font-medium text-sm mb-6 uppercase tracking-wider">Founder & Creative Director</p>
 
              <p className="text-brand-text/70 leading-relaxed mb-5">
                Holly founded <strong className="text-brand-darkest">The Conscious Closet</strong> out of a deep passion for sustainability and fashion. Witnessing firsthand the environmental toll of fast fashion, she set out to create a space where people could learn, engage, and take meaningful action.
              </p>
              <p className="text-brand-text/70 leading-relaxed mb-5">
                Currently studying Fashion at the University of North Carolina at Greensboro with a Minor in Business, Holly brings both creative vision and strategic thinking to the sustainable fashion movement. Through education, community events, and curated resources, she aims to empower individuals to make more mindful wardrobe choices.
              </p>
 
              <div className="bg-accent-green-pale rounded-xl p-6 border-l-4 border-accent-green mt-6">
                <p className="font-display italic text-brand-text/70 leading-relaxed">
                  &ldquo;I believe change starts with awareness — and even small steps like reusing or rethinking what we wear can lead to a massive shift. The Conscious Closet is more than a site — it&apos;s a movement for mindful living.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 






































