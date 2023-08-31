"use client";

import { useState } from "react";
import styles from "./styles.module.css";

import { COUNTRIES } from "@/data/countries";

function CountrySelectInput() {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  return (
    <select
      className={styles.wrapper}
      value={selectedCountry}
      onChange={(e) => setSelectedCountry(e.target.value)}
      required
    >
      {COUNTRIES.map((country) => (
        <option
          className={styles.option}
          key={country.name}
          value={country.name}
        >
          {country.name}
        </option>
      ))}
    </select>
  );
}

export default CountrySelectInput;
