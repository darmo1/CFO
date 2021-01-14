export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fffd48f126805567134dae1',
                  title: 'Sanity Studio',
                  name: 'cfo-studio',
                  apiId: '2c78b94b-0717-4c27-bc50-54fa97b44f1e'
                },
                {
                  buildHookId: '5fffd4901268054d0634de77',
                  title: 'Blog Website',
                  name: 'cfo-web',
                  apiId: '8c3e3415-c816-49bb-8138-a4421ec837cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/darmo1/CFO',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://cfo-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
