import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Stacks } from "./sections/Stack";

export function Main() {
    return (
        <main>
            <About />
            <Skills />
            <Stacks />
            <Projects />
        </main>
    )
}
