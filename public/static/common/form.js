layui.use(['layer', 'element'], function () {
    $(function () {
        // Intercept form post submit, Modified to ajax
        $("form").submit(function () {
            if ($("form").attr('method').toLowerCase() == 'get') {
                $("form").submit();
                return false
            }
            $.ajax({
                url: $("form").attr('action'),
                type: 'POST',
                dataType: 'json',
                data: $("form").serialize(),
                success: function (result) {
                    console.log(result);
                    if (result.code == 1) {
                        notice(result.msg)
                        setTimeout(function () {
                            window.location.href = result.link
                        }, 3000)
                    } else {
                        notice(result.msg)
                    }
                }
            })
            return false;
        })

        //Show notification information
        function notice(msg) {
            layer.msg(msg, {
                time: 4000, //Auto close after 5 seconds
                // btn: ['I see!']
            });
        }

    })
})
