<template>
  <div class="container" style="margin-top: 80px">
    <div class="card text-center" v-if="!isPlaying">
      <div class="card-header ">
        <h1 class="my-0 font-weight-normal">{{room.name}}</h1>
      </div>
      <div class="card-body">
        <div class="container ">
          <div class="row" style="display: flex; justify-content: space-around">
            <!-- Joined players goes here -->
            <!-- <Player /> -->
            <h3 class=''>waiting for other player</h3>
          </div>
          <button
          v-if="room.totalPlayer > 1"            
            type="button"
            class="btn btn-lg btn-outline-primary"
            @click="playTheGame"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>

    <GamePlay v-if="isPlaying"/>
  </div>
</template>

<script>
import Player from '../components/Player'
// import io from '../socket/socketConnect'
import GamePlay from '../components/GamePlay'

export default {
  name: 'StartGame',
  components: {
    Player,
    GamePlay
  },
  data: function() {
    return {
      playerCount: 0
    }
  },
  methods: {
    playTheGame () {
      console.log(`playTheGame jalannnnnnnnnnnnnn`);
      
      this.socket.emit('startGame', this.room)
    }
  },
  created () {
    this.socket.on ('someoneJoined', payload => {
      console.log(payload, `asd has joined to the room`);      
    })

    this.socket.on('playing', payload => {
      console.log(`jalan kok playing nyaaaaaaaaaaaaa`);
      
      this.$store.dispatch('isPLaying', payload)
    })
  },
  computed: {
    socket() {
      return this.$store.state.socket
    },
    room () {
      return this.$store.state.room
    },
    isPlaying () {
      return this.$store.state.playingStatus
    }
  }
}
</script>

<style>
</style>
