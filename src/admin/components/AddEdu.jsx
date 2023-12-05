import React from 'react'
import InputBox from '../../components/InputBox'

const AddEdu = () => {

  const inputData = [
    {
      name: 'Eduction Name',
      inputValue: 'text',
      placeholderValue: 'Name',
    },
    {
      name: 'Institution',
      inputValue: 'text',
      placeholderValue: 'Institution Name',
    },
    {
      name: 'Passing Year',
      inputValue: 'text',
      placeholderValue: 'Passing Year',
    },
  ];

  return (
    <div className='addskill'>
      <h1 className='text-3xl text-center'>Add Eduction</h1>
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
  )
}

export default AddEdu