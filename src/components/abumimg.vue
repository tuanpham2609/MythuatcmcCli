<template>
    <div>
        <div class="link-back-home">

            <div class="container">

                <div class="row">

                    <div class="col-sm-12">

                        <h4><a href="index.php">Home</a> Hình ảnh về mỹ thuật CMC</h4>

                    </div>

                </div>

            </div>

        </div>
        <div class="about-page" id="app">
            <div class="container">
                <div class="items-tuan" v-if="abouts">
                    <div class="item-tuan text-center" v-for="(item,index) in abouts">
                        <a :href="'img/'+item.image" data-fancybox="gallery">
                            <img :src="'img/'+item.image" :alt="item.name" :title="item.name" class="img-responsive">

                        </a>
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
            abouts:[],
        }
    },
    methods:{
        getList: function(){
            var vm = this;
            this.$http.get('anhchung-api')
            .then(function (res) {
                vm.abouts = res.data.data;
                console.log(vm.abouts)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        },
    },
    created: function(){
        var vm = this;
        this.getList();
    },
    updated() {
        $('.mastory-block').masonry({
            itemSelector: '.mastory-item',
            percentPosition: true
        });
    },
}
</script>