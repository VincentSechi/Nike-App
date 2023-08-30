import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Accueil" },
    { href: "#about-us", label: "A propos" },
    { href: "#products", label: "Produits" },
    { href: "#contact-us", label: "Contact" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '+1000', label: 'Modèles' },
    { value: '+500', label: 'Magasins' },
    { value: '+2500K', label: 'Clients' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "199€",
        rate: "4.2",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "210€",
        rate: "4.5",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "220€",
        rate: "4.7",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "230€",
        rate: "4.8",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Aucun frais d'expédition",
        subtext: "Achetez sans frais supplémentaires grâce à notre service d'expédition gratuit."
    },
    {
        imgURL: shieldTick,
        label: "Paiement sécurisé",
        subtext: "Nos options de paiement sont sécurisées."
    },
    {
        imgURL: support,
        label: "Besoin d'aide ?",
        subtext: "Notre équipe dévouée est là pour répondre à la moindre de vos questions."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Vincent Sechi',
        rating: 4.4,
        feedback: "L'attention portée aux détails et la qualité du produit ont dépassé mes attentes. Hautement recommandé !"
    },
    {
        imgURL: customer2,
        customerName: 'Laura Demongeot',
        rating: 4.6,
        feedback: "Je suis très satisfaite de mon achat et de la qualité de service de Nike."
    }
];


export const footerLinks = [
    {
        title: "Produits",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Aide",
        links: [
            { name: "A propos", link: "/" },
            { name: "FAQ", link: "/" },
            { name: "Politique de confidentialité", link: "/" },
            { name: "Méthode de paiement", link: "/" },
        ],
    },
    {
        title: "Contact",
        links: [
            { name: "sav@nike.com", link: "mailto:customer@nike.com" },
            { name: "+xx xx xx xx xx", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];