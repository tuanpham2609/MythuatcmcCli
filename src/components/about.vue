<template>
    <div>
        <div class="link-back-home">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h4><a href="index.php">Home</a> Giới thiệu</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-page" id="app">
            <div class="container" v-if="abouts">
                <div class="row" v-for="(item,index) in abouts">
                    <div class="col-md-6">
                        <div class="about-page-left">
                            <p v-html="item.content"></p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="about-page-right">
                            <img :src="'img/'+item.image" class="img-responsive">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            abouts: [],
        }
    },
    created() {
        this.loadAbouts();
    },
    methods: {
        loadAbouts() {
            this.$http
            .get(this.$store.state.domain + "/" + "gioithieu-api")
            .then(result => {
                this.abouts = result.data.data;
                console.log(this.abouts)
            });
        }
    }
};
</script>