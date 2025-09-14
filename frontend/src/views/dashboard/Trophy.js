// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useTheme } from '@mui/material/styles'
import { TriangleImg, TrophyImg } from './TrophyStyledComponents'

const Trophy = props => {
  // ** Hook
  const theme = useTheme()

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          {props.name}
        </Typography>
        <Typography variant='body2'  sx={{ letterSpacing: '0.25px' }}>
          {props.desc ? `${props.desc.substring(0, 250)}...` : 'Updating Soon...'}
        </Typography>

        <Typography variant='h6' sx={{ my: 4 }}>
          {props.typCal}
        </Typography>
        {props.weburl ? (
          <Button size='small' variant='contained' href={`${props.weburl}`} target='_blank' rel='noopener noreferrer'>
            Open
          </Button>
        ) : (
          <Link href={`/common/${props.slug?.current}`} passHref>
            <Button size='small' variant='contained'>
              Open
            </Button>
          </Link>
        )}
        <br></br>
        <TrophyImg  sx={{ m: 2 }} src={props.img || `/images/pages/auth-v1-tree-2.png`} alt={props.name || 'cuvisoft trophy'} />
      </CardContent>
    </Card>
  )
}

export default Trophy
