import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Footer", () => {
  test("deve exibir o texto de direitos autorais", () => {
    render(<Footer />);
    
    // Verifica se o texto exato de direitos autorais aparece na tela
    expect(
      screen.getByText("© 2025 Pousada Pedra Furada")
    ).toBeInTheDocument();
  });
});