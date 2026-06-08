const createPost = async () => {
  try {
    setLoading(true);

    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'React Native',
          body: 'Testing POST API',
          userId: 1,
        }),
      },
    );

    const result = await response.json();

    console.log(result);
    setData(result);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};