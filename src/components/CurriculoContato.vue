<template>
    <div class="container">
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
                                <i class="fa fa-linkedin-square"></i> <a href="https://www.linkedin.com/in/%C3%A9ric-santos-626679173/" target="_blank">ek.silva.santos@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Objetivos e experiencias -->
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

                <div class="row">
                    <div class="col-12">
                        <h3>Experiências</h3>
                        <div>
                            <ul>
                                <li>teste</li>
                                <li>teste 2</li>
                            </ul>
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
a{
    color: #aaaaaa;
}
.contato{
    display: flex;
    justify-content: center;
    text-align: center;
    flex-flow: column;
    height: 50vh;
}
.contato h3{
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
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