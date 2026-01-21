/*

// selecting the root container from HTML
const mainContainer = document.querySelector('#root')

// creating a React-like object
const reactElement = {
    type: 'a', // tag name (anchor tag)
    props: {
        href: 'https://google.com', // link URL
        target: '_blank' // open in new tab
    },
    content: 'click on me to navigate google page' // text inside tag
}

// custom function to render element on screen
function customRender(reactElement, mainContainer) {

   // create HTML element using type (a tag)
   const domElement = document.createElement(reactElement.type)

   // add text inside the element
   domElement.innerHTML = reactElement.content

   // set href attribute
   domElement.setAttribute('href', reactElement.props.href)

   // set target attribute
   domElement.setAttribute('target', reactElement.props.target)

   // append element inside root container
   // this actually shows the element on the page
   mainContainer.appendChild(domElement)
}

// calling function to render element
customRender(reactElement, mainContainer)


*/


//dynamic

const container= document.querySelector('#root')

const element={
    type: 'a',
    props:{
        href: 'https://www.google.com',
        target: '_blank'
    },
    content: 'click me to go google'
};

function render(element, container){
    const domElement= document.createElement(element.type)
    domElement.innerHTML= element.content
    
    for(const prop in element.props){
        if(prop==='content') continue;
        domElement.setAttribute(prop, element.props[prop])
    }

    container.appendChild(domElement)
}

render(element, container)
