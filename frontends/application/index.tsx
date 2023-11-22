import { Cemjsx, front, Ref, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
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

front.func.clearFields = function () {
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
            placeholder: "Email адрес",
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

    Ref.fullName.value = ""
    Ref.phone.value = ""
    Ref.email.value = ""
    Ref.telegram.value = ""
    Ref.modalComment.value = ""
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
            placeholder: "Email адрес",
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
        <section class="application section" id="application">
            <div class="wrapper">
                <h2 class="title-secondary">Оставьте заявку на проект</h2>
                <p class="text-main">Оставьте контакты, чтобы обсудить проект и условия сотрудничества:
                    <a href="tel:+7(938)-540-45-12" class="text__fiolet"> +7(938)-540-4512</a>
                </p>
                <Navigation />
            </div>
        </section>
    )
}

export { front }