$(function () {
    $(".input-field").blur(function () {
        if ($(this).val() == '') {
            return false;
        }
        $('.' + this.name + ' span').addClass('su')
    })
})
