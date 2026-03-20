import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

test("deve exibir alerta se usuário ou senha estiverem vazios", () => {
  // Mock da função alert do navegador para o Jest capturar a chamada
  window.alert = jest.fn();
  
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );

  // Simula o clique no botão sem preencher nada
  fireEvent.click(screen.getByText("Entrar"));
  
  // Verifica se o alerta de erro foi disparado com a mensagem correta
  expect(window.alert).toHaveBeenCalledWith("Por favor, preencha usuário e senha.");
});

test("deve redirecionar ao preencher login corretamente", () => {
  window.alert = jest.fn();
  
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );

  // Simula a digitação nos campos de Usuário e Senha
  fireEvent.change(screen.getByLabelText("Usuário:"), { target: { value: "Maria" } });
  fireEvent.change(screen.getByLabelText("Senha:"), { target: { value: "123" } });

  // Simula o clique no botão de entrar
  fireEvent.click(screen.getByText("Entrar"));

  // Verifica se o alerta de boas-vindas apareceu
  expect(window.alert).toHaveBeenCalledWith("Bem-vindo, Maria!");
});