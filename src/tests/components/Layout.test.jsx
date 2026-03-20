// src/tests/components/Layout.test.jsx
import { render, screen } from "@testing-library/react";
import Layout from "../../components/Layout";

// Mocka Header e Footer para isolar o Layout
jest.mock("../../components/Header", () => () => <div>Mock Header</div>);
jest.mock("../../components/Footer", () => () => <div>Mock Footer</div>);

describe("Layout.jsx — Estrutura principal da aplicação", () => {
  it("deve renderizar Header, conteúdo filho e Footer", () => {
    render(
      <Layout>
        <p>Conteúdo interno</p>
      </Layout>
    );

    // Verifica se o Header mockado foi renderizado
    expect(screen.getByText("Mock Header")).toBeInTheDocument();

    // Verifica o conteúdo filho (children)
    expect(screen.getByText("Conteúdo interno")).toBeInTheDocument();

    // Verifica se o Footer mockado foi renderizado
    expect(screen.getByText("Mock Footer")).toBeInTheDocument();
  });
});