
const AboutDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params; //destructuring
  console.log(id);
  return <div>AboutDetails {id}</div>;
};
export default AboutDetails;
