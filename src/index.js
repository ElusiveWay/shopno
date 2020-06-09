import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import './style.scss'
import './responsive.scss'

const d = global.document
window.onload = () => {
    // Team links
    d.querySelectorAll('.t-hover__contacts > svg').forEach(element => {
        element.onclick = () => {
            window.open('http://example.com')
        }
    });
    // Slide to contacts
    d.querySelector('.header__contact-anchor').onclick = () => {
        window.scrollTo({
            left: 0,
            top: d.querySelector('form').getBoundingClientRect().y,
            behavior: 'smooth'
        })
    }
    // Featured works PopUp
    d.querySelectorAll('[alt*="image"]').forEach(el => {
        el.onclick = function(){
            //PopUp mask
            const mask = d.createElement('div');
            let style = {
                position: 'fixed',
                zIndex: 1000,
                width:'100%',
                height:'100%',
                left: '0',
                top: '0',
                backgroundColor: '#000000aa',
                cursor: 'pointer'
            }
            for (let prop in style){
                mask.style[prop] = style[prop]
            }
            mask.onclick = () => {
                mask.remove()
            }
            //Big image
            const img = d.createElement('img')
            let temp = this.src.split('')
            temp.splice(temp.length-4,4,'_big.jpg')
            img.src = temp.join('')
            img.onclick = () => event.stopPropagation()
            style = {
                position: 'absolute',
                zIndex: 1001,
                left: '50%',
                top: '50%',
                transform:'translate(-50%,-50%)',
                cursor: 'default',
                maxWidth:'90%',
                maxHeight:'100%',
            }
            for (let prop in style){
                img.style[prop] = style[prop]
            }
            mask.appendChild(img)
            d.body.appendChild(mask)
        }
    })
}
