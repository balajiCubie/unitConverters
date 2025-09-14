
// ** Next Imports
import Head from 'next/head'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Dropdown from 'react-bootstrap/Dropdown';

// import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
// import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
// import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
// import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
// import Table from 'src/views/dashboard/Table'

import Trophy from 'src/views/dashboard/Trophy'

// import TotalEarning from 'src/views/dashboard/TotalEarning'
// import StatisticsCard from 'src/views/dashboard/StatisticsCard'
// import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
// import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
// import SalesByCountries from 'src/views/dashboard/SalesByCountries'

// Sanity
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'avr7487u',
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: false
})

export async function getStaticProps() {
  const app = await client.fetch(`*[_type == "case"]`)

  return {
    props: {
      app
    }
  }
}

const Calculators = ({ app }) => {
  const pageTitle = app?.name ? `${app[0].name} Unit Converter` : 'Angle Unit Converter';
  const pageDescription = app?.desc || 'Convert various angle units quickly and accurately.';
  const pageKeywords = app?.keywords || 'angle converter, degrees, radians, gradians, minutes, seconds';
  const pageUrl = `https://www.cuvisoft.com/common/angle`; // Replace with actual URL if dynamic

  return (
    <ApexChartWrapper>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
        <meta name='keywords' content={pageKeywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://www.cuvisoft.com/images/cards/analog-clock.jpg" /> {/* Replace with a relevant image */}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content="https://www.cuvisoft.com/images/cards/analog-clock.jpg" /> {/* Replace with a relevant image */}
      </Head>

      <Grid container spacing={6}>
        {/* {app.length > 0 && ( */}
          <>
            {app.slice(0).reverse().map(app => (
              <Grid item xs={12} md={4} key={app._id}>
                <Trophy name={app?.name} desc={app?.desc} slug={app?.slug} content={app?.content} typCal={app?.typCal} url={"common"}/>
                {/* <li >{app?.name}</li> */}
              </Grid>
            ))}
          </>
        {/* )} */}
      </Grid>
    </ApexChartWrapper>
  )
}

export default Calculators
