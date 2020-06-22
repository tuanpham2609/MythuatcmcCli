<template>
    <section class="banner-home">
        <div class="container-fuild" >
            <section class="regular1 slider" id="layerslider" v-if="data">
                <div class="items-1" v-for="(item,index) in data" :key="index">
                    <a href="#">
                        <img class="img-responsive" :src="'img/'+item.image" :alt="item.slug" :item="item.slug">
                    </a>
                </div>
            </section>
        </div>
    </section>        
</template>
<script>
export default {
    props: ['data'],
    updated() {
        $(".regular1").not('slick-initialized').slick({
            dots: true,

            infinite: true,

            speed: 900,

            prevArrow: false,

            nextArrow: false,

            slidesToShow: 1,

            slidesToScroll: 1,

            autoplay: true,

            autoplaySpeed: 2000,

            responsive: [

                {

                    breakpoint: 1199,

                    settings: {

                        slidesToShow: 1,

                        slidesToScroll: 1

                    }

                },

                {

                    breakpoint: 992,

                    settings: {

                        slidesToShow: 1,

                        slidesToScroll: 1

                    }

                },

                {

                    breakpoint: 768,

                    settings: {

                        slidesToShow: 1,

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
        })
    },
}
</script>