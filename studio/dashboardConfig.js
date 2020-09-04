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
                  buildHookId: '5f520b21bea27a9ca3f2ee4b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kivcwoie',
                  apiId: 'ed1209ae-3e6b-4269-988f-a8b17fef8ce6'
                },
                {
                  buildHookId: '5f520b21def3a27c9f9e236d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wc8477fq',
                  apiId: 'ab07e594-8906-4a52-b365-e8f8df02482d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/isakgustavsen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wc8477fq.netlify.app', category: 'apps'}
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
