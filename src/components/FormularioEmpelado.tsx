import useFormularioEmpleado from "../hooks/useFormularioEmpleado";
import type { Empleado } from "../types/Empleado";
import type { Props } from "../types/Props";

const FormularioEmpleado: React.FC<Props> = ({
    guardarEmpleado,
    empleadoEditar,
    setEmpleadoEditar,
}) => {
    const {
        formularioDatos,
        manejarCambio,
        manejarCancelar,
        manejarEnvio,
    } = useFormularioEmpleado(guardarEmpleado, empleadoEditar, setEmpleadoEditar);

    return (
        <div>
            <h2>
                { empleadoEditar ? "Editar Empleado" : "Agregar Empleado" }
            </h2>

            <form onSubmit={manejarEnvio}>
                <div>
                    <label>Nombre</label>
                    <input name="nombre" value={formularioDatos.nombre} onChange={manejarCambio} />
                </div>

                <div>
                    <label>Cargo</label>
                    <input name="cargo" value={formularioDatos.cargo} onChange={manejarCambio} />
                </div>

                <div>
                    <label>Departamento</label>
                    <input name="departamento" value={formularioDatos.departamento} onChange={manejarCambio} />
                </div>

                <div>
                    <button onClick={manejarCancelar}>Cancelar</button>
                    <button type="submit">{ empleadoEditar ? "Actualizar" : "Agregar" }</button>
                </div>
            </form>
        </div>
    );
}

export default FormularioEmpleado