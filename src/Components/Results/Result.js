import { useState, useEffect } from "react";

function Result() {
  const queryParams = new URLSearchParams(window.location.search);
  console.log("result is", queryParams.get("result"));

  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(queryParams.get("result"));
  }, []);

  return (
    <div>
      <h1>Here are your test results.</h1>
      <p>{result}/20</p>
    </div>
  );
}

export default Result;
