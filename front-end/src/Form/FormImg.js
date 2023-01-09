import React from 'react'
import { useState } from 'react';

const FormImg = () => {
const [Img, setImg] = useState('');
    return (
      <form>
        <label>Url Of Image:
          <input type="img" value={Img} name="Img" onChange={e => setImg(e.target.value)} />
        </label>
      </form>

    )
  }

  export default FormImg;