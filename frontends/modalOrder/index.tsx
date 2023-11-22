import { Cemjsx, front, Static, Ref, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.show = function ($el: HTMLElement) {
    setTimeout(() => {
        $el.classList.add('modal__active');
        front.Variable.$el.body.style.overflow = 'hidden';
    }, 100);
}

front.func.close = function () {
    Ref.modal.classList.remove('modal__active');
    setTimeout(() => {
        Fn.clearData()
        front.Variable.$el.body.style.overflow = 'auto';
    }, 500)
}

front.func.checkForm = function () {
    if (Static.form.fullName.valid && Static.form.email.valid) {
        Static.form.isValid = true
    } else {
        Static.form.isValid = false
    }
    Fn.init()
    return
}

front.loader = () => {
    Static.limitComment = 400;
    //-----------------------
    Static.form = {
        fullName: {
            value: "",
            valid: false,
            error: false,
            placeholder: "ФИО",
            view: false,
            disable: false
        },
        email: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Email",
            view: false,
            disable: false
        },
        phone: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Телефон",
            view: false,
            disable: false
        },
        telegram: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Telegram",
            view: false,
            disable: false
        },
        comment: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Комментарий",
            view: false,
            disable: false
        },
        isValid: false,
    }

    return
}

front.display = () => {
    return (
        <Navigation />
    )
}

export { front }