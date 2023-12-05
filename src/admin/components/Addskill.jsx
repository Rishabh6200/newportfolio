import React from 'react'
import '../assets/css/Addskill.css'
import InputBox from '../../components/InputBox'

const Addskill = () => {

  const inputData = [
    {
      name: 'ADD SKILL',
      inputValue: 'text',
      placeholderValue: 'Add skill',
    },
    {
      name: 'ADD IMAGE',
      inputValue: 'file',
      placeholderValue: 'Add skill',
    },
  ]

  return (
    <>
      <div className="addskill">
        <h1 className='text-3xl text-center'>Add Skill</h1>
        <br />
        <form>
          <div className="input">
            {inputData.map((item, i) => (
              <div className="input-box">
                <p>{item.name}</p>
                <InputBox inputValue={item.inputValue} placeholderValue={item.placeholderValue} />
              </div>
            ))}
            <button className='btn'>
              Add Detail
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Addskill