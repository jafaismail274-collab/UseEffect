import { data } from "./data.js";
import { useState, useEffect } from "react";

function Etudiants() {
  const [groupes, setGroupes] = useState([]);
  const [selectedGr, setSelectedGr] = useState("");
  const [etudiants, setEtudiants] = useState([]);

  // Q1 : Remplir la liste des groupes au montage
  useEffect(function () {
    setGroupes(Object.keys(data));
  }, []);

  // Q3 : Charger les étudiants du groupe sélectionné
  useEffect(
    function () {
      if (selectedGr) {
        setEtudiants(data[selectedGr]);
      } else {
        setEtudiants([]);
      }
    },
    [selectedGr]
  );

  return (
    <>
      {/* Q1 et Q2 : Liste des groupes */}
      <select
        value={selectedGr}
        onChange={(e) => setSelectedGr(e.target.value)}
      >
        <option value="">-- Choisir un groupe --</option>

        {groupes.map(function (item, i) {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
      </select>

      {/* Q3 : Afficher les étudiants */}
      {etudiants.map(function (item, i) {
        return (
          <div
            key={item.id}
            className="rounded-xl bg-white p-5 shadow"
          >
            <h3 className="text-lg font-bold">
              {item.nom}
            </h3>

            <p className="mt-2 text-slate-500">
              Note : {item.note} / 20
            </p>
          </div>
        );
      })}

      <label>{selectedGr}</label>
    </>
  );
}

export default Etudiants;