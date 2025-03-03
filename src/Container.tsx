import { Outlet } from "react-router-dom";
import { NavMenu } from "./components/nav-content";
import { ModeToggle } from "./components/theme/mode-toggle";

export default function ContainerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-accent flex h-15 items-center justify-between px-6">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight text-nowrap">
          IQ's Random React Stuff
        </h1>
        <ModeToggle />
      </header>
      <nav className="bg-muted border-b-2 pb-2">
        <NavMenu />
      </nav>
      <main className="m-2 flex h-[calc(100vh-200px)] items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}
