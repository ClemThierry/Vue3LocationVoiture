<template>
<div>
    <router-link class="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md font-medium text-sm" v-bind:to="link">{{text}}</router-link>
    <!-- <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md font-medium text-sm" v-bind:href="link">
        {{text}}
    </a> -->
                    <!-- <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md font-medium text-base block " href="/#">
                    Contact
                </a> -->
</div>
</template>

<script>
export default {
    name: 'LinkNav',
    props: {
        text: String,
        link: {
            default: "/",
            type: String
        }
}
}
</script>
