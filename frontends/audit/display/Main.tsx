import { Cemjsx } from "cemjs-all"
import explore from '@images/explore.png'

export default function () {
  return (
    <div class="audit-inner">
      <div class="audit-info">
        <h2 class="audit-info_title">Экспресс-аудит юзабилити вашего сайта, сервиса или приложения</h2>
        <p class="audit-info_text">Найдём проблемы в интерфейсах и предложим оптимальные пути их решения</p>
        <button class="btn btn__primary">
          Узнать больше
        </button>
      </div>
      <div class="audit-image">
        <img src={explore} alt="Аудит вашего сайта" />
      </div>
    </div>
  )
}