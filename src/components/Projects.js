import React ,{useState} from 'react';

// import portfolio_1 from '../assets/img/portfolio-1.jpg';
// import portfolio_2 from '../assets/img/portfolio-2.jpg';
// import portfolio_3 from '../assets/img/portfolio-3.jpg';
// import portfolio_4 from '../assets/img/portfolio-4.jpg';
// import portfolio_5 from '../assets/img/portfolio-5.jpg';
// import portfolio_6 from '../assets/img/portfolio-6.jpg';

const portfolio_1 = env.PUBLIC_URL + '/assets/img/portfolio-1.jpg';
const portfolio_2 = env.PUBLIC_URL + '/assets/img/portfolio-2.jpg';
const portfolio_3 = env.PUBLIC_URL + '/assets/img/portfolio-3.jpg';
const portfolio_4 = env.PUBLIC_URL + '/assets/img/portfolio-4.jpg';
const portfolio_5 = env.PUBLIC_URL + '/assets/img/portfolio-5.jpg';
const portfolio_6 = env.PUBLIC_URL + '/assets/img/portfolio-6.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('*');

  const projectsList = [
    {
      id: 1,
      category: 'first',
      image: portfolio_1,
      dataWowDelay: '0.1s',
      title: 'Sitecore Manage Services',
      description: 'Ongoing management and maintenance of Sitecore platform, ensuring optimal performance and uptime.',
    },
    {
      id: 2,
      category: 'second',
      dataWowDelay: '0.3s',
      image: portfolio_2,
      title: 'Sitecore Upgrade',
      description: 'Successfully upgraded to the latest Sitecore version, enhancing features and improving security.',
    },
    {
      id: 3,
      category: 'first',
      image: portfolio_3,
      dataWowDelay: '0.5s',
      title: 'Sitecore XM Cloud Migration',
      description: 'Migrated to Sitecore XM Cloud for better scalability and cloud-native capabilities.',
    },
    {
      id: 4,
      category: 'second',
      image: portfolio_4,
      dataWowDelay: '0.1s',
      title: 'Coveo Search Implementation',
      description: 'Integrated Coveo Search for advanced, AI-powered search capabilities, enhancing user experience and content discoverability.',
    },
    {
      id: 5,
      category: 'first',
      image: portfolio_5,
      dataWowDelay: '0.3s',
      title: 'Content Hub Integration',
      description: 'Seamlessly integrated Sitecore Content Hub, centralizing content management and streamlining workflows.',
    },
    {
      id: 6,
      category: 'second',
      image: portfolio_6,
      dataWowDelay: '0.5s',
      title: 'Audit and Revamping',
      description: 'Conducted a comprehensive site audit and revamping, addressing technical debt and improving overall site performance.',
    }
  ];

  const handleFilterChange = (filterCategory) => {
    setFilter(filterCategory);
  }

  return (
    <div className="container-xxl">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center">
            <span></span>Our Projects<span></span>
          </p>
          <h1 className="text-center mb-5">Recently Completed Projects</h1>
        </div>
        <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-12 text-center">
            <ul className="list-inline mb-5" id="portfolio-flters">
              <li 
              className={`mx-2 ${filter === '*'? 'active' : ''}`}
              onClick={()=> handleFilterChange('*')}
              >
                All
              </li>
              <li 
              className={`mx-2 ${filter === 'first'? 'active' : ''}`}
              onClick={()=> handleFilterChange('first')}
              >Web Design</li>
              <li 
              className={`mx-2 ${filter === 'second'? 'active' : ''}`}
              onClick={()=> handleFilterChange('second')}
              >
                Graphic Design
              </li>
            </ul>
          </div>
        </div>
        <div className="row g-4 portfolio-container">
          {projectsList.filter((project) => filter ==='*' || project.category === filter)
          .map((project)=>(
          <div key={project.id} className={`col-lg-4 col-md-6 portfolio-item ${project.category} wow fadeInUp`} data-wow-delay={project.dataWowDelay}>
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src={project.image} alt="Audit and Revamping"/>
                <div className="portfolio-overlay">
                  <a className="btn btn-square btn-outline-light mx-1" href={project.image} data-lightbox="portfolio">
                    <i className="fa fa-eye"></i>
                  </a>
                  <a className="btn btn-square btn-outline-light mx-1" href="/">
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div className="bg-light p-4">
                <p className="text-primary fw-medium mb-2">{project.title}</p>
                <h5 className="lh-base mb-0">{project.description}</h5>
              </div>
            </div>
          </div>))}
        </div>
      </div>
    </div>
  );
};

export default Projects;












