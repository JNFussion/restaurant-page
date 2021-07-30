import { Block } from './home';
import grandmaImg from './images/christian-bowen-TOKVE7PNwAc-unsplash.jpg';

const contact = () => {
  const content = document.querySelector('.content');
  const img = new Image();
  const blocks = [
    Block("Who is she?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis blandit ligula vel porttitor. Cras id mauris in massa facilisis vehicula in eu magna. Donec facilisis erat ut leo porta finibus. Praesent viverra molestie porttitor. Cras varius eleifend tempor. Etiam tempor ultricies dolor in ornare. Etiam non elit ex. Ut a eros neque."),
    Block('Contact', "Tel. 555-555–5555")
  ]

  img.src = grandmaImg;
  img.classList.add('img');
  blocks[0].getContent().appendChild(img);
  blocks[0].getContent().classList.add('about');
  blocks.forEach( b => content.appendChild(b.getBody()));
}

export { contact };