import placeholder from './assets/images/placeholder.png'
import eater from './assets/images/eater.png'
import tidepoolSquad from './assets/images/squad.png'
import CASHsign from './assets/images/sales-console.png'
import wbcSales from './assets/images/logo.png'
import bfb from './assets/images/bfb.png'
import NN from './assets/images/NN.png'
import MA from './assets/images/MA.png'

const projects = [
    {
        id: 3,
        name: 'W.B.C. Sales Map',
        description: 'A customer-facing tool designed for a microbrewery used to inform customers of where to locate distributed products.',
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
            'JSON-Server',
            'Heroku'
        ]
    },
    {
        id: 4,
        name: 'Money Talks',
        description: 'A Social Media scraper targeted towards monitoring frequency of stock market mentions.',
        githubURL: 'https://github.com/tracedelange/money-talks-front-end',
        siteURL: 'https://money-talks-front-end.herokuapp.com/',
        passiveImage: bfb,
        activeImage: bfb,
        tools: [
            'React',
            'Python',
            'PostgreSQL',
            'Sinatra',
            'Raspbian CronTab',
            'Heroku'
        ]
    },
    {
        id: 5,
        name: 'Network Notebook',
        description: 'A web app designed to act as a contact wallet to organize and track professional connections.',
        githubURL: 'https://github.com/tracedelange/network-notebook-frontend',
        siteURL: 'https://network-notebook-frontend.herokuapp.com/login',
        passiveImage: NN,
        activeImage: NN,
        tools: [
            'React',
            'Rails',
            'JWT',
            'PostgreSQL',
            'Heroku'
        ]
    },
    {
        id: 6,
        name: 'Monster Audience',
        description: 'A social platform based around reviewing and rating user submitted subjects like movies, books, places and experiences.',
        githubURL: 'https://github.com/tracedelange/monster-audience-web',
        siteURL: 'https://monster-audience-web.herokuapp.com/landing',
        passiveImage: MA,
        activeImage: MA,
        tools: [
            'React',
            'Rails',
            'JWT',
            'Web Sockets',
            'PostgreSQL',
            'Heroku'
        ]
    },
]

export default projects;