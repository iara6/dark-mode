const articlesSection = document.querySelector('.articles');

const articlesContent =
  articles.map((article) => {
    const {date, length, title, content} = article;
    const dateFormat = moment(date).format('MMMM Do, YYYY');

    return `
    <article class="post">
      <h2>${title}</h2>
      <div class="post-info">
        <span>${dateFormat}</span>
        <span>${length} min read</span>
      </div>
      <p>${content}</p>
    </article>
    `;
  }).join('');

articlesSection.innerHTML = articlesContent;


const switchBtn = document.querySelector('.switch-btn');

/* switchBtn.addEventListener('click', () => {
  if(!switchBtn.classList.contains('slide')) {
    switchBtn.classList.add('slide');
    document.documentElement.classList.add('dark-mode');
  } else {
    switchBtn.classList.remove('slide');
    document.documentElement.classList.remove('dark-mode');
  }
}); */
switchBtn.addEventListener('click', () => {
  const darkModeOn = switchBtn.classList.toggle('slide');
  document.documentElement.classList.toggle('dark-mode', darkModeOn); 
  //toggle('class', condition)
});
