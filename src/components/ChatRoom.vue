<template>
      <div class="row">

        <!-- Chat Users -->

        <div class="col-sm-2">
          <div id="users-list" class="list-group">
            <span class="list-group-item border border-primary">Users</span>
            <a v-for="user in roomUsers.users" :key="user.id" class="list-group-item list-group-item-action">{{user.username}}</a>
          </div>
        </div>
        <div class="col-sm">
          <ChatMessages v-bind:messages="messages" />
          <ChatForm v-on:send-message="sendMessage"/>
        </div>

    </div>
</template>


<script lang="ts">
import Vue from 'vue'
import ChatMessages from './ChatMessages';
import ChatForm from './ChatForm';

export default Vue.extend({
    name:"ChatRoom",
    props: ['messages','roomUsers'],
    components:{
        ChatMessages,
        ChatForm
    },

    data(){
      return {
      pageName:"Chat Room",
      }
    }
    ,
  methods:{
      sendMessage(value){
            
            this.$emit("send-message",value)

      }
  }
})
</script>