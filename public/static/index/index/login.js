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

})
