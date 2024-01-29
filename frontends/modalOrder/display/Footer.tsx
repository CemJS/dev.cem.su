import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import success from '@svg/icons/success.svg'

export default function () {
    return (
        <footer class="modal_footer">
            <p class="modal-footer__text">Поля отмеченные <span class="text__fiolet">*</span> обязательные к заполнению</p>
            <button
                class="btn btn__primary"
                onclick={async () => {
                    if (!Static.form.isValid) {
                        return
                    }

                    Ref.modal.classList.remove('modal__active');
                    setTimeout(() => {
                        Func.close()
                    }, 500)

                    let data = {
                        action: "contactForm",
                        formName: Static.title,
                        contactForm: {
                            fullName: Static.form.fullName.value,
                            email: Static.form.email.value,
                            phone: Static.form.phone.value,
                            telegram: Static.form.telegram.value,
                            comment: Static.form.comment.value,
                        }
                    }
                    let answer = await front.Services.functions.sendApi("/api/tg/dev-cem", data)

                    if (answer.error) {
                        Fn.initOne("modalNotify", {
                            icon: success,
                            title: "Упс, ошибка...",
                            text: answer.error
                        })
                        return
                    }

                    Fn.initOne("modalNotify", {
                        icon: success,
                        title: "Спасибо!",
                        text: "Скоро с Вами свяжется наш менеджер!"
                    })
                }}>
                Отправить
            </button>
        </footer>
    )
}