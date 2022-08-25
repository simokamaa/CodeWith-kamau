// this js file for handa..ing all function scripts for courses js
// ===========================================================
window.addEventListener('load', () => {

    $().getFile('../documents/courses-data.json', e => {
        const elm = e['courses'];
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
    // search method
    $('#search').on('input', () => {
        this.val = $('#search').getVal();
        if (this.val != '') {
            $('.card').hide()
            $('.card ').all(e => {
                ($(e).getTxt().toLocaleLowerCase().includes(this.val.toLocaleLowerCase())) && ($(e).setCss('display', 'flex'))
            })
        } else $('.card').setCss('display', 'flex')
    })
})