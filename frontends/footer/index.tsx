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
        <footer class="footer">
            <div class="wrapper">
                <Navigation />
            </div>
        </footer>
    )
}

export { front }