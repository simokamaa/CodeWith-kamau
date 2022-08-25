// this js file for handa..ing all function scripts for join js
// ===========================================================
window.addEventListener('load', () => {
    $('.inp-ml', false).click(e => {
        $('.ml-lb').show();
        $('.inp-ml').setArr('placeholder', '')
    })
    $('#inp-pas', false).click(e => {
        $('.ps-lb').show();
        $('#inp-pas', false).setArr('placeholder', '')
    })
    $('.inp-nm', false).click(e => {
        $('.ml-nm').show();
        $('.inp-nm', false).setArr('placeholder', '')
    })
    $('.eye-hd,.eye-cls').click(e => {
        $('.eye-hd').togle();
        $('.eye-cls').togle();
        if ($('#inp-pas', false).obj[0].type == 'password')
            $('#inp-pas', false).setArr('type', 'text')
        else
            $('#inp-pas', false).setArr('type', 'password')
    })
    // togle join method
    var joinNew = true
    window.toglejoinMethod = function () {
        joinNew = (joinNew) ? false : true;
        if (joinNew) {
            $('#togle-Meth', false).setTxt('Log in?');
            window.parent.location.hash = '#singup';
        } else {
            $('#togle-Meth', false).setTxt('Sing up?');
            window.parent.location.hash = '#login';
        }
        $('.usr-name', false).togle()
    }
    $('#togle-Meth', false).click(() => toglejoinMethod())
    // Image HLOD
    imgHLOD('blender-render/', ['hill-small.png', 'hill-mid.png'], e => {
        $().inStyle(`
            .bg-join{
                background-image: url(${e});
            }
            `);
    }, 2);
    // url cure...
    if (window.parent.location.hash == '#login') (window.toglejoinMethod());
})