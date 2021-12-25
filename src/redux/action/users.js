export function removeUsers(name,id) {
    return {
        type: 'REMOVE_TODO' ,
        payload: name, id
    }
}