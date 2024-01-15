import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
// import alt1 from '../../public/assets/img/alt-services.jpg';
import alt1 from '../../public/assets/img/alt-services.jpg';

import { altService } from '@/data';
const AltServices = () => {
  return (
        <section id="alt-services" className="alt-services">
            <div className="container" data-aos="fade-up">

              <div className="row justify-content-around gy-4">
                <div className="col-lg-6 img-bg" style={{backgroundImage: `url(${alt1.src})`}} data-aos="zoom-in" data-aos-delay="100"></div>

                <div className="col-lg-5 d-flex flex-column justify-content-center">
                  <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                  <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

                  {
                  altService.map((item, index) => {
                      return (
                        
                        <div key={index} className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                          <i className="  flex-shrink-0"></i>
                          <div>
                            <h4><a href="" className="stretched-link">{item.head}</a></h4>
                            <p>{item.content}</p>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              </div>

            </div>
        </section>
  )
}

export default AltServices