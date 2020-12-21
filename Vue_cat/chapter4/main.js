new Vue({
    el: '#app',
    data: {
        width: 800,
        height: 600,
        budget: 200,
        limit: 2,
        order: false,
        num: 1,
        numWatch: false,
        list: [
            { id: 1, name: 'りんご' , price: 100},
            { id: 2, name: 'バナナ' , price: 200},
            { id: 3, name: 'いちご' , price: 400},
            { id: 4, name: 'オレンジ' , price: 300},
            { id: 5, name: 'メロン' , price: 500}
        ]
    },
    computed: {
        halfWidth: {
            get: function () {
                return this.width / 2;
            },
            set: function (val) {
                this.width = val * 2
            }
        },
        halfHeight: function () {
            return this.height / 2;
        },
        halfPoint: function () {
            return {
                x: this.halfWidth,
                y: this.halfHeight
            }
        },
        computedData: function () {
            return Math.random();
        },
        matched: function () {
            return this.list.filter(function (el) {
                return el.price <= this.budget
            }, this)
        },
        sorted: function () {
            return _.orderBy(this.matched, 'price', this.order ? 'desc' :'asc')
        },
        limited: function () {
            return this.sorted.slice(0,this.limit)
        }
    },
    watch: {
        num: {
            handler: function (newval, oldval) {
                this.numWatch = true
                console.log(newval, oldval)
            },
            deep: true,
            immediate: true
        }
    },
    created: function () {
        this.$watch(function () {
            return Object.assign('', this.num)
        }, function (newval, oldval) {
                console.log(newval.length, oldval.lenght)
        })
    },
    methods: {
        methodsData: function () {
            return Math.random();
        }
    }
})