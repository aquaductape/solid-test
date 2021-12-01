import Counter from "~/components/Counter";
import "./index.css";
import { createSignal } from "solid-js";
import CreatePortal from "~/components/CreatePortal";
import { isServer } from "solid-js/web";

export default function Home() {
  const [open, setOpen] = createSignal(false);
  let menuButton!: HTMLButtonElement;

  if (open && !isServer) {
    CreatePortal({
      mount: document.body,
      popupChildren: <div>hi</div>,
      overlayChildren: null,
      marker: null,
    });
  }

  return (
    <main>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit <button ref={menuButton}>hi</button>
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
    </main>
  );
}
