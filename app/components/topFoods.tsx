import { ListInfo, OrderedLinkList } from "./lists"

const favs:ListInfo[] = [
    {
        text: "Mr Morris",
        link: "/food/mr-morris"
    },
    {
        text: "Depot Eatery",
        link: "/food/depot-eatery"
    }
]

export function TopFoods(){
    return (
        <div className="mt-5 p-2 rounded-lg shadow bg-light-warm flex flex-col items-center">
            <div className="flex flex-col divide-y divide-gray-400 space-y-2">
                <p className="text-2xl font-semibold text-gray-900">My Favourite Restaurants in Auckland</p>
                <OrderedLinkList list={favs} />
            </div>
        </div>
    )
}