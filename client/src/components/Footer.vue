<template>
    <div>
        <div class="header bg-gray-100">
            <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
                <div class="flex items-center justify-between">
                    <a href="/"
                        class="links title text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400">SloppyGolf.com</a>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
};
</script>
<style scoped>
.header {
    background-color: lightblue;
    background: linear-gradient(268deg, rgb(193, 220, 230), lightblue);

}

.title {
    letter-spacing: 1px;
    text-shadow: 1px 1px 1px whitesmoke;
}

.links {
    cursor: pointer;
}
</style>
  