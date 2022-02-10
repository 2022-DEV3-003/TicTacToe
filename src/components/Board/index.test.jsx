import Board from ".";
import { render, screen } from "@testing-library/react";

test("renders Board", () => {
  render(<Board />)
})

test('renders nine buttons', async () => {
  render(<Board />)
  const items = await screen.findAllByRole('button')
  expect(items).toHaveLength(9)
})