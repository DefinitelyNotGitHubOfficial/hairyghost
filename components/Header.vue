<template>
    <header>
        <div class="brand"><h1>Hairy Ghost</h1></div>
        <div class="search">
            <form>
                <span class="material-symbols-outlined">search</span>
                <input placeholder="Search for Haunts, Houses, Attractions & Movies" />
            </form>
        </div>
        <div class="contact"><span class="material-symbols-outlined">forum</span></div>
    </header>
</template>
<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');
    @import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0';
    
    header {
        display: grid;
        grid-template-columns: 90px auto 50px;
        gap: 10px;
        max-width:800px;
        width:100%;
        margin: auto;
        min-width:400px;
        width:100%;
        background-color:$purple;
        border-bottom-left-radius: $sm-rad;
        border-bottom-right-radius: $sm-rad;
        div {
            //border:1px solid red;
            display:flex;
            justify-content: center;
            align-items: center;
        }
    }
    h1 {
        font-family: 'Creepster', cursive;
        padding:0px;
        margin:0px;
        font-size:2rem;
        line-height:1.6rem;
        text-align:center;
        color:$green;
    }
    .contact{
        .material-symbols-outlined {
            background-color:$green;
            padding:7px;
            border-radius: 50px;
            cursor: pointer;
        }
    }
    .search{
        .material-symbols-outlined {
            position: absolute;
            margin-top:5px;
            margin-left:10px;
        }
    }
    
    form {
        width:calc(100% - 60px);
        margin-left:-50px;
        }
    input {
        border:none;
        outline: none;
        padding:10px 10px 10px 40px;
        width:100%;
        background-color: $green;
        border-radius: 20px;
        text-overflow: ellipsis;
    }
    .brand {
        padding:15px 0 15px 15px;
    }
    .contact {
        padding:15px 15px 15px 0;
    }
</style>