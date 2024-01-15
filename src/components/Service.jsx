import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Services } from '@/data'

const Service = () => {
  return (
    <section id="services" class="services section-bg">
            <div class="container" data-aos="fade-up">

              <div class="section-header">
                <h2>Services</h2>
                <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
              </div>

              <div class="row gy-4">

              {
                Services.map((item, index) => {
                  return (

                    <div index={index} class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                      <div class="service-item  position-relative">
                        <div class="icon">
                          <i class={item.icon}></i>
                        </div>
                        <h3>{item.head}</h3>
                        <p>{item.content}</p>
                        <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
                      </div>
                    </div>
                  )
                })
              }
              </div>

            </div>
          </section>
  )
}

export default Service