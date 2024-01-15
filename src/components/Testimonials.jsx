import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper styles
import { testimonials } from '@/data';

const Testimonials = () => {
  return (
        <section id="testimonials" class="testimonials section-bg">
            <div class="container" data-aos="fade-up">

              <div class="section-header">
                <h2>Testimonials</h2>
                <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti</p>
              </div>

              <Swiper class="slides-2 swiper" 
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
              >

              {
                testimonials.map((item, index) => {
                  return (
                    <SwiperSlide class="swiper-slide">
                      <div class="testimonial-wrap">
                        <div class="testimonial-item">
                          <img src={item.img.src} class="testimonial-img" alt="" />
                          <h3>{item.name}</h3>
                          <h4>{item.title}</h4>
                          <div class="stars">
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                          </div>
                          <p>
                            <i class="bi bi-quote quote-icon-left"></i>
                            {item.test}
                            <i class="bi bi-quote quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
                
              </Swiper>

            </div>
        </section>
  )
}

export default Testimonials