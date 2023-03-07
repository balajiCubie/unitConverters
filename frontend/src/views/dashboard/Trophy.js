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
  right: 3,
  bottom: 2,
  height: 100,
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
        {props.desc ? (
           <Typography variant='body2'  sx={{ letterSpacing: '0.25px' }}>
           {props.desc.substring(0, 250)}...
         </Typography>
          ) : (
            <Typography variant='body2'  sx={{ letterSpacing: '0.25px' }}>
          Updating Soon...
        </Typography>
          )}
        {/* <Typography variant='body2'  sx={{ letterSpacing: '0.25px' }}>
          {props.desc}...
        </Typography> */}

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
        <br></br>
        {props.img ? (
           <TrophyImg  sx={{ m: 2 }} src={props.img} />
          ) : (
             <TrophyImg alt='cuvisoft' sx={{ m: 2 }}  src={`/images/pages/auth-v1-tree-2.png`} />
          )}
      {/* <TriangleImg alt='triangle background' sx={{ m: 2 }}  src={`/images/pages/auth-v1-tree-2.png`} /> */}
        {/* <TrophyImg  sx={{ m: 2 }} src={props.img} /> */}

        {/* <h1>{props.img}</h1> */}
      </CardContent>
    </Card>
  )
}

export default Trophy
