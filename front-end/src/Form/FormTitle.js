import React from 'react'
import { useState } from 'react';


const FormTitle = () => {
const [Title, setTitle] = useState('');
    return (
      <form>
        <label>Title of Img :
          <input type="text" value={Title} name="Title" onChange={e => setTitle(e.target.value)}/>
        </label>
      </form>
    )
  }

  export default FormTitle;