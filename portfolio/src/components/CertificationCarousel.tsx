import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';

const certifications = [
  { title: 'AWS Certified', id: 1 },
  { title: 'Google Cloud', id: 2 },
  { title: 'Microsoft Azure', id: 3 },
  { title: 'React Developer', id: 4 },
  { title: 'Node.js Expert', id: 5 },
];

export default function CertificationCarousel() {
  return (
    <section id="certifications" className="min-h-screen w-full flex flex-col items-center justify-center bg-black">
        <h1 className='text-medium mb-0 tracking-tighter font-[Montserrat]  mt-15'>Certifications</h1>
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        slidesPerView={3}
        centeredSlides={true}
        navigation
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="w-[80%] max-w-6xl h-[500px]"
      >
        {certifications.map((cert) => (
          <SwiperSlide key={cert.id}>
            <div className="bg-gray-800 text-white shadow-xl rounded-xl h-full flex items-center justify-center text-xl font-bold text-center px-6">
              {cert.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important; /* Makes the arrow color white */
        }
      `}</style>
    </section>
  );
}
