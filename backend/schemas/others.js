export default {
  name: 'others',
  type: 'document',
  title: 'others',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'string',
      description: 'Make it catchy',
    },
    {
      title: 'TypeOfCalculator',
      name: 'typCal',
      type: 'string',
      description: 'Make related calculator',
    },
    {
      title: 'Image URL',
      name: 'img',
      type: 'url',
    },
    {
      title: 'Iframe URL',
      name: 'iframe',
      type: 'url',
    },
    {
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}]
    },
    
    {
      title: 'Title: Reference 1',
      name: 'titleReference1',
      type: 'string',
    },
    {
      title: 'URL: Reference 1',
      name: 'urlReference1',
      type: 'url',
    },
    {
      title: 'Description: Reference 1',
      name: 'descReference1',
      type: 'string',
    },
    {
      title: 'Image: Reference 1',
      name: 'imgReference1',
      type: 'url',
    },
    {
      title: 'Title: Reference 2',
      name: 'titleReference2',
      type: 'string',
    },
    {
      title: 'URL: Reference 2',
      name: 'urlReference2',
      type: 'url',
    },
    {
      title: 'Description: Reference 2',
      name: 'descReference2',
      type: 'string',
    },
    {
      title: 'Image: Reference 2',
      name: 'imgReference2',
      type: 'url',
    },
    {
      title: 'Title: Reference 3',
      name: 'titleReference3',
      type: 'string',
    },
    {
      title: 'URL: Reference 3',
      name: 'urlReference3',
      type: 'url',
    },
    {
      title: 'Description: Reference 3',
      name: 'descReference3',
      type: 'string',
    },
    {
      title: 'Image: Reference 3',
      name: 'imgReference3',
      type: 'url',
    },
    {
      title: 'Title: Reference 4',
      name: 'titleReference4',
      type: 'string',
    },
    {
      title: 'URL: Reference 4',
      name: 'urlReference4',
      type: 'url',
    },
    {
      title: 'Description: Reference 4',
      name: 'descReference4',
      type: 'string',
    },
    {
      title: 'Image: Reference 4',
      name: 'imgReference4',
      type: 'url',
    },
    {
      title: 'Title: Reference 5',
      name: 'titleReference5',
      type: 'string',
    },
    {
      title: 'URL: Reference 5',
      name: 'urlReference5',
      type: 'url',
    },
    {
      title: 'Description: Reference 5',
      name: 'descReference5',
      type: 'string',
    },
    {
      title: 'Image: Reference 5',
      name: 'imgReference5',
      type: 'url',
    },
    {
      title: 'Title: Reference 6',
      name: 'titleReference6',
      type: 'string',
    },
    {
      title: 'URL: Reference 6',
      name: 'urlReference6',
      type: 'url',
    },
    {
      title: 'Description: Reference 6',
      name: 'descReference6',
      type: 'string',
    },
    {
      title: 'Image: Reference 6',
      name: 'imgReference6',
      type: 'url',
    },
  ],
}
