<template>
    <div>
        <MyNameIs :curriculo="curriculo"/>
        <CurriculoContato :curriculo="curriculo"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyNameIs from '../components/MyNameIs.vue';
import CurriculoContato from '../components/CurriculoContato.vue';

export default defineComponent({
    methods: {
    goToAbout() {
      this.$router.push('/home')
    },
  },
  components: { 
    MyNameIs,
    CurriculoContato
   },
   data(){
    return{
      curriculo:{
        name: "Éric Silva dos Santos",
        aboutMe: "Sou um estudante de Ciência da Computação, entusiasta em tecnologia desde criança, que nessa época não aguentava ver algo que se mexia e já queria abrir para ver tirar a minha duvida de como aquilo funcionava. Amo passar o tempo programando projetos pessoais como esse, amor jogar, assistir bons filmes como Clube da luta e Gênio Indomável, além de assistir animes e principalmente estar com a minha noiva.",
        objetivo: "Tenho como objetivo de vida trazer inovação para o mundo usando a tecnologia como aliada. Gostaria de junto com a programação solucionar problemas reais, que ajudem pessoas reais e melhore a vida dessas pessoas. Pretendo fazer isso de formas criativas e aplicando uma solução de forma rápida porem competente, para que assim a solução seja realmente usual e não somente mais uma aplicação feita que acaba em desuso.",
        experiencias: [
          {
            empresa: 'Politimax',
            cargo: 'Suporte de TI',
            dataInicio: '2024',
            descricao: 'Auxilio os clientes para uma melhor utilização do software, tiro dúvidas que eles tiverem, incentivo a usar feactures que eles não estão utilizando com tanta frequência, alem de ajudar a desenvolver novas ferramentas utilizando PHP com zend framework, MySQL, javascript, jquery, ajax e bootstrap 4.'
          },
          {
          empresa: 'Freelancer',
          cargo: 'Software Engineer',
          dataInicio: '2023',
          dataFinal: '2023',
          descricao: 'Fiz uma aplicação web de realizar check-in para uma empresa que tem seus funcionários em estilo home office para poder ter o controle de entrada e saída deles do trabalho. Para isso eu utilizei PHP, MySQL, javascript, ajax e Bootstrap.'
        }
        ],
      }
    }
  }
})
</script>
<style>

</style>
