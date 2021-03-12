import  image from './assets/img008.jpg'
import {TextBlock, ColumnsBlock, ImageBlock, TitleBlock} from './classes/blocks'

export const model = [
    new TitleBlock( 'Web Constructor in JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0983, #658240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ColumnsBlock( [
        'Web application build only by JS without Frameworks',
        'Solid systems',
        'JS is simple and useful programming language'

    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new ImageBlock( image, {
        styles: {
            padding: '1rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'This is Image'
    }),
    new TextBlock( 'My Web Application', {
        styles: {
            padding: '1rem',
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            'font-weight': 'bold'
        }
    })

]