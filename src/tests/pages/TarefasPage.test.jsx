import { render, screen, fireEvent } from "@testing-library/react";
import TarefasPage from "../../pages/TarefasPage";

test("deve atualizar o status da tarefa ao clicar no botão", () => {
  render(<TarefasPage />);
  const botao = screen.getAllByText("Atualizar")[0];
  fireEvent.click(botao);
  
  // Verificamos especificamente o novo status da primeira tarefa
  expect(screen.getByText("Em andamento")).toBeInTheDocument();
});