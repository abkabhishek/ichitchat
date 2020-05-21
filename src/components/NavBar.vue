<template>
                <div>
                    <b-navbar toggleable="lg" type="light" variant="light">
                        <b-navbar-brand href="#">INDIchat</b-navbar-brand>

                        
                        <button type="button" id="room-name" class="btn btn-outline-primary m-1">
                            {{room}} <span class="badge badge-light">{{numberOfUsers}}</span>
                        </button>
                        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                        <b-collapse id="nav-collapse" is-nav>
                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">

                            
                                    
                            <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template v-slot:button-content>
                                 <span id="header-username" class="navbar-brand">{{username}}</span>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item @click="signOut"  href="#">Sign Out</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </b-navbar-nav>
                        </b-collapse>
                    </b-navbar>
            </div>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"NavBar",
    props:["username","room","numberOfUsers"],
    methods:{
        signOut:function(){
           this.$emit("sign-out")
        }
    }
})
</script>