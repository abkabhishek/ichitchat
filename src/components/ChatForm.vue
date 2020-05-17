<template>
              <!-- Message input box  -->
          <form id="chat-form" @submit.prevent="submitForm">
                <div class="input-group">
                    <input v-model="messageToSend" id="client_msg" type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Enter Message" required autocomplete="off">
                    <div class="input-group-append">
                    <button id="send_msg" class="btn btn-outline-success"><i class="fas fa-paper-plane"></i> Send</button>
                    </div>
                </div>
            </form>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"ChatForm",
    data(){
        return {
        messageToSend:""
        }
    },
    methods:{
        submitForm: function(){
            this.$emit("send-message",this.messageToSend)
            this.messageToSend =""
        }
    }
    
})
</script>