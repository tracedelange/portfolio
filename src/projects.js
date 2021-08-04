import placeholder from './assets/images/placeholder.png'
import eater from './assets/images/eater.png'
import tidepoolSquad from './assets/images/squad.png'
import CASHsign from './assets/images/sales-console.png'
import wbcSales from './assets/images/logo.png'


const projects = [
    {
        id: 3,
        name: 'W.B.C. Sales Map',
        description: 'A customer-facing tool designed for a local microbrewery used to inform customers of where to locate distributed products.',
        githubURL: 'https://github.com/tracedelange/wbc-sales-map',
        siteURL: 'https://find.waconiabrewing.com/',
        passiveImage: wbcSales,
        activeImage: eater,
        tools: [
            'JavaScript',
            'React',
            'Google Maps API',
            'Firebase',
            'Python'
        ]
    },
    {
        id: 2,
        name: 'C.A.S.H. Sales Console',
        description: 'A browser based sales analytics tool designed in parallel with a python package which generates mock data to be evaluated by the console.',
        githubURL: 'https://github.com/tracedelange/sales-console',
        siteURL: 'https://sales-console-demo.herokuapp.com/customers',
        passiveImage: CASHsign,
        activeImage: eater,
        tools: [
            'JavaScript',
            'React',
            'Python',
            'Heroku',
            'JSON-Server'
        ]
    },
    {
        id: 1,
        name: 'Digital Tidepool',
        description: 'A simulation of cellular life that takes places in your browser.',
        githubURL: 'https://github.com/tracedelange/digital-tidepool',
        siteURL: 'https://tracedelange.github.io/digital-tidepool/',
        passiveImage: tidepoolSquad,
        activeImage: eater,
        tools: [
            'JavaScript',
            'JSON-Server'
        ]
    },
    {
        id: 4,
        name: 'Coming Soon',
        description: 'Interactive TSP visualization? Flex that COMP Sci knowledge...',
        githubURL: '',
        siteURL: '',
        passiveImage: placeholder,
        activeImage: eater,
        tools: [
            'JavaScript',
            'JSON-Server'
        ]
    },
]

export default projects;