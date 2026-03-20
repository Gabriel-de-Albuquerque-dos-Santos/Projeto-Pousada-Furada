import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";

describe("Página Inicial", () => {
  it("renderiza o título principal", () => {
    // Renderiza o componente Home para o teste
    render(<Home />);
    
    // Verifica se o texto de boas-vindas está presente no documento
    expect(
      screen.getByText("Bem-vindo à Pousada Pedra Furada")
    ).toBeInTheDocument();
  });
});