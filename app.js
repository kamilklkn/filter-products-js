
const $inputSearch = document.getElementById('search')
const $response = document.getElementById('response')
const $responseContainer = document.getElementById('responseCards')
const $searchBtn = document.getElementById('search-btn')


let products = [
  {
    name: 'Mini Projector LED HDMI Smartphone PC Laptop USB',
    price: 440000,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51TRGPx4fWL._AC_SL1000_.jpg'
  },
  {
    name: 'Mochila de viaje o vuelo para laptop 17.3',
    price: 623300,
    img: 'https://exitocol.vtexassets.com/arquivos/ids/878654-500-auto?width=500&height=auto&aspect=true'
  },
  {
    name: 'Portatil Hp 240 G7 Celeron N4000 500Gb 4Gb FreeDos 14Pulg - HP',
    price: 731207,
    img: 'https://media.aws.alkosto.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/9/192545451802-01.jpg'
  },
  {
    name: 'Bolso de viaje se adapta a laptop de hasta 17 pulgadas',
    price: 240000,
    img: 'https://exitocol.vtexassets.com/arquivos/ids/1056563-500-auto?width=500&height=auto&aspect=true'
  },
  {
    name: 'Impresora HP Ink Tank 315 - HP',
    price: 399685,
    img: 'https://mediaserver.goepson.com/ImConvServlet/imconv/e7af2459bfc25d1ea99d8618abfd2aa09552495a/1200Wx1200H?use=banner&assetDescr=L1110_690x460_3'
  }
]


const searchProduct = product => {
  if(product) {
    $responseContainer.innerHTML = ''

    products.forEach((el, i) => {
      let item = el.name.toLowerCase().split(' ')
      let filter = item.indexOf(product)

      if ( item[filter] === product ) {
        renderProducts(el)
      }
    })

  }
}


const renderProducts = (product) => {
  $response.style.opacity = 1
  $responseContainer.innerHTML += `
  <article class="card">
    <img src="${product.img}" alt="" class="card-img">
    <span class="card-price">$ ${product.price}</span>
    <p class="card-description">${product.name}</p>
  </article>
  `
}



$inputSearch.addEventListener('keyup', e => {
  if(e.target.value.length > 0) {
    searchProduct($inputSearch.value.toLowerCase())
  } else {
    $responseContainer.innerHTML = ''
  }
})



$searchBtn.addEventListener('click', e => {
  console.log(e)
  if($inputSearch.value.length > 0) {
    searchProduct($inputSearch.value.toLowerCase())
  } else {
    $responseContainer.innerHTML = ''
  }
})
