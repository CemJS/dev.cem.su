import { Cemjsx, Func, Static } from "cemjs-all"

export default function () {
    return (
        <div>
            <button class="modal_button-close btn__primary" onclick={Func.close}>X</button>
            <header class="modal_header">
                <h2 class="modal_header-title">{Static.title}</h2>
            </header>
        </div>
    )
}