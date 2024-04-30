<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class=""> &lt;{{ curriculo.name }}/&gt; </h1>
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
}
.container h1{
  animation: typing 2s steps(30, end);
  overflow: hidden;
  white-space: wrap;
  font-size: 2.5em;
  margin: 0px auto 2em auto;
  overflow-wrap: break-word;

  font-family: 'ATWriter' ,'Courier New', Courier, monospace;
}

/* Responsividade */
@media(min-width: 640px) {
  .container h1{
  font-size: 2.5em;
  white-space: nowrap;
  animation: typing 2.5s steps(30, end);
  margin-bottom: 1em;
  margin-top: 0.3em;
}
}

@media(min-width: 968px) {
  .container h1{
  font-size: 2.5em;
}
}

/* Fonte */
@font-face {
  font-family: 'ATWriter';
  src: url('../assets/fonts/atwriter.ttf') format('truetype');
}

/* Efeito de escrita */
@keyframes typing {
  from { width: 0; max-height: 45px;}
  95% { max-height: 50px; }
  to { width: 100%; max-height: 100px;}
}

</style>
