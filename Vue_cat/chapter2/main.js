
let app = new Vue({
    el: '#app',
    data: {
        message: {
            value: 'Vue.js'
        },
        list: ['りんご', 'ばなな', 'いちご'],
        num: 1,
        scroll: 0,
        count: 0,
        isChild: true,
        isActive: true,
        item: {
            id: 1,
            src: '01.jpg',
            alt: '商品1',
            width: 200,
            height: 200,
        },
        radius: 50,
        ok: false,
        list: [
            {id: 1, name: 'スライム', hp: 100},
            {id: 2, name: 'ゴブリン', hp: 200},
            {id: 3, name: 'ドラゴン', hp: 500},
        ],
        name: 'キマイラ',
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
            this.list = this.list.filter(function (index) {
                return index.hp >= 100;
            })
        }
    },
    created: function () {
        this.list.forEach(function (item) {
            this.$set(item, 'active', false)
        }, this);
    },
    mounted: function () {
        this.scroll = 800
    }
});