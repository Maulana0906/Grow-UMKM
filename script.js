
var typed = new Typed('#typed', {
  strings: ['Temukan, Dukung dan Tumbuh bersama UMKM Indonesia'],
  typeSpeed: 100,     
  backSpeed: 70,     
  backDelay: 1000,   
  loop: true        
 });

// card discount 
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
 
// card
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
            <img src="img/umkm/bakso.jpg" class="w-full h-full object-cover rounded-md" alt="">
            ${selection}
            <div class="absolute bottom-0 left-0 bg-blue-400 p-1 text-white tracking-wider rounded-sm text-[7px] md:text-xs">UMKM</div>
          </div>
          <div class="w-full px-1">
          <button class="px-1 rounded-full text-blue-400 border-1 border-blue-300 text-[7px] md:text-xs font-bold info-grafis-utama">Makanan</button>
          <h1 class="text-sm md:text-md font-semibold">Super Bakso</h1>
          <p class="text-[9px] md:text-xs inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#51a2ff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white -mt-1 lucide lucide-map-pin-icon lucide-map-pin inline-block"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            Jl. Brawijaya RT 01 RW 02 Ds. Sidorejo Kec. Sidoarjo (Depan pabrik Maspion)
          </p>
          <ul class="text-[9px] md:text-xs list-disc ml-3.5">
            <li>Bakso Biasa</li>
            <li>Bakso Beranak</li>
            <li class="list-none leading-2 tracking-wider">.....</li>
          </ul>
          <div class="flex flex-col md:flex-row justify-between mt-2 px-1">
            <h3 class="text-lg md:text-2xl text-gray-700 font-bold">
              <span class="text-xs md:text-sm font-semibold block md:inline-block">Rp</span>4.000 - 15.000</h3>
            <button class="text-[9px] md:text-xs font-medium text-white tracking-wide px-3.5 h-5 md:h-7 rounded-full bg-blue-400 cursor-pointer" data-name="get-detail" data-id="3" onclick="openModal(this)">Detail</button>
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
            <button class="text-[9px] md:text-xs font-medium text-white tracking-wide px-3.5 h-5 md:h-7 rounded-full bg-blue-400 cursor-pointer" data-name="get-detail" data-id="2" onclick="openModal(this)">Detail</button>
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
            <button class="text-[9px] md:text-xs font-medium text-white tracking-wide px-3.5 h-5 md:h-7 rounded-full bg-blue-400 cursor-pointer" data-name="get-detail" data-id="4" onclick="openModal(this)">Detail</button>
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
            <button class="text-[9px] md:text-xs font-medium text-white tracking-wide px-3.5 h-5 md:h-7 rounded-full bg-blue-400 cursor-pointer" data-name="get-detail" data-id="1" onclick="openModal(this)">Detail</button>
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

