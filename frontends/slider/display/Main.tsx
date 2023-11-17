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

                                <h5>{item.title}</h5>
                                <p>{item.desc}</p>
                                <a link={item.urlAppStore}>Подробнее</a>

                                {/* <img src={item.img} /> */}
                            </div>
                        )
                    })
                }
            </div>

            <div ref="galleryDots"></div>
        </div>
    )
}