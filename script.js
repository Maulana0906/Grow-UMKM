
var typed = new Typed('#typed', {
  strings: ['Temukan, Dukung dan Tumbuh bersama UMKM Indonesia'],
  typeSpeed: 100,     
  backSpeed: 70,     
  backDelay: 1000,   
  loop: true        
 });

// about card discount 
const arrow = document.querySelectorAll('.arrow');
Array.from(arrow).forEach(el => {
  handleBtnArrow(el);
})
function handleBtnArrow(btn){
  const containerCardDiscount = document.getElementById('containerCardDiscount');
  const child = containerCardDiscount.children[0];
  const childWidth = btn.classList.contains('right') ? child.clientWidth + 8 : -child.clientWidth-8;
  btn.addEventListener('click', ()=> {
    containerCardDiscount.scrollBy({
      left : childWidth,
      behavior : "smooth"
    })
  })
}
 
// about card
const buttonShowMore = document.querySelectorAll('.button-lebih-banyak')
document.addEventListener('click', (el) => {
    if(el.target.classList.contains('button-lebih-banyak')){
        if(!el.target.classList.contains('active')){
            showMore(el.target)
        }else {
            showLess(el.target)
        }   
    }
})
function showMore(button){
  const uiTerlaris = `<div class="bg-blue-600 absolute top-0 left-1 w-10 h-7 border border-white before:content[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2 before:w-7 before:h-7 before:rotate-45 before:border-b before:border-r before:border-white before:bg-blue-600">
              <span class="absolute left-1/2 -translate-x-1/2 text-center text-white text-lg font-semibold">TOP</span>
            </div>`;
  const selection = button.classList.contains('terlaris') ? uiTerlaris : '';
  const parent = button.parentElement.previousElementSibling;
    const ui = `<div class="w-[calc(50%-6px)] md:w-[calc(25%-6px)] pb-1.5 bg-base-200 rounded-md">
          <div class="w-full aspect-video relative">
            <img src="img/umkm/mentai.jpeg" class="w-full h-full object-cover rounded-md" alt="">
            ${selection}
            <div class="absolute bottom-0 left-0 bg-blue-400 p-1 text-white tracking-wider rounded-sm text-[7px] md:text-xs">UMKM</div>
          </div>
          <div class="w-full px-1">
          <button class="px-1 rounded-full text-blue-400 border-1 border-blue-300 text-[7px] md:text-xs font-bold info-grafis-utama">Makanan</button>
          <h1 class="text-sm md:text-md font-semibold">Suki mentai</h1>
          <p class="text-[9px] md:text-xs inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#51a2ff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white -mt-1 lucide lucide-map-pin-icon lucide-map-pin inline-block"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            Jl. Brawijaya RT 01 RW 02 Ds. Sidorejo Kec. Sidoarjo (Depan pabrik Maspion)
          </p>
          <ul class="text-[9px] md:text-xs list-disc ml-3.5">
            <li >Gyoza</li>
            <li>Dimsum Mentai</li>
            <li class="list-none leading-2 tracking-wider">.....</li>
          </ul>
          <div class="flex flex-col md:flex-row justify-between mt-2 px-1">
            <h3 class="text-lg md:text-2xl text-gray-700 font-bold">
              <span class="text-xs md:text-sm font-semibold block md:inline-block">Rp</span>20.000 - 40.000</h3>
            <button class="text-[9px] md:text-xs font-medium text-white tracking-wide px-3.5 h-5 md:h-7 rounded-full bg-blue-400 cursor-pointer">Detail</button>
          </div>
          </div>
        </div>
        <div class="w-[calc(50%-6px)] md:w-[calc(25%-6px)] pb-1.5 bg-base-200 rounded-md">
          <div class="w-full aspect-video relative">
            <img src="img/umkm/atk.jpg" class="w-full h-full object-cover rounded-md" alt="">
            ${selection}
            <div class="absolute bottom-0 left-0 bg-blue-400 p-1 text-white tracking-wider rounded-sm text-[7px] md:text-xs">UMKM</div>
          </div>
          <div class="w-full px-1">
          <button class="px-1 rounded-full text-blue-400 border-1 border-blue-300 text-[7px] md:text-xs font-bold info-grafis-utama">Peralatan Sekolah</button>
          <h1 class="text-sm md:text-md font-semibold">Toko Ahabba</h1>
          <p class="text-[9px] md:text-xs inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#51a2ff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white -mt-1 lucide lucide-map-pin-icon lucide-map-pin inline-block"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            Jl. Brawijaya RT 01 RW 02 Ds. gemulung Kec. Sidoarjo (Depan polsek Sidoarjo)
          </p>
          <ul class="text-[9px] md:text-xs list-disc ml-3.5">
            <li>Buku & Buku gambar</li>
            <li>Pensil & Pulpen</li>
            <li class="list-none leading-2 tracking-wider">.....</li>
          </ul>
          <div class="flex flex-col md:flex-row justify-between mt-2 px-1">
            <h3 class="text-lg md:text-2xl text-gray-700 font-bold">
              <span class="text-xs md:text-sm font-semibold block md:inline-block">Rp</span>5.000 - 76.000</h3>
            <button class="text-[9px] md:text-xs font-medium text-white tracking-wide px-3.5 h-5 md:h-7 rounded-full bg-blue-400 cursor-pointer">Detail</button>
          </div>
        </div>
        </div>
        <div class="w-[calc(50%-6px)] md:w-[calc(25%-6px)] pb-1.5 bg-base-200 rounded-md">
          <div class="w-full aspect-video relative">
            <img src="img/umkm/kue.jpg" class="w-full h-full object-cover object-top rounded-md" alt="">
            ${selection}
            <div class="absolute bottom-0 left-0 bg-blue-400 p-1 text-white tracking-wider rounded-sm text-[7px] md:text-xs">UMKM</div>
          </div>
          <div class="w-full px-1">
          <button class="px-1 rounded-full text-blue-400 border-1 border-blue-300 text-[7px] md:text-xs font-bold info-grafis-utama">Makanan</button>
          <h1 class="text-sm md:text-md font-semibold">Toko Bahan Kue Pelangi</h1>
          <p class="text-[9px] md:text-xs inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#51a2ff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white -mt-1 lucide lucide-map-pin-icon lucide-map-pin inline-block"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            Jl. Pramuka RT 05 RW 01 Ds. Gamping Kec. Sidoarjo (Samping sekolah SMP)
          </p>
          <ul class="text-[9px] md:text-xs list-disc ml-3.5">
            <li>Tepung</li>
            <li>Selai</li>
            <li class="list-none leading-2 tracking-wider">.....</li>
          </ul>
          <div class="flex flex-col md:flex-row justify-between mt-2 px-1">
            <h3 class="text-lg md:text-2xl text-gray-700 font-bold">
              <span class="text-xs md:text-sm font-semibold block md:inline-block">Rp</span>2.000 - 100.000</h3>
            <button class="text-[9px] md:text-xs font-medium text-white tracking-wide px-3.5 h-5 md:h-7 rounded-full bg-blue-400 cursor-pointer">Detail</button>
          </div>
        </div>
        </div>
        <div class="w-[calc(50%-6px)] md:w-[calc(25%-6px)] pb-1.5 bg-base-200 rounded-md">
          <div class="w-full aspect-video relative">
            <img src="img/umkm/mie ayam.jpeg" class="w-full h-full object-cover rounded-md" alt="">
            ${selection}
            <div class="absolute bottom-0 left-0 bg-blue-400 p-1 text-white tracking-wider rounded-sm text-[7px] md:text-xs">UMKM</div>
          </div>
          <div class="w-full px-1">
          <button class="px-1 rounded-full text-blue-400 border-1 border-blue-300 text-[7px] md:text-xs font-bold info-grafis-utama">Makanan</button>
          <h1 class="text-sm md:text-md font-semibold">Mie Ayam Syahdu</h1>
          <p class="text-[9px] md:text-xs inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#51a2ff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white -mt-1 lucide lucide-map-pin-icon lucide-map-pin inline-block"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            Jl. Ahm Yani RT 05 RW 03 Ds. Bulang Kec. Sidoarjo (Depan lapangan bola)
          </p>
          <ul class="text-[9px] md:text-xs list-disc ml-3.5">
            <li>Mie ayam original</li>
            <li>Mie ayam bakso</li>
            <li class="list-none leading-2 tracking-wider">.....</li>
          </ul>
          <div class="flex flex-col md:flex-row justify-between mt-2 px-1">
            <h3 class="text-lg md:text-2xl text-gray-700 font-bold">
              <span class="text-xs md:text-sm font-semibold block md:inline-block">Rp</span>10.000 - 25.000</h3>
            <button class="text-[9px] md:text-xs font-medium text-white tracking-wide px-3.5 h-5 md:h-7 rounded-full bg-blue-400 cursor-pointer">Detail</button>
          </div>
        </div>
        </div>`;
    button.classList.add('active')
    parent.innerHTML += ui;
    button.textContent = 'Lebih sedikit';
    button.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>';
}
function showLess(button){
    const parent = button.parentElement.previousElementSibling;
    const children = parent.children;

    Array.from(children).forEach((el,i) => {
        if(i>3) el.remove();
    })

    button.classList.remove('active')
    button.textContent = 'Lebih banyak';
    button.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>';

}
function marquee(){
  marqueeLeft();
  marqueeRight();
}
function marqueeLeft(){
  const parent = document.querySelectorAll('.container-card-reviews')[0];
  const children = parent.children;
  const clone = parent.innerHTML;
  let temp;
  let i =0;

  parent.insertAdjacentHTML('beforeend', clone);
  parent.insertAdjacentHTML('beforeend', clone);
  const totalWidth = parent.scrollWidth / 2;

  function scroll(){
    i+= 0.6;
    if(i >= totalWidth){
      i =0
    }
    parent.scrollLeft = i;
    temp = requestAnimationFrame(scroll)
  }

  scroll();

  Array.from(children).forEach(el => {
    el.addEventListener('mouseover', () => cancelAnimationFrame(temp));
    el.addEventListener('mouseout', () => scroll());
  })
}
function marqueeRight(){
  const parent = document.querySelectorAll('.container-card-reviews')[1];
  const children = parent.children;
  const clone = parent.innerHTML;
  let temp;
  let i =0;

  parent.insertAdjacentHTML('beforeend', clone);
  parent.insertAdjacentHTML('beforeend', clone);
  const totalWidth = parent.scrollWidth / 2;

  function scroll(){
    i-= 0.6;
    if(i <= 0){
      i = totalWidth;
    }
    parent.scrollLeft = i;
    temp = requestAnimationFrame(scroll)
  }

  scroll();

  Array.from(children).forEach(el => {
    el.addEventListener('mouseover', () => cancelAnimationFrame(temp));
    el.addEventListener('mouseout', () => scroll());
  })
}

window.addEventListener('load', marquee());

