<template>
    <div>
        <div class="link-back-home">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h4><a href="index.php">Home</a> Tin tức</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="news-page" id="app">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="right-news-detail">
                            <div class="box-news-page" v-if="datas">
                                <img v-if="datas.image" :src="'img/'+datas.image" class="img-responsive">
                                <ul class="date-box-news-page">
                                    <li>{{datas.created_at}}</li>
                                    <li>{{datas.created_at}}</li>
                                </ul>
                                <div class="txt-box-news-page">
                                    <h4>{{datas.name}}</h4>
                                    <ul>
                                        <li>Đăng bởi: Tấn Thanh</li>
                                        <li>Ngày đăng: {{datas.created_at}}</li>
                                    </ul>
                                </div>
                                <article class="page-content" v-html="datas.description">
                                </article>
                                <div class="tag-share">
                                    <div class="ed-share">
                                        <h4>Share: </h4>
                                        <div id="share"></div>
                                    </div>
                                </div>
                                <div class="news-related-detail" v-if="newsposts && newsposts.length > 0">
                                    <h4>Tin tức liên quan</h4>
                                    <section class="regular3 slider">
                                        <div class="items-3" v-for="(item, index) in newsposts" :key="index"> 
                                            <div class="news-box-home">
                                                <router-link :to="{name:'PostDetail', params:{id:item.id,name:item.slug}}" class="pic-news-home">
                                                    <img v-if="item.image" :src="'img'+'/'+item.image" class="img-responsive"
                                                        :alt="item.slug" :title="item.slug">
                                                </router-link>
                                                <router-link :to="{name:'PostDetail', params:{id:item.id,name:item.slug}}">
                                                    <h4>{{item.name}}</h4>
                                                </router-link>
                                                <p>{{item.short_content}}</p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
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
        data() {
            return {
                datas: {},
                newsposts: []
            }
        },
        created() {
            this.loadPostDetail();
        },
        methods: {
            loadPostDetail() {
                var vm = this;
                this.$http.get(`${this.$store.state.domain}/tin-tuc/${this.$route.params.id}`)
                    .then(function (res) {
                        vm.datas = res.data.data;
                        vm.newsposts = res.data.newPost;
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            }
        },
        updated() {
            if($(".regular3").length){
                let slider = $(".regular3");
                slider.not('.slick-initialized').slick({

                    dots: false,

                    infinite: false,

                    speed: 900,

                    prevArrow: false,

                    nextArrow: false,

                    slidesToShow: 3,

                    slidesToScroll: 1,

                    autoplay: true,

                    autoplaySpeed: 2000,

                    responsive: [

                        {

                            breakpoint: 1199,

                            settings: {

                                slidesToShow: 2,

                                slidesToScroll: 1

                            }

                        },

                        {

                            breakpoint: 992,

                            settings: {

                                slidesToShow: 2,

                                slidesToScroll: 1

                            }

                        },

                        {

                            breakpoint: 768,

                            settings: {

                                slidesToShow: 2,

                                slidesToScroll: 1

                            }

                        },

                        {

                            breakpoint: 600,

                            settings: {

                                slidesToShow: 1,

                                slidesToScroll: 1

                            }

                        }



                    ]

                });
            }
            $("#share").jsSocials({

                showLabel: false,

                showCount: false,

                shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest"]

            });
        },
        watch: {
            '$route.params.id': function(){
                this.loadPostDetail();
                this.$forceUpdate();
                $("html, body").scrollTop(0);
            }
        },
    }
</script>