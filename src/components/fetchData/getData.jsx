const getData = async () => {
    const res = await fetch('https://mocki.io/v1/bf8381cb-d1cd-49ef-9b70-29df75984f6e');
    const data = await res.json();
    return data;
};

export default getData();


//http://api.quotable.io/random

//https://mocki.io/v1/bf8381cb-d1cd-49ef-9b70-29df75984f6e