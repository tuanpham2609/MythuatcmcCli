<template>
    <div>
        <Slider-Home :data="bannerHome" />
        <AppProduct :data="customCmc" :postLight="postLight" />
        <Teacher-Home :data="customCmc" :teacher="teachers" :study="studys" />
        <News-Home :data="postcmc1s" :postcmc="postcmcs" />
    </div>
</template>
<script>
import AppProduct from '@/components/ProductHome';
import SliderHome from '@/components/BannerHome';
import TeacherHome from '@/components/teacherHome';
import NewsHome from '@/components/newHome';
export default {
    components: {
        AppProduct,
        SliderHome,
        TeacherHome,
        NewsHome,
    },
    data() {
        return {
            data: [],
            customCmc : [],
            postLight : [],
            bannerHome : [],
            teachers : [],
            studys : [],
            postcmc1s : [],
            postcmcs : [],
        }
    },
    created() {
        this.loadAbout();
    },
    methods: {
        loadAbout() {
            this.$http
            .get(this.$store.state.domain + "/" + "trangchu-api")
            .then(result => {
                this.data = result.data;
                this.customCmc = this.data.customCmc;
                this.postLight = this.data.postLight;
                this.bannerHome = this.data.slider;
                this.teachers = this.data.teacher;
                this.studys = this.data.study;
                this.postcmc1s = this.data.postcmc1;
                this.postcmcs = this.data.postcmc;
                console.log(this.data)
            });
        }
    }
};
</script>