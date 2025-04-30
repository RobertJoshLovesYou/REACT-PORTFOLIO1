import { useEffect, useState } from "react";
import PortfolioCategory from "./PortfolioCategory";
import { PortfolioBranding, PortfolioDesign, PortfolioMobile, PortfolioReact, PortfolioAll } from './PortfolioData'
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [categoryData, setCategoryData] = useState([]);
  const list = [
    {
      id: 'all',
      title: ''
    },
    {
      id: 'branding',
      title: ''
    },
    {
      id: 'design',
      title: ''
    },
    {
      id: 'mobile',
      title: ''
    },
    {
      id: 'react',
      title: ''
    }
  ];
  useEffect(() => {
    switch (activeCategory) {
      case "all":
        setCategoryData(PortfolioAll);
        break;
        case "branding":
          setCategoryData(PortfolioBranding);
          break;
      case "design":
        setCategoryData(PortfolioDesign);
        break;
      case "mobile":
        setCategoryData(PortfolioMobile);
        break;
      case "react":
        setCategoryData(PortfolioReact);
        break;
      default:
        setCategoryData(PortfolioAll)
    }
  }, [activeCategory])
  return (
    <div id="portfolio" className="section dark2">
      <div className="container">
        <div className="section-title">
          <h1>My <span className="color-primary">Portfolio</span></h1>
          <p className="width70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum minima, deserunt in a asperiores error, nulla amet enim deleniti provident, optio et vero veritatis tempora minus ab quaerat officia dolor rem ex adipisci. Aut tempore eligendi et accusantium earum ipsa nam saepe, commodi impedit qui alias architecto, harum aliquam! Hic optio, ipsam eum repudiandae impedit laborum velit eligendi expedita dicta minima, facere repellat in. Cum est inventore tenetur eligendi mollitia voluptates quidem, nemo quo sequi molestiae laborum natus. Iste eaque molestias, sint aliquid nobis animi aspernatur ad dicta obcaecati provident expedita unde voluptatum soluta accusantium minus deleniti pariatur? Distinctio.</p>
        </div>
        <div className="portfolio-category">
          <ul>
            {list.map((item) => (<PortfolioCategory
              title={item.title}
              active={activeCategory === item.id}
              setActiveCategory={setActiveCategory}
              id={item.id} 
              key= {item.id}
            />))}
          </ul>
        </div>
        <div className="portfolio-items">
          {categoryData.map((d, index) => (
            <div className="portfolio-item" key={index}>
              <img src={d.img} alt={d.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;