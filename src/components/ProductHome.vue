<template>
    <section class="our-product tuan-50">
        <div class="container">
            <div class="row">
                <div class="col-sm-10 col-sm-offset-1 text-center" v-if="data">
                    <div class="title-page" v-for="(item,index) in data">
                        <h3>{{item.name1}}</h3>
                        <p>{{item.content1}}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" v-if="postLight">
                    <div class="tab-content">
                        <div id="home" class="tab-pane fade in active">
                            <div class="row" style="display: flex; flex-wrap: wrap;">
                                <div class="col-lg-3 col-md-4 col-sm-6" v-for="(item, index) in postLight">
                                    <div class="box-prod">
                                        <a :href="'tin-tuc/'+item.id+'/'+item.slug+'.html'" class="pic-prd">
                                            <img :src="'img/'+ item.image" :alt="item.slug" :title="item.slug">
                                        </a>
                                        <div class="txt-prd">
                                            <a :href="'tin-tuc/'+item.id+'/'+item.slug+'.html'">
                                                <h4>{{item.name}}</h4>
                                            </a>
                                            <p> {{item.short_content}}
                                            </p>
                                            <a :href="'tin-tuc/'+item.id+'/'+item.slug+'.html'"
                                                class="btn btn-default btn-tuan">Xem thêm</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <template v-if="data">
                    <div class="col-sm-12" v-for="(item,index) in data">
                        <a :href="'img/'+item.imgPr" data-fancybox="gallery">
                            <img :src="'img/'+item.imgPr" class="img-responsive" title="cmc-mythuat" alt="cmc-mythuat">
                        </a>
                    </div>
                </template>
                <div class="col-sm-12 text-center"><a href="hinh-ve-cmc" class="btn btn-default btn-tuan">Xem thêm
                        album</a></div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['data','postLight']
}
</script>