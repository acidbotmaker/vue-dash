<template>
  <div class="main-sidebar">
    <h3 class="title">Rooms</h3>
    <separator />
    <room-button v-for="room in rooms" v-bind:key="room.id" v-bind:room="room">NS</room-button>
  </div>
</template>

<script>
import Separator from "./Separator";
import RoomButton from "./RoomButton";
export default {
  name: "MainSidebar",
  components:{
    Separator,
    RoomButton
  },
  data() {
    return {
      rooms: [
        {
          id: '123424',
          name: 'Name Server'
        },
        {
          id: '12342544',
          name: 'awame 3eferver'
        },
        {
          id: '1234274',
          name: 'f3e4fme eferver'
        }
      ]
    }
  }
}
</script>

<style>
  .main-sidebar{
    color: white;
    background-color: #1E1619;
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 100%;
  }
</style>