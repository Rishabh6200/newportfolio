import React from 'react'
import PageHeading from '../components/PageHeading'
import '../assets/css/Contact.css'
import InputBox from './InputBox'

const Contact = () => {

  const addDetail = [
    {
      heading: 'Address',
      icon: 'fa-solid fa-location-dot',
      data: 'Bilaspur, Himachal Predesh'
    },
    {
      heading: 'E-mail',
      icon: 'fa-regular fa-envelope',
      data: 'rc4556c@gmail.com'
    },
    {
      heading: 'Call',
      icon: 'fa-solid fa-mobile-screen-button',
      data: '+91 78767-07376'
    },
  ]

  const formDetail = [
    {
      name: 'First Name',
      input: 'text',
      placeholder: 'Ajay'
    },
    {
      name: 'E-mail',
      input: 'e-mail',
      placeholder: 'E-mail'
    },
    {
      name: 'Subject',
      input: 'text',
      placeholder: 'Subject'
    },
    {
      name: 'Number',
      input: 'text',
      placeholder: 'Mobile Number'
    },
  ]

  return (
    <> <br />
      <PageHeading heading="CONTACT ME" />

      <div className="main-part">
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3406.995055822914!2d76.73011947513757!3d31.359115655092175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDIxJzMyLjgiTiA3NsKwNDMnNTcuNyJF!5e0!3m2!1sen!2sin!4v1700831666482!5m2!1sen!2sin" loading="lazy" title='map' referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="det-part ">
          <div className="address">
            {addDetail.map((item, i) => (
              <div className="detail">
                <div className="i-back">
                  <i className={item.icon}></i>
                </div>
                <div className="a">
                  <h2>{item.heading}:</h2>
                  <p>{item.data}</p>
                </div>
              </div>
            ))}
          </div>
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              {formDetail.map((item, i) => (
                <div className=''>
                  <InputBox inputValue={item.input} placeholderValue={item.placeholder} />
                </div>
              ))}
            </div>

            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500" placeholder="Message..."></textarea>

            <button className='btn'>
              Send Massege
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact