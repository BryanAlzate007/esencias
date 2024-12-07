import Layout from "../../Components/Layout"
import "./styles.css"

function AddProduct() {

  return (
      <Layout>     
        <div>
            <h1>Crear un Nuevo Item</h1>
            <form>
                <div>
                    <label
                    className="block" 
                    htmlFor="name">Nombre:</label>
                    <input
                        className="peer rounded-lg"
                        type="text"
                        id="name"
                    />
                </div>
                <div>
                    <label 
                    className="block" 
                    htmlFor="name">Tipo:</label>
                    <input
                        type="text"
                        id="name"
                    />
                </div>
                <div>
                    <label 
                    className="block" 
                    htmlFor="name">Tamaño:</label>
                    <input
                        type="text"
                        id="name"
                    />
                </div>
                <div>
                    <label 
                    className="block" 
                    htmlFor="name">Marca:</label>
                    <input
                        type="text"
                        id="name"
                    />
                </div>
                <div>
                    <label 
                    className="block" 
                    htmlFor="description">Descripción:</label>
                    <textarea
                        id="description"
                    />
                </div>
                <div>
                    <label 
                    className="block" 
                    htmlFor="image">Imagen:</label>
                    <input
                        type="file"
                        id="image"
                />
                </div>
                <button className="button-save" 
                type="submit">Guardar</button>
            </form>
        </div>
      </Layout>

  )
}

export default AddProduct
