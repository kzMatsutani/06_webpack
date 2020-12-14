
let app = new Vue({
    el: '#app',
    data: {
        show: true,
        message: 'Vue.js',
        url: '#',
        text: 'hello<strong>Vue.js</strong>'
    },
    methods: {
        handleClick() {
            let count = this.$refs.count
            console.log(count);
            if (count) {
                count.innerText = parseInt(count.innerText, 10) + 1
            }
        }
    },

    mounted: function () {
        console.log(this.$el);
        console.log(this.$refs.hello);
    }
});