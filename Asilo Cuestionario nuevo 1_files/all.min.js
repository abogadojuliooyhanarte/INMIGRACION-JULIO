// DOCUMATE FA's js is a huge performance killer.
// Updating this, here allows us to not have to replace EVERY reference to this file
const link = document.createElement('link')
link.rel = 'stylesheet'
// This is the SAME css link that https://hsldocassemble.s3-us-west-1.amazonaws.com/assets/documatecss.css references
// Which is the default css for workflows. Using the SAME link lets us benefit from some of that sweet sweet browser caching.
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
document.head.appendChild(link)
// \Documate
