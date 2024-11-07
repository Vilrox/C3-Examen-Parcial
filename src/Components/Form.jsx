import React,{ useState} from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        deporte: ""
      });
      const [mostrar, setMostrar] = useState(false);
      const [error, setError] = useState(false);
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
        if (
          formData.nombre.trim().length > 3 &&
          formData.apellido.trim().length > 6 &&
          regexEmail.test(formData.email) &&
          formData.deporte.trim().length > 0
        ) {
          setMostrar(true);
          setError(false);
        } else {
          setError(true);
        }
      };
    
      console.log(formData);
    
      return (
        <div>
          {mostrar ? (
            <Card nombre={`${formData.nombre} ${formData.apellido}`}/>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>Nombre: </label>
              <input
                type="text"
                value={formData.nombre}
                onChange={(event) =>
                  setFormData({ ...formData, nombre: event.target.value })
                }
              />
    
              <label>Apellido: </label>
              <input
                type="text"
                value={formData.apellido}
                onChange={(event) =>
                  setFormData({ ...formData, apellido: event.target.value })
                }
              />
    
              <label>Email: </label>
              <input
                type="email"
                value={formData.email}
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
              />
    
              <label>Deporte: </label>
              <input
                type="text"
                value={formData.deporte}
                onChange={(event) =>
                  setFormData({ ...formData, deporte: event.target.value })
                }
              />
    
              <button>Inscribirme</button>
    
              {error && (
                <h4 style={{ color: "red" }}>
                  Por favor chequea que la información sea correcta
                </h4>
              )}
            </form>
          )}
        </div>
      );
    };
    
    export default Form;
