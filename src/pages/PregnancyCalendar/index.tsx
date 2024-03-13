import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import Card from './components/Card'
import { pregnancyCalendarData } from './data'
import { Section } from '../../components'

const PregnancyCalendar = () => (
  <Section>
    <h1 className="text-center font-bold text-xl mb-4 md:mb-16">
      Жүктілік күнтізбесі
    </h1>
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {pregnancyCalendarData.map((period) => (
        <SwiperSlide>
          <Card {...period} />
        </SwiperSlide>
      ))}
    </Swiper>
  </Section>
)

export default PregnancyCalendar
