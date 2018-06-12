<template>
    <!--报错页面 -->
    <div class="out">
        <div class="error">
            <h1>404 not found</h1>
            <el-button type="normal" @click="back">BACK</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            back() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .out {
        margin-left:20%;
        margin-right:8%;
        height:97.6vh;
    }
    .error{
        position: relative;
        top: 50%;
        left:50%;
        transform: translateY(-50%);
        transform: translateX(-50%);
        text-align: center;
    }
    .error h1 {
        font-size: 64px;
        color: rebeccapurple;
    }
    @media screen and (max-width:768px){
        .error{
            position: relative;
            top: 20%;
            left: 45%;
            transform: translateY(-50%);
            transform: translateX(-50%);
            text-align: center;
        }
    }
</style>