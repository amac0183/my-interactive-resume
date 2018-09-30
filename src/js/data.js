export const DATA = {
  cover: {
    name: 'Andrew Hayakawa',
    title: 'Experienced Software Engineer'
  },
  skills: {
    databases: [
      {
        name: 'GraphQL'
      },
      {
        name: 'MySQL'
      }
    ],
    javascriptLibraries: [
      {
        name: 'React',
        level: 5
      },
      {
        name: 'Redux/Redux Sagas',
        level: 5
      },
      {
        name: 'Webpack 4',
        level: 3
      },
      {
        name: 'Express 4.x',
        level: 4
      },
      {
        name: 'Koa',
        level: 4
      },
      {
        name: 'Babel',
        level: 4
      },
      {
        name: 'Enzyme',
        level: 3
      }
    ],
    languages: [
      {
        name: 'JavaScript',
        level: 4
      },
      {
        name: 'SASS/CSS',
        level: 4
      },
      {
        name:'C++',
        level: 3
      }
    ],
    tools: [
      {
        name: 'GitLab/Github'
      },
      {
        name: 'Docker'
      },
      {
        name: 'Kubernetes'
      },
      {
        name: 'Amazon Web Services'
      }
    ]
  },
  experiences: {
    activities: [
      'Presented at QueensJS Meetup about styling in React. Methods presented include inlining, style-loader in Webpack, and using the styled-components library.',
      'Currently learning Amazon Web Services (AWS) on the side'
    ],
    education: [
      {
        degree: 'B.S. in Information Technology',
        graduationDate: 20051201,
        school: 'Rensselaer Polytechnic Institute',
        location: 'Troy, NY' 
      }
    ],
    work: [
      {
        startDate: 20060101,
        endDate: 20150701,
        company: 'FactSet Research Systems, Inc.',
        location: 'New York, NY',
        position: 'Senior Software Engineer',
        summary: '',
        projects: [
          {
            summary: 'Worked with both People and Fixed Income products to create client-facing reports. Involved with the full software development lifecycle from understanding the requirement specifications to deploying the reports.',
            details: [
              'Reviewed requirement specifications with a Product Developer for technical feasibility and understanding of the functionality. Ensured the scope was defined.',
              'Coordinated with the design team to ensure the report follows the company design standards.',
              'Generated a technical specification based on the requirements to determine scope and provide a timeline.',
              'Worked closely with the Content Integration Engineer for data fetches required to drive the report content',
              'Code development included front-end development in JavaScript in a Backbone.js report framework',
              'Back end work in either C++ or FQL (FactSet Query Language), which fetched and calculated the data to be sent to the front end.',
              'Made enhancements and bug fixes to the C++ back end framework when needed.',
              'Scheduled product testing with the QA team.',
              'Managed bug reports and enhancement requests after report deployed to clients.'
            ]
          },
          {
            summary: 'Developed a framework in C++ for the back end that constructed table structures from an internally developed C++ model class, which drives the legacy reports. Legacy reports had to be converted to web reports and this solution averted the need to rewrite the back end.',
            details: [
              'Worked with a team of 4 engineers to design and implement the framework. Each engineer who managed their own client-facing reports provided their requirements.',
              'Added unit tests to ensure all parts were functioning properly.',
              'Utilized Boost library for caching, smart pointers, and function pointers'
            ]
          }
        ]
      },
      {
        startDate: 20160101,
        endDate: null,
        company: 'LearnVest, Inc.',
        location: 'New York, NY',
        position: 'Senior Software Engineer',
        projects: [
          {
            summary: 'In an agile team of 6, worked on the financial plan editor and generator, which allowed planners to customize a financial plan for a client and output it in PDF format',
            details: [
              'The editor UI is built using React, Redux, Sagas, and SASS.',
              'The plan content is generated on both server and client side. It is built separately from the editor in React and SASS.',
              'Server side was built with Koa and function generators to handle data fetches from multiple datapoints. Most of the data was fetched from a GraphQL or MongoDB server.',
              'Coordinated with the product manager and the GraphQL team for the page business logic and generating GraphQL queries.',
              'Worked with the designer to ensure the plan design matches the design provided',
              'Handled generating a Docker container, managing the Kubernetes config file, and the build process in GitLab CI',
              'Worked closely with QA for release and testing.'
            ]
          },
          {
            summary: 'Built a service that converted html to pdf or png format using Google Puppeteer and express. This is the service that outputs the plan to pdf format for the clients to receive.',
            details: [
              'Service took the url of the webpage to be outputted, as an argument through a GET request',
              'Additional options supported including page size for pdf and quality'
            ]
          }
        ]
      }
    ]
  },
  profile: {
    bio: '',
    name: 'Andrew Hayakawa',
    location: 'New York, NY',
    social: {
      linkedin: '',
      twitter: ''
    }
  }
}