const generateBizNumber = require("./generateBizNumber");

const normalizeCard = async(rawCard, userId) => {
    const { url, alt } = rawCard.image;
    const image = {
        url: url ||
            "https://cdn.pixabay.com/photo/2017/10/31/09/54/entrepreneur-2904772_640.jpg",
        alt: alt || "Business card image",
    };

    return {
        ...rawCard,
        image,
        address: {
            ...rawCard.address,
            state: rawCard.address.state || "",
        },
        bizNumber: rawCard.bizNumber || (await generateBizNumber()),
        user_id: rawCard.user_id || userId,
    };
};

module.exports = normalizeCard;