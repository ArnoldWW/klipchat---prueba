import React from "react";

export default function Select() {
  return (
    <select className="px-5 py-2 bg-neutral-700 rounded-3xl">
      <option value="public">Publico</option>
      <option value="private">Solo Para mi</option>
    </select>
  );
}
