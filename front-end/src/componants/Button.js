import React from 'react'
import { addPhoto } from '../service/api';

const Button = (url) => {
  return (
    <div className='button'>
      <button onClick={() => {addPhoto(url)}} type="submit">Add</button>
    </div>
  );
};

export default Button;