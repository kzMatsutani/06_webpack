let scroll = new SmoothScroll();

new Vue({
    el: '#app',
    data: {
        scrollY: 0,
        timer: null
    },
    created: function () {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy: function () {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll: function () {
            if (this.timer === null) {
                this.timer = setTimeout(function () {
                    this.scrollY = window.scrollY
                    clearTimeout(this.timer)
                    this.timer = null
                }.bind(this), 200)
            }
        },
        scrollTop: function () {
            scroll.animateScroll(0)
        }
    }
})