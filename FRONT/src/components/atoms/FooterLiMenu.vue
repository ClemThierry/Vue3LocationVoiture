<template>
    <li class="my-2">
        <router-link class="text-dark-blue hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" v-bind:to="link">
            {{text}}
        </router-link>
    </li>
</template>

<script>
export default {
    name: 'FooterLiMenu',
    props: {
        text: String,
        link: {
            default: "/",
            type: String
        }
}
}
</script>
