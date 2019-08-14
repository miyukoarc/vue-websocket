class socket{
    constructor(url="wss://api.fcoin.com/v2/ws"){
        this.connectionState = 0
        this.url = url
        this.socket = null
    }
    init(){
        if(this.connectionState)
            return 
                this.connectionState = 1
                const socket = new WebSocket(this.url)
                socket.onopen = ev => this.onOpen(ev)
                socket.onmessage = ev => this.onMessage(ev)
                this.socket = socket
                                                   
    }
    onOpen(data){
        console.log('已连接')
        // this.sendMessage(data)
    }
    onMessage(e){
        console.log(JSON.parse(e.data))
    }//接收消息
    sendMessage(data){
        console.log(this.socket)
        if(this.socket.readyState == 1){
            this.socket.send(JSON.stringify(data))
            console.log(data)
        }
        
    }//向ws服务器发送信息
    checkClose(){
        return this.connectionState = 0
    }

}

export default socket