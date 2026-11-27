import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import type { Empleado } from "../types/Empleado";

const useEmpleado = () => {
    const [empleados, setEmpleados] = useState<Empleado[]>(() => {
        const empleadoGuardados: string | null = localStorage.getItem("empleados");
        return empleadoGuardados ? JSON.parse(empleadoGuardados) : [];
    });

    const [empleadoEditar, setEmpleadoEditar] = useState<Empleado | null>(null);

    useEffect(() => {
        localStorage.setItem("empleados", JSON.stringify(empleados));
    }, [empleados]);

    const guardarEmpleado = (empleado: Empleado): void => {
        if (!empleado.id) {
            empleado.id = Date.now().toString();
            setEmpleados((prev) => [empleado, ...prev]);
            Swal.fire({
                icon: "success",
                title: "Empleado agregado correctamente",
            });
        } else {
            setEmpleados((prev) => prev.map((e) => (e.id === empleado.id ? empleado : e)));
            setEmpleadoEditar(null);
            Swal.fire({
                icon: "success",
                title: "Empleado actualizado correctamente",
            });
        }
    };

    const eliminarEmpleado = (id: string): void => {
        Swal.fire({
            title: "Está seguro?",
            text: "No podrá revertir esto!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                setEmpleados(empleados.filter((emp) => emp.id !== id));
                Swal.fire({
                    icon: "success",
                    title: "Eliminado",
                    text: "El Empleado ha sido eliminado",
                });
            }
        });
    };

    return {
        empleados,
        empleadoEditar,
        setEmpleadoEditar,
        guardarEmpleado,
        eliminarEmpleado,
    }
}

export default useEmpleado;