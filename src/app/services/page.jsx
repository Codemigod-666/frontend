"use client"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import breadBackground from '../../../public/assets/img/breadcrumbs-bg.jpg';
import Service from '@/components/Service';
import AltServices from '@/components/AltServices';
import Testimonials from '@/components/Testimonials';
import AltServices2 from '@/components/AltServices2';

const page = () => {
  return (
    <main>
      <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: `url(${breadBackground.src})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

          <h2>Services</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Services</li>
          </ol>

        </div>
      </div>

      <Service />
      <AltServices2 />
      <Testimonials />
    </main>

  )
}

export default page;