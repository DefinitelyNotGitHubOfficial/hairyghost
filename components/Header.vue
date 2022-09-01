<template>
    <header>
        <img src="images/ghosty.svg" />Hairy Ghost
        <span class="material-symbols-outlined">search</span>
        <input placeholder="Search Haunts, Houses, Attractions and Movies"/>
        </header>
</template>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap'); 
    header {
        background-color:$purple;
        color:#ecff00;
        font-family: 'Creepster', cursive;
        padding:1rem;
        text-shadow:2px 2px 6px rgba(0,0,0,0.4);
        font-size:3rem;
        // -webkit-text-stroke-width: 1px;
        // -webkit-text-stroke-color: #000;
        img {
            height:40px;
            margin-right:5px;
        }
        input {
            border:none;
            padding:8px 8px 8px 40px;
            border-radius:20px;
            font-size:1rem;
            font-weight:400;
            width:90%;
            background-color: #02d456;
            color:#fff;
            opacity:1;
        }
    }
    .material-symbols-outlined {
    font-size:20px!important;
    display:inline-block;
    padding-right:2px;
    color:#fff;
    text-shadow:1px 1px 2px rgba(0,0,0,0.2);
    position: absolute;
    margin-top:8px;
    margin-left:12px;
}
    
</style>