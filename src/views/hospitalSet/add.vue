<template>
  <div class="app-container">
    医院设置添加
    <el-form label-width="120px">
      <el-form-item label="医院名称">
        <el-input v-model="hospitalSet.hosname"/>
      </el-form-item>
      <el-form-item label="医院编号">
        <el-input v-model="hospitalSet.hoscode"/>
      </el-form-item>
      <el-form-item label="api基础路径">
        <el-input v-model="hospitalSet.apiUrl"/>
      </el-form-item>
      <el-form-item label="联系人姓名">
        <el-input v-model="hospitalSet.contactsName"/>
      </el-form-item>
      <el-form-item label="联系人手机">
        <el-input v-model="hospitalSet.contactsPhone"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import hospitalSet from '../../api/hospitalSet'

export default {
  name: 'add',
  data() {
    return {
      hospitalSet: {}

    }
  },
  created() {
    //获取路由里的id值
    //调用对应医院设置信息
    if (this.$route.params && this.$route.params.id) {
      const id = this.$route.params.id
      this.getHostSet(id)
    }else{
      this.hospitalSet={}
    }
  },
  methods: {
    //添加医院设置
    save(){
      //添加医院设置
      hospitalSet.saveHospitalSet(this.hospitalSet)
        .then(response => {
          //提示信息
          //提示
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
          //刷新页面
          this.$router.push({path:'/hospSet/list'})
        })
    },
    //修改医院设置
    update(){
      //添加医院设置
      hospitalSet.updateHospitalSet(this.hospitalSet)
        .then(response => {
          //提示信息
          //提示
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          //刷新页面
          this.$router.push({path:'/hospSet/list'})
        })
    },
    //修改还是添加
    saveOrUpdate() {
      if(!this.hospitalSet.id){
        //没有id就是添加操作
        this.save()
      }else{
        this.update()
      }
    },
    //获取id
    getHostSet(id) {
      hospitalSet.getHospitalSet(id)
        .then(response => {
          this.hospitalSet = response.data
        })
    }
  }

}
</script>

<style scoped>

</style>
