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
        <div class="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${breadBackground.src})`,backgroundSize:'cover'}}>
            <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

                <h2>About</h2>
                <ol>
                    <li><a href="index.html">Home</a></li>
                    <li>About</li>
                </ol>

            </div>
        </div>

        <section id="about" class="about">
            <div class="container" data-aos="fade-up">

                <div class="row position-relative">

                <div class="col-lg-7 about-img" style={{backgroundImage:`url(${aboutBackground.src})`}}></div>

                <div class="col-lg-7">
                    <h2>Consequatur eius et magnam</h2>
                    <div class="our-story">
                    <h4>Est 1988</h4>
                    <h3>Our Story</h3>
                    <p>Inventore aliquam beatae at et id alias. Ipsa dolores amet consequuntur minima quia maxime autem. Quidem id sed ratione. Tenetur provident autem in reiciendis rerum at dolor. Aliquam consectetur laudantium temporibus dicta minus dolor.</p>
                    <ul>
                        <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
                        <li><i class="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in</span></li>
                        <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
                    </ul>
                    <p>Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in quo eveniet. Molestias in maxime doloremque.</p>

                    <div class="watch-video d-flex align-items-center position-relative">
                        <i class="bi bi-play-circle"></i>
                        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox stretched-link">Watch Video</a>
                    </div>
                    </div>
                </div>

                </div>

            </div>
        </section>

        <AltServices />

        <section id="team" class="team">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Our Team</h2>
          <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
        </div>

        <div class="row gy-5">
            
          {
            teams.map((item, index) => {
                return (
                    <div index={index} class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="500">
                        <div class="member-img">
                        <img src={item.img.src} class="img-fluid" alt=""></img>
                        <div class="social">
                            <a href="#"><i class="bi bi-twitter"></i></a>
                            <a href="#"><i class="bi bi-facebook"></i></a>
                            <a href="#"><i class="bi bi-instagram"></i></a>
                            <a href="#"><i class="bi bi-linkedin"></i></a>
                        </div>
                        </div>
                        <div class="member-info text-center">
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