<template>
    <div>
        <section class="discount-home">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 text-center">
                        <div class="title-page" v-for="(item,index) in data">
                            <h3>{{item.name2}}</h3>
                            <p>{{item.content2}}</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="blog-partner" v-if="teacher.length > 0">
                            <div class="item" v-for="(item,index) in teacher" :key="index">
                                <div class="img-parner">
                                    <img :src="'img/'+item.image" :alt="item.name" :title="item.name">
                                </div>
                                <h4 class="uppercase m-t-20">{{item.name}}</h4>
                                <p class="font-weight-bold text-center">
                                    {{item.description}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="img-left" v-for="(item,index) in data">
                            <img :src="'img/'+item.imgcustom" class="img-responsive" title="cmc-mythuat" alt="cmc-mythuat">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="our-product tuan-50">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 text-center" v-if="data">
                        <div class="title-page" v-for="(item,index) in data">
                            <h3>{{item.name3}}</h3>
                            <p>{{item.content3}}</p>
                            <a href="gioi-thieu" class="btn btn-default btn-tuan">Xem thêm về chúng tôi</a href="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="new-books-home-t">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 text-center" v-if="data">
                        <div class="title-page" v-for="(item,index) in data">
                            <h3>{{item.name4}}</h3>
                            <p>{{item.content4}}</p>
                        </div>
                    </div>
                </div>
                <div class="row" v-if="study">
                    <div class="col-md-3 col-sm-6" v-for="(item,index) in study">
                        <div class="box-prod-t">
                            <a href="#" class="pic-prd">
                                <img :src="'img/'+item.image" :alt="item.name">
                            </a>
                            <div class="txt-prd-t">
                                <a href="#"><h4>{{item.name}}</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['data','teacher','study'],
    updated() {
        $('.blog-partner').slick({
            infinite: true,

            speed: 600,

            autoplaySpeed: 3000,

            autoplay: true,

            slidesToShow: 1,

            slidesToScroll: 1,

            margin: 20,

            dots: false,
        });
    }
}
</script>