import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Services } from '@/data'

const Service = () => {
  return (
    <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">

              <div className="section-header">
                <h2>Services</h2>
                <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
              </div>

              <div className="row gy-4">

              {
                Services.map((item, index) => {
                  return (

                    <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                      <div className="service-item  position-relative">
                        <div className="icon">
                          <i className={item.icon}></i>
                        </div>
                        <h3>{item.head}</h3>
                        <p>{item.content}</p>
                        <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
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