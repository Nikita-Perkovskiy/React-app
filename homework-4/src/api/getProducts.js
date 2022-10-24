const getProducts = () => {
    return fetch('./goodsData.json')
    .then((response) => response.json())
}

export default getProducts