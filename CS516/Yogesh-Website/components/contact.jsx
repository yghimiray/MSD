import { useState } from 'react'
// import emailjs from 'emailjs-com'
import axios from 'axios'


const initialState = {
  name: '',
  email: '',
  title: '',
  phone: '',
  message: ''  
}
export const Contact = (props) => {
  const [{ name, email, title, phone, message }, setState] = useState(initialState)
  const[alert, setAlert] = useState('Please fill out the form below to send me an email and I will get back to you as soon as possible.')


  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, title, phone, message)
    
    const inputData = {};
    if(name===''|| email ==='' || title===''|| message === ''){
      setAlert("Some Required fields are missing. Please try again! ")
    }else{
      inputData.name = name;
      inputData.email = email;
      inputData.title = title;
      inputData.phone = phone;
      inputData.message = message;
  
    }
    axios.post("https://b86i3c71h6.execute-api.us-east-1.amazonaws.com/v1/contact", inputData)

      // emailjs
      //   .sendForm(
      //     'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      //   )
      .then(
        (result) => {
          console.log(JSON.stringify(result))
          setAlert(`Thank you ${name} for your email. I will reach you back shortly.`)  
          setState(initialState)    
        },
        (error) => {
          console.log(error.text)
        }
      )
      
  }

  const clearFields= ()=>{
    setState(initialState)    
  }

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  {alert}
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        value={name}
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        value={email}
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      id='title'
                      value={title}
                      name='title'
                      className='form-control'
                      placeholder='Subject'
                      required
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>


                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      id='phone'
                      value={phone}
                      name='phone'
                      className='form-control'
                      placeholder='Phone (Optonal)'
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>


                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    value={message}
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
                <button onClick ={clearFields} className='btn btn-custom btn-lg'>
                  Clear fields
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>

      </div>
    </div>
  )
}
