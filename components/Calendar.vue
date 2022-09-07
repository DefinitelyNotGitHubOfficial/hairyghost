<template>
    <div class="calendar">
        <div class="calendar__header">
            <div class="calendar__header_current"><span class="material-symbols-outlined">calendar_month</span>October</div>
        </div>
        <div class="calendar_days-of-week bold days">
            <div class="calendar_days-of-week__day">S</div>
            <div class="calendar_days-of-week__day">M</div>
            <div class="calendar_days-of-week__day">T</div>
            <div class="calendar_days-of-week__day">W</div>
            <div class="calendar_days-of-week__day">T</div>
            <div class="calendar_days-of-week__day">F</div>
            <div class="calendar_days-of-week__day">S</div>
        </div>
        <div class="calendar_days-of-week">
            <div class="calendar_days-of-week__day grey">25</div>
            <div class="calendar_days-of-week__day grey">26</div>
            <div class="calendar_days-of-week__day grey">27</div>
            <div class="calendar_days-of-week__day grey">28</div>
            <div class="calendar_days-of-week__day grey">29</div>
            <div class="calendar_days-of-week__day grey">30</div>
            <div class="calendar_days-of-week__day">1</div>
            <div class="calendar_days-of-week__day">2</div>
            <div class="calendar_days-of-week__day">3</div>
            <div class="calendar_days-of-week__day">4</div>
            <div class="calendar_days-of-week__day">5</div>
            <div class="calendar_days-of-week__day">6</div>
            <div class="calendar_days-of-week__day">7</div>
            <div class="calendar_days-of-week__day">8</div>
            <div class="calendar_days-of-week__day">9</div>
            <div class="calendar_days-of-week__day">10</div>
            <div class="calendar_days-of-week__day">11</div>
            <div class="calendar_days-of-week__day selected">12</div>
            <div class="calendar_days-of-week__day">13</div>
            <div class="calendar_days-of-week__day">14</div>
            <div class="calendar_days-of-week__day">15</div>
            <div class="calendar_days-of-week__day">16</div>
            <div class="calendar_days-of-week__day">17</div>
            <div class="calendar_days-of-week__day">18</div>
            <div class="calendar_days-of-week__day">19</div>
            <div class="calendar_days-of-week__day">20</div>
            <div class="calendar_days-of-week__day">21</div>
            <div class="calendar_days-of-week__day">22</div>
            <div class="calendar_days-of-week__day">23</div>
            <div class="calendar_days-of-week__day">24</div>
            <div class="calendar_days-of-week__day">25</div>
            <div class="calendar_days-of-week__day">26</div>
            <div class="calendar_days-of-week__day">27</div>
            <div class="calendar_days-of-week__day">28</div>
            <div class="calendar_days-of-week__day">29</div>
            <div class="calendar_days-of-week__day">30</div>
            <div class="calendar_days-of-week__day">🎃</div>
            <div class="calendar_days-of-week__day grey">1</div>
            <div class="calendar_days-of-week__day grey">2</div>
            <div class="calendar_days-of-week__day grey">3</div>
            <div class="calendar_days-of-week__day grey">4</div>
            <div class="calendar_days-of-week__day grey">5</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');
  .calendar {
      background-color:#fff;
      font-size:10px;
      max-width:200px;
      border-radius:3px;
      overflow:hidden;
      border:1px solid black;
  }
  .calendar__header {
    display:flex;
    justify-content: center;
    background-color:$purple;
    color:$green;
    padding:5px;
    font-size:1rem;
  }
  .calendar__header_current {
      text-align: center;
      display:flex;
      font-weight: 300;
  }
  .calendar_days-of-week {
    display:grid;
    grid-template-columns: 15% 14% 14% 14% 14% 14% 15%;
  }
  .calendar_days-of-week__day {
      border:1px solid rgba(0,0,0,1);
      display:flex;
      align-items: center;
      justify-content: center;
      padding: 2px;
      &:hover {
          background-color: $green;
          cursor:pointer;
      }
  }
  .grey {
      background-color:rgba(0,0,0,0.2);
  }
  .special {
    background-color:coral;
    background-image: linear-gradient(lightcoral, darkorange);
    color:#fff;
    font-weight: 400;
    text-shadow: 0px 0px 2px rgba(0,0,0,0.5);
  }
  .bold {
      font-weight:400;
      background-color:$purple-light;
  }
  .strike {
      &::before {
          content: 'x';
          position: absolute;
          font-weight: 400;
      }
  }
 .material-symbols-outlined {
     font-size: 1rem!important;
     padding-right:2px;
 } 
 .days {
     &:hover {
         background-color:$purple-light
     }
     .calendar_days-of-week__day {
         &:hover {
             background-color:$purple-light
         }
     }
 }
 .selected {
     background-color:$green;
 }
</style>
