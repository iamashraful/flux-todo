/**
 * Created by Ashraful on 6/19/2017.
 */

import dispatcher from "../dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    });
}

export function updateTodo(id, text, isCom, isInp) {
    dispatcher.dispatch({
        type: "UPDATE_TODO",
        id,
        text,
        isCom,
        isInp
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id
    });
}
