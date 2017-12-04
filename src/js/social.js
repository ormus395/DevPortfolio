function generateCards() {
  let social = [ 
    {img:'./images/codepen.png', title:'Codepen', description: 'Please click to view my CodePen for an example of side projects', link: 'https://codepen.io/ormus395/'}, 
    {img:'./images/github.png', title:'GitHub', description: 'Please click to view my GitHub for examples for work.', link: 'https://github.com/ormus395'}, 
    {img:'./images/linkedin.png', title: 'Linkedin', description:'Please click to view my Linkedin page.', link: 'https://www.linkedin.com/in/jarec-turner-967919115/'}
  ];

  let container = document.querySelector('#social');
  let cardContent = [];
  for(let i = 0; i < social.length; i++) {
    var card = 
    `<div class="card" style="width: 20rem;">
      <div class="card-body">
        <h4 class="card-title">${social[i].title}</h4>
        <p><img src="${social[i].img}"></p>
        <p>${social[i].description}</p>
        <a href="${social[i].link}" class="card-link">${social[i].title}</a>
      </div>
    </div>`;
    cardContent.push(card);
  }
  container.innerHTML = cardContent.join("");
}

generateCards();