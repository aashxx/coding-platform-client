import axios from 'axios';

// Function to run a web programming problem
export const runWebProgramCode = async (html, css = '', js = '', questionId) => {
  try {
    const response = await axios.post('http://localhost:5002/api/web-program/run', {
      html,
      css,
      js,
      questionId,
    });
    return response.data;
  } catch (error) {
    console.error("Error running web programming problem:", error);
    return { success: false, error: error.message };
  }
};

// Function to run an SQL problem
export const runSQLProblem = async (query, testCases) => {
  try {
    const response = await axios.post('http://localhost:5002/api/sql/run', {
      query,
      testCases,
    });
    return response.data;
  } catch (error) {
    console.error("Error running SQL problem:", error);
    return { success: false, error: error.message };
  }
};

// Function to run a DSA problem
export const runDSAProblem = async (code, language, testCases) => {
  try {
    const response = await axios.post('http://localhost:5002/api/dsa/run', {
      code,
      language,
      testCases,
    });
    return response.data;
  } catch (error) {
    console.error("Error running DSA problem:", error);
    return { success: false, error: error.message };
  }
};

// Function to run a debugging problem
export const runDebuggingProblem = async (code, language, testCases) => {
  try {
    console.log("esnter");
    const response = await axios.post('http://localhost:5002/api/debugging/run', {
      code,
      language,
      testCases,
    });
    console.log("debugging", response.data)
    return response.data;
  } catch (error) {
    console.error("Error running debugging problem:", error);
    return { success: false, error: error.message };
  }
};
