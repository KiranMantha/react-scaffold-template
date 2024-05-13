export function Textbox({ placeholder }: { placeholder?: string }) {
  return <input type="text" placeholder={placeholder} data-testid="textbox" />;
}
