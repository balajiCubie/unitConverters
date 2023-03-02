// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CalculatorIcon from 'mdi-material-ui/Calculator'
import FunctionsIcon from 'mdi-material-ui/Function'
import HospitalIcon from 'mdi-material-ui/Hospital'
import CurrencyInrIcon from 'mdi-material-ui/CurrencyInr'
import MoreIcon from 'mdi-material-ui/MathCompass'

const navigation = () => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'Unit Converters'
    },
    {
      title: 'Unit Converters',
      icon: CalculatorIcon,
      path: '/allunit'
    },
    {
      title: 'Common Converters',
      icon: CurrencyInrIcon,
      path: '/common'
    },
    {
      title: 'Engineering Converters',
      icon: CurrencyInrIcon,
      path: '/engineering'
    },
    {
      title: 'Heat Converters',
      icon: CurrencyInrIcon,
      path: '/heat'
    },
    {
      title: 'Fluid Converters',
      icon: CurrencyInrIcon,
      path: '/fluid'
    },
    {
      title: 'Light Converters',
      icon: CurrencyInrIcon,
      path: '/light'
    },
    {
      title: 'Electricity Converters',
      icon: CurrencyInrIcon,
      path: '/Electricity'
    },
    {
      title: 'Magnetism Converters',
      icon: CurrencyInrIcon,
      path: '/Magnetism'
    },
    {
      title: 'Radiology Converters',
      icon: CurrencyInrIcon,
      path: '/radiology'
    }
  ]
}

export default navigation
