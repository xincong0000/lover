$(function () {
    // 退出登录
    $("#sign_out").click(function () {
        console.log($(this).data('link'))
        $.ajax({
            url: '/admin/login/logout',
            type: 'POST',
            success: function (result) {
                console.log(result)
                notice(result.msg);
                setTimeout(function () {
                    window.location.reload();
                }, 1500);
            }
        })
    })
    //清除缓存
    $("#clearCache").click(function () {
        $.ajax({
            url: 'clearCache',
            method: 'post',
            data: {},
            dataType: 'json',
            success: function (res) {
                console.log(res);
                layer.msg(res.msg);
                setTimeout(function () {
                    window.location.reload();
                }, 1500);
            }
        })
    })


    //Show notification information
    function notice(msg) {
        layer.msg(msg, {
            time: 4000, //Auto close after 5 seconds
            // btn: ['I see!']
        });
    }
})
