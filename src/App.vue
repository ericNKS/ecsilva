<template>
  <NavBar/>
  <MyNameIs :curriculo="curriculo"/>
  <CurriculoContato :curriculo="curriculo"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



import NavBar from './components/NavBar.vue'
import MyNameIs from './components/MyNameIs.vue';
import CurriculoContato from './components/CurriculoContato.vue';

@Options({
  components: {
    NavBar,
    MyNameIs,
    CurriculoContato,
  },
  data(){
    return{
      curriculo:{
        name: "Caio Oliveira Cardoso",
        aboutMe: "Sou um estudante de Ciência da Computação, entusiasta em tecnologia desde criança, que nessa época não aguentava ver algo que se mexia e já queria abrir para ver tirar a minha duvida de como aquilo funcionava. Amo passar o tempo programando projetos pessoais como esse, amor jogar, assistir bons filmes como Clube da luta e Gênio Indomável, além de assistir animes e principalmente estar com a minha noiva.",
        objetivo: "Tenho como objetivo de vida trazer inovação para o mundo usando a tecnologia como aliada. Gostaria de junto com a programação solucionar problemas reais, que ajudem pessoas reais e melhore a vida dessas pessoas. Pretendo fazer isso de formas criativas e aplicando uma solução de forma rápida porem competente, para que assim a solução seja realmente usual e não somente mais uma aplicação feita que acaba em desuso."
      }
    }
  }
})
export default class App extends Vue {
[name: string]: any;
}
</script>

<style>
body{
  background-color: #272323;
  color: #aaaaaa;
  font-family: 'Courier New', Courier, monospace;
  height: 100vh;
}
</style>