// marquee reviews
function marquee(){
  marqueeLeft();
  marqueeRight();
}
function marqueeLeft(){
  const parent = document.querySelectorAll('.container-card-reviews')[0];
  const children = parent.children;
  const clone = parent.innerHTML;
  let temp;

  parent.insertAdjacentHTML('beforeend', clone);
  parent.insertAdjacentHTML('beforeend', clone);
  const totalWidth = parent.scrollWidth / 2;

  function scroll(){
    parent.scrollLeft += 0.6;
    if(parent.scrollLeft >= totalWidth){
      parent.scrollLeft = 0
    }
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
  const totalWidth = parent.scrollWidth / 2;
  parent.insertAdjacentHTML('beforeend', clone);
  parent.insertAdjacentHTML('beforeend', clone);


  function scroll(){
    
    if (parent.scrollLeft <= 1) {
      parent.scrollLeft = totalWidth;
    } else {
      parent.scrollLeft -= 6;
    }
    temp = requestAnimationFrame(scroll);
  }
  setTimeout(() => {
    scroll();
  },500)

  Array.from(children).forEach(el => {
    el.addEventListener('mouseover', () => cancelAnimationFrame(temp));
    el.addEventListener('mouseout', () => scroll());
  })
  
}
// window.addEventListener('load', marquee());

// location -> leaflet.js
function map(){
const map = L.map('map').setView([-7.250445, 112.768845], 13); 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

let marker;
map.on('click', async (e) => {

  const uiLoad = `<span class="loading loading-dots loading-lg absolute -translate-1/2" id="load"></span>`;
  const textLocation = document.getElementById('alamat');
  textLocation.textContent = '';
  textLocation.innerHTML += uiLoad;

  const {lat, lng} = e.latlng;
  // ubah lokasi sebelum nya ke yang baru
  if(marker) map.removeLayer(marker);
  marker = L.marker([lat, lng]).addTo(map);

  // buat convert titik klik ke dalam alamat
  const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
            .finally(() => {
              textLocation.innerHTML = '';
            });
  const data = await res.json();

  document.getElementById('alamat').textContent = data.display_name;

})
}

// modal
document.addEventListener('click', (el) => {
  switch(el.target.id){
    case 'btnTextLocation':
      document.getElementById('alamat').textContent = document.getElementById('inputTextLocation').value;
      break;
    case 'saveOnModal' :
      document.getElementById('btnCloseModal').click();
      break;
    case 'finishLogin':
      document.getElementById('btnCloseModal').click();
      break;

  }

})
function openModal(btn){
  const name = btn.dataset.name;

  switch(name){
    case 'get-location':
      const uiLocation = `<div class="modal-box md:flex-col items-center w-full !min-w-3/4">
                    <form method="dialog">
                      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" id="btnCloseModal" onclick="deleteModal()">✕</button>
                    </form>
                    <span class="text-start text-lg font-semibold">Lokasi : </span>
                    <button id="alamat" class="flex-none text-sm text-center w-full bg-slate-100 shadow-md min-h-9 py-2 rounded-md">-</button>
                    <div class="flex flex-col md:flex-row gap-4 p-5 items-center w-full">
                      <fieldset class="fieldset w-full md:w-[45%] aspect-1/1">
                        <legend class="fieldset-legend text-sm">Lokasi baru :</legend>
                        <textarea class="textarea w-full aspect-4/3" placeholder="Masukan lokasimu secara lengkap" id="inputTextLocation"></textarea>
                        <button class="py-1 w-20 text-white font-semibold cursor-pointer justify-self-end rounded-full bg-blue-400" id="btnTextLocation"> Cek </button>
                        <div class="label">*NB : Lokasi bisa isi manual atau pilih di peta</div>
                      </fieldset>
                      <div class="w-full md:w-[45%] aspect-1/1" id="map"></div>
                      </div>
                      <button class="py-1 w-32 -mt-1 text-blue-400 font-semibold cursor-pointer justify-self-end rounded-full border border-blue-400 transition duration-150 ease-in-out hover:bg-blue-400 hover:text-white" id="saveOnModal"> Simpan </button>
                    </div>`;
      document.getElementById('my_modal_3').innerHTML += uiLocation; 
      setTimeout(()=> {
        map();     
      },300)
      my_modal_3.showModal();
      break;
    case 'get-discount':
      const uiDiscount = `<div class="modal-box flex flex-col items-center">
                  <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onclick="deleteModal()">✕</button>
                  </form>
                  <h3 class="text-3xl font-bold">Ambil kuponmu</h3>
                  <img src="img/kupon.jpg" alt="">
                  <a href="img/kupon.jpg" download>
                    <button class="btn bg-blue-400 rounded-full  text-white">Download kupon</button>
                  </a>
                </div>`;
      document.getElementById('my_modal_3').innerHTML += uiDiscount;
      my_modal_3.showModal();
      break;
    case 'get-detail':
      getdataUMKM(btn.dataset.id);
      break;
    case 'login':
      const uiLogin = `<div class="modal-box flex flex-col items-center">
                  <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onclick="deleteModal()" id="btnCloseModal">✕</button>
                  </form>
                  <img src="img/new logo.png" class="w-20">
                  <div class="flex w-3/4 bg-slate-100 mt-3 ">
                    <button class="bg-blue-400 transition ease-in-out duration-200 text-sm rounded-md w-1/2 py-2 text-white cursor-pointer swapContentLogin masuk"> Masuk </button>
                    <button class="bg-transparant transition ease-in-out duration-200 rounded-md text-sm w-1/2 py-2 text-gray-400 cursor-pointer swapContentLogin daftar"> Daftar </button>
                  </div>
                  <div class="w-3/4" id="progress">
                  </div>
                    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4" id="contentModalLogin">
                      <legend class="fieldset-legend text-gray-500">Masuk</legend>

                      <label class="label">Email</label>
                      <input type="email" class="input" placeholder="Email" />

                      <label class="label">Password</label>
                      <input type="password" class="input" placeholder="Password" />

                      <div class="mt-3 flex items-center gap-1.5 text-gray-600">
                        <input type="checkbox" >
                        <p class="text-xs"> ingat saya </p>
                        <p class="text-xs ml-auto text-blue-500"> Lupa password? </p>
                      </div>
                      <button class="btn bg-blue-400 text-white mt-4">Masuk</button>
                      <div class="flex items-center justify-between">
                        <div class="w-[42%] h-[1px] bg-gray-400"> </div>
                        <h3 class="text-gray-600 text-sm my-2"> atau </h3>
                        <div class="w-[42%] h-[1px] bg-gray-400"> </div>
                      </div>
                      <button class="btn bg-white text-gray-600 border-[#e5e5e5]">
                        <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                        Masuk dengan Email
                      </button>
                      <button class="btn bg-white text-gray-600 border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Masuk dengan Google
                      </button>
                      <button class="btn bg-[#1A77F2] text-white border-[#005fd8]">
                        <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                        Masuk dengan Facebook
                      </button>
                    </fieldset>
                </div>`;
      document.getElementById('my_modal_3').innerHTML += uiLogin;
      my_modal_3.showModal();
  }
}
function deleteModal(){
  setTimeout(() => {
    document.getElementById('my_modal_3').innerHTML =''; 
  }, 300)
}
async function getdataUMKM(id){
  const res = await fetch('./data-umkm.json');
  const values = await res.json();
  const data = values.find(e => e.id == id);
  const uiMenu = data.menu.map(e => {
    return `<li class="flex gap-1">
                          <div class="w-12 h-12">
                            <img src="${e.path}" class="w-full h-full object-cover object-center rounded-full">
                          </div>
                          <div class="flex flex-col">
                            <p class="leading-3.5 ">${e.nama} </p>
                            <p class="leading-3.5">${e.harga} </p>
                          </div>
                        </li>`
  }).join('');
  const uiTerlaris = data.terlaris.map(e => {
    return `<li class="flex gap-1">
                          <div class="w-12 h-12">
                            <img src="${e.path}" class="w-full h-full object-cover object-center rounded-full">
                          </div>
                          <div class="flex flex-col">
                            <p class="leading-3.5 ">${e.nama} </p>
                            <p class="leading-3.5">${e.harga} </p>
                          </div>
                        </li>`
  }).join('');

  const uiDetail = `<div class="modal-box flex flex-col items-center !max-w-3/4 px-5 pt-10 pb-3">
                  <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onclick="deleteModal()">✕</button>
                  </form>
                  <div class="w-full h-full">
                    <div class="h-72 w-full relative">
                      <img src="${data.path}" class="w-full h-full object-cover object-center rounded-md "> 
                    </div>
                    <div class="mt-3 w-full">
                      <button class="px-1 rounded-full text-blue-400 border-1 border-blue-300 text-sm font-bold info-grafis-utama">${data.kategori}</button>
                      <h1 class="text-2xl font-semibold">${data.judul}</h1>
                      <h2 class="text-sm font-semibold mt-2"> Lokasi : </h2>
                      <p class="text-sm inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#51a2ff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white -mt-1 lucide lucide-map-pin-icon lucide-map-pin inline-block"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                        ${data.alamat}
                      </p>
                      <h2 class="text-sm font-semibold"> Jam operasional : </h2>
                      <p class="text-sm"> ${data.jam_operasi}</p>
                      <h2 class="text-md font-semibold mt-3"> Menu : </h2>
                      <ul class="text-xs mt-1 ml-3.5 w-full flex flex-wrap gap-5">
                       ${uiMenu}
                      </ul>
                      <h2 class="text-md font-semibold mt-3"> Terlaris : </h2>
                      <ul class="text-xs mt-1 ml-3.5 w-full flex flex-wrap gap-5">
                        ${uiTerlaris}
                      </ul>
                    </div>
                  </div>
                </div>  `;

  document.getElementById('my_modal_3').innerHTML += uiDetail;
  my_modal_3.showModal();
}
// login
document.addEventListener('click', (el) => {
  if(el.target.classList.contains('swapContentLogin')){
    swapContentLogin(el.target);
  }
})
function swapContentLogin(btn){
  function swapToDaftar(){
    const sibling = btn.previousElementSibling;
    const container = document.getElementById('contentModalLogin');
    const containerProgress = document.getElementById('progress');

    sibling.classList.replace('bg-blue-400', 'bg-transparant');
    sibling.classList.replace('text-white', 'text-gray-400');
    btn.classList.replace('bg-transparant', 'bg-blue-400');
    btn.classList.replace('text-gray-400', 'text-white');
    
    const uiprogess = `<ul class="flex w-full my-6">
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-500 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-500"> </li>
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-200 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-200"> </li>
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-200 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-200"> </li>
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-200 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-200"> </li>
                    </ul>`;
    const uiDaftar = `<legend class="fieldset-legend text-gray-500">Daftar</legend>
                      <label class="label">Nama usaha</label>
                      <input type="text" class="input" placeholder="Nama usaha" />

                      <label class="label">Kategori usaha</label>
                      <input type="text" class="input" placeholder="Kategori usaha"/>

                      <fieldset class="fieldset">
                        <legend class="fieldset-legend text-gray-500">Alamat</legend>
                        <textarea class="textarea h-24" placeholder="Alamat"></textarea>
                      </fieldset>
                      
                      <fieldset class="fieldset">
                        <legend class="fieldset-legend text-gray-500">Deskripsi usaha</legend>
                        <textarea class="textarea h-24" placeholder="Deskripsi usaha"></textarea>
                      </fieldset>
                      <button class="btn bg-blue-400 text-white mt-4" data-step="1" onclick="loadDaftar(this)">Lanjut</button>`;

    container.innerHTML = uiDaftar;
    containerProgress.innerHTML = uiprogess;
  }

  if(btn.classList.contains('daftar')){
   swapToDaftar();
  }
}
function loadDaftar(btn){
  const numberStep = Number(btn.dataset.step) + 1;
  const container = document.getElementById('contentModalLogin');
  const containerProgress = document.getElementById('progress');
  
  
  switch(numberStep){
    case 2 : 
      const uiStep2 = `<legend class="fieldset-legend text-gray-500">Daftar</legend>

                      <label class="label">Email</label>
                      <input type="email" class="input" placeholder="Email" />

                      <label class="label">Password</label>
                      <input type="password" class="input" placeholder="Password" />

                      <button class="btn bg-blue-400 text-white mt-4" data-step="2" onclick="loadDaftar(this)">Daftar</button>
                      <div class="flex items-center justify-between">
                        <div class="w-[42%] h-[1px] bg-gray-400"> </div>
                        <h3 class="text-gray-600 text-sm my-2"> atau </h3>
                        <div class="w-[42%] h-[1px] bg-gray-400"> </div>
                      </div>
                      <button class="btn bg-white text-gray-600 border-[#e5e5e5]" data-step="2" onclick="loadDaftar(this)">
                        <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                        Daftar dengan Email
                      </button>
                      <button class="btn bg-white text-gray-600 border-[#e5e5e5]" data-step="2" onclick="loadDaftar(this)">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Daftar dengan Google
                      </button>
                      <button class="btn bg-[#1A77F2] text-white border-[#005fd8]" data-step="2" onclick="loadDaftar(this)">
                        <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                        Daftar dengan Facebook
                      </button>`;
      const uiprogess2 = `<ul class="flex w-full my-6">
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-500 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-500"> </li>
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-500 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-500"> </li>
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-200 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-200"> </li>
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-200 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-200"> </li>
                    </ul>`;
      containerProgress.innerHTML = uiprogess2;
      container.innerHTML = uiStep2;
      break;
    case 3 : 
      const uiStep3 = `<div class="w-full text-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400 mx-auto lucide lucide-clock8-icon lucide-clock-8"><path d="M12 6v6l-4 2"/><circle cx="12" cy="12" r="10"/></svg>
              <h1 class="text-2xl font-semibold mt-3"> Menunggu Verifikasi </h1>
              <p class="text-[13px]">Kode Anda : GROW-UMKM-00231 </p>
              <p class="text-sm mt-5 text-justify">&nbsp; Pendaftaran Anda sedang dalam proses verifikasi di Balai Desa. Silakan datang ke Balai Desa terdekat membawa dokumen pendukung untuk melanjutkan verifikasi. List dokumen yang perlu dibawa :</p>
              <ul class="text-xs text-start"> 
                <li class="my-1"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400 inline-block lucide lucide-circle-check-big-icon lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg> Fotokopi KTP</li>
                <li class="my-1"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400 inline-block lucide lucide-circle-check-big-icon lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg> Surat Keterangan Usaha</li>
                <li class="my-1"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400 inline-block lucide lucide-circle-check-big-icon lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg> Foto tempat usaha</li>
              </ul>
              <p class="mt-4 text-sm text-justify">&nbsp; Setelah petugas desa memverifikasi data Anda, akun Anda akan aktif secara otomatis dan Anda akan mendapatkan notifikasi melalui email atau WhatsApp. </p>
              <button class="btn w-3/4 rounded-md bg-blue-400 text-white mt-7" data-step="3" onclick="loadDaftar(this)">Cek status</button>
              </div>  `;
      const uiprogess3 = `<ul class="flex w-full my-6">
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-500 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-500"> </li>
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-500 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-500"> </li>
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-500 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-500"> </li>
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-200 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-200"> </li>
                    </ul>`;
      containerProgress.innerHTML = uiprogess3;
      container.innerHTML = uiStep3;
      break;
    case 4 :
      const uiStep4 = `<div class="w-full text-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400 inline-block lucide lucide-circle-check-big-icon lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                <h1 class="text-2xl font-semibold mt-3"> Verifikasi Berhasil! 🎉 </h1>
                <p class="mt-4 text-sm text-justify">&nbsp; Data dan berkas Anda telah berhasil diverifikasi oleh Balai Desa.
                Akun Anda sekarang aktif sepenuhnya dan dapat digunakan untuk mengelola profil serta mempromosikan usaha Anda di platform UMKM Grow.</p>
                <button class="btn btn-success w-3/4 rounded-md  text-white mt-7" id="finishLogin">Selesai</button>
              </div>  `;
      const uiprogess4 = `<ul class="flex w-full my-6">
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-500 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-500"> </li>
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-500 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-500"> </li>
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-500 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-500"> </li>
                      <li class="relative w-[24%] h-[2px] after:content[''] after:w-3 after:h-3 after:rounded-full after:bg-gray-500 after:absolute after:z-10 after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 bg-gray-500"> </li>
                    </ul>`;
      containerProgress.innerHTML = uiprogess4;
      container.innerHTML = uiStep4;
      container.classList.add('bg-green-50')
      break;
  }
}

// gsap
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({

  // untuk layar di atas md 
  "(min-width: 768px)": function() {
    gsap.to("#mid", {
      width: "30%",
      scale: 0.9,
      scrollTrigger: {
        trigger: "#trigger",
        start: "top top",
        end: "center top",
        scrub: 1,
        markers: false,
        pinSpacing: true
      }
    });
  },

  // untuk layar di bawah md
  "(max-width: 767px)": function() {
    gsap.to("#mid", {
      translateY : "-100px",
      scrollTrigger: {
        trigger: "#trigger",
        start: "top top",
        end: "center top",
        scrub: 1,
        markers: false
      }
    });
  },


});
gsap.from("#mid .logo-hand", {
  opacity : "100%",
  scrollTrigger: {
    trigger: "#trigger",
    start: "top top-=100px",       
    end: "center top+=100px",      
    scrub: 1,                         
    markers: false,          
    pinSpacing : true
  }
});
gsap.to("#containerImgMemory div .memory", {
  opacity : "100%",
  scrollTrigger: {
    trigger: "#trigger",
    start: "center top+=100px",       
    end: "center top-=300px",      
    scrub: 1,                         
    markers: false,          
    pinSpacing : true
  }
});
gsap.to("#perusahaan", {
  opacity : "100%",
  duration : 2,
  scrollTrigger: {
    trigger: "#containerAbout",
    start: "center center",       
    end: "center top",      
    scrub: false,                         
    markers: false,          
    pinSpacing : true
  }
});
gsap.to("#anggota", {
  opacity : "100%",
  duration : 2,
  scrollTrigger: {
    trigger: "#containerAbout",
    start: "center center",       
    end: "center top",      
    scrub: false,                         
    markers: false,          
    pinSpacing : true
  }
});
