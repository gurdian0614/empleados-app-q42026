import { useEffect, useState } from "react";
import type { Empleado } from "../types/Empleado";
import Swal from "sweetalert2";
import type { FormularioDatos } from "../types/FormularioDatos";

const useFormularioEmpleado = (
    guardarEmpleado: (e: Empleado) => void,
    empleadoEditar: Empleado | null,
    setEmpleadoEditar: (e: Empleado | null) => void,
) => {
    const empleadoObj: FormularioDatos = {
        nombre: "",
        cargo: "",
        departamento: "",
    };

    const [formularioDatos, setFormularioDatos] = useState<FormularioDatos>(empleadoObj);

    useEffect(() => {
        if (empleadoEditar) {
            setFormularioDatos({
                nombre: empleadoEditar.nombre,
                cargo: empleadoEditar.cargo,
                departamento: empleadoEditar.departamento,
            });
        }
    }, [empleadoEditar]);

    const manejarEnvio = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!formularioDatos.nombre.trim()) {
            Swal.fire("Nombre del empleado requerido", "", "warning");
            return;
        }

        if (!formularioDatos.cargo.trim()) {
            Swal.fire("Cargo del empleado requerido", "", "warning");
            return;
        }

        if (!formularioDatos.departamento.trim()) {
            Swal.fire("Departamento del empleado requerido", "", "warning");
            return;
        }

        const empleado: Empleado = {
            id: empleadoEditar ? empleadoEditar.id : "",
            nombre: formularioDatos.nombre,
            cargo: formularioDatos.cargo,
            departamento: formularioDatos.departamento,
        };

        guardarEmpleado(empleado);
        setFormularioDatos(empleadoObj);
        setEmpleadoEditar(null);
    };

    const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setFormularioDatos((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const manejarCancelar = (e: React.ChangeEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setFormularioDatos(empleadoObj);
        setEmpleadoEditar(null);
    };

    return {
        formularioDatos,
        manejarCambio,
        manejarCancelar,
        manejarEnvio,
    }
}

export default useFormularioEmpleado;