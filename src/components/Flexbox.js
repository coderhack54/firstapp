import { Container } from '@mui/material'
import React from 'react'

const Flexbox = () => {
  return (
    <Container sx={{display:'flex'}}>
        <h1 className='bg-success'>Item 1</h1>
        <h1 className='bg-info'>Item 2</h1>
        <h1 className='bg-warning'>Item 3</h1>

    </Container>
  )
}

export default Flexbox