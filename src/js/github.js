let url = 'https://api.github.com/users/ormus395/repos';
let pointer = './images/pointer.png';
function getRepos() {
  fetch(url)
    .then(resp => resp.json())
    .then(repos => generateRepos(repos))
  ;
}

function generateRepos(repos) {
  let container = document.querySelector('#projects');
  let projects = [];
  repos.map((repo, index) => {
    projects.push(repo);
  })
  for(let i = 0; i < projects.length; i++) {
    console.log(projects[i])
    var card = document.createElement('DIV');
    card.setAttribute('class', 'card');
    let headerImg = document.createElement('IMG');
    headerImg.src = 'https://avatars3.githubusercontent.com/u/28426718?v=4'
    headerImg.setAttribute('class', 'headerImg');
    card.appendChild(headerImg)

    let h3 = document.createElement('H3');
    h3.title = projects[i].name;
    h3.innerText = projects[i].name;
    card.appendChild(h3);

    let h6 = document.createElement('H6');
    h6.innerHTML = `Created by ${projects[i].owner.login}`
    card.appendChild(h6);

    let p = document.createElement('P');
    p.innerHTML = projects[i].description;
    card.appendChild(p);

    let img = document.createElement('IMG');
    img.setAttribute('class', 'pointer');
    img.src = pointer;

    let hr = document.createElement('HR');
    card.appendChild(hr);

    let a = document.createElement('A');
    a.href = projects[i].html_url;
    a.appendChild(img);

    let stars = document.createElement('H6');
    stars.innerText = `Stars: ${projects[i].stargazers_count}, Forks: ${projects[i].forks}`;
    card.appendChild(stars);

    card.appendChild(a);
    container.appendChild(card)

  }

  
}

getRepos();
