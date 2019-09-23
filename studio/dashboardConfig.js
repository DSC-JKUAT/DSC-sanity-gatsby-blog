export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d893eb120057e1f8f4163c5',
                  title: 'Sanity Studio',
                  name: 'DSC-sanity-gatsby-blog-studio-kkofpu1d',
                  apiId: 'c4b43c0f-4c71-489f-91f4-a075909abe79'
                },
                {
                  buildHookId: '5d893eb14524c0b1fdc1d6e0',
                  title: 'Blog Website',
                  name: 'DSC-sanity-gatsby-blog-web',
                  apiId: 'e43b7a36-2bd8-4e5d-8387-cbd6b54c6d89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ruheni/DSC-sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://DSC-sanity-gatsby-blog-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
