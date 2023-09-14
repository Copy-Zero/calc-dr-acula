import { useState } from "react";

import BucketA from "./BucketA.jsx";
import BucketB from "./BucketB.jsx";
import BucketRes from "./BucketRes.jsx";

function App() {
  const [gallons, setGallons] = useState(0);
  const [mixRatio, setMixRatio] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  //buckets
  const [bucketA, setBucketA] = useState([]);
  const [bucketB, setBucketB] = useState([]);
  const [bucketRes, setBucketRes] = useState([]);

  const ratioOptions = [
    "jacksFull-2EC",
    "genes-1-7EC",
    "jacksBase-1-7EC",
    "jacksSeedling-1EC",
  ];

  // Recipe Configuration
  const Recipe = {
    // defaults
    jacksA: 1,
    calNit: 1,
    epsom: 1,
    // default ratio stays
    tribus: 1,
    silica: 5,
    setRatio: function (scheme) {
      if (scheme === "jacksFull-2EC") {
        this.jacksA = 3.6;
        this.calNit = 2.4;
        this.epsom = 1.2;
      }
      if (scheme === "genes-1-7EC") {
        this.jacksA = 4;
        this.calNit = 2;
        this.epsom = 0;
      }
      if (scheme === "jacksBase-1-7EC") {
        this.jacksA = 3;
        this.calNit = 2;
        this.epsom = 1;
      }
      if (scheme == "jacksSeedling-1EC") {
        this.jacksA = 1.8;
        this.calNit = 1.2;
        this.epsom = 0.6;
      }
    },
    setAmounts: function (gallons) {
      this.jacksA *= gallons;
      this.calNit *= gallons;
      this.epsom *= gallons;
      this.tribus *= gallons;
      this.silica *= gallons;
    },
  };

  const getBucketA = () => {
    return [{ jacksA: Recipe.jacksA }, { epsom: Recipe.epsom }];
  };

  const getBucketB = () => {
    return [{ calNit: Recipe.calNit }];
  };

  const getBucketRes = () => {
    return [{ tribus: Recipe.tribus }, { silica: Recipe.silica }];
  };

  // handler functions
  const handleGallonsChange = (event) => {
    // console.log(event.target.value);
    setGallons(event.target.value);
  };

  const handleSelectChange = (event) => {
    // console.log(event.target.value);
    setMixRatio(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // re write for function
    Recipe.setRatio(mixRatio);
    Recipe.setAmounts(gallons);

    setBucketA([...getBucketA()]);
    setBucketB([...getBucketB()]);
    setBucketRes([...getBucketRes()]);

    setFormSubmitted(true);
  };

  return (
    <>
      <main className="container">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="gallons-input">Enter Gallons:</label>
          <input
            id="gallons-input"
            value={gallons}
            type="text"
            onChange={handleGallonsChange}
            placeholder="EnterGallons"
          />
          <label htmlFor="">Select Recipe:</label>
          <select onChange={handleSelectChange}>
            <option value="Select Recipe">Select Recipe...</option>
            {ratioOptions.map((choice) => {
              return (
                <option key={choice} value={choice}>
                  {choice}
                </option>
              );
            })}
          </select>
          <button type="submit">Calc</button>
        </form>
        <div className="grid container">
          {formSubmitted && <BucketA bucketA={bucketA} />}
          {formSubmitted && <BucketB bucketB={bucketB} />}
          {formSubmitted && <BucketRes bucketRes={bucketRes} />}
        </div>
      </main>
    </>
  );
}

export default App;

// ToDos
// finish form
//  move form to new component

// calculate values
// create bucket div components

// pass recipe into bucket components
