import React from 'react'
import FormTitle from './FormTitle';
import Button from '../componants/Button';
import { useState } from 'react';

const Form = () => {
    const [Img, setImg] = useState('');
  return (
    <div className='Form'>
    <div className="Title">
    <p>ADD YOU IMAGE AND THE URL</p>
    <form>
        <label>Url Of Image:
          <input type="img" value={Img} name="Img" onChange={e => setImg(e.target.value)} />
        </label>
      </form>
    </div>
    <FormTitle/>
    <Button url={Img} />
    </div>
  )
}

export default Form