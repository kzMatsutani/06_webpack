new Vue({
    el: '#app',
    data: {
        list: [],
        current: '',
        message: [],
        topics: [
            { value :'vue', name: 'Vue.js' },
            { value :'PHP', name: 'PHP' },
            { value :'JQuery', name: 'JQuery' },
        ]
    },
    watch: {
        current: function (val) {
            //githubAPIからのとピンクのリポジトリ検索
            axios.get('https://api.github.com/search/repositories', {
                params: { q: 'topic:' + val }
            }).then(function (res) {
                this.list = res.data.items
            }.bind(this))
        }
    },
    directives: {
        test: {
            update: function (el, binding) {
                if (binding.value != binding.oldValue) {
                    console.log('更新せず')
                } else {
                    console.log('更新された')
                }
            }
        }
    }

})