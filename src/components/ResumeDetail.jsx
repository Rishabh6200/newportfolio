import React from 'react'
import '../assets/css/Resume.css'
import PageHeading from './PageHeading'

const ResumeDetail = () => {

  const eductionDetail = [
    {
      eductionName: '+2 in Commerce',
      passDate: '2019 - 2020',
      college: 'Govt. Senior Secondary School Chandpur, Bilaspur (H.P.)'
    },
    {
      eductionName: 'Bachelor of Computer Applications',
      passDate: '2020 - 2023',
      college: 'Govt. Post Graduate College, Bilaspur (H.P.)'
    },
  ]

  const hobbie = ['Online Gaming', 'Learning','Cricket']


  return (
    <>
      <div className="resume">
        <PageHeading heading='RESUME' />
        <div className="res-box">
          <div className="space-box">

            <div className="part-one">
              <h3>Education
                <div className="e-box flex">
                  <div className="line-one">
                    <div className="c-one"></div>
                    <div className="c-one"></div>
                  </div>

                  <div className="d">

                    {eductionDetail.map((item, i) => (
                      <div className={`detail-box ${item.addClass}`}>
                        <h3>{item.eductionName}
                          <div className="pass-date">
                            <span>{item.passDate}</span>
                          </div>
                          <p>{item.college}</p>
                        </h3>
                      </div>
                    ))}

                  </div>
                </div>
              </h3>
            </div>


            <div className="part-one part-two">
              <h3>Hobbies
                <div className="all-data flex">
                  <div className="line-one line-two">
                    <div className="c-one"></div>
                    <div className="c-one"></div>
                    <div className="c-one"></div>
                  </div>

                  <div className="detail-box com flex flex-col">
                    {hobbie.map((item, i) => (
                      <p>{hobbie[i]}</p>
                    ))}
                  </div>
                </div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResumeDetail