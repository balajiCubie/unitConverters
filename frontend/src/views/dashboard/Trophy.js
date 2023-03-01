import Link from 'next/dist/client/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const Trophy = props => {
  // ** Hook
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          {props.name}
        </Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          {props.desc}
        </Typography>

        <Typography variant='h6' sx={{ my: 4 }}>
          {props.typCal}
        </Typography>
        <Button size='small' variant='contained'>
          {props.weburl ? (
            <Link href={`${props.weburl}`} sx={{ color: 'primary.main' }}>
              Open
            </Link>
          ) : (
            <Link href={`/${props.url}/${props.slug?.current}`} sx={{ color: 'primary.main' }}>
              Open
            </Link>
          )}
        </Button>
        {/* <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} /> */}
        {/* <TrophyImg alt={props.name} sx={{ p: 2 }} src={props.img} />
        <h1>{props.img}</h1> */}
      </CardContent>
    </Card>
  )
}

export default Trophy
