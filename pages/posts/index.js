const Posts = (props) => {
  console.log(props);
  return <div></div>;
};

export default Posts;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      posts: data,
    },
  };
};
