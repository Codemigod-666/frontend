"use client"
import React from 'react'
// import styles from './page.module.css'
import breadBackground from '../../../public/assets/img/breadcrumbs-bg.jpg';
import aboutBackground from '../../../public/assets/img/about.jpg';

import 'bootstrap/dist/css/bootstrap.css'
import AltServices from '@/components/AltServices';
import Testimonials from '@/components/Testimonials';
import { teams } from '@/data';
const page = () => {
  return (
    <main>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${breadBackground.src})`,backgroundSize:'cover'}}>
            <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

                <h2>About</h2>
                <ol>
                    <li><a href="index.html">Home</a></li>
                    <li>About</li>
                </ol>

            </div>
        </div>

        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="row position-relative">

                <div className="col-lg-7 about-img" style={{backgroundImage:`url(${aboutBackground.src})`}}></div>

                <div className="col-lg-7">
                    <h2>Consequatur eius et magnam</h2>
                    <div className="our-story">
                    <h4>Est 1988</h4>
                    <h3>Our Story</h3>
                    <p>Inventore aliquam beatae at et id alias. Ipsa dolores amet consequuntur minima quia maxime autem. Quidem id sed ratione. Tenetur provident autem in reiciendis rerum at dolor. Aliquam consectetur laudantium temporibus dicta minus dolor.</p>
                    <ul>
                        <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
                        <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in</span></li>
                        <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
                    </ul>
                    <p>Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in quo eveniet. Molestias in maxime doloremque.</p>

                    <div className="watch-video d-flex align-items-center position-relative">
                        <i className="bi bi-play-circle"></i>
                        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox stretched-link">Watch Video</a>
                    </div>
                    </div>
                </div>

                </div>

            </div>
        </section>

        <AltServices />

        <section id="team" className="team">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Our Team</h2>
          <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
        </div>

        <div className="row gy-5">
            
          {
            teams.map((item, index) => {
                return (
                    <div index={index} className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="500">
                        <div className="member-img">
                        <img src={item.img.src} className="img-fluid" alt=""></img>
                        <div className="social">
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                        </div>
                        </div>
                        <div className="member-info text-center">
                        <h4>{item.name}</h4>
                        <span>{item.designation}</span>
                        <p>{item.description}</p>
                        </div>
                    </div>
                )

            })
          }

        </div>

      </div>
    </section>

        <Testimonials />
    </main>
  )
}

export default page