import { Cemjsx, front, Func, Static, Ref } from "cemjs-all"
import Navigation from "./navigation"

import tech from '@json/technologies'

front.listener.finish = () => {
    Static.root = document.documentElement;
    console.log('=d4045c=',Static.root)
    Static.marqueeElementsDisplayed = getComputedStyle(Static.root).getPropertyValue("--marquee_elements_displayed")
    Static.root.style.setProperty("--marquee_elements", Ref.marqueeContentStart.children.length)

    for (let i = 0; i < Static.marqueeElementsDisplayed; i++) {
        Ref.marqueeContentStart.appendChild(Ref.marqueeContentStart.children[i].cloneNode(true));
    }
}

Func.test = () => {
    return
}

front.loader = () => {
    Static.startTech = tech.slice(0, tech.length / 2);
    Static.endTech = tech.slice(tech.length / 2);
}

front.display = () => {
    return (
        <section class="tech">
            <div class="wrapper">
                <Navigation />
            </div>
        </section>
    )
}

export { front }