import React, { useState } from 'react'
import { PortableText } from '@portabletext/react'

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

export async function getServerSideProps(context) {
  const slug = context.params.slug

  const post = await client.fetch(`*[_type == "heat" && slug.current == $slug][0]`, { slug })

  return {
    props: {
      post
    }
  }
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }

      return (
        <img
          alt={value.alt || ' '}
          loading='lazy'
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Slug = ({ post }) => {

  const [load, setLoad] = useState(true)

  return (
    <div>
      <h2 className='mt-5 text-center'>{post?.name}</h2>
      <p className='text-center'>{post?.typCal}</p>

      <div className='container m-auto text-center'>
        {load == true ? (
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
          style={{ height: load == true ? '0px' : '775px' }}
          scrolling='no'
          onLoad={() => setLoad(false)}
        ></iframe>
      </div>

      {/* <p className='container m-auto'>{post?.content}</p> */}

      <div className='p-5 m-3'>
        <PortableText value={post?.content} components={ptComponents} />
      </div>

      <div className='p-5 my-3'>
        <div className='bold my-5'>Related</div>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Trophy name={post?.titleReference1} desc={post?.descReference1} weburl={[post?.urlReference1]} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Trophy name={post?.titleReference2} desc={post?.descReference2} weburl={[post?.urlReference2]} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Trophy name={post?.titleReference3} desc={post?.descReference3} weburl={[post?.urlReference3]} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Trophy name={post?.titleReference4} desc={post?.descReference4} weburl={[post?.urlReference4]} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Trophy name={post?.titleReference5} desc={post?.descReference5} weburl={[post?.urlReference5]} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Trophy name={post?.titleReference6} desc={post?.descReference6} weburl={[post?.urlReference6]} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Slug
