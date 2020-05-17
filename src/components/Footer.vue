<template>
    <div role="tablist" class="fixed-bottom mt-5">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="light" class="border border-primary">Developed By - (click me)</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" role="tabpanel">
        <b-card-body>
          <h3>Abhishek Kumar</h3>
          <dl class="row">
                <dt class="col-sm-3">Contact Info: </dt>
                <dd class="col-sm-9"></dd>
                <dt class="col-sm-3">LinkedIn</dt>
                <dd class="col-sm-9"><a href="https://www.linkedin.com/in/abhishek-kumar-79001011/" target="_blank">abhishek-kumar-79001011</a></dd>
                <dt class="col-sm-3">GitHub</dt>
                <dd class="col-sm-9"><a href="https://github.com/abkabhishek" target="_blank">abkabhishek</a></dd>
                
          </dl>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"Footer"
})
</script>