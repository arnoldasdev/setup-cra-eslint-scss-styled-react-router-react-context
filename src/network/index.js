const get = async endpoint => {
  try {
    const payload = await fetch(endpoint);
    const json = await payload.json();
    return json;
  } catch (e) {
    return e;
  }
};

export default { get };
