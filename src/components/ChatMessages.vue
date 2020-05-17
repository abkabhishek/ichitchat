<template>
        <div class="border border-primary pb-5 p-2 h-100 overflow-auto" style="max-height: 300px;">
            <dl id="chat-room">
                <ChatItem v-bind:message="message" v-bind:key="message.id" v-for="message in messages"/>
            </dl>
        </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ChatItem from './ChatItem';


export default Vue.extend({
    name: "ChatMessages",
    props: ["messages"],
    components:{
        ChatItem
    }
    
})
</script>
