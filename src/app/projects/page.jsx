"use client"
import React from 'react'
// import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import breadBackground from '../../../public/assets/img/breadcrumbs-bg.jpg';
import Projects from '@/components/Projects';

const page = () => {
  return (
    <main>
        <div class="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${breadBackground.src})`,backgroundSize:'cover'}}>
            <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

                <h2>Projects</h2>
                <ol>
                    <li><a href="index.html">Home</a></li>
                    <li>Projects</li>
                </ol>

            </div>
        </div>

        <Projects />
    </main>
  )
}

export default page