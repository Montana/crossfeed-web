const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getTodos = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/`);

    const vuns = res.data;

    console.log(`GET: list of vuns);

    return vuns;
  } catch (e) {
    console.error(e);
  }
};
