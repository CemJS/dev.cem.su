import { Cemjsx, front, Func, Static, Variable, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    Static.shadow = ''
    for (let i = 0; i < 7; i++) {
        Static.shadow += (Static.shadow ? ',' : '') + -i * 1 + 'px ' + i * 1 + 'px 0 #d9d9d9';
    }
    Ref.text.style.textShadow = Static.shadow
    console.log('=2bb489=', Ref.text)
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
        <section class="info">
            <div class="wrapper">
                <Navigation />
            </div>
        </section>
    )
}

export { front }