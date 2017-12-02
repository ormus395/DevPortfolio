function generateCards() {
  let social = [ 
    {img:'./images/codepen.png', title:'Codepen', description: 'Please click to view my CodePen for an example of side projects', link: 'https://codepen.io/ormus395/'}, 
    {img:'./images/github.png', title:'GitHub', description: 'Please click to view my GitHub for examples for work.', link: 'https://github.com/ormus395'}, 
    {img:'./images/resume.png', title: 'Resume', description:'Please click to download my resume', link: ''}
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
        <a href="${social[i].link}" class="card-link">${social[i].link}</a>
      </div>
    </div>`;
    cardContent.push(card);
  }
  container.innerHTML = cardContent;
}

generateCards();