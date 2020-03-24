layui.use(['form'], function () {
    var form = layui.form;
    //自定义验证规则
    form.verify({
        title: function (value) {
            let pattern = /^[a-zA-Z0-9]\w{4,10}$/;
            if (!pattern.test(value)) {
                return 'Account format error';
            }

        },
        password: [
            /^[a-zA-Z]\w{4,17}$/,
            'Password format error'
        ]
    });
});
