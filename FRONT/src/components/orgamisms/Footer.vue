<template>
<div>
    
<footer class="bg-soft-green text-dark-blue dark:bg-gray-800 w-full py-8">
    <SocialMedia/>
    <FooterMenu/>
    <div class="text-center text-dar-blue dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
        Created by Solem and Clémence
    </div>
</footer>
</div>
</template>

<script>
import SocialMedia from '../molecules/SocialMedia.vue'
import FooterMenu from '../molecules/FooterMenu.vue'

export default {
  name: 'Footer',
  components:{
    SocialMedia,
    FooterMenu
  }
}
</script>
  

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
