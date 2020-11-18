import { createServer } from 'miragejs'

export default function() {
    let arr = [{ id: "1", text: "hello" }]
    
    createServer({
        routes() {
            this.namespace = '/fakeapi'
            this.get('/getTodos', {todos: arr})
        }
    })
}