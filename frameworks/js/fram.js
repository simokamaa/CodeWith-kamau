// this js file contains all basic functions like in jquery
// from code with harry website remastered
var doOncereset = false;
const $ = (function () {
    class fram {
        constructor(sel, isall = true) {
            if (sel != undefined) {
                if (typeof sel != 'object') {
                    this.obj = (isall) ? document.querySelectorAll(sel) :
                        document.querySelector(sel);
                    if (this.obj == null) this.obj = [sel];
                } else this.obj = [sel];
            }
            // looping for all html element
            this.all = function (clb) {
                this.obj.forEach(e => clb(e));
                return this;
            };

            // clock
            this.clock = function () {
                return new Date();
            }
            // timer with interval
            this.timer = function (feedback) {
                sel.ms = 0;
                sel.sec = 0;
                sel.min = 0;
                sel.timer1 = setInterval(() => {
                    sel.ms++;
                    feedback(sel)
                }, 1);
                sel.timer2 = setInterval(() => {
                    sel.sec++;
                }, 1000);
                sel.timer2 = setInterval(() => {
                    sel.min++;
                }, 1000 * 60);
                return sel;
            }
            // remove timer
            this.rmTimer = function () {
                window.clearInterval(sel.timer1);
                window.clearInterval(sel.timer2);
                window.clearInterval(sel.timer3);
                return this
            }

            // all tages thet that don't soports css
            this.noTags = ['HTML', 'HEAD', 'SCRIPT', 'STYLE', 'META', 'LINK', 'TITLE', 'BACE']
            // chake all same in a arry
            this.allEqual = arr => arr.every(val => val === arr[0]);
            // chake all true in a arry
            this.chakeAllArr = arr => arr.every(val => val === true)

            // set css pro...
            this.setCss = function (pro, val) {
                if (typeof pro == 'string') {
                    this.all(e => e.style[pro] = val)
                } else {
                    this.all(e => Object.assign(e.style, pro))
                }
                return this;
            }
            // get css pro...
            this.getCss = function (pro) {
                var list = [], css;
                this.all(e => list.push(window.getComputedStyle(e).getPropertyValue(pro))).
                    allEqual(list) && (css = list[0]) || (css = list);
                return css;
            }
            // set innerHtml
            this.setHtm = function (htm, con = false) {
                // console.log(htm);
                this.all(e => (con) ? (e.innerHTML += htm) : (e.innerHTML = htm))
                return this;
            }
            // get innerHtml
            this.getHtm = function () {
                this.txtList = [];
                this.all(e => this.txtList.push(e.innerHTML));
                (this.txtList.length == 1) && (this.txtList = this.txtList[0]);
                return this.txtList;
            }
            // set innerText
            this.setTxt = function (txt, con = false) {
                this.all(e => (con) ? (e.innerText += txt) : (e.innerText = txt))
                return txt;
            }
            // get innerText
            this.getTxt = function () {
                this.txtList = [];
                this.all(e => this.txtList.push(e.innerText));
                (this.txtList.length == 1) && (this.txtList = this.txtList[0]);
                return this.txtList;
            }
            // set value
            this.setVal = function (val, con = false) {
                this.all(e => (con) ? (e.value += val) : (e.value = val))
                return val;
            }
            // get value
            this.getVal = function () {
                this.txtList = [];
                this.all(e => this.txtList.push(e.value));
                (this.txtList.length == 1) && (this.txtList = this.txtList[0]);
                return this.txtList;
            }
            // remove html element
            this.destroy = function () {
                this.all(e => e.remove());
                return this;
            }
            // get html attributes
            this.getArr = function (nm) {
                this.arrList = [];
                var arr = [];
                this.all(e => this.arrList.push(e.getAttribute(nm))).
                    allEqual(this.arrList) && (arr = this.arrList[0]) || (arr = this.arrList);
                return arr;
            }
            // set html attributes
            this.setArr = function (arr, val) {
                if (typeof arr == 'string') {
                    this.all(e => e.setAttribute(arr, val))
                } else {
                    this.all(e => {
                        for (const key in arr) {
                            if (Object.hasOwnProperty.call(arr, key)) {
                                const elm = arr[key];
                                e.setAttribute(key, elm)
                            }
                        }
                    })
                }
                return this;
            }
            // match cond... for all inside arry
            this.matchAll = function (lis) {
                var chkd = [];
                var can = false;
                lis.forEach(e => {
                    if (!can) {
                        if (sel === e) chkd.push(true);
                        else {
                            chkd.push(false);
                            can = true
                        };
                    }
                })
                return this.chakeAllArr(chkd)
            }
            // chake cond... for all
            this.chakeAll = function (lis, isn = false) {
                var can = false;
                lis.forEach(e => {
                    if (!isn) { if (!can) { (e === sel) && (can = true) } }
                    else { if (!can) { (e.includes(sel)) && (can = true) } }
                })
                return can
            }
            // event mode
            this.on = function (ev, febk) {
                this.all(elm => {
                    if (typeof elm == 'object') {
                        elm.addEventListener(ev, e => febk(e))
                    }
                })
            }
            // click event mode
            this.click = function (febk) {
                this.all(elm => {
                    if (typeof elm == 'object') {
                        elm.addEventListener('click', e => febk(e))
                    }
                })
            }
            // add class to target
            this.addClass = function (cls) {
                this.all(elm => {
                    elm.classList.add(cls)
                })
            }
            this.inStyle = function (cod, rm = false) {
                let tr = document.querySelector('#fm-style-sh');
                if (tr == null) {
                    tr = document.createElement('style')
                    tr.id = 'fm-style-sh';
                    document.body.append(tr);
                } else {
                    if (rm) tr.innerHTML = cod
                    else tr.innerHTML += cod;
                }
                return this;
            }
            // do once program and reset
            this.rest = function (e) {
                doOncereset = false;
                e = false;
            }
            this.doOnce = function (fb) {
                if (!doOncereset) {
                    fb();
                    doOncereset = true;
                }
                return this
            }
            // hide and show
            this.hide = function () {
                this.setArr('data-dis', this.getCss('display'));
                this.all(e => e.style.display = 'none')
            }
            this.show = function () {
                this.setCss('display', (this.getArr('data-dis') != '') ? this.getArr('data-dis') : 'block')
            }
            // togle visi... method
            this.togle = function (dely = 0) {
                setTimeout(() => {
                    if (this.getCss('display') == 'none') this.show()
                    else this.hide()
                }, dely)
            }
            // fetching from ot.. file
            this.getFile = function (tar, fed) {
                fetch(tar)
                    .then(res => {
                        res.json().then(data => fed(data));
                    }).catch(err => {
                        fed(err)
                    })
            };
            // filrer everything
            this.mask = function (typ = 'bl', pow = 10) {
                this.maskElm = document.createElement('div')
                $(this.maskElm).setCss({
                    'width': '100vw',
                    'height': '100vh',
                    'position': 'absolute',
                    'zIndex': '199',
                    'top': '0',
                    'left': '0',
                    'background': 'transparent'
                })
                if (typ.includes('bl')) {
                    $(this.maskElm).setCss('backdropFilter', `blur(${pow}px)`);
                } else if (typ.includes('br')) {
                    $(this.maskElm).setCss('backdropFilter', `brightness(${pow / 100})`);
                } else $(this.maskElm).setCss('backdropFilter', `${typ}(${pow})`);
                document.body.append(this.maskElm);
                return this.maskElm;
            }
        };
    }
    // returning main method
    return function (input) {
        return new fram(input);
    }
}())