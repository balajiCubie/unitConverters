export default {
    name: 'weightandmass',
    type: 'document',
    title: 'weightandmass',
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
        type: 'string',
      },
      {
        title: 'Image URL',
        name: 'img',
        type: 'url',
      },
      {
        title: 'Description',
        name: 'desc',
        type: 'string',
        description: 'Make it catchy',
      },
    ],
  }
  