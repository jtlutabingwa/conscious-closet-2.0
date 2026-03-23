import Image from "next/image";
 
export default function Founder() {
  return (
    <div className="max-w-3xl mx-auto mt-10 mb-10 bg-brand-linen rounded-xl p-8 shadow-md">
      <div className="flex flex-wrap justify-center items-center gap-8">
        <div className="w-72 h-auto rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/holly.JPG"
            alt="Photo of Holly Needham, Founder"
            width={300}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
        <div className="max-w-md text-left">
          <h2 className="text-2xl font-bold text-brand-brown mb-3">Holly Needham</h2>
          <p className="text-lg leading-relaxed mb-4">
            Holly founded <strong>The Conscious Closet</strong> out of a passion for sustainability
            and fashion. Witnessing firsthand the environmental toll of fast fashion, she set out to
            create a space where people could learn, engage, and take action. Holly is currently
            studying Fashion at the University of North Carolina at Greensboro. She has also decided
            to Minor in Business to get a better understanding of the different business aspects that
            influence the fashion industry. Through education, community events, and curated resources,
            Holly aims to empower individuals to make more mindful wardrobe choices.
          </p>
          <p className="italic text-gray-600">
            &ldquo;I believe change starts with awareness—and even small steps like reusing or
            rethinking what we wear can lead to a massive shift. The Conscious Closet is more than
            a site—it&apos;s a movement for mindful living.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
