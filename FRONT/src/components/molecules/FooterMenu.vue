<template>
    <div class="max-w-screen-xl mx-auto px-4">
        <ul class="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
            <FooterLiMenu text="Home"/>
            <FooterLiMenu text="About" link="/about"/>
            <FooterLiMenu text="Contact" link="/contact"/>
            <!-- <li class="my-2">
                <a class="text-dark-blue hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    FAQ
                </a>
            </li>
            <li class="my-2">
                <a class="text-dark-blue hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    Configuration
                </a>
            </li>
            <li class="my-2">
                <a class="text-dark-blue hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    Github
                </a>
            </li>
            <li class="my-2">
                <a class="text-dark-blue hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    LinkedIn
                </a>
            </li> -->
        </ul>
    </div>
</template>

<script>
import FooterLiMenu from '../atoms/FooterLiMenu.vue'

export default {
  name: 'FooterMenu',
  components:{
    FooterLiMenu
  }
}
</script>
  

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
