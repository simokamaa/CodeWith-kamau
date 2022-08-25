// this is a mastar js file that will run at all the HTML files. for all besic fun..;
// all var..s
const d = document || window.document;
const b = d.body || d.querySelector('body');
const h = d.documentElement || d.querySelector('html');
// seting style ftom thr=eme data
// $().getFile('../documents/theme.json', e => {
//     console.log(e);
// do somthing with this (e)
// })
// besic fun...s
function getImg(ytID = 'oEI1DubanW4') {
    this.url = `https://img.youtube.com/vi/${ytID}/mqdefault.jpg`;
    this.img = new Image();
    this.img.src = this.url;
    return this.img.onload = (() => {
        return this.url
    })()
}
// Performance 
function imgHLOD(url, list, fb, limTime = 3) {
    const Pxurl = '../assets/' + url;
    for (let i = 0; i < list.length; i++) {
        const elm = list[i];
        var img = new Image();
        img.src = Pxurl + elm;
        // chaking for over time and limit
        var tm = $({}).timer(t => {
            if (t.sec >= limTime) {
                img.src = '';
                img.onerror = null;
                img.onload = null;
            }
        })
        img.onload = () => {
            $(tm).rmTimer();
            fb(Pxurl + elm)
        }
    }
}
// open onother html at runtime
function runTimeChange(nm) {
    $('#mainPage').setArr('src', `html/${nm.toLowerCase()}.html`)
}
// get name of next html
function sented(of,ul = of) {
    if (of != (undefined || '')) {
        runTimeChange(of);
        setUrl('#' + ul.toLowerCase())
        var mxk = $().mask()    
        mainPage.onload = ()=> $(mxk).destroy();
    }
}

