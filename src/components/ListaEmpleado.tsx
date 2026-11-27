import type { ListaEmpleadoProps } from "../types/ListaEmpleadoProps";

const ListaEmpleado: React.FC<ListaEmpleadoProps> = ({
    empleados,
    setEmpleadoEditar,
    eliminarEmpleado,
}) => {

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cargo</th>
                        <th>Departamento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.map((empleado) => (
                        <tr key={empleado.id}>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.cargo}</td>
                            <td>{empleado.departamento}</td>
                            <td>
                                <div>
                                    <button onClick={() => setEmpleadoEditar(empleado)} >Editar</button>
                                    <button onClick={() => eliminarEmpleado(empleado.id)}>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListaEmpleado;