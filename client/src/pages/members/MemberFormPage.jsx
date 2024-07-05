import {useForm} from 'react-hook-form'
import Select from 'react-select'
import React, { useState } from 'react';

const serviceAreaOptions = [
  { value: 'Pastorado', label: 'Pastorado' },
  { value: 'Alabanza', label: 'Alabanza' },
  { value: 'Danza', label: 'Danza' },
  { value: 'Intersesión', label: 'Intersesión' },
  { value: 'Evangelismo', label: 'Evangelismo' },
  { value: 'RDKids', label: 'RDKids' },
  { value: 'Jovenes', label: 'Jovenes' },
  { value: 'Hombres', label: 'Hombres' },
  { value: 'Mujeres', label: 'Mujeres' },
  { value: 'Parejas', label: 'Parejas' },
  { value: 'Servidores', label: 'Servidores' },
  { value: 'Audiovisuales', label: 'Audiovisuales' },
  { value: 'Hornametación', label: 'Hornametación' },
  { value: 'Limpieza', label: 'Limpieza' },
];



function MemberFormPage(){

  const {register, handleSubmit, setValue} = useForm();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
    setValue('serviceArea', selected);
  };

  return (
    <div className="flex justify-center items-center h-full rounded-lg bg-gray-100">
      <form onSubmit={onSubmit} className="w-full  px-6 pt-0 pb-6 bg-white rounded-lg shadow-lg">
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2.5">
          <div className="mb-4">
            <label htmlFor="documentId" className="block text-sm font-medium text-gray-700">Documento de Identidad</label>
            <input
              type="text"
              id="documentId"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese el documento de identidad"
              {...register("documentId")}
              autoFocus
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese el nombre"
              {...register("firstName")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido</label>
            <input
              type="text"
              id="lastName"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese el apellido"
              {...register("lastName")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese el correo electrónico"
              {...register("email")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
              type="text"
              id="phone"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese el teléfono"
              {...register("phone")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
            <input
              type="date"
              id="birthDate"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              {...register("birthDate")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Género</label>
            <select
              id="gender"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              {...register("gender")}
            >
              <option value="">Seleccione su género</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección</label>
            <input
              type="text"
              id="address"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese la dirección"
              {...register("address")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">Estado Civil</label>
            <select
              id="maritalStatus"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              {...register("maritalStatus")}
            >
              <option value="">Seleccione su estado civil</option>
              <option value="Soltero">Soltero(a)</option>
              <option value="Casado">Casado(a)</option>
              <option value="Divorciado">Divorciado(a)</option>
              <option value="Viudo">Viudo(a)</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="startYearChurch" className="block text-sm font-medium text-gray-700">Año de Ingreso a la Iglesia</label>
            <input
              type="date"
              id="startYearChurch"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese el año de ingreso"
              {...register("startYearChurch")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="isBaptized" className="block text-sm font-medium text-gray-700">¿Es Bautizado?</label>
            <select
              id="isBaptized"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              {...register("isBaptized")}
            >
              <option value="">Seleccione una opción</option>
              <option value="Si">Sí</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="baptismDate" className="block text-sm font-medium text-gray-700">Fecha de Bautismo</label>
            <input
              type="date"
              id="baptismDate"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              {...register("baptismDate")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="isServer" className="block text-sm font-medium text-gray-700">¿Es Servidor?</label>
            <select
              id="isServer"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              {...register("isServer")}
            >
              <option value="">Seleccione una opción</option>
              <option value="Si">Sí</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="ministry" className="block text-sm font-medium text-gray-700">Ministerio al que pertenece</label>
            <select
              id="ministry"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              {...register("ministry")}
            >
              <option value="">Seleccione un ministerio</option>
              <option value="Alabanza">Pastorado</option>
              <option value="Alabanza">Alabanza</option>
              <option value="Danza">Danza</option>
              <option value="Intersesión">Intersesión</option>
              <option value="Evangelismo">Evangelismo</option>
              <option value="RDKids">RDKids</option>
              <option value="Jovenes">Jovenes</option>
              <option value="Hombres">Hombres</option>
              <option value="Mujeres">Mujeres</option>
              <option value="Parejas">Parejas</option>
              <option value="Servidores">Servidores</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="serviceArea" className="block text-sm font-medium text-gray-700">Área de Servicio</label>
            <Select
              id="serviceArea"
              isMulti
              options={serviceAreaOptions}
              value={selectedOptions}
              onChange={handleSelectChange}
              // className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              classNamePrefix="react-select"
            />
          </div>
          <div className="col-span-3 flex justify-center">
            <button type="submit" className="w-48 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none">
              Registrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MemberFormPage