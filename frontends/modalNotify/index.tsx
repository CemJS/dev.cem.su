import { Cemjsx, front, Ref, Fn, Func } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    setTimeout(() => {
        Func.close()
    }, 2000);
}

front.func.show = function ($el: HTMLElement) {
    setTimeout(() => {
        $el.classList.add('notice__active');
    }, 100);
}

front.func.close = function () {
    Ref.notice.classList.remove('notice__active');
    setTimeout(() => {
        Fn.clearData()
    }, 500)
}

front.loader = () => {
    return
}

front.display = () => {
    return (
        <div>
            <Navigation />
        </div>
    )
}

export { front }