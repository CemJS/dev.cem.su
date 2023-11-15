import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    console.log('=2bb489=', Ref.text)
    return
}

front.func.test = () => {
    return
}

front.loader = () => {
    return
}

front.display = () => {
    return (
        <header class="header">
            <div class="wrapper">
                <Navigation />
            </div>
        </header>
    )
}

export { front }