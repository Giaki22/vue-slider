let app = new Vue( {
    el: '#app',
    data: {
            images: [
                {
                    src: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    src: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum',
                },
                {
                    src: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    src: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
                {
                    src: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
            ],
            index : 0,
            timer : 0
    },
    methods: {
        nextPic() {
            this.index === this.images.length - 1 ? this.index = 0 : this.index++;
        },
        previousPic() {
            this.index === 0 ? this.index = this.images.length - 1 : this.index--;
        },
        getIndex(i) {
            this.index = i;
        },
        stopTimer() {
            clearInterval(this.timer);
        },
        startTimer() {
            this.timer = setInterval(() => {this.nextPic()}, 3000);
        }
    },
    mounted() {
        this.startTimer();
    }
});