import { Box } from '@mui/material'
import React from 'react'
import ChildEvents from './Child'

const FatherEvents = () => {
    const handleClick = () => console.log("Click Event From Father")
  return (
    <Box> 
        <ChildEvents handleClick={handleClick} />
    </Box>
  )
}

export default FatherEvents