import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";

// Substitui o Header real por uma versão simplificada para o teste
jest.mock("../components/Header", () => () => <header>Mock Header</header>);

test("deve renderizar o Header e o conteúdo filho", () => {
  render(
    <Layout>
      <p>Conteúdo interno</p>
    </Layout>
  );

  // Verifica se o Header (mockado) foi renderizado [cite: 566]
  expect(screen.getByText("Mock Header")).toBeInTheDocument();
  
  // Verifica se o que foi passado dentro do Layout também aparece [cite: 568]
  expect(screen.getByText("Conteúdo interno")).toBeInTheDocument();
});