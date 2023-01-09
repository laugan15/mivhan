import React from 'react'
import { Card, CardImg, CardTitle } from './FileStyle'

const File = ({pic}) => {
    return (
  <> 
    <Card> 
        <CardTitle> Title</CardTitle>
        <CardImg src={pic}/>
    </Card>
  </>
    )
  }

export default File