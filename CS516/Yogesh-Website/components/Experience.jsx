export const Experience = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Professional Experiences</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    {/* <div className='testimonial-image'>
                      {' '}
                      <img src={d.img} alt='' />
                      {' '}
                    </div> */}
                    <div className='testimonial-meta'>  {d.name} 
                      </div>
                    <div className='testimonial-content'>
                      <p>{d.text}</p>
                    </div>
                    <div className='testimonial-content'>
                      <p>{d.period}</p>
                    </div>
                  </div>
                </div>
              
              
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
