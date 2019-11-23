/**
 * Created by 张强 on 2018/7/11.
 */
import {BaseDao} from './BaseDao'
import Resource from '../entity/Resource'

class ResourceDao extends BaseDao<Resource> {
  constructor() {
    super(Resource)
  }
}

export default new ResourceDao()
