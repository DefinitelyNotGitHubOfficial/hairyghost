<template>
    <div class="selector">
        <div><span class="material-symbols-outlined reverse">arrow_forward_ios</span></div>
        <div class="day">
            <div class="selection selected">
                Fri<br />
                Oct 12
            </div>
        </div>
        <div class="day">
            <div class="selection">
                Sat<br />
                Oct 13
            </div>
        </div>
        <div class="day">
            <div class="selection">
                Sun<br />
                Oct 14
            </div>
        </div>
        <div class="day">
            <div class="selection">
                Mon<br />
                Oct 15
            </div>
        </div>
        
        <div><span class="material-symbols-outlined">arrow_forward_ios</span></div>
    </div>
</template>
<style lang="scss" scoped>
    .selector {
        background-color:$purple;
        padding:15px;
        margin-bottom:20px;
        border-radius:$sm-rad;
        display: grid;
        grid-template-columns: 30px auto auto auto auto 30px;
        color:$green;
        div{
            //border:1px solid $green;
            display:flex;
            justify-content: center;
            align-items: center;
            text-align:center;
            flex-wrap: wrap;
        }
    }
    .material-symbols-outlined {
        font-weight:400;
        //border:1px solid $green;
        transition: color .3s;
        cursor: pointer;
        &:hover {
           color:$orange;
           transition: color .3s; 
        }
    }
    .reverse {
        rotate: 180deg;
    }
    .selection {
        padding:3px;
        border-bottom: 2px solid $purple;
        cursor:pointer;
        transition: color .3s;
        font-weight:300;
        &:hover {
           color:$orange;
           transition: color .3s; 
        }
    }
    .selected {
        font-weight: 700;
        border-bottom: 2px solid $green;
    }

    @media only screen and (max-width: 600px) {
    .selection {font-size:.8rem}
    }
</style>