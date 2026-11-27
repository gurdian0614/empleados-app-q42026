import type { Empleado } from "./Empleado";

export interface Props {
    guardarEmpleado: (e: Empleado) => void;
    empleadoEditar: Empleado | null;
    setEmpleadoEditar: (e: Empleado | null) => void;
}