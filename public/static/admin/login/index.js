layui.use(['form'], function () {
    var form = layui.form;
    //自定义验证规则
    form.verify({
        title: function (value) {
            let pattern = /^\w{4,10}$/;
            if (!pattern.test(value)) {
                return 'Account format error';
            }

        },
        password: [
            /^\w{4,10}$/,
            'Password format error'
        ]
    });
});
