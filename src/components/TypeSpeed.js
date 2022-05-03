import React, { useState } from 'react'

const TypeSpeed = () => {
    const cloud=`this is a elon musk speech said by jeff bezos to honour bill gates for making steve jobs the Ceo of Apple.Tim cook was a very intelligent person`

    const [type, setType] = useState("")
  return (
    <div>
        <div className="container">
            <label htmlFor="input-type" className='form-floating'>{cloud}</label>
            <textarea className='form-control' name="input-type" rows="3" placeholder={cloud} onChange={(e)=>{
                setType(e.target.value)
            }}/>
            <p>{type}</p>
        </div>
    </div>
  )
}

export default TypeSpeed