<template>
    <div class="page-container">
        <div class="header bg-gray-100">
            <nav class="container col-12">
                <div class="row flex items-center">
                    <img class="flex col-6 logo" src="../assets/sloppyImage.webp" alt="logo image">
                    <a href="/"
                        class="links title col-6 text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400">SloppyGolf.com</a>
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
    padding: 20px;
    padding-left: 225px;
}

.logo {
    width: 100%;
    max-width: 75px;
    padding: 0px;
}

.title {
    letter-spacing: 1px;
    text-shadow: 1px 1px 1px whitesmoke;
}

.links {
    cursor: pointer;
}

@media screen and (max-width: 575px) {
            .header {
                padding: 20px;
                
            }
            .title {
                float: left;
                margin-left: 0px !important;
            }
    }
</style>
  