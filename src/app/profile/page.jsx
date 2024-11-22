const url = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = async () => {
  await new Promise((resolve) => setInterval(resolve,1000));

  const res = await fetch(url);
  const data = await res.json();
  // console.log(data)
  return data;
};

const Profile = async () => {
  const data = await fetchTodos();
  console.log(data);

  return (
    <div>
      {data.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </div>
  );
};
export default Profile;
