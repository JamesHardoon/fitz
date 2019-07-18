/*
包含n个用于直接更新状态的方法的对象模块
 */
import {ADD_TODO,DELETE_TODO,SELECT_ALL_TODOS,DELETE_COMPLETE_TODOS} from './mutation-types'

export default {
    [ADD_TODO] (state,{todo}) { // 方法名不是ADD_TODO，而是add_todo,所以使用[]包裹ADD_TODO
        // 往数组中添加一条新的记录
        state.todos.unshift(todo)
    },
    [DELETE_TODO] (state,{index}) {
        // 根据当前选中的索引删除记录
        state.todos.splice(index,1)
    },
    [SELECT_ALL_TODOS] (state,{isCheck}) {
        state.todos.forEach(todo => {
            todo.complete = isCheck
        });
    },
    [DELETE_COMPLETE_TODOS] (state) {
        state.todos = state.todos.filter(todo => !todo.complete)
    }
    
}
