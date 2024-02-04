const getBaseUrl = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  console.log("base url: " + url);
  return url;
};

export default getBaseUrl;
