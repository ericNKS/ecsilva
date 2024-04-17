<template>
  <div class="body">
    
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1> &lt;{{ curriculo.name }}/&gt; </h1>
        </div>
      </div>
    </div>

  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    curriculo: Array
  },
})
</script>



<style scoped>
.container{
  display: flex;
  justify-content: center;
  margin-bottom: 0px;
}
.container h1{
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.6em;
  letter-spacing: .15em; 
  animation: typing 2s steps(30, end);
  font-weight: bold;

  font-family: 'ATWriter' ,'Courier New', Courier, monospace;
}

/* Responsividade */
@media(min-width: 640px) {
  .container h1{
  font-size: 2.5em;
  animation: typing 2.5s steps(30, end);
  margin-bottom: 1em;
  margin-top: 0.3em;
}
}

@media(min-width: 968px) {
  .container h1{
  font-size: 3.5em;
}
}

/* Fonte */
@font-face {
  font-family: 'ATWriter';
  src: url('../assets/fonts/atwriter.ttf') format('truetype');
}

/* Efeito de escrita */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

</style>
