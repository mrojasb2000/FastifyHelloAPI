const fastify = require("fastify")
const server = fastify()

const books = [
    "El arte de la guerra",
    "El laberinto de la soledad",
    "Rebelión en la granja"
]

server.get('/books', async function(request, reply) {
    const filter = request.query.filter

    if (filter) {
        reply.send({
            data: books.filter(book => book.includes(filter)),
        })
    }

    reply.send({
        message: "Fastify works",
        data: books,
    })
})

server.get("/book/:id", (request, reply) => {
    const id = request.params.id
    reply.send({
        data: id,
    })
})

server.post("/book", (request, reply) => {
    const name = request.body.name
    const author = request.body.author
    console.log(`Book name: ${name}, author: ${author}`)
    reply.send({
        message: "New book created",
    })
})


server.listen(3000, function(error) {
    if (error) {
        console.error(error)
        process.exit(1)
    }
    console.log('Fastify running on port 3000')
})
