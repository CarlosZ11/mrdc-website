function MemberFormPage(){
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="w-full min-h-screen px-8 py-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center">Registro de Miembro</h1>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2.5">
          <div className="mb-4">
            <label htmlFor="documentId" className="block text-sm font-medium text-gray-700">Documento de Identidad</label>
            <input
              type="text"
              id="documentId"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese el documento de identidad"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese el nombre"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido</label>
            <input
              type="text"
              id="lastName"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese el apellido"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese el correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
              type="text"
              id="phone"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese el teléfono"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
            <input
              type="date"
              id="birthDate"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Género</label>
            <select
              id="gender"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
            >
              <option value="">Seleccione su género</option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección</label>
            <input
              type="text"
              id="address"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese la dirección"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">Estado Civil</label>
            <select
              id="maritalStatus"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
            >
              <option value="">Seleccione su estado civil</option>
              <option value="single">Soltero(a)</option>
              <option value="married">Casado(a)</option>
              <option value="divorced">Divorciado(a)</option>
              <option value="widowed">Viudo(a)</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="startYearChurch" className="block text-sm font-medium text-gray-700">Año de Ingreso a la Iglesia</label>
            <input
              type="text"
              id="startYearChurch"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese el año de ingreso"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="isBaptized" className="block text-sm font-medium text-gray-700">¿Es Bautizado?</label>
            <select
              id="isBaptized"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
            >
              <option value="">Seleccione una opción</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="baptismDate" className="block text-sm font-medium text-gray-700">Fecha de Bautismo</label>
            <input
              type="date"
              id="baptismDate"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="isServer" className="block text-sm font-medium text-gray-700">¿Es Servidor?</label>
            <select
              id="isServer"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
            >
              <option value="">Seleccione una opción</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="ministry" className="block text-sm font-medium text-gray-700">Ministerio</label>
            <select
              id="ministry"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
            >
              <option value="">Seleccione un ministerio</option>
              <option value="worship">Adoración</option>
              <option value="education">Educación</option>
              <option value="community">Comunidad</option>
              <option value="outreach">Alcance</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="serviceArea" className="block text-sm font-medium text-gray-700">Área de Servicio</label>
            <select
              id="serviceArea"
              className="w-full px-3 py-1 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
            >
              <option value="">Seleccione un área de servicio</option>
              <option value="children">Niños</option>
              <option value="youth">Jóvenes</option>
              <option value="adult">Adultos</option>
              <option value="seniors">Ancianos</option>
            </select>
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