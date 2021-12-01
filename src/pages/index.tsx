import Counter from "~/components/Counter";
import "./index.css";
import Dismiss from "solid-dismiss";
import { createSignal } from "solid-js";

export default function Home() {
  const [open, setOpen] = createSignal(false);
  let menuButton!: HTMLButtonElement;
  return (
    <main>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit <button ref={menuButton}>hi</button>
        <Dismiss menuButton={menuButton} open={open} setOpen={setOpen}>
          <a href="https://solidjs.com" target="_blank">
            solidjs.com
          </a>{" "}
        </Dismiss>
        to learn how to build Solid apps.
      </p>
    </main>
  );
}
