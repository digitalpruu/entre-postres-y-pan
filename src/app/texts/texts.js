const title = "Entre Postres y Pan";
const email = "entrepostresypan@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy muy interesado en los productos de ${title} y me gustaría recibir más información. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!`
);
const numeroWhatsApp = "3133089379";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Entre Postres y Pan, nos dedicamos a la elaboración de productos artesanales saludables que incluyen una gran variedad de panes, tortas de zanahoria y arándanos, galletas, brownies, muffins, alfajores y empanadas. Cada uno de nuestros productos es preparado con ingredientes de alta calidad, garantizando un sabor delicioso y beneficios para la salud.",
        description2: "Nuestro compromiso es ofrecer una opción nutritiva y deliciosa para el día a día, cuidando de la salud de nuestros clientes sin comprometer el sabor. Con nuestras recetas artesanales, buscamos aportar un toque saludable a tu mesa, manteniendo siempre la calidez y frescura en cada producto.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Saludable y delicioso en cada bocado",
            p2: "Artesanal y hecho con amor para ti",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/share/citBfFUQq5CzL8jF/?mibextid=qi2Omg",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};
export default textos;
