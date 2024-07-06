import { useForm } from "react-hook-form";
import Select from "react-select";
import React, { useState } from "react";
import { useMembers } from "../../context/MemberContext";

const serviceAreaOptions = [
  { value: "Pastorado", label: "Pastorado" },
  { value: "Alabanza", label: "Alabanza" },
  { value: "Danza", label: "Danza" },
  { value: "Intersesión", label: "Intersesión" },
  { value: "Evangelismo", label: "Evangelismo" },
  { value: "RDKids", label: "RDKids" },
  { value: "Jovenes", label: "Jovenes" },
  { value: "Hombres", label: "Hombres" },
  { value: "Mujeres", label: "Mujeres" },
  { value: "Parejas", label: "Parejas" },
  { value: "Servidores", label: "Servidores" },
  { value: "Audiovisuales", label: "Audiovisuales" },
  { value: "Hornametación", label: "Hornametación" },
  { value: "Limpieza", label: "Limpieza" },
];

function MemberFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { createMember } = useMembers();

  const [isServerChecked, setIsServerChecked] = useState(false);
  const [isBaptizedChecked, setIsBaptizedChecked] = useState(false);

  const handleServerCheckboxChange = (e) => {
    setIsServerChecked(e.target.checked);
  };

  const handleBaptizedCheckboxChange = (e) => {
    setIsBaptizedChecked(e.target.checked);
  };

  const onSubmit = handleSubmit((data) => {
    // Convert dates to ISO strings
    data.birthDate = new Date(data.birthDate).toISOString();
    data.startYearChurch = new Date(data.startYearChurch).toISOString();
    if (data.baptismDate)
      data.baptismDate = new Date(data.baptismDate).toISOString();

    // Convert service area options to an array of strings
    data.serviceArea = selectedOptions.map((option) => option.value);

    // Set isServer and isBaptized based on checkbox state
    data.isServer = isServerChecked ? "Si" : "No";
    data.isBaptized = isBaptizedChecked ? "Si" : "No";

    console.log(data);

    createMember(data)
  });

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
    setValue("serviceArea", selected);
  };

  return (
    <div className="flex justify-center items-center h-full rounded-lg bg-gray-100">
      <form
        onSubmit={onSubmit}
        className="w-full  px-6 pt-0 pb-6 bg-white rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="mb-4">
            <label
              htmlFor="documentId"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Documento de Identidad
            </label>
            <input
              type="text"
              id="documentId"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingrese el documento de identidad"
              {...register("documentId", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingrese el nombre"
              {...register("firstName", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Apellido
            </label>
            <input
              type="text"
              id="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingrese el apellido"
              {...register("lastName", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingrese el correo electrónico"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Teléfono
            </label>
            <input
              type="text"
              id="phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingrese el teléfono"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="birthDate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="birthDate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("birthDate", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Género
            </label>
            <select
              id="gender"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("gender", { required: true })}
            >
              <option value="">Seleccione su género</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Dirección
            </label>
            <input
              type="text"
              id="address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingrese la dirección"
              {...register("address", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="maritalStatus"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Estado Civil
            </label>
            <select
              id="maritalStatus"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("maritalStatus", { required: true })}
            >
              <option value="">Seleccione su estado civil</option>
              <option value="Solter@">Soltero(a)</option>
              <option value="Casad@">Casado(a)</option>
              <option value="Divorciad@">Divorciado(a)</option>
              <option value="Viud@">Viudo(a)</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="startYearChurch"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Año de Ingreso a la Iglesia
            </label>
            <input
              type="date"
              id="startYearChurch"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingrese el año de ingreso"
              {...register("startYearChurch", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="ministry"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Ministerio al que pertenece
            </label>
            <select
              id="ministry"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("ministry", { required: true })}
            >
              <option value="">Seleccione un ministerio</option>
              {serviceAreaOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 gap-8 flex justify-center">
            <div>
              <label
                htmlFor="isServer"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                ¿Es Servidor?
              </label>
              <div className="flex items-center pt-2">
                <input
                  type="checkbox"
                  id="isServer"
                  checked={isServerChecked}
                  onChange={handleServerCheckboxChange}
                  className="ml-8 border rounded-lg focus:outline-none focus:border-blue-700"
                />
                <span className="ml-2 text-gray-700">Sí</span>
              </div>
            </div>
            <div>
              <label
                htmlFor="isBaptized"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                ¿Es Bautizado?
              </label>
              <div className="flex items-center pt-2">
                <input
                  type="checkbox"
                  id="isBaptized"
                  checked={isBaptizedChecked}
                  onChange={handleBaptizedCheckboxChange}
                  className="ml-8 border rounded-lg focus:outline-none focus:border-blue-700"
                />
                <span className="ml-2 text-gray-700">Sí</span>
              </div>
            </div>
          </div>
          {isServerChecked && (
            <div className="mb-4">
              <label
                htmlFor="serviceArea"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Área de Servicio
              </label>
              <Select
                id="serviceArea"
                isMulti
                options={serviceAreaOptions}
                value={selectedOptions}
                onChange={handleSelectChange}
                className="basic-multi-select"
                classNamePrefix="selectqq"
                placeholder="Seleccione las áreas de servicio"
              />
            </div>
          )}
          {isBaptizedChecked && (
            <div className="mb-4">
              <label
                htmlFor="baptismDate"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Fecha de Bautismo
              </label>
              <input
                type="date"
                id="baptismDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("baptismDate", { required: true })}
              />
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-48 py-2 m-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default MemberFormPage;
