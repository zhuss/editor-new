<template>
    <div class="demo">
        <div class="editor-warp">
            <editor v-model="html"></editor>
        </div>
    </div>
</template>
<script>
import Editor from '../components/Editor'
export default {
    components:{
        Editor
    },
    data(){
        return {
            html:'<p>哈哈哈</p>'
        }
    }
}
</script>
<style lang="less" scoped>
.demo{
    >.editor-warp{
        width: 800px;
        height: 400px;
        margin: 100px auto;
    }
}
</style>


