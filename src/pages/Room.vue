<template>
  <div class="container">
    <h1>This is a room</h1>
 <div>Duration: {{ duration }}</div>
        <plyr @timeupdate="videoTimeUpdated" @playing="nowPlaying" @ready="playerReady" :emit="['ready','timeupdate','playing']" ref="player" :options="playerOptions" >
                <div class="plyr__poster">
                <iframe id="player"
                        :src="videoUrl"
                        allowfullscreen
                        allowtransparency
                        allow="autoplay">
                </iframe>
                </div>
      </plyr>
  </div>
</template>

<script>
export default {
  name:"Room",
  computed: {
    playerOptions () {
      const options = {
          title: "This is an example video", 
          playsinline: true,
          volume: 0, 
          controls: ['play', 'play-large'],
          debug: false
      };
      return options
    },
  },
  data() {
    return {
      duration: null,
      player: null,
      videoUrl: 'https://www.youtube.com/embed/jW4peJBTHcA?start=95&end=1380&version=3&playsinline=1'
    };
  },
  mounted() {
    this.player = this.$refs.player.player;
  },

  methods: {
    videoTimeUpdated: function(event) {
      this.duration = this.player.currentTime;
      // this if statement doesn't seem to do anything
      if (this.player.currentTime > 105) {
        this.player.stop()
      }
    },
    nowPlaying: function(event) {
      console.log(event);
    },
    playerReady () {
      this.player.currentTime = 95
      console.log('player ready')
    }
  }
}
</script>

<style>
  .container{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: brown;
  }
</style>