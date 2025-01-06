export const PRODUCT_CATEGORIES = [
    {
        label : "Apparel",
        value : "apparel" as const,
        featured : [
            {
                name: "Men",
                href: "#",
                imagesrc : '/nav/apparel/men.jpg'
            },
            {
                name: "Women",
                href: "#",
                imagesrc : '/nav/apparel/women.jpg'
            },
            {
                name: "Shoes",
                href: "#",
                imagesrc : '/nav/apparel/shoes.jpg'
            }
        ]
    },
    {
        label : "Others",
        value : "others" as const,
        featured : [
            {
                name: "Electronics",
                href: "#",
                imagesrc : '/nav/electronics/electronics.jpg'
            },
            {
                name: "New Category",
                href: "#",
                imagesrc : '/nav/electronics/electronics.jpg'
            }
        ]
    }
]