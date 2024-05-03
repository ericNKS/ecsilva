<template>
    <div class="container">

        <div class="row">
            <div class="col-12">
                <h3 class="mb-3">Experiências</h3>
                <a class="carousel-control-prev" href="#experiencias" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <div id="experiencias" class="carousel slide" data-ride="carousel" data-pause="hover" data-interval="8000">
                    <div class="carousel-inner">
                        <div  v-for="(item, index) in curriculo.experiencias" :key="item" v-bind:class="index == 0 ? 'carousel-item active' : 'carousel-item'" >
                            <div class="card bg-dark">
                                <div class="card-header">
                                    <h5 class="card-title"> {{ item.empresa }} - {{ item.cargo }} </h5>
                                    <small> {{ item.dataInicio }} - {{ item.dataFinal ? item.dataFinal : 'Atual' }} </small>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">
                                        {{ item.descricao }}
                                        <!-- Auxilio os clientes para uma melhor utilização do software, tiro dúvidas que eles tiverem, incentivo a usar feactures que eles não estão utilizando com tanta frequência,
                                        alem de ajudar a desenvolver novas ferramentas utilizando PHP com zend framework, javascript, ajax e bootstrap 4. -->
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-next" href="#experiencias" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 col-md-6 order-md-1 order-2 contato">

                <div class="row">
                    <div class="col-12">
                        <h3>Sobre mim</h3>
                        <div>
                            <p>
                                {{ curriculo.aboutMe }}                            
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-12">
                        <h3>Contatos</h3>
                        <div>
                            <p>
                                <i class="fa fa-envelope-o"></i> <a href="mailto:ek.silva.santos@gmail.com">ek.silva.santos@gmail.com</a>
                            </p>
                            <p>
                                <i class="fa fa-linkedin-square"></i> <a href="https://www.linkedin.com/in/%C3%A9ric-santos-626679173/" target="_blank">Éric Santos</a>
                            </p>
                            <p>
                                <i class="fa fa-github"></i> <a href="https://github.com/ericNKS" target="_blank">EricNKS</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Objetivos -->
            <div class="col-sm-12 col-md-6 order-md-2 order-1 contato">

                <div class="row">
                    <div class="col-12">
                        <h3>Objetivos</h3>
                        <div>
                            <p>
                                {{curriculo.objetivo}}
                            </p>
                        </div>
                    </div>
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
    }
})
</script>


<style scoped>
.card{
    margin: auto;
    max-width: 850px;
}
a{
    color: #aaaaaa;
}
.contato{
    display: flex;
    flex-flow: column;
    margin-top: 4em;
}
.contato h3{
    font-size: 1.5em;
    font-weight: bold;
}
.container{
    font-size: 0.77rem;
    align-items: center;
}

/* Responsividade */
@media(min-width: 640px) {
  .container{
  font-size: .97em;
}
}



</style>