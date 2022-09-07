<template>
    <div class="typeSelector">
        <form>
            <div><input type="checkbox" id="vehicle1" name="vehicle1" checked value="Bike">
            <label for="vehicle1">Attractions</label></div>
           <div> <input type="checkbox" id="vehicle2" name="vehicle2" checked value="Car">
            <label for="vehicle2">Events</label></div>
           <div> <input type="checkbox" id="vehicle3" name="vehicle3" checked value="Boat">
            <label for="vehicle3">Movies</label></div>
        </form>
    </div>
</template>
<style lang="scss" scoped>
.typeSelector {
    background-color:$purple;
        padding:15px;
        margin-bottom:20px;
        border-radius:$sm-rad;
        
        color:$green;
        
}
form {
display: grid;
grid-template-columns: auto auto auto;
}
@media only screen and (min-width: 600px) {
    .typeSelector{
        display:none;
    }
    }
</style>