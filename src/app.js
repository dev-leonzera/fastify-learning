const app = require('fastify')({ logger: true })

app.get('/', (req, res) => {
    return "Vai tu"
})

const run = () => {
    app.listen({ port: 3000 }).then(() => {
        console.log('listening on port 3000')
    })
}

module.exports = run