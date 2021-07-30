const home = () => {
  const content = document.querySelector('.content');
  const head = Header("Vieji's Home",
    "Are you in Andalucía on holiday? Do you want to taste some traditional Andalusian food? But you are afraid to end up in a tourist restaurant with overpriced plates. Don't worry, I got you! Visit Vieji's, you will be served authentic local food made by a lovely old woman.",
    "Warning: this is not a real restaurant, it's my grandma's house; You will be fed and treated like a grandson, though.");

  const blocks = [
    Block("Schedule", "I don't know mate, just show up. If she is at home, she'll make something to eat."),
    Block("Where are we?", "123 Fake Street")
  ]

  content.append(head.getHeader());
  blocks.forEach( b => content.appendChild(b.getBody()));

}

const Header = (title, descriptionText, warn) => {
  const header = document.createElement('header');
  const mainTitle = document.createElement('h1');
  const description = document.createElement('p');
  const warning = document.createElement('p');

  mainTitle.classList.add('title');
  mainTitle.id = "main-title";
  description.classList.add('description');
  warning.id = 'warning';

  mainTitle.textContent = title;
  description.textContent = descriptionText;
  warning.textContent = warn;

  header.appendChild(mainTitle);
  header.appendChild(description);
  header.appendChild(warning);

  const getMainTitle = () => mainTitle;
  const getDescription = () => description;
  const getWarning = () => warning
  const getHeader = () => header;

  return { getMainTitle, getDescription, getWarning, getHeader }
}

const Block = (titleText, contentText, dish) => {
  const body = document.createElement('article');
  const title = dish ? document.createElement('h3') : document.createElement('h2');
  const content = document.createElement('p');

  dish ? title.classList.add('dish-title') : title.classList.add('title') ;
  title.textContent = titleText;
  content.textContent = contentText;

  body.appendChild(title);
  body.appendChild(content);

  const getTitle = () => title;
  const getContent = () => content;
  const getBody = () => body;

  return { getBody, getTitle, getContent }
}

export {home, Block}
