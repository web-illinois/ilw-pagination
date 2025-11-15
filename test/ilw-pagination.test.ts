import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-pagination";

const content = html`
  <ilw-pagination></ilw-pagination>
`;

test("renders slotted content", async () => {
    const screen = render(content);
    const element = screen.getByText("1");
    await expect.element(element).toBeInTheDocument();
});