<template>
    <div>
        <div class="book-top news-home">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-sm-6" v-if="data">
                        <div class="row">
                            <div class="col-sm-6" v-for="(item,index) in data">
                                <div class="news-box-home">
                                    <router-link :to="{name:'PostDetail', params:{id:item.id, name:item.slug}}" class="pic-news-home">
                                        <img :src="'img/'+item.image" class="img-responsive" :alt="item.name">
                                    </router-link>
                                    <router-link :to="{name:'PostDetail', params:{id:item.id, name:item.slug}}">
                                        <h4>{{item.name}}</h4>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="socical-tuan">
                            <div class="item">
                                <img src="resources/images/news/logo2.png" alt="">
                            </div>
                            <div class="item">
                                <img src="resources/images/news/logo3.png" alt="">
                            </div>
                            <div class="item">
                                <img src="resources/images/news/logo4.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="resources/images/news/logo5.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="resources/images/news/logo6.png" alt="">
                            </div>
                            <div class="item">
                                <img src="resources/images/news/tdt.png" alt="">
                            </div>
                            <div class="item">
                                <img src="resources/images/news/logo2.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="ed-shape">
                            <div class="triangle-shape">
                                <!-- <div id="triangle-up"></div> -->
                            </div>
                            <h3>Đăng ký nhận thông báo mới nhất</h3>
                            <p>Bạn có thể luôn được cập nhật với của hàng của chúng tôi!</p>
                            <form>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Nhập email của bạn..." id="email">
                                </div>
                                <button type="button">Gửi ngay</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="news-home">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-sm-offset-3 text-center">
                        <div class="title-page">
                            <h3>Tin tức về Mỹ thuật cmc</h3>
                        </div>
                    </div>
                </div>
                <div class="row" v-if="postcmc">
                    <div class="col-sm-4" v-for="(item,index) in postcmc">
                        <div class="news-box-home">
                            <router-link :to="{name:'PostDetail', params:{id:item.id, name:item.slug}}" class="pic-news-home">
                                <img :src="'img/'+item.image" class="img-responsive" :title="item.slug" :alt="item.slug">
                                <!-- <ul>
                                    <li>19</li>
                                    <li>T.7</li>
                                </ul> -->
                            </router-link>
                            <router-link :to="{name:'PostDetail', params:{id:item.id, name:item.slug}}">
                                <h4>{{item.name}}</h4>
                            </router-link>
                            <p>{{item.short_content}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['data','postcmc'],
    updated() {
        $('.socical-tuan').not('.slick-initialized').slick({

            infinite: true,

            speed: 600,

            autoplaySpeed: 3000,

            autoplay: true,

            slidesToShow: 4,

            slidesToScroll: 1,

            margin: 20,

            dots: false,

            responsive: [

                {

                    breakpoint: 1199,

                    settings: {

                        slidesToShow: 4,

                        slidesToScroll: 1

                    }

                },

                {

                    breakpoint: 992,

                    settings: {

                        slidesToShow: 3,

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

                        slidesToShow: 2,

                        slidesToScroll: 1

                    }

                }



            ]

        });
    }
}
</script>