// for html
window.addEventListener('load', () => {
    // for drageand drop menu
    $('.res-dd', false).on('mouseenter', () => $('.dd-list', false).show())
    $('.dd-list', false).on('mouseleave', () => $('.dd-list', false).hide())
    $('.social').click((e) => {
        var prv = $('.res-dd', false).getTxt()
        $('.res-dd', false).setTxt(e.target.innerText);
        $('.res-dd', false).setHtm(`<svg style="fill: var(--white);width:calc(1em + 0.5vw);margin:auto" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg>`, true);
        $(e.target).setTxt(prv)
    })
    // opening all social media links
    $('.res-dd').click(e => {
        var txt = $(e.target).getTxt();
        (txt == 'Youtube') && open('https://www.youtube.com/c/CodeWithHarry/') ||
            (txt == 'Instagram') && open('https://www.instagram.com/codewithharry/') ||
            (txt == 'Facebook') && open('https://www.facebook.com/CodeWithHarry/');
    })
    if (window.innerWidth < 800) {
        // for mobile menu
        var menOP = false;
        $('.menu-opner', false).click(e => {
            menOP = menOP ? false : true;
            if (menOP) {
                $('.menu-lists').setCss('display', 'flex');
                $('.menu-btns').setCss('display', 'flex');
                $('.them-ctr').setCss('display', 'flex');
                $('.title-doc').setCss({
                    'paddingBottom': '1em',
                    'borderBottom': '2px solid var(--border)'
                });
                $('#main-menu').setCss({
                    'background': 'var(--dark)',
                    'boxShadow': '0px 0px 10px #0000009e'
                });
                // changing icon
                $('.menu-opner').setHtm(`<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>`,)
            } else {
                $('.menu-lists').setCss('display', 'none');
                $('.menu-btns').setCss('display', 'none');
                $('.them-ctr').setCss('display', 'none');
                $('.title-doc').setCss({
                    'paddingBottom': '0px',
                    'borderBottom': 'none'
                });
                $('#main-menu').setCss({
                    'background': 'transparent',
                    'boxShadow': 'none'
                });
                // back the icon
                $('.menu-opner').setHtm(' <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>')
            }
        })
    } else {
        {
            // for menu interect..
            var scdepd = true, lstm;
            $('body', false).on('wheel', e => {
                var syp = (scrollY * 100) / window.innerHeight;
                if (syp > 90) {
                    if (e.deltaY < 1) {
                        window.clearTimeout(lstm);
                        lstm = setTimeout(() => {
                            // to hide mwnu
                            // aplay style
                            if (!scdepd) {
                                scdepd = true;
                                $('.menu-title', false).togle();
                                $('#main-menu').setCss({
                                    'padding': 'calc(1.5em + 1vh) 0px',
                                    'position': 'absolute',
                                    'backdrop-filter': 'none'
                                })
                            }
                        }, 2000)
                        // aplay styles
                        if (scdepd) {
                            scdepd = false;
                            $('.menu-title', false).togle();
                            $('#main-menu').setCss({
                                'padding': 'calc(0.5em + 0.5vh) 0px',
                                'position': 'fixed',
                                'backdrop-filter': 'brightness(0.6)'
                            })
                        }
                    }
                } else {
                    if (!scdepd) {
                        scdepd = true;
                        $('.menu-title', false).togle();
                        $('#main-menu').setCss({
                            'padding': 'calc(1.5em + 1vh) 0px',
                            'position': 'absolute',
                            'backdrop-filter': 'none'
                        })
                    }
                }

            })
        }
    }
    // opning join page
    $('.join-btn').click(e => {
        var text = (e.target.innerText.includes('Log')) ? 'logIn' : 'singUp';
        parent.sented('join',text)
    })
    // change page at runtime
    $('.page-send').click(e => { parent.sented(e.target.innerText) });
    $('.goCour').click(e => { parent.sented('courses') })
    $('.goBlog').click(e => { parent.sented('blog') })
    // theme changeing
    // true = dark, flase = light
    var CurThm = true
    $('.theme-icon', false).click(e => {
        var mxk = $().mask()    
        if (CurThm) {
            $('.theme-icon').setHtm('<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>');
            CurThm = false;
            // for light
            $().inStyle(`
            :root {
                --dark: #1e2530;
                --light: #731dde;
                --aqua: #acf4ff;
                --white: #d5fcf1;
                --logo: #ffffff;
                --border: #359cea;
                --list: #d8d8d8;
                --background: linear-gradient(180deg, var(--blue) 20%, 40%, rgb(0 119 210) 60%, rgb(22 148 244) 80%);
                --background-oth: linear-gradient(180deg, rgb(22 148 244)20%, 40%, rgb(70 167 242) 60%, rgb(22 126 205) 80%);
                --grd : -webkit-linear-gradient(60deg, #4d20d1, #b029e2, #d77ae3);
            }
            #bg-home::after {background-image: url(../assets/blender-render/bg-light-sml.png);}
            `);
            imgHLOD('blender-render/', ['bg-light-mid.png', 'bg-light-large.png'], e => {
                $().inStyle(`
                #bg-home::after{
                    background-image: url(${e});
                }
                `);
            })
        } else {
            $('.theme-icon').setHtm('<path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />');
            CurThm = true;
            // for dark
            $().inStyle(`
            :root {
                --dark: #1e2530;
                --light: #6a57e0;
                --aqua: #74e6bd;
                --white: #c5cacc;
                --logo: #f6f6f7;
                --border: #424f60;
                --list: #b1afc5;
                --background: linear-gradient(180deg, var(--dark) 20%, 40%, rgb(52, 62, 82) 60%, rgb(53, 64, 82) 80%);
                --background-oth: linear-gradient(180deg, #354052 20%, 40%, rgb(44 55 73) 60%, rgb(37 45 62) 80%);
                --grd : -webkit-linear-gradient(60deg, #995920, #d29736, #daa22b);
            }
            #bg-home::after {background-image: url(../assets/blender-render/bg-light-sml.png);}
            `);
            imgHLOD('blender-render/', ['bg-dark-mid.png', 'bg-dark-large.png'], e => {
                $().inStyle(`
                #bg-home::after{
                    background-image: url(${e});
                }
                `);
            },true)
        }
        setInterval(() => {
            $(mxk).destroy();
        }, 400);
    })
})
// resizing caeds
function reszecard() {
    $('.cardimg').setCss('width', `calc(10em + 8vw + 5vh + ${((((window.innerWidth) / 100) - 20) * -1) / 2}em)`)
}
