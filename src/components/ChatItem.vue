<template>
    <div>
                    <dt> {{message.username}} : {{message.time}} </dt>
                    <dd> {{message.text}} </dd>
    </div>

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"ChatItem",
    props:["message"]
    
})
</script>