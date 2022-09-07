<template>
    <div class="filter">
        <div class="filter__header">
            <span class="material-symbols-outlined">tune</span>Filter<br/>
        </div>
        
        <div class="filter__body">
        <form>
            <input type="checkbox" id="vehicle1" name="vehicle1" checked value="Bike">
            <label for="vehicle1">Attractions</label><br>
            <input type="checkbox" id="vehicle2" name="vehicle2" checked value="Car">
            <label for="vehicle2">Events</label><br>
            <input type="checkbox" id="vehicle3" name="vehicle3" checked value="Boat">
            <label for="vehicle3">Movies</label>
        </form>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.filter {
    margin-top:20px;
    border-radius: 3px;
    max-width:200px;
    height:auto;
    margin-bottom:20px;
}
.filter__header {
    display:flex;
    align-items: center;
    background-color:$purple;
    justify-content: center;
    text-align: center;
    padding:5px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    font-weight: 300;
    color:$green;
}
.filter__body {
    padding:5px;
    background-color:#fff;
}
.material-symbols-outlined {
    font-size:16px!important;
    display:inline-block;
    padding-right:2px;
}
</style>