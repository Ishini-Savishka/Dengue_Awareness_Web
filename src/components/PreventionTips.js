import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Video from './video';
import $ from 'jquery'; 
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const PreventionTips = () => {
  useEffect(() => {
    const handleNextClick = () => {
      let lists = document.querySelectorAll('.item');
      if (lists.length > 0) {
        document.getElementById('slide').appendChild(lists[0]);
      }
    };

    const handlePrevClick = () => {
      let lists = document.querySelectorAll('.item');
      if (lists.length > 0) {
        document.getElementById('slide').prepend(lists[lists.length - 1]);
      }
    };

    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    if (nextButton && prevButton) {
      nextButton.addEventListener('click', handleNextClick);
      prevButton.addEventListener('click', handlePrevClick);
    }

    return () => {
      if (nextButton && prevButton) {
        nextButton.removeEventListener('click', handleNextClick);
        prevButton.removeEventListener('click', handlePrevClick);
      }
    };
  }, []);

  useEffect(() => {
    // Your provided JavaScript code here
    const CURRENT_REGEX = /current_(\d+)/g;

    const handleControlsClick = (e) => {
      // Your logic here
      const $this = $(e.target);
      const $carousel = $this.closest('.carousel');

      let index = 0;
      const length = $carousel.find('ul.slides > li').length;

      const current_index_result = CURRENT_REGEX.exec($carousel.attr('class'));
      if (current_index_result) {
        index = parseInt(current_index_result[1]);
      }

      $carousel.removeClass(function (index, cls) {
        return (cls.match(CURRENT_REGEX) || []).join(' ');
      });

      if ($this.is('.control_next')) {
        index++;
      } else if ($this.is('.control_prev')) {
        index--;
      } else {
        index = $this.index();
      }

      if (index < 0) index = length - 1;
      else if (index >= length) index = 0;

      $carousel.addClass('current_' + index);
    };

    // Adding event listener using jQuery
    $(document).on('click', 'ul.controls > li, .control_prev, .control_next', handleControlsClick);

    // Cleanup: Remove event listener when the component unmounts
    return () => {
      $(document).off('click', 'ul.controls > li, .control_prev, .control_next', handleControlsClick);
    };
  }, []); // Run this effect only once on initial render

  // The rest of your JSX code
  return (
    <div>
      <Navbar />
      <div className="prevent-section-wrapper">

      <div className="prevent-container">
        <div className="container">
          <div id="slide">
            <div class="item" style={{ backgroundImage:'url(https://buffaloexterminators.com/assets/images/mosquitos-exterminator.jpg)'}}>
                <div class="content">
                    <div class="name">A Guide to Stop Mosquito Breeding and Safeguard Your Space</div>
                    <br></br>
                    <button>Read more</button>
                </div>
            </div>
            <div class="item" style={{ backgroundImage:'url(https://www.organicsoul.com/wp-content/uploads/The-Strongest-Non-Toxic-Mosquito-Repellant.jpg)'}}>
                <div class="content">
                    <div class="name">A Guide to Stop Mosquito Breeding and Safeguard Your Space</div>
                    <br></br>
                    <button>Read more</button>
                </div>
            </div>
            <div class="item" style={{ backgroundImage:'url(https://cdnph.upi.com/svc/sv/i/1091537286258/2018/1/15372886161597/Drug-compounds-prevent-mosquitoes-malaria-infection.jpg)'}}>
                <div class="content">
                    <div class="name">A Guide to Stop Mosquito Breeding and Safeguard Your Space</div>
                    <br></br>
                    <button>Read more</button>
                </div>
            </div>
            <div class="item" style={{ backgroundImage:'url(https://as1.ftcdn.net/v2/jpg/02/72/83/12/1000_F_272831289_wPJomdwvN7aM64ZaXRJgzDA3u5hnUDaH.jpg)'}}>
                <div class="content">
                    <div class="name">A Guide to Stop Mosquito Breeding and Safeguard Your Space</div>
                    <br></br>
                    <button>Read more</button>
                </div>
            </div>
            <div class="item" style={{ backgroundImage:'url(https://as2.ftcdn.net/v2/jpg/01/14/30/97/1000_F_114309799_Ozk1qKU2VK6PQ46YGS4FfRWGfW8Ppfy3.jpg)'}}>
                <div class="content">
                    <div class="name">A Guide to Stop Mosquito Breeding and Safeguard Your Space</div>
                    <br></br>
                    <button>Read more</button>
                </div>
            </div>
            <div class="item" style={{ backgroundImage:'url(https://t4.ftcdn.net/jpg/05/99/87/27/240_F_599872718_ZkN1Y0XtiSU8QnBlFQyBi8P5Atc2y31C.jpg)'}}>
                <div class="content">
                    <div class="name">A Guide to Stop Mosquito Breeding and Safeguard Your Space</div>
                    <br></br>
                    <button>Read more</button>
                </div>
            </div>
        </div>
        <div className="buttons">
            <button id="prev">
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button id="next">
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>
      </div>
      <br></br>
      <Video />
      <h1 style={{ marginLeft: '450px', marginTop:'20px'}}>Ways to Avoid Dengue Fever</h1>
<div class="slide-container">
  <div class="carousel current_0 carousel_multi">
    <ul class="slides">
      <li class="slide slide_0">
        <img src="https://th.bing.com/th/id/OIP.9QRjvho9p4UoulY83uvo9QHaHa?rs=1&pid=ImgDetMain" />
        <div class="content">
          <h2>Reduce Mosquito Habitat:</h2>
          <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
        </div>
        <br></br>
        <div class="content">
          <h2>Stay in well-screened houses:</h2>
          <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
        </div>
        <div class="slide_clear">
        </div>
      </li>
      <li class="slide slide_1">
        <img src="https://th.bing.com/th/id/R.1623d87a82dffd1581c69948566411f0?rik=4jaVebNcO1%2fttg&pid=ImgRaw&r=0" />
        <div class="content">
          <h2>Reduce Mosquito Habitat:</h2>
          <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </div>
        <br></br>
        <div class="content">
          <h2>Stay in well-screened houses:</h2>
          <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="slide_clear">
        </div>
      </li>      
      <li class="slide slide_2">
        <img src="https://floridaroaduip.co.za/site/wp-content/uploads/2018/03/fb32e505-9966-469a-9ff1-136b2e300898-600x600.jpg" />
        <div class="content">
          <h2>Reduce Mosquito Habitat:</h2>
          <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </div>
        <br></br>
        <div class="content">
          <h2>Stay in well-screened houses:</h2>
          <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="slide_clear">
        </div>
      </li>      
      
    </ul>
    
    <div class="control_prev">&lt;</div>
    <div class="control_next">&gt;</div>
    <ul class="controls">
      <li class="control_0"></li>
      <li class="control_1"></li>
      <li class="control_2"></li>
    </ul>
  </div>
</div>

<br></br>

<div class="slide-container">
  <div class="carousel current_0 carousel_multi">
    <ul class="slides">
      <li class="slide slide_0">
        <img src="https://th.bing.com/th/id/OIP.LoHYUYioEE8rdzl9BOnxkQHaEK?rs=1&pid=ImgDetMain" />
        <div class="content">
          <h2>Sleep under Mosquito net:</h2>
          <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
        </div>
        <br></br>
        <div class="content">
          <h2>Do not let water stagnate anywhere:</h2>
          <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
        </div>
        <div class="slide_clear">
        </div>
      </li>
      <li class="slide slide_1">
        <img src="https://www.essentialhomeandgarden.com/wp-content/uploads/2020/02/mosquito-larvae-in-wire-water.jpg" />
        <div class="content">
          <h2>Sleep under Mosquito net:</h2>
          <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </div>
        <br></br>
        <div class="content">
          <h2>Do not let water stagnate anywhere:</h2>
          <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="slide_clear">
        </div>
      </li>      
      <li class="slide slide_2">
        <img src="https://cuticahealth.com/storage/3-18.jpg" />
        <div class="content">
          <h2>Sleep under Mosquito net:</h2>
          <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </div>
        <br></br>
        <div class="content">
          <h2>Do not let water stagnate anywhere:</h2>
          <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="slide_clear">
        </div>
      </li>      
      
    </ul>
    
    <div class="control_prev">&lt;</div>
    <div class="control_next">&gt;</div>
    <ul class="controls">
      <li class="control_0"></li>
      <li class="control_1"></li>
      <li class="control_2"></li>
    </ul>
  </div>
</div>  
<h1 style={{ marginLeft: '450px', marginTop:'20px'}}>Dengue Fever Prevention Clips</h1>
<p style={{ marginLeft: '450px', marginTop:'20px',textAlign:'center'}}className="work-text">
        Dengue is the most widely distributed and rapidly spreading 
        mosquito-borne viral disease in the world, fuelled by climate 
        change, rapid urbanization and population growth. Dengue is 
        classified by the World Health Organization as one of the top 
        ten threats to public health.
        </p>
        <Carousel>
      {/* First Slide */}
      <Carousel.Item>
        <Container>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://2.bp.blogspot.com/-L5jZK_MylQc/WH3bukiAABI/AAAAAAAANgI/1POfy7yqpvgKl4Qs0b5kFPBE3atH7XwFwCK4B/s640/mos_1478175558.jpg"
                  alt="First slide"
                />
                <Card.Body>
                  <Card.Title>First Card Title 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://th.bing.com/th/id/OIP.DMUw7rrkQZxbpwRaTliDtQHaEW?rs=1&pid=ImgDetMain"
                />
                <Card.Body>
                  <Card.Title>First Card Title 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.lifeinminnesota.com/wp-content/uploads/2022/04/Bowl-of-salad-greens-grape-tomatoes-and-mozzarella-pearls.-520x356.jpg"
                />
                <Card.Body>
                  <Card.Title>First Card Title 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <Container>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://bloximages.newyork1.vip.townnews.com/miamitimesonline.com/content/tncms/assets/v3/editorial/1/13/113b8e32-e97c-11ea-a8b3-afb2f3118439/5f498246a6157.image.png"
                />
                <Card.Body>
                  <Card.Title>Second Card Title 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://northlauderdalenews.net/9-18-2019-6-33-24-AM-2318017.jpg"
                />
                <Card.Body>
                  <Card.Title>Second Card Title 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://th.bing.com/th/id/R.a4bab302d342d205d3550cc3cd9003c7?rik=ujrHsIa7turn7Q&pid=ImgRaw&r=0"
                />
                <Card.Body>
                  <Card.Title>Second Card Title 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <Container>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://th.bing.com/th/id/R.fd418c16d30282116cdead84a37ffebb?rik=VGTjs3%2fpI79z0Q&pid=ImgRaw&r=0"
                />
                <Card.Body>
                  <Card.Title>Third Card Title 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://th.bing.com/th/id/OIP.awVKdlL1ciWugQ9qU22qzAHaEK?w=800&h=449&rs=1&pid=ImgDetMain"
                />
                <Card.Body>
                  <Card.Title>Third Card Title 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://th.bing.com/th?id=OIF.ZKnzt3%2fTCingw3QQ9JYzmQ&rs=1&pid=ImgDetMain"
                />
                <Card.Body>
                  <Card.Title>Third Card Title 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
        
    </div>
  );
};

export default PreventionTips;
