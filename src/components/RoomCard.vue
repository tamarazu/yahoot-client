<template>
  <div class="col-auto mb-3">
    <div class="card shadow-sm" style="width: 18rem">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">{{room.name}}</h4>
      </div>
      <div class="card-body">
        <p>Player Count : {{room.totalPlayer}}</p>

        <button
          @click="joinRoom(room.id)"
          type="button"
          class="btn btn-lg btn-block btn-outline-primary"
        >
          Join
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import io from '../socket/socketConnect'

export default {
  name: 'RoomCard',
  props: ['room'],
  data () {
    return {

    }
  },
  methods: {
    joinRoom (room) {
      let payload = {
        id: room,
        username: localStorage.username
        }

      this.socket.emit('joinRoom', payload)

      this.$router.push(`/${room}`)      
    }
  },
  created () {
    this.socket.on ('someoneJoined', payload => {
      console.log(payload.username, ` telah bergabung`);      
      this.$store.dispatch('joinRoom', payload.room)
    })
  },
  computed: {
    socket() {
      return this.$store.state.socket
    }
  }
}
</script>

<style>
</style>
