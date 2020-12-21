new Vue({
    el: '#app',
    data: {
        price: 19800,
        message: 'メッセージです',
        foo: 'foo',
        list: []
    },
    filters: {
       localNum: function(val) {
            return val.toLocaleString()
        },
        filter: function (message, foo, num) {
            console.log(message,foo,num)
        },
        rounds: function (val) {
            return Math.round(val * 100) / 100
        },
        radian: function (val) {
            return val * Math.PI / 180
        },
        tax1: function (val) {
            return val * 1.1
        },
        tax8: function (val) {
            return val * 1.08
        }
    },
    directives: {
        focus: {
            inserted: function (el) {
                el.focus()
            }
        }
    },
    watch: {
        list: function () {
            console.log('通常', this.$refs.list.offsetHeight)
            this.$nextTick(function () {
                console.log('nextTick:', this.$refs.list.offsetHeight)
            })
         }
     }
})
