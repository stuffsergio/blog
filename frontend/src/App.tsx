import "./App.css";
import NavBar from "./components/NavBar";
import Form from "./components/Form";

function App() {
  // Lógica de detección de teclas
  // En un futuro...

  return (
    <>
      <div className="">
        <div>
          <NavBar />
        </div>
        <div className="flex flex-col justify-center items-center py-10">
          <h1 className="text-xl font-bold">Sistema Gestor de Blog</h1>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
