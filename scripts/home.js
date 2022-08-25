// this will run in home page only
// ---------------------------------

// adding courses in home page
$().getFile('../documents/courses-data.json', e => {
    const elm = e['home'];
    for (const val in elm) {
        const ans = elm[val];
        const card = document.createElement('div');
        $(card).addClass('card');
        card.classList.add(val);

        card.innerHTML = `
        <img src="${getImg(ans.thimble)}" alt="404" class="cardimg">
        <div class="crd-doc">
        <div class="crd-dta crs-tit"><p>${ans.title}</p><p>${ans.category}</p></div>
        <div class="crd-dta crc-dis-txt"><p>${ans.description}</p></div>
        <div class="crd-dta hrf-sec">
        <img src="https://yt3.ggpht.com/ytc/AKedOLT3EnMXtIOvDT4CL7obl0-acSZCBhMuapXBQFksVQ=s88-c-k-c0x00ffffff-no-rj" alt="404">
        <div class="hrf-btn"><button>Watch now</button><button class="crdgoto" open="${ans.YTP_Link}" >Open youtube</button></div>
        </div>
        </div>`
        document.querySelector('.cors').appendChild(card)
    }
    $('.crdgoto').click(e => open($(e.target).getArr('open')))
    // real time resize
    reszecard();
})
// geting testimonials from jsoon
$().getFile('../documents/text-data.json', e => {
    const elm = e['home']['testimonials'];
    const elm2 = e['home']['bio'];
    for (const val in elm) {
        const ans = elm[val];
        const cuds = document.createElement('div');
        cuds.classList.add('fbs');
        cuds.classList.add(val);

        cuds.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/></svg>
        <p class="quds">${ans.quote}</p>
        <div class="qd-wn"><p>${ans.name}</p><p>${ans.job}</p></div>`
        // aplaying
        document.querySelector('.tesim').appendChild(cuds)
    }
    // for bio
    $('.doc-bio').setTxt(elm2)
})
window.addEventListener('load', () => {
    // realtime resize
    respon();
})


function respon() {
    // HLOD for home backgroun
    if (window.innerWidth > 900) {
        imgHLOD('blender-render/', ['bg-dark-mid.png', 'bg-dark-large.png'], e => {
            $().inStyle(`
            #bg-home::after{
                background-image: url(${e});
            }
            `, true);
        });
    } else
        // for mobile and tablet devi...s
        imgHLOD('blender-render/', ['bg-dark-mob-lrg.png'], e => {
            $().inStyle(`
        #bg-home::after{
            background-image: url(${e});
        }
        `, true);
        });
}

$(window).on('resize', () => {
    reszecard()
    respon()
})