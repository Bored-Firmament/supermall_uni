import { ADD_TO_CART,ADD_COUNTER } from "@/store/mutation_types";

export default{
  addGoods(context, payload) {
    return new Promise((resolve,reject) => {
      let oldProduct = null;
      oldProduct = context.getters.cartList.find(item => item.iid === payload.iid);
      if(oldProduct){
        // 重复添加
        context.commit(ADD_COUNTER,oldProduct);
        resolve('已购商品数量+1');
      }else{
        // 初次添加
        context.commit(ADD_TO_CART,payload);
        resolve('添加了新商品');
      }
    })
  }
}
