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
                  buildHookId: '5ee648165f43e38cadf29ad2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kxjhn2jz',
                  apiId: 'bd344568-f1b6-422b-9800-81dfc69c31f9'
                },
                {
                  buildHookId: '5ee648160f1f1c8f21874f9b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-j3v2oqe6',
                  apiId: '2d77f19d-8e5a-4e2f-aabe-59d130eaf409'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/helmar81/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-j3v2oqe6.netlify.app', category: 'apps' }
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
