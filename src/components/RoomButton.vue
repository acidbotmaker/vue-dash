<template>
  <div>
    <separator v-if="room.has_separator" />
    <div class="room-button" draggable="true">
      <div class="tooltip">{{room.name}}</div>
      <p :class="get_class_name">
        {{ get_initials }}
      </p>
    </div>
  </div>
</template>

<script>
import Separator from "./Separator";

export default {
  name: "RoomButton",
  components:{
    Separator
  },
  props: ["room"],
  computed: {
    get_class_name(){
      if(this.room.id == 'add-new' || this.room.id == 'search'){
        return 'room-name room-control';
      }
      return 'room-name';
    },
    get_initials(){
      const name_pieces = this.room.name.split(' ');
      let initials = '';

      name_pieces.map(word => {
        initials += word[0];
      });

      return initials;
    }
  }
}
</script>

<style>
  .room-button{
    display: flex;
    align-items: center;
    margin: auto;
    margin-top: 10px;
    height: 50px;
    width: 50px;
    border-radius: 25px;
    background-color: #4B3D59;
    transition: .15s ease-out;
  }
  .room-button:hover{
    border-radius: 14px;
    background-color: #D68539;
    -webkit-box-shadow: 0px 0px 122px -7px rgba(19,41,107,0.67);
    -moz-box-shadow: 0px 0px 122px -7px rgba(19,41,107,0.67);
    box-shadow: 0px 0px 122px -7px rgba(19,41,107,0.67);
  }
  .room-name{
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;

    font-weight: 0.4em;
  }
  .room-control{
    font-size: 36px;
  }
  .tooltip{
    display: none;
  }
</style>