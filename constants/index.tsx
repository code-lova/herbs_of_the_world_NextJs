import images from "@/public/images";

export const navLinks = [

    {
        id: 'home',
        link: '/homepage',
        title: "Home"
    },
    {
        id: 'shop',
        title: "Shop",
        subMenu: [
            { title: 'Herbs for Horses', link: '/shop/herbs-for-horses' },
            { title: 'Herbs for Humans', link: '/shop/herbs-for-humans' },
            { title: 'Herbs for Pets', link: '/shop/herbs-for-pets' },
        ]
    },
    {
        id: 'explore',
        title: "Explore",
        subMenu: [
            { title: 'Affiliate', link: '/explore/affiliate' },
            { title: 'Wholesales', link: '/explore/wholesales' },
            { title: 'Testimonials', link: '/explore/testimonials' },
            { title: 'How to Use', link: '/explore/how-to-use' },
            { title: 'Competitive Horse Trainers', link: '/explore/competitive-horse-trainers' }
        ]
    },
    {
        id: 'about',
        link: '/about',
        title: "About Us"
    },
    {
        id: 'blog',
        link: '/blog',
        title: "Blog"
    },
    {
        id: 'contact',
        link: '/contact-us',
        title: "Contact Us"
    },
    {
        id: 'login',
        link: '/signin',
        title: "Login"
    },
    {
        id: 'signup',
        link: '/signup',
        title: "Sign Up"
    },
]



export const features = [
    {
        name:"Free Shipping",
        image: '/icons/cargo.svg',
        desc: 'On all order over $10,000'
    },
    {
        name:"Ordering",
        image: '/icons/order.svg',
        desc: 'Delivery outside USA'
    },
    {
        name:"Member discount",
        image: '/icons/discount.svg',
        desc: 'Register and save up to 29%'
    },
    {
        name:"Premium support",
        image: '/icons/support.svg',
        desc: 'Support 24 hours per day'
    },
    
]

export const adminNavLinks = [
    {
        id: 'dashboard',
        name: 'Dashboard',
        icon: '/icons/dashboard.svg',
        link: '/admin/dashboard'
    },
    {
        id: 'category',
        name: 'Category',
        icon: '/icons/category.svg',
        link: '/admin/category'

    },
    {
        id: 'products',
        name: 'Products',
        icon: '/icons/product.svg',
        link: '/admin/products'

    },
    {
        id: 'users',
        name: 'Users',
        icon: '/icons/users.svg',
        link: '/admin/users'

    },
    {
        id: 'cart',
        name: 'Cart',
        icon: '/icons/cart.svg',
        link: '/admin/cart'
    },
    {
        id: 'orders',
        name: 'All Orders',
        icon: '/icons/productorders.svg',
        link: '/admin/orders'
    },
    {
        id: 'settings',
        name: 'Settings',
        icon: '/icons/settings.svg',
        link: '/admin/settings'
    },

    {
        id: 'logout',
        name: 'Logout',
        icon: '/icons/logout.svg',
        link: ''
    },
];

export const testimonials = [
    { id: 1, name: 'Luiz Mendez', rating: 4, review: 'Lorem, ipsum dolor sit amet...', image: images.avatar },
    { id: 2, name: 'Maria Johnson', rating: 5, review: 'Adipisicing elit. Cum sunt...', image: images.avatar },
    { id: 3, name: 'John Doe', rating: 5, review: 'Commodi ad pariatur sunt...', image: images.avatar },
    { id: 4, name: 'Anna Smith', rating: 4, review: 'Ad pariatur sunt nemo...', image: images.avatar },
    { id: 5, name: 'David Brown', rating: 5, review: 'Dolor sit amet consectetur...', image: images.avatar },
    { id: 6, name: 'Emily Davis', rating: 5, review: 'Lorem ipsum dolor sit...', image: images.avatar },
  ];