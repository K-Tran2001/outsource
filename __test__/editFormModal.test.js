import EditFormModal from "@/app/folders/modals/editformModal";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test('renders Folders correctly', () => {
  render(<EditFormModal />);
  expect(screen.getByText('Back')).toBeInTheDocument();
});