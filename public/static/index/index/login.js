layui.use(['layer', 'element'], function () {
    $(function () {
        // get help click
        $("#get_help").click(function () {
            layer.open({
                type: 1,
                title: false, //不显示标题栏
                closeBtn: false,
                area: '300px;',
                shade: 0.8,
                id: 'LAY_layuipro', //设定一个id，防止重复弹出
                btn: ['I got it'],
                btnAlign: 'c',
                moveType: 1, //拖拽模式，0或者1
                content: $("#popups").html(),
                success: function (layero) {
                    layero.find('.layui-layer-btn0').click(function () {
                    })
                }
            });

        })
    })

    $("#iforget").click(function () {
        layer.open({
            type: 1,
            title: false, //不显示标题栏
            closeBtn: false,
            area: '300px;',
            shade: 0.8,
            id: 'LAY_layuipro', //设定一个id，防止重复弹出
            btn: ['I got it'],
            btnAlign: 'c',
            moveType: 1, //拖拽模式，0或者1
            content: $("#popups2").html(),
            success: function (layero) {
                layero.find('.layui-layer-btn0').click(function () {
                })
            }
        });
    })
    var html1 = "<div style=\"padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;\">\n" +
        "        <h2>Dear! You know what?</h2><br>\n" +
        "        &nbsp;&nbsp;If you don't appear suddenly. I could have used to be alone<br>\n" +
        "        &nbsp;&nbsp;Hope and hopelessness do not matter. All deep love is self fulfillment<br>\n" +
        "        &nbsp;&nbsp;Account number is your name<br>\n" +
        "        &nbsp;&nbsp;The password is your birthday\n" +
        "    </div>";
    var html2 = "<div style=\"padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;\">\n" +
        "        <h2>Dear! Is it really you?</h2><br>\n" +
        "        The password is your birthday, the month and the day\n" +
        "    </div>";


})
