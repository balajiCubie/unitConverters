import React, { useState, useEffect } from 'react'
import { PortableText } from '@portabletext/react'
import Head from 'next/head'

import Trophy from 'src/views/dashboard/Trophy'
import Grid from '@mui/material/Grid'

// Sanity
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'avr7487u',
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: false
})

export async function getStaticPaths() {
  const posts = await client.fetch(`*[_type == "common"]{ "slug": slug.current }`)
  const paths = posts.map(post => ({ params: { slug: post.slug } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug

  const post = await client.fetch(`*[_type == "common" && slug.current == $slug][0]`, { slug })

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    },
    revalidate: 60
  }
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }

      const imageRef = value.asset._ref
        .replace(/^image-/, '')
        .replace(/-(webp|png|jpg|jpeg)$/i, '.$1')

      const imageUrl = `https://cdn.sanity.io/images/${client.config().projectId}/${client.config().dataset}/${imageRef}`

      return <img alt={value.alt || ''} loading='lazy' src={imageUrl} />
    }
  }
}

const Slug = ({ post }) => {
  const [isClient, setIsClient] = useState(false)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!post) {
    return <div>Loading...</div>
  }

  const pageUrl = `https://unitconvertor.cuvisoft.in/common/${post?.slug?.current}`
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: post?.name,
    description: post?.desc,
    url: pageUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl
    }
  }

  return (
    <>
      <Head>
        <title>{post?.name} - Unit Converter</title>
        <meta name='description' content={post?.desc || 'A comprehensive unit converter for various categories.'} />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <div>
        <h1 className='mt-5 text-center'>{post?.name}</h1>
        <p className='text-center'>{post?.typCal}</p>

        {isClient && (
          <div className='container m-auto text-center'>
            {load === true ? (
              <div className='my-5'>
                <div className='spinner-border' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </div>
            ) : (
              <></>
            )}
            <iframe
              src={post?.iframe}
              className='w-100 mt-3'
              style={{ height: load === true ? '0px' : '775px' }}
              scrolling='no'
              onLoad={() => setLoad(false)}
            ></iframe>
          </div>
        )}

        <div className='p-5 m-3'>
          <PortableText value={post?.content} components={ptComponents} />
        </div>

        <div className='p-5 my-3'>
          <div className='bold my-5'>Related</div>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Trophy name={post?.titleReference1} desc={post?.descReference1} weburl={post?.urlReference1} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Trophy name={post?.titleReference2} desc={post?.descReference2} weburl={post?.urlReference2} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Trophy name={post?.titleReference3} desc={post?.descReference3} weburl={post?.urlReference3} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Trophy name={post?.titleReference4} desc={post?.descReference4} weburl={post?.urlReference4} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Trophy name={post?.titleReference5} desc={post?.descReference5} weburl={post?.urlReference5} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Trophy name={post?.titleReference6} desc={post?.descReference6} weburl={post?.urlReference6} />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Slug
