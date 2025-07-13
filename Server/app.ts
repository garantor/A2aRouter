import { expressApp } from "./server";




const PORT = process.env.PORT || 3000;


expressApp.listen(PORT, () => {
  console.log(`A2A JS agent server started at http://localhost:${PORT}`);
  console.log(`A2A JS agent card: http://localhost:${PORT}/.well-known/agent.json`);
  console.log('Press Ctrl+C to stop A2A JS server');
});



