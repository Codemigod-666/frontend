"use client";
import Image from "next/image";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
import {
  heroCarousel,
  constructions,
  Services,
  altService,
  navTabs,
  tabsData,
  blogData,
  proTabs,
  proData,
  testimonials,
} from "@/data";
import alt1 from "../../public/assets/img/alt-services.jpg";
import Testimonials from "@/components/Testimonials";
import AltServices from "@/components/AltServices";
import Service from "@/components/Service";
import Projects from "@/components/Projects";
export default function Home() {
  const [tabing, setTab] = useState(["true", "false", "false", "false"]);
  const [proTab, setProTab] = useState([true, false, false, false, false]);
  const [category, setCategory] = useState("all");

  const handleProTabs = (index) => {
    const newTabing = proTab.map((tab, id) => (id === index ? true : false));
    switch (index) {
      case 0:
        setCategory("all");
        break;
      case 1:
        setCategory("remodeling");
        break;
      case 2:
        setCategory("construction");
        break;
      case 3:
        setCategory("repairs");
        break;
      case 4:
        setCategory("design");
        break;
    }

    console.log(category);
    setProTab(newTabing);
    // alert('doing pro tab');
  };

  const handleTabing = (tabId) => {
    const newTabing = tabing.map((tab, id) =>
      id === tabId ? "true" : "false"
    );

    setTab(newTabing);
    //  newTabing.forEach(item => console.log(item));
  };
  return (
    <div className=" bg-dark position-relative " style={{ zIndex: "0" }}>
      <div className="hero">
        <div>
          <div className="info text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h2 data-aos="fade-down">
                  Welcome to <span>PCS</span>
                </h2>
                <p data-aos="fade-up">
                  "Welcome to PCS, where your vision finds its perfect
                  foundation. With our expertise and dedication, we transform
                  your dreams into architectural marvels. Experience the synergy
                  of creativity and craftsmanship. Your vision, our foundation –
                  building brilliance together."
                </p>
                <button
                  data-aos="fade-up"
                  href="#get-started"
                  className="btn btn-outline-warning rounded-5 px-5 py-3 mt-3 text-white fw-bold"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        cssMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Autoplay, Pagination, Navigation]}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {heroCarousel.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "100vw",
              height: "100vh",
              filter: "grayscale(0.2)",
              opacity: "0.2",
              background: `url(${item.img.src}) center`,
              backgroundPosition: "contain",
            }}
          ></SwiperSlide>
        ))}
      </Swiper>

      <main>
        <section id="constructions" className="constructions bg-white">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Constructions</h2>
              <p>
                Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam
                porro nihil id ratione ea sunt quis dolorem dolore earum
              </p>
            </div>

            <div className="row gy-4">
              {constructions.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="card-item">
                      <div className="row">
                        <div className="col-xl-5">
                          <div
                            className="card-bg"
                            style={{
                              width: "100%",
                              height: "100%",
                              backgroundImage: `url(${item.img.src})`,
                              backgroundSize: "cover",
                            }}
                          ></div>
                        </div>
                        <div className="col-xl-7 d-flex align-items-center">
                          <div className="card-body">
                            <h4 className="card-title">{item.heading}</h4>
                            <p>{item.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Service />
        <AltServices />

        <section id="features" className="features section-bg">
          <div className="container" data-aos="fade-up">
            <ul className="nav nav-tabs row  g-2 d-flex">
              {navTabs.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="nav-item col-3"
                    onClick={() => handleTabing(index)}
                  >
                    <a
                      className="nav-link"
                      style={{
                        borderColor: tabing[index] === "true" ? "#feb900" : "",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        borderBottom: `4px solid`,
                        borderColor:
                          tabing[index] === "true" ? "#feb900" : "#e2e4e6",
                      }}
                    >
                      <h4
                        style={{
                          color: tabing[index] === "true" ? "#feb900" : "",
                        }}
                      >
                        {item.name}
                      </h4>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="tab-content">
              {tabsData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="tab-pane"
                    style={{
                      display: tabing[index] === "true" ? "block" : "none",
                    }}
                    id="tab-1"
                  >
                    <div className="row">
                      <div
                        className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <h3>{item.title}</h3>
                        <p className="fst-italic">{item.subtitle}</p>
                        <ul>
                          <li>
                            <i className="bi bi-check2-all"></i> Ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                          </li>
                          <li>
                            <i className="bi bi-check2-all"></i> Duis aute irure
                            dolor in reprehenderit in voluptate velit.
                          </li>
                          <li>
                            <i className="bi bi-check2-all"></i> Ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate trideta
                            storacalaperda mastiro dolore eu fugiat nulla
                            pariatur.
                          </li>
                        </ul>
                      </div>
                      <div
                        className="col-lg-6 order-1 order-lg-2 text-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <img src={item.img.src} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Projects />
        <Testimonials />

        <section id="recent-blog-posts" className="recent-blog-posts">
          <div className="container" data-aos="fade-up">
            <div className=" section-header">
              <h2>Recent Blog Posts</h2>
              <p>
                In commodi voluptatem excepturi quaerat nihil error autem
                voluptate ut et officia consequuntu
              </p>
            </div>

            <div className="row gy-5">
              {blogData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="post-item position-relative h-100">
                      <div className="post-img position-relative overflow-hidden">
                        <img src={item.img.src} className="img-fluid" alt="" />
                        <span className="post-date">{item.date}</span>
                      </div>

                      <div className="post-content d-flex flex-column">
                        <h3 className="post-title">{item.title}</h3>

                        <div className="meta d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-person"></i>{" "}
                            <span className="ps-2">{item.name}</span>
                          </div>
                          <span className="px-3 text-black-50">/</span>
                          <div className="d-flex align-items-center">
                            <i className="bi bi-folder2"></i>{" "}
                            <span className="ps-2">{item.category}</span>
                          </div>
                        </div>

                        <hr></hr>

                        <a
                          href="blog-details.html"
                          className="readmore stretched-link"
                        >
                          <span>Read More</span>
                          <i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
