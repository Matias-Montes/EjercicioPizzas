/*
Utilizando el querido array de objetos "Pizzas🍕", realizar el siguiente desafío: 

👉 A cada Pizza, agregarle una imagen. 
👉 Guardar el array en el local storage. 
👉 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). 
👉 Debajo del card tiene que haber un input y un botón. 

Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.

🚨 Si no coincide con ningún id, renderizar un mensaje de error.

🆙 Antes de entregar, debemos deployar nuestro repositorio en Vercel, y entregar ambos links. (GitHub y Vercel). */

let listadoPizzas = [
    {
      id: 1,
      nombre: 'Pizza con muzzarella',
      precio: 750,
      imagen: 'https://blog.pedidosya.com.ar/wp-content/uploads/sites/5/2018/05/pizza-con-muzzarella.jpg',
    },
    {
      id: 2,
      nombre: 'Pizza napolitana',
      precio: 850,
      imagen: 'https://blog.pedidosya.com.ar/wp-content/uploads/sites/5/2018/05/pizza-napolitana.jpg',
    },
    {
      id: 3,
      nombre: 'Pizza con jamón',
      precio: 850,
      imagen: 'https://blog.pedidosya.com.ar/wp-content/uploads/sites/5/2018/05/pizza-con-jamon.jpg',
    },
    {
      id: 4,
      nombre: 'Pizza fugazzeta',
      precio: 800,
      imagen: 'https://blog.pedidosya.com.ar/wp-content/uploads/sites/5/2018/05/pizza-fugazzeta.png',
    },
    {
      id: 5,
      nombre: 'Pizza calabresa',
      precio: 850,
      imagen: 'https://blog.pedidosya.com.ar/wp-content/uploads/sites/5/2018/05/pizza-calabresa.jpg',
    },
    {
      id: 6,
      nombre: 'Pizza con ananá',
      precio: 1050,
      imagen: 'https://www.pedidosya.com.ar/blog/wp-content/uploads/sites/5/2017/09/pizza-anana.jpg',
    },
  ];
  
  localStorage.setItem('listadoPizzas', JSON.stringify(listadoPizzas));
  
  const cardImg = document.querySelector('.card-img');
  const cardTitle = document.querySelector('.card-title');
  const cardPrice = document.querySelector('.card-price');
  const Btn = document.querySelector('button');
  const input = document.querySelector('input');
  
  document.addEventListener('DOMContentLoaded', () => {
    localStorage.getItem('listadoPizzas') && (listadoPizzas = JSON.parse(localStorage.getItem('listadoPizzas')));
  
    cardImg.src = listadoPizzas[0].imagen;
    cardTitle.textContent = listadoPizzas[0].nombre;
    cardPrice.textContent = `Precio:  $ ${listadoPizzas[0].precio}`;
  });
  
  Btn.addEventListener('click', (e) => {
    e.preventDefault();
    try {
      const pizza = listadoPizzas.find((pizza) => pizza.id == input.value);
      cardImg.src = pizza.imagen;
      cardTitle.textContent = pizza.nombre;
      cardPrice.textContent = `Precio:  $ ${pizza.precio}`;
    } catch (error) {
      Swal.fire({
        text: 'Pizza no encontrada',
        confirmButtonText: 'Aceptar',
      });
    }
  });