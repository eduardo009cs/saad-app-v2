import { Avatar, Card, CardContent, Stack, Typography } from '@mui/material'

import React from 'react'

const CardInfo = ({title,text,Icon,}) => {
  return (
    <Card style={{borderRadius:'20px'}} sx={{height: '100%'}} >
        <CardContent>
            <Stack spacing={3}>
                <Stack direction="row" sx={{alignItems: 'flex-start', justifyContent: 'space-between'}} spacing={3} >
                    <Stack spacing={1} >
                        <Typography color='text.secondary' variant='overline' >
                            {title}
                        </Typography>
                        <Typography variant='h4'>
                            {text}
                        </Typography>
                    </Stack>
                    <Avatar sx={{backgroundColor: '#635bff', height:'56px', width:'56px' }}  >
                        {Icon}
                    </Avatar>
                </Stack>
            </Stack>
        </CardContent>
    </Card>
  )
}

export default CardInfo