<template>
    <nav>
        <span class="material-symbols-outlined">search</span>
        <input placeholder="Search Haunts, Houses, Attractions and Movies"/>

    
    </nav>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');
    nav {
        background-color:$green;
        padding:1rem;
        color:black;
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