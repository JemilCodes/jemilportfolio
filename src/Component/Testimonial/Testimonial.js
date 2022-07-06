import React from 'react';

import './Testimonial.css';
import ladyimg from '../../assets/Home/lady.png'
import andreimg from '../../assets/Home/andrei.jpg'
import { FaQuoteLeft} from "react-icons/fa";
import { FaQuoteRight} from "react-icons/fa";
import { FaStar} from "react-icons/fa";



function Testimonial() {
  return (
<>

<div className="testimonial-header" id ='Testimonial'>
    <h1>Testimonial</h1>
        <h5> What My Client Say About Me <br></br>
            <div className="line-wrapper">  <div className="testimonial-line"><div className="about-line"></div> </div>  </div>
            </h5>
    </div>
<div className='slide-wrapper'>
<div className='slider'>
    <div className='slide-track'>

         <div className='slide'>
           <div className= 'slide-content'>
               <p className='comments' >
                    <FaQuoteLeft  color='coral' />

                    This guy is incredibly awesome,I
                    hired him and when he delivered,I
                    honestly fell in love with the project.
                    He is indeed a great guy.

                      <FaQuoteRight color='coral' />
                    
                </p> 
                <  FaStar color='coral' size='1em' />
                <  FaStar color='coral' size='1em'  />
                <  FaStar color='coral'size='1em'  /> 
                <  FaStar color='coral' size='1em' /> 
                <  FaStar color='coral' size='1em' />

                <div className="slide-titlte">
                    <img src={ladyimg} alt = 'no internet connection!!'/>
                    <div className='slide-name'>
                        <h5>Lady Doe</h5>
                        <p>Banker</p>
                    </div>
                </div>      
            </div>

        </div>

         <div className='slide'>
           <div className= 'slide-content'>
               <p className='comments' >
                    <FaQuoteLeft  color='coral' />

                    it was nice hiring this guy for my e-commerce 
                    project he delivered even more than i can imagine,I
                    recommend him for you.
                      <FaQuoteRight color='coral' />
                    
                </p> 
                <  FaStar color='coral' size='1em' />
                <  FaStar color='coral' size='1em'  />
                <  FaStar color='coral'size='1em'  /> 
                <  FaStar color='coral' size='1em' /> 
                <  FaStar color='coral' size='1em' />

                <div className="slide-titlte">
                    <img src={andreimg} alt = 'no internet connection!!'/>
                    <div className='slide-name'>
                        <h5>Mr. Andrei</h5>
                        <p>CEO Andrei</p>
                    </div>
                </div>      
            </div>

        </div>

         <div className='slide'>
           <div className= 'slide-content'>
               <p className='comments' >
                    <FaQuoteLeft  color='coral' />

                    This guy is incredibly awesome,I
                    hired him and when he delivered,I
                    honestly fell in love with the project.
                    He is indeed a great guy.

                      <FaQuoteRight color='coral' />
                    
                </p> 
                <  FaStar color='coral' size='1em' />
                <  FaStar color='coral' size='1em'  />
                <  FaStar color='coral'size='1em'  /> 
                <  FaStar color='coral' size='1em' /> 
                <  FaStar color='coral' size='1em' />

                <div className="slide-titlte">
                    <img src={ladyimg} alt = 'no internet connection!!'/>
                    <div className='slide-name'>
                        <h5>Lady Doe</h5>
                        <p>Banker</p>
                    </div>
                </div>      
            </div>

        </div>

        <div className='slide'>
           <div className= 'slide-content'>
               <p className='comments' >
                    <FaQuoteLeft  color='coral' />

                    I patronised Jemil and when he 
                    delivered, I honestly felt in love
                    with the project he is a very honest guy 
                    and he delivers ontime.

                      <FaQuoteRight color='coral' />
                    
                </p> 
                <  FaStar color='coral' size='1em' />
                <  FaStar color='coral' size='1em'  />
                <  FaStar color='coral'size='1em'  /> 
                <  FaStar color='coral' size='1em' /> 
                <  FaStar color='coral' size='1em' />

                <div className="slide-titlte">
                    <img src={andreimg} alt = 'no internet connection!!'/>
                    <div className='slide-name'>
                        <h5>Mr. Andrei</h5>
                        <p>CEO Andrei</p>
                    </div>
                </div>      
            </div>

        </div>
       
        <div className='slide'>
           <div className= 'slide-content'>
               <p className='comments' >
                    <FaQuoteLeft  color='coral' />

                    When he delivered my job, my head
                    spinned, it was so nice and he 
                    implemented every functionality 
                    I requested for. Thank You...

                      <FaQuoteRight color='coral' />
                    
                </p> 
                <  FaStar color='coral' size='1em' />
                <  FaStar color='coral' size='1em'  />
                <  FaStar color='coral'size='1em'  /> 
                <  FaStar color='coral' size='1em' /> 
                <  FaStar color='coral' size='1em' />

                <div className="slide-titlte">
                    <img src={ladyimg} alt = 'no internet connection!!'/>
                    <div className='slide-name'>
                        <h5>Lady Doe</h5>
                        <p>Banker</p>
                    </div>
                </div>      
            </div>

        </div>

        <div className='slide'>
           <div className= 'slide-content'>
               <p className='comments' >
                    <FaQuoteLeft  color='coral' />

                    When he delivered my job, my head
                    spinned, it was so nice and he 
                    implemented every functionality 
                    I requested for. Thank You...

                      <FaQuoteRight color='coral' />
                    
                </p> 
                <  FaStar color='coral' size='1em' />
                <  FaStar color='coral' size='1em'  />
                <  FaStar color='coral'size='1em'  /> 
                <  FaStar color='coral' size='1em' /> 
                <  FaStar color='coral' size='1em' />

                <div className="slide-titlte">
                    <img src={ladyimg} alt = 'no internet connection!!'/>
                    <div className='slide-name'>
                        <h5>Lady Doe</h5>
                        <p>Banker</p>
                    </div>
                </div>      
            </div>

        </div>

    </div>
  
</div>
</div>  
    
 </>

  );
  
}

export default Testimonial;
