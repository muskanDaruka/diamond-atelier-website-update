import Image from 'next/image';
import shape from '../../public/images/Shapes/hundreadShapes.jpg'
import hugeshapes from '../../public/images/Shapes/shapes-banner.jpg'
  
  function Section() {
    const sections = [
        {
          title: "100+ Shapes",
          description: [
            "Yes, you read it right! Our artistic workshop delivers diamonds with our personal touch that brings undisputed elegance and customization to your jewelry.",
            "That’s not it. We can create diamonds of any shape imaginable within 30 days."
          ],
          media: { type: "image", src: shape, alt: "Shapes" },
          buttons: ["Other Shapes", "Shape History"]
        },
        {
          title: "30+ Fancy Colors",
          description: [
            "With years of experience and expertise in creating seamlessly authentic colored diamonds, Diamond Atelier has proudly built a successful track record of crafting one-of-a-kind diamonds in over 30 fancy colors.",
            "Be it any shade or tone, we’ve a built-in inventory to deliver you, your customized color within 20 days. What more could you ask for?"
          ],
          media: { type: "video", src: "/images/color3.mp4" },
          buttons: ["Fancy Colors", "Learn More"]
        },
        {
          title: "Matching Layout",
          description: [
            "We have calibrated matching layouts in the variations of 10 MM, starting from 10 cent all the way up to 99 cent. If you demand matching pairs of the same shape, color, clarity, MM, and cent, We can deliver exactly what you need.",
            "Be it a matching pair for earrings or set of 20 stones for a bracelet, we have got your wishlist covered."
          ],
          media: { type: "video", src: "/images/ml1.mp4" },
          buttons: ["Calibrated Layout", "Other Layout"]
        },
        {
          title: "Huge Availability",
          description: [
            "Being a pioneer in the industry, we bestow our clients with vast options to choose the right diamond. Our direct manufacturing access enables us to offer this service effortlessly and thus gives us a competitive edge."
          ],
          media: { type: "image", src: hugeshapes, alt: "Shapes" },
          buttons: ["Pointer(Star Melle)", "Size Chart"]
        }
      ];
    return (
      <>
        {sections.map((section, index) => (
          <div key={index} className="mx-auto min-w-screen-xl p-6 cursor-pointer">
            <h1 className="uppercase text-[#adafa7] font-ebgaramond font-medium text-2xl xl:text-6xl md:text-3xl text-center pb-4">
              {section.title}
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {section.media.type === "image" ? (
                <Image src={section.media.src} alt={section.media.alt} width={800} className="md:w-[500px] xl:w-[800px] object-cover rounded" />
              ) : (
                <video className="xl:w-full xl:h-full md:w-[500px] object-cover opacity-80" autoPlay muted loop>
                  <source src={section.media.src} type="video/mp4" />
                </video>
              )}
              <ul className="list-disc pl-5">
                {section.description.map((desc, idx) => (
                  <li key={idx} className="mt-4 text-md md:text-md xl:text-lg leading-relaxed font-montserrat">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center items-center gap-10 xl:p-4 p-2">
              {section.buttons.map((btn, idx) => (
                <button key={idx} className="bg-pink border font-montserrat xl:p-4 md:p-3 p-2 uppercase text-sm md:text-base xl:text-xl">{btn}</button>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  }
  
  export default Section;
  