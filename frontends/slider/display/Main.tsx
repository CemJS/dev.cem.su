import { Cemjsx } from "cemjs-all"
import products from '@json/products'

export default function () {
    return (
        <div style="position: relative;">
            <div ref="galleryCryptoBreakfast">
                {
                    products.map(item => {
                        return (
                            <div class="slide">
                                <div class="slide-info">
                                    <h5 class="slide-info_title">{item.title}</h5>
                                    <p class="slide-info_desc">{item.desc}</p>
                                    <a
                                        link={item.urlAppStore}
                                        class="btn btn__primary"
                                    >
                                        Подробнее
                                    </a>
                                </div>

                                <div class="slide-img">
                                    <img src={item.icon} alt={item.title} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div ref="galleryDots"></div>
        </div>
    )
}