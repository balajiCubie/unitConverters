// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import 'bootstrap/dist/css/bootstrap.css'

import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

// ** Configure JSS & ClassName
const App = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{pageProps.seo?.title || `Unit Converters - Convert Units Easily`}</title>
        <meta
          name='description'
          content={
            pageProps.seo?.description ||
            `A comprehensive online unit converter for various categories like common, electricity, engineering, fluid, heat, light, magnetism, others, and radiology. Convert units quickly and accurately.`
          }
        />
        <meta name='keywords' content={pageProps.seo?.keywords || 'unit converter, online converter, electricity units, engineering units, fluid units, heat units, light units, magnetism units, radiology units, convert units'} />
        <meta name='viewport' content='initial-scale=1, width=device-width' />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageProps.seo?.ogUrl || "https://www.cuvisoft.com/unit-converters"} />
        <meta property="og:title" content={pageProps.seo?.ogTitle || `Unit Converters - Convert Units Easily`} />
        <meta
          property="og:description"
          content={
            pageProps.seo?.ogDescription ||
            `A comprehensive online unit converter for various categories like common, electricity, engineering, fluid, heat, light, magnetism, others, and radiology. Convert units quickly and accurately.`
          }
        />
        <meta property="og:image" content={pageProps.seo?.ogImage || "https://www.cuvisoft.com/images/misc/materio-pro-banner.png"} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageProps.seo?.twitterUrl || "https://www.cuvisoft.com/unit-converters"} />
        <meta property="twitter:title" content={pageProps.seo?.twitterTitle || `Unit Converters - Convert Units Easily`} />
        <meta
          property="twitter:description"
          content={
            pageProps.seo?.twitterDescription ||
            `A comprehensive online unit converter for various categories like common, electricity, engineering, fluid, heat, light, magnetism, others, and radiology. Convert units quickly and accurately.`
          }
        />
        <meta property="twitter:image" content={pageProps.seo?.twitterImage || "https://www.cuvisoft.com/images/misc/materio-pro-banner.png"} />
      </Head>

      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  )
}

export default App
