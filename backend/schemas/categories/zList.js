export default {
  name: 'zList',
  type: 'document',
  title: 'zList',
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
      title: 'Enter Link',
      name: 'url',
      type: 'url',
    },
    {
      title: 'Image URL',
      name: 'img',
      type: 'string',
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
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      title: 'Related',
      name: 'Related',
      type: 'array',
      of: [{type: 'url'}]
    }
  ],
}
