layui.use(['layer', 'element'], function () {
    $(function () {
        var getHelp = "<div style=\"padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;\">" +
            "        <h2>Dear! You know what?</h2><br>" +
            "        &nbsp;&nbsp;If you don't appear suddenly. I could have used to be alone<br>" +
            "        &nbsp;&nbsp;Hope and hopelessness do not matter. All deep love is self fulfillment<br>" +
            "        &nbsp;&nbsp;Account number is your name<br>" +
            "        &nbsp;&nbsp;The password is your birthday" +
            "     </div>";

        var forget = "<div style=\"padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;\">" +
            "        <h2>Dear! Is it really you?</h2><br>" +
            "        The password is your birthday, the month and the day" +
            "     </div>";

        // get help click function
        $("#get_help").click(function () {
            notice(getHelp)
        })

        // forget password click function
        $("#iforget").click(function () {
            notice(forget)
        })

        //Show notification information
        function notice(msg) {
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
                content: $("#popups").html(msg),
                success: function (layero) {
                    layero.find('.layui-layer-btn0').click(function () {
                    })
                }
            });
        }
    })
})
