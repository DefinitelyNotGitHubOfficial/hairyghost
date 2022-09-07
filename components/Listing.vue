<template>
    <div class="card">
        <div class="img">
            <div class="type"><span class="material-symbols-outlined">attractions</span> Attraction</div>
        </div>
        <div class="content">
            <div class="title">Haunted House</div>
            <div class="location"><span class="material-symbols-outlined">location_on</span>Minneapolis</div>
            <div class="desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="time">7:00 PM</div>
            <div class="cost">$30</div>
            <div class="age"><span class="material-symbols-outlined">escalator_warning</span>18+</div>
        </div>
    </div>
</template>
<script>
    export default {
        // mounted() {
        // this.$root.$on('component1', () => {
        //     console.log('c1')
        //     this.c1method()
        //     }
        // }
    }
</script>
<style lang="scss" scoped>
    .card {
        background-color:$purple;
        border-radius:$sm-rad;
        margin-bottom:35px;
    }
    .img {
        background-image: url('/images/card.jpg');
        height:200px;
        background-size:cover;
        background-position: center;
        position: relative;
        border-top-right-radius: $sm-rad;
        border-top-left-radius: $sm-rad;
        border-bottom:1px dotted $green;
    }
    .content {
        padding:1rem;
        color:$green;
    }
    .title {
        font-size:2rem;
        font-weight:300;
    }
    .time, .cost, .age {
        background-color:$green;
        padding:5px 10px;
        display:inline-block;
        color:$purple;
        border-radius:$lg-rad;
        margin-right:5px;
        font-weight:300;
    }
    .location {
        font-size:1.1rem;
        display: flex;
        align-items:  center;
        padding:0 0 5px 0;
    }
    .type {
        background-color:$purple;
        color:$green;
        display:flex;
        padding:5px 10px;
        margin:7px 5px 0 0;
        position:absolute;
        right:5px;
        font-weight: 300;
        border-radius:$sm-rad;
        align-items:  center;
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);
    }
    .material-symbols-outlined {
        font-size:1.1rem!important;
        padding:0 3px 2px 0;
        line-height:1rem;
    }
    // .desc {
    //     text-overflow:ellipsis;
    //     overflow:hidden;
    //     line-height:1rem;
    //     width:100%;
    //     margin:5px 0 15px 0;
    //     max-height:2.1rem;
    // }
    .desc {
        width: 100%;
        p {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
            margin:3px 0 15px 0;
            font-weight:100;
            }
        }
</style>