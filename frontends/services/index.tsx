import { Cemjsx, front, Func, Static } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

Func.test = () => {
    return
}

front.loader = () => {
    return
}

front.display = () => {
    return (
        <section class="services" id="services">
            <div class="wrapper">
                <Navigation />
            </div>
        </section>
    )
}

export { front }