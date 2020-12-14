
let app = new Vue({
    el: '#app',
    data: {
        list: [],
        name: '',
    },
    methods: {
        increment: function() {
            this.count += 1;
        },
        doAdd: function () {
            //リスト内で一番大きい値を取得。
            let max = this.list.reduce(function (a, b) {
                console.log(b.id)
                return a > b.id ? a : b.id
            }, 0);

            this.list.push({
                id: max + 1,
                name: this.name,
                hp: (max + 1) * 100
            })
        },
        doRemove: function (index) {
            this.list.splice(index, 1);
        },

        doAttack: function (index) {
            this.list[index].hp -= 10;
        }
    },
    created: function () {
        axios.get('list.json').then(function (res) {
            this.list = res.data;
        }.bind(this)).catch(function (e) {
            console.error(e);
        })
    },
    mounted: function () {
        this.scroll = 800
    }
});