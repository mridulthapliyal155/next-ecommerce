import Image from "next/image"
import formatPrice from "@/util/PriceFormat"
import { ProductType } from "@/types/ProductType"
export default function Product({
    name,
    image,
    price,
}:ProductType) {
    return(
        <div className="text-gray-700">
            <Image src={image} alt={name} width={800} height={800} className="w-full h-90 object-cover rounded-lg"></Image>
            <div className="font-medium py-2">
                <h1>{name}</h1>
                <h2 className="text-sm text-teal-700 ">{price!== null ? formatPrice(price): "N/A"}</h2>
            </div>
        </div>
    )
}
