import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import { proTabs, proData } from '@/data'

const Projects = () => {
    // const [tabing, setTab] = useState(['true','false','false','false']);
    const [proTab, setProTab] = useState([true, false , false , false , false]);
    const [category, setCategory] = useState('all');


    const handleProTabs = (index) => {
      const newTabing = proTab.map((tab, id) => (id === index ? true: false));
      switch (index) {
        case 0: setCategory('all');
            break;
        case 1: setCategory('remodeling');
            break;
        case 2: setCategory('construction');
            break;
        case 3: setCategory('repairs');
            break;
        case 4: setCategory('design');
            break;
      }

      console.log(category);
      setProTab(newTabing);
      // alert('doing pro tab');
    }

  
  return (
    <section id="projects" className="projects">
            <div className="container" data-aos="fade-up">

              <div className="section-header">
                <h2>Our Projects</h2>
                <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto accusamus fugit aut qui distinctio</p>
              </div>

              <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">

                <ul className="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
                {
                  proTabs.map((item, index) => {
                    return (
                      <li key={index} style={{color: proTab[index] === true ? '#feb900':''}} onClick={() => handleProTabs(index)}>{item.name}</li>
                    )
                  })
                }
                </ul>
                
                <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

                {
                  category === 'all'? 
                  proData.map((item, index) => {
                    return (
                      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling" key={index}>
                        <div className="portfolio-content h-100">
                          <img src={item.img.src} className="img-fluid" alt="" />
                          <div className="portfolio-info">
                            <h4>{item.id}</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                            <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                            <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                          </div>
                        </div>
                      </div>
                    )
                  }): 
                  proData.filter((data) => data.category === category).map((item, index) => {
                    return (
                      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling" key={index}>
                        <div className="portfolio-content h-100">
                          <img src={item.img.src} className="img-fluid" alt="" />
                          <div className="portfolio-info">
                            <h4>{item.id}</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                            <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                            <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                          </div>
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

export default Projects