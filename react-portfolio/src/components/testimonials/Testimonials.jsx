import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data=[
  {
  avatar:AVTR1,
  name:'Tina Snow',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ducimus quam id debitis consequuntur enim pariatur rerum? Consequatur debitis iure facere nemo incidunt odit at deleniti dolorem sunt enim. Vero! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, officiis!'
  },
  {
    avatar:AVTR2,
    name:'Shatta Walle',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut molestias id necessitatibus tempora atque, facere porro quaerat eaque at, doloremque qui nemo quae cum laudantium cumque pariatur impedit corporis! Nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, recusandae.'
    },
    {
      avatar:AVTR3,
      name:'Kwane Despite',
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates corrupti vel quaerat, unde qui architecto inventore nostrum facere facilis quae nemo at nulla eius, odit cupiditate perferendis tempora natus. Alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, in!'
      },
      {
        avatar:AVTR4,
        name:'Nana Ama McBrown',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sapiente labore necessitatibus in maiores animi minima exercitationem reiciendis beatae illo aliquam incidunt tempore, esse sit omnis voluptatibus repellendus et fugit?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, esse?'
        },


]

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index}className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials