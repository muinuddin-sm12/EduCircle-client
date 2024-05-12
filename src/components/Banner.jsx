import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slide_1 from '../assets/images/slide-1.png'
import slide_2 from '../assets/images/slide-2.png'
import slide_3 from '../assets/images/slide-3.png'
import Slide from './Slide';
const Banner = () => {
    return (
        <div className='max-w-[1536px]  mx-auto'>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
                <Slide image={slide_1} text='Gain strength and confidence through shared learning and feedback.'/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide image={slide_2} text='Join a community of learners - share, learn, and grow together!'/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide image={slide_3} text='Unlock your potential with interactive learning and peer feedback!'/>
            </SwiperSlide>
          </Swiper>
        </div>
      );
};

export default Banner;