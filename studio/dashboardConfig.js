export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f88153dd161addef2013942',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-z627yjre',
                  apiId: '858655f3-54ee-499d-88d5-8a030dc5308b'
                },
                {
                  buildHookId: '5f88153df55598c2d5e57e06',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-k815gpcs',
                  apiId: '50ad8fbe-19b2-42a7-84e8-da4e148e29f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hungmxh/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-k815gpcs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
