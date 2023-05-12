import React, { useState, useEffect } from "react";

function AlgorithmCodeGenerator() {
  const [code, setCode] = useState("");
  const [answer, setAnswer] = useState("");

  const generateAlgorithm = () => {
    const operators = ["+", "-", "*", "/"];
    const operand1 = Math.floor(Math.random() * 10) + 1;
    const operand2 = Math.floor(Math.random() * 10) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let generatedCode = `function calculateResult() {\n`;
    generatedCode += `  const operand1 = ${operand1};\n`;
    generatedCode += `  const operand2 = ${operand2};\n`;
    generatedCode += `  const operator = '${operator}';\n`;
    generatedCode += `  let result;\n\n`;
    generatedCode += `  // Perform the operation\n`;
    generatedCode += `  if (operator === '+') {\n`;
    generatedCode += `    result = operand1 + operand2;\n`;
    generatedCode += `  } else if (operator === '-') {\n`;
    generatedCode += `    result = operand1 - operand2;\n`;
    generatedCode += `  } else if (operator === '*') {\n`;
    generatedCode += `    result = operand1 * operand2;\n`;
    generatedCode += `  } else if (operator === '/') {\n`;
    generatedCode += `    result = operand1 / operand2;\n`;
    generatedCode += `  }\n\n`;
    generatedCode += `  return result;\n`;
    generatedCode += `}\n\n`;
    generatedCode += `// Example usage\n`;
    generatedCode += `console.log(calculateResult());`;

    const result = eval(generatedCode);
    setCode(generatedCode);
    setAnswer(result);
  };

  const handleManualRun = () => {
    generateAlgorithm();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generateAlgorithm();
    }, (1000 * 60 * 60 * 24) / 5); // Execute every 5th of a day (5 times a day)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="code-generator">
      <h1>Algorithm Code Generator</h1>
      <button onClick={handleManualRun}>Run Algorithm</button>
      <pre id="code">{code}</pre>
      {answer && (
        <div>
          <h2>Answer:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default AlgorithmCodeGenerator;
