export const loadData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

export default loadData;