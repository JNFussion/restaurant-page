import { Block } from "./home";

const menu = () => {
  const content = document.querySelector('.content');
  const dishes = document.createElement('section');
  
  dishes.classList.add('dishes');

  const blocks = [
    Block("Puchero", "Type of stew made of chicken, beef or pork, bacon, chickpeas, potatoes and carrots.", true),
    Block("Rabo de toro", "Type of stew made of bull's tail or cow, red wine and carrot.", true),
    Block("Patas a lo pobre", "Potatoes sliced very thin fried in olive oil with scrambled eggs and chorizo.", true),
    Block("Salmorejo", "Cream made of tomato, bread, oil and garlic.", true)
  ];
  content.appendChild(dishes);
  blocks.forEach( b => dishes.appendChild(b.getBody()));
}

export {menu};