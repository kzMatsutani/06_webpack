let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        list: ['りんご', 'ばなな', 'いちご'],
        msg: '初期メッセージ',
        number: '',
        show: true,
        display: true,
    },
    methods: {
        handleClick: function (event) {
            alert(event.target);
        },
        ifBool: function () {
            this.show = !this.show;
        }
    }
});