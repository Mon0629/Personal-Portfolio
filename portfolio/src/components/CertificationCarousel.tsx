import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';

const certifications = [
  { title: 'Google Cybersecurity Professional Certificate V2', id: 1, image: '/CyberSec.jpg' },
  { title: 'Basic Software Engineering', id: 2, image: '/basicSE.png' },
  { title: 'Intermediate Software Engineering', id: 3, image: '/intermediateSE.png' },
  { title: 'Advanced Software Engineering', id: 4, image: '/advancedSE.png' },
  { title: 'Java Programming NC III', id: 5, image: '/Tesda.jpg' },
];

export default function CertificationCarousel() {
  return (
    <section
      id="certifications"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-4">
        <h1 className='text-medium mb-0 tracking-tighter font-[Montserrat]  mt-15'>Certifications</h1>
        <Swiper
  modules={[Navigation, EffectCoverflow]}
  slidesPerView="auto"
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
  className="w-full max-w-[1200px] h-[600px]"
>
        {certifications.map((cert) => (
          <SwiperSlide
              key={cert.id}
              className="!w-[700px] flex justify-center items-center"
          >
            <div className="relative p-5 bg-black border text-white shadow-xl rounded-xl w-full h-[550px] flex items-center justify-center text-xl font-bold text-center px-6 overflow-hidden">
                  <img src={cert.image} className="w-full h-full object-cover rounded-xl" alt={cert.title} />
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md px-4 py-2 rounded-t-xl text-white text-sm font-semibold text-center">
                  {cert.title}
                  </div>
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
