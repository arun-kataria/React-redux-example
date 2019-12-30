export function add(record) {
    return {
        type: 'add',
        payload: record
    }
}

export function remove(record) {
    return {
        type: 'remove',
        payload: record
    }
}