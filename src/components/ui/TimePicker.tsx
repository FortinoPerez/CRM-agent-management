"use client";

import React, { useState } from "react";

const TimePicker = () => {
  const [hour, setHour] = useState<string>("07");
  const [minute, setMinute] = useState<string>("30");
  const [period, setPeriod] = useState<string>("AM");

  // Opciones de horas, minutos y períodos
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
  const periods = ["AM", "PM"];

  return (
    <div className="flex flex-col space-y-2">
      {/* Etiqueta */}
      <label className="text-gray-400 text-sm font-medium">Selecciona hora</label>
      {/* Contenedor del time picker */}
      <div className="flex items-center space-x-2">
        {/* Selector de horas */}
        <select
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          className="p-2 text-sm bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {hours.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>

        {/* Separador */}
        <span className="text-gray-400">:</span>

        {/* Selector de minutos */}
        <select
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
          className="p-2 text-sm bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {minutes.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        {/* Selector de período (AM/PM) */}
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="p-2 text-sm bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {periods.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Resultado seleccionado */}
    </div>
  );
};

export default TimePicker;
