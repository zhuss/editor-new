<template>
    <div class="zss-editor">
        <div class="zss-editor-header">
            <button @click="headingClick" type="button" class="zss-editor-button"><i class="fa fa-header"></i></button>
        </div>
        <div class="zss-editor-body" 
            contenteditable="true"
            ref="editor"
            @input="input"
            @blur="blur"
            @keyup.enter="enter"
            @focus="focus">
        </div>
    </div>
</template>
<script>
export default {
    props:{
        value:{
            type:String,
            default:'<p><br></p>'
        }
    },
    data(){
        return {
            range:null,
            selection:null
        }
    },
    mounted(){
        this.$refs.editor.innerHTML = this.value;
    },
    methods:{
        //失去焦点
        blur(e){
            this.selection = window.getSelection();
            if(this.selection.rangeCount > 0){
                this.range = window.getSelection().getRangeAt(0);
            }
        },
        focus(e){
            console.log(this.range);
        },
        //enter事件
        enter(e){
            document.execCommand('formatBlock', false, 'P');
        },
        //input事件
        input(e){
            let html = e.target.innerHTML;
            //删除到
            if(html===''){
                e.target.innerHTML = '<p><br></p>';
                html = '<p><br></p>';
            }
            if(html ==='<p><br></p>'){
                this.$emit('input','');
            }else{
                this.$emit('input',html);
            }
        },
        //点击标题
        headingClick(e){
            console.log(window.getSelection());
        //   let selection = this.selection;
        //   let nodes =  this.$refs.editor.childNodes;
        //   let isH = true;
        //   let selectNode = [];
        //   for(let i = 0; i < nodes.length; i++){
        //      if(this.selection.containsNode(nodes[i],true)){
        //          selectNode.push(nodes[i]);
        //          if(nodes[i].tagName === 'P'){
        //              isH = false;
        //          }
        //      } 
        //   }
        //   for(let i = 0; i < selectNode.length; i++){
        //       if(isH){
        //           selectNode[i].outerHTML = `<p>${selectNode[i].innerHTML}</p>`;
        //       }else{
        //           selectNode[i].outerHTML = `<h1>${selectNode[i].innerHTML}</h1>`;
        //       }
        //   }
        //   this.selection.removeAllRanges();
        }
    }
}
</script>
<style>
.zss-editor-body > p{
    margin: 20px 0;
}
.zss-editor-body > h1{
    margin: 20px 0;
}
</style>

<style lang="less" scoped>
.zss-editor{
    border: 1px solid #E6E6E6;
    >.zss-editor-header{
        padding: 20px;
        border-bottom: 1px solid #E6E6E6;
        >.zss-editor-button{
            height: 40px;
            width: 40px;
            background: #EEE;
            cursor: pointer;
        }
    }
    >.zss-editor-body{
        height: auto;
        min-height:300px;
        outline: none;
        padding: 0 20px;
    }
}
</style>


