import Express from "Express";
import { v4 } from "uuid";
import productos from "./productos.js";

const app = Express();
const PORT = 8080;
const router = Express.Router();
const server = app.listen(PORT, () => console.log('servidor inicializado'));

app.use(Express.static('public'));
app.use(Express.json());
app.use(Express.urlencoded({extended: false}));

app.get("/", (_, res) => {
    res.json("hola")
})

app.get('/productos', (_ ,res) => {
    res.json(productos)
}) 

app.post("/productos", (req, res) => {
    productos.push(req.body);
    res.status(201).json(req.body);
});

app.get('/productos/:id', (req, res) => {
    const { id } = req.params;
    const producto = productos.find((producto) => producto.id = id);
    res.json(producto);
});

// Actualizar un producto

app.put("/productos/actualizar/:id", (req, res) => {
    const { id } = req.params;
    const {title} = req.body;
    const producto = productos.find((producto) => producto.id = id);
   
})



// Borrar un producto
app.delete("/productos/delete/:id", (req, res) => {
    const {id} = req.params;
    const producto = productos.filter((producto) => producto.id = id);
    if (!producto) {
        return res.status(404).json({msg: "no encontrado"})
    }  

    productos = productos.filter((producto) => user.id != id)
    
})





