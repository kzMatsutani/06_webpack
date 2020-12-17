new Vue({
    el: '#app',
    data: {
        message: 'hello Vue.js',
        val: false,
        val2: '選択してください',
        val3: [],
        val4: '空',
        preview: '',
        price: 100
    },
    methods: {
        handleInput: function (event) {
            this.message = event.target.value;
        },
        handler: function (comment) {
            console.log(comment)
        },
        handleChange: function (event) {
            let file = event.target.files[0];
            if (file && file.type.match(/^image\/(png|jpeg)$/)) {
                this.preview = window.URL.createObjectURL(file)
            }
                        }
    }
})