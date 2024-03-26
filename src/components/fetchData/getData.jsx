export async function getData(){
    const response = await fetch ('https://mocki.io/v1/bf8381cb-d1cd-49ef-9b70-29df75984f6e');
    if(!response.ok) {
        const error = new Error('Error occurred while fetching data');
        error.code = response.status;
        // error.message = error.code === 404 ? error.message : error.message;
        error.message = error.code === 404 ? '404! Something went wrong!' :  await response.json();
        throw error
    }
    return await response.json();
}