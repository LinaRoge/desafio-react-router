import "bootstrap/dist/css/bootstrap.min.css";
function Contacto() {
  return (
    <div>
      <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Correo
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Descripción
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button type="button" class="btn btn-outline-danger">
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Contacto;
