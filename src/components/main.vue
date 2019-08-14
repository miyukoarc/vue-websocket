<template>
  <div>
    <button @click="initWebSocket">长链接</button>
  </div>
</template>

<script>
import socket from "./socket.js"
export default {
  name: 'HelloWorld',
  props: {
    msg: '',
    

  },
  data(){
    return{
      isShowen: 0,
      socket: new socket(),
    }
    
  },methods:{
    initWebSocket: function(){
      this.socket.init()
      this.socket.sendMessage({"cmd":"sub","args":["candle.M1.btcusdt"]})

      /*if(!this.WebSocket){
        this.WebSocket = new WebSocket('wss://api.fcoin.com/v2/ws')
        this.WebSocket.onopen = this.websocketOnOpen
        this.WebSocket.onmessage = this.websocketOnMessage
        this.WebSocket.binaryType = 'arraybuffer'

      }else
      {
        this.WebSocket.close()

      }
      */
      
    },
    websocketOnOpen(){
      /*
      alert('已连接')
      this.WebSocket.send(JSON.stringify({"cmd":"sub","args":["candle.M1.btcusdt"]}))
      console.log(this.WebSocket)
      */
    },
    websocketOnMessage(e){
      /*
      // alert('接收中')
      setTimeout(function(){
        console.log(JSON.parse(e.data))
      },100)*/
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
