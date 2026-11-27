import useEmpleado from "../hooks/useEmpleado"
import FormularioEmpleado from "./FormularioEmpelado";
import ListaEmpleado from "./ListaEmpleado";

const GestorEmpleado: React.FC = () => {
    const {
        empleados,
        empleadoEditar,
        setEmpleadoEditar,
        guardarEmpleado,
        eliminarEmpleado,
    } = useEmpleado();

    return(
        <div>
            <h1>
                Gestor de Empleados
            </h1>

            <div>
                <div>
                    <FormularioEmpleado
                        guardarEmpleado={guardarEmpleado}
                        empleadoEditar={empleadoEditar}
                        setEmpleadoEditar={setEmpleadoEditar} 
                    />
                </div>

                <div>
                    <ListaEmpleado
                        empleados={empleados}
                        setEmpleadoEditar={setEmpleadoEditar}
                        eliminarEmpleado={eliminarEmpleado} 
                    />
                </div>
            </div>
        </div>
    );
}

export default GestorEmpleado;