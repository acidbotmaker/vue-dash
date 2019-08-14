<template>
  <div class="room-container">
    <room-details />
    <theatre />
  </div>
</template>

<script>
import RoomDetails from "./RoomDetails";
import Theatre from "./Theatre";

export default {
  name: "Room",
  components: {
    RoomDetails,
    Theatre
  }
}
</script>

<style>
  .room-container{
    background-color: #2f3136;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: calc(100% - 80px);
    height: 100%;
    overflow: hidden;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;

    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
</style>