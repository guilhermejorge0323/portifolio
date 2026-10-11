import { About } from "./sections/About";
import { ContactMe } from "./sections/ContactMe";
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
            <ContactMe />
        </main>
    )
}
