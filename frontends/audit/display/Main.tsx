import { Cemjsx, Fn } from "cemjs-all"

export default function () {
  return (
    <div class="audit-inner">
      <div class="audit-info">
        <h2 class="title-secondary">Экспресс-аудит юзабилити вашего <span class="text__fiolet">сайта</span>, сервиса или <span class="text__fiolet">приложения</span></h2>
        <p class="text-main">Найдём проблемы в интерфейсах и предложим оптимальные пути их решения</p>
        <a class="btn btn__primary" href="https://t.me/dmitriibelov" onclick={Fn.link}>
          Узнать больше
        </a >
      </div>
    </div>
  )
}