import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: "github",
    repo: "Briiad/personal-site-v3",
  },
  collections: {
    // 1. BLOG POSTS
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published Date' }),
        summary: fields.text({ label: 'Short Summary', multiline: true }), 
        content: fields.markdoc({ 
          label: 'Content',
          // optimized for writing
          options: {
            image: {
              directory: 'public/images/posts',
              publicPath: '/images/posts/',
            },
          }
        }),
      },
    }),

    // 2. PROJECTS (Case Studies)
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'content/projects/*',
      format: { contentField: 'content' }, // MDX for full case studies
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        summary: fields.text({ label: 'Card Summary' }),
        
        // Save images to public so Next.js Image can access them
        image: fields.image({ 
          label: 'Cover Image',
          directory: 'public/images/projects',
          publicPath: '/images/projects/',
        }),
        
        url: fields.url({ label: 'Live Link' }),
        repo: fields.url({ label: 'GitHub Repo' }),
        
        // Tech Stack (Array of strings)
        stack: fields.array(
          fields.text({ label: 'Tech' }),
          { label: 'Tech Stack', itemLabel: props => props.value }
        ),
        
        date: fields.date({ label: 'Completion Date' }),
        
        // The Case Study content
        content: fields.markdoc({ label: 'Case Study Details' }),
      },
    }),

    // 3. WORK EXPERIENCE
    experience: collection({
      label: 'Experience',
      slugField: 'company',
      path: 'content/experience/*',
      format: { data: 'json' }, // JSON is perfect for simple data structures
      schema: {
        company: fields.slug({ name: { label: 'Company Name' } }),
        role: fields.text({ label: 'Role / Job Title' }),
        
        startDate: fields.date({ label: 'Start Date' }),
        endDate: fields.date({ label: 'End Date (Leave empty for Present)' }),
        
        // Rich text for bullet points
        responsibilities: fields.markdoc({ 
          label: 'Key Responsibilities (Bullet Points)',
        }),
      },
    })
  },
});