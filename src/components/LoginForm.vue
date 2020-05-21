<template>
    <div class="row d-flex justify-content-center p-5">
        <div class="col-sm-6 p-5 border border-primary">

        <form @submit.prevent="submitForm">

          <div class="form-group">
            <label for="exampleFormControlSelect1">Room</label>
            <select v-model="room" class="form-control" name="room" id="room">
              <option>Game</option>
              <option>Family</option>
              <option>Work</option>
              <option>Friends</option>
              <option>All</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input v-model="username" type="text" name="username" class="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username">
            <small id="usernameHelp" class="form-text text-muted">We never store your data. Its a secure App</small>
          </div>
          <div>
            <b-badge variant="info">{{usernameInfoMessage}}</b-badge>
          </div>
          <button v-if="usernameAvailable" type="submit" class="btn btn-primary">Login</button>
          <a v-else v-on:click="checkUsername" class="btn btn-primary m-1 text-light">Check Availability</a>
        </form>

      </div>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"LoginForm",
    props:["usernameAvailable","showMsg"],
    data(){
        return {
            username:"",
            room:"Game",
            usernameInfoMessage:"First check Username Availability"

        }
    },
    watch:{
      showMsg:function(val){
        
          this.usernameInfoMessage = val
      }
    },
    methods:{
        submitForm: function(){
            this.$emit("post-login",{username:this.username,room:this.room})
        },

        checkUsername: function(){
          if (this.username!=""){
            this.$emit("check-login",{username:this.username})
          }else{
            this.usernameInfoMessage="Enter Username first"
          }
        }
    }

})
</script>