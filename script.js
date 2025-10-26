// import TypeIt from "https://cdn.jsdelivr.net/npm/typeit@8.7.1/dist/typeit.min.js";
var typed = new Typed('#typed', {
  strings: ['Temukan, Dukung dan Tumbuh bersama UMKM Indonesia'],
  typeSpeed: 100,     
  backSpeed: 70,     
  backDelay: 1000,   
  loop: true        
 });

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
    const parent = button.parentElement.previousElementSibling;
    const ui = `<div class="w-[calc(25%-6px)] mt-1 pb-1.5 bg-base-200 rounded-md">
          <div class="w-full aspect-video relative">
            <img src="img/umkm/atk.jpg" class="w-full h-full object-cover rounded-md" alt="">
            <div class="absolute bottom-0 left-0 bg-blue-400 p-1 text-white tracking-wider rounded-sm text-xs">UMKM</div>
          </div>
          <div class="w-full px-1">
          <button class="px-1 rounded-full text-blue-400 border-1 border-blue-300 text-xs font-bold info-grafis-utama">Peralatan Sekolah</button>
          <h1 class="text-md font-semibold">Toko Ahabba</h1>
          <p class="text-xs inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#51a2ff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white -mt-1 lucide lucide-map-pin-icon lucide-map-pin inline-block"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            Jl. Brawijaya RT 01 RW 02 Ds. gemulung Kec. Sidoarjo (Depan polsek Sidoarjo)
          </p>
          <ul class="text-xs list-disc ml-3.5">
            <li>Buku & Buku gambar</li>
            <li>Pensil & Pulpen</li>
            <li class="list-none leading-2 tracking-wider">.....</li>
          </ul>
          <div class="flex justify-between mt-2 px-1">
            <h3 class="text-2xl text-gray-700 font-bold">
              <span class="text-sm font-semibold">Rp</span>5.000 - 76.000</h3>
            <button class="text-xs font-medium text-white tracking-wide px-3.5 h-7 rounded-full bg-blue-400 cursor-pointer">Detail</button>
          </div>
        </div>
        </div>
        <div class="w-[calc(25%-6px)] mt-1 pb-1.5 bg-base-200 rounded-md">
          <div class="w-full aspect-video relative">
            <img src="img/umkm/mentai.jpeg" class="w-full h-full object-cover rounded-md" alt="">
            <div class="absolute bottom-0 left-0 bg-blue-400 p-1 text-white tracking-wider rounded-sm text-xs">UMKM</div>
          </div>
          <div class="w-full px-1">
          <button class="px-1 rounded-full text-blue-400 border-1 border-blue-300 text-xs font-bold info-grafis-utama">Makanan</button>
          <h1 class="text-md font-semibold">Suki mentai</h1>
          <p class="text-xs inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#51a2ff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white -mt-1 lucide lucide-map-pin-icon lucide-map-pin inline-block"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            Jl. Brawijaya RT 01 RW 02 Ds. Sidorejo Kec. Sidoarjo (Depan pabrik Maspion)
          </p>
          <ul class="text-xs list-disc ml-3.5">
            <li >Gyoza</li>
            <li>Dimsum Mentai</li>
            <li class="list-none leading-2 tracking-wider">.....</li>
          </ul>
          <div class="flex justify-between mt-2 px-1">
            <h3 class="text-2xl text-gray-700 font-bold">
              <span class="text-sm font-semibold">Rp</span>20.000 - 40.000</h3>
            <button class="text-xs font-medium text-white tracking-wide px-3.5 h-7 rounded-full bg-blue-400 cursor-pointer">Detail</button>
          </div>
          </div>
        </div>
        <div class="w-[calc(25%-6px)] mt-1 pb-1.5 bg-base-200 rounded-md">
          <div class="w-full aspect-video relative">
            <img src="img/umkm/mie ayam.jpeg" class="w-full h-full object-cover rounded-md" alt="">
            <div class="absolute bottom-0 left-0 bg-blue-400 p-1 text-white tracking-wider rounded-sm text-xs">UMKM</div>
          </div>
          <div class="w-full px-1">
          <button class="px-1 rounded-full text-blue-400 border-1 border-blue-300 text-xs font-bold info-grafis-utama">Makanan</button>
          <h1 class="text-md font-semibold">Mie Ayam Syahdu</h1>
          <p class="text-xs inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#51a2ff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white -mt-1 lucide lucide-map-pin-icon lucide-map-pin inline-block"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            Jl. Ahm Yani RT 05 RW 03 Ds. Bulang Kec. Sidoarjo (Depan lapangan bola)
          </p>
          <ul class="text-xs list-disc ml-3.5">
            <li>Mie ayam original</li>
            <li>Mie ayam bakso</li>
            <li class="list-none leading-2 tracking-wider">.....</li>
          </ul>
          <div class="flex justify-between mt-2 px-1">
            <h3 class="text-2xl text-gray-700 font-bold">
              <span class="text-sm font-semibold">Rp</span>10.000 - 25.000</h3>
            <button class="text-xs font-medium text-white tracking-wide px-3.5 h-7 rounded-full bg-blue-400 cursor-pointer">Detail</button>
          </div>
        </div>
        </div>
        <div class="w-[calc(25%-6px)] mt-1 pb-1.5 bg-base-200 rounded-md">
          <div class="w-full aspect-video relative">
            <img src="img/umkm/kue.jpg" class="w-full h-full object-cover object-top rounded-md" alt="">
            <div class="absolute bottom-0 left-0 bg-blue-400 p-1 text-white tracking-wider rounded-sm text-xs">UMKM</div>
          </div>
          <div class="w-full px-1">
          <button class="px-1 rounded-full text-blue-400 border-1 border-blue-300 text-xs font-bold info-grafis-utama">Makanan</button>
          <h1 class="text-md font-semibold">Toko Bahan Kue Pelangi</h1>
          <p class="text-xs inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#51a2ff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white -mt-1 lucide lucide-map-pin-icon lucide-map-pin inline-block"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            Jl. Pramuka RT 05 RW 01 Ds. Gamping Kec. Sidoarjo (Samping sekolah SMP)
          </p>
          <ul class="text-xs list-disc ml-3.5">
            <li>Tepung</li>
            <li>Selai</li>
            <li class="list-none leading-2 tracking-wider">.....</li>
          </ul>
          <div class="flex justify-between mt-2 px-1">
            <h3 class="text-2xl text-gray-700 font-bold">
              <span class="text-sm font-semibold">Rp</span>2.000 - 100.000</h3>
            <button class="text-xs font-medium text-white tracking-wide px-3.5 h-7 rounded-full bg-blue-400 cursor-pointer">Detail</button>
          </div>
        </div>
        </div>`;
    button.classList.add('active')
    parent.innerHTML += ui;
    button.textContent = 'Lebih sedikit';
    button.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>';
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