import request from '@/utils/request'

export default {
  //获取所有医院
  getHospSetList(current, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPage/${current}/${limit}`,
      method: 'post',
      data: searchObj //使用json形式
    })
  },
  //通过id删除医院设置
  deleteHospitalSet(id) {
    return request({
      url: `/admin/hosp/hospitalSet/${id}`,
      method: 'delete'
    })
  },
  //批量删除
  batchDeleteSet(idList) {
    return request({
      url: `/admin/hosp/hospitalSet/batchRemove`,
      method: 'delete',
      data: idList
    })
  },
  //锁定和解锁
  lockHospitalSet(id, status) {
    return request({
      url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
      method: 'put'
    })
  },
  //添加医院设置
  saveHospitalSet(hospitalSet) {
    return request({
      url: `/admin/hosp/hospitalSet/saveHospitalSet`,
      method: 'post',
      data:hospitalSet
    })
  },
  //医院设置查询
  getHospitalSet(id){
    return request({
      url: `/admin/hosp/hospitalSet/getHospSet/${id}`,
      method: 'get',
    })
  },
  //医院设置修改
  updateHospitalSet(hospitalSet){
    return request({
      url: `/admin/hosp/hospitalSet/updateHospitalSet`,
      method: 'post',
      data:hospitalSet
    })
  },
}

