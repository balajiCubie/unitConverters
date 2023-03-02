// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CalculatorIcon from 'mdi-material-ui/Calculator'
import FunctionsIcon from 'mdi-material-ui/Function'
import HospitalIcon from 'mdi-material-ui/Hospital'
import CurrencyInrIcon from 'mdi-material-ui/CurrencyInr'
import MoreIcon from 'mdi-material-ui/MathCompass'
import AccountCircleIcon from 'mdi-material-ui/AccountCircle';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FluorescentIcon from '@mui/icons-material/Fluorescent';
import LightModeIcon from '@mui/icons-material/LightMode';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import RadioIcon from '@mui/icons-material/Radio';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

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
      icon: AccountCircleIcon,
      path: '/common'
    },
    {
      title: 'Engineering Converters',
      icon: EngineeringIcon,
      path: '/engineering'
    },
    {
      title: 'Heat Converters',
      icon: LocalFireDepartmentIcon,
      path: '/heat'
    },
    {
      title: 'Fluid Converters',
      icon: FluorescentIcon,
      path: '/fluid'
    },
    {
      title: 'Light Converters',
      icon: LightModeIcon,
      path: '/light'
    },
    {
      title: 'Electricity Converters',
      icon: ElectricBoltIcon,
      path: '/electricity'
    },
    {
      title: 'Magnetism Converters',
      icon: ManageSearchIcon,
      path: '/Magnetism'
    },
    {
      title: 'Radiology Converters',
      icon: RadioIcon,
      path: '/radiology'
    }
    ,
    {
      title: 'Others Converters',
      icon: FamilyRestroomIcon,
      path: '/others'
    }
  ]
}

export default navigation
