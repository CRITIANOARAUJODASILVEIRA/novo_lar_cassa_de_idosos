<template>
    <div class="layout-transparent">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
            <!-- Title -->
            <span class="mdl-layout-title">Novo lar</span>
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            <!-- Navigation. We hide it in small screens. -->
            <nav class="mdl-navigation mdl-layout--large-screen-only">
                <router-link class="mdl-button mdl-button--primary" to="/"><i class="material-icons">home</i> Início</router-link>
                <router-link class="mdl-button mdl-button--primary" to="/blog"><i class="material-icons">speaker_notes</i> Blog</router-link>
                <router-link class="mdl-button mdl-button--primary" to="/contato"><i class="material-icons">contact_mail</i> Contato</router-link>
                <router-link class="mdl-button mdl-button--primary" to="/sobre"><i class="material-icons">info</i> Sobre</router-link>
            </nav>
            </div>
        </header>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">Novo lar</span>
            <nav class="mdl-navigation">
                <router-link class="mdl-navigation__link" to="/"><i class="material-icons">home</i> Início</router-link>
                <router-link class="mdl-navigation__link" to="/blog"><i class="material-icons">speaker_notes</i> Blog</router-link>
                <router-link class="mdl-navigation__link" to="/contato"><i class="material-icons">contact_mail</i> Contato</router-link>
                <router-link class="mdl-navigation__link" to="/sobre"><i class="material-icons">info</i> Sobre</router-link>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.layout-transparent .mdl-layout__header{
  background-color: transparent;
  color: rgb(63,81,181);
}
.layout-transparent .mdl-button{
  color: rgb(63,81,181);
  box-shadow: 1px 1px 1px #888888;
}


</style>
