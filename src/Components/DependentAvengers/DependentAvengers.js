import { useQuery } from "react-query";
import axios from "axios";

const FetchAvengersByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const FetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentAvengers = () => {
  const email = 'gowtham@sample.com'
  const { data: user } = useQuery(["user", email], () =>
    FetchAvengersByEmail(email)
  );

  const channelId = user?.data.channelId;

  const{data:courses}=useQuery(["courses", channelId], () => FetchCoursesByChannelId(channelId), {
    enabled: !! channelId,
  });

  return (
    <>
      <h1>DependentAvengers</h1>
        <h2>User details</h2>
        <h3>* ID : {user && user.data.id}</h3>
        <h3>* CHANNEL ID : {user && user.data.channelId}</h3>
        <h2>Course details</h2>
        <h3>* ID : {courses && courses.data.id}</h3>
        <h2>Courses offered</h2>
        {courses && courses.data.courses.map((course)=>{
            return <h3 key={course}>* {course}</h3>
        })}
     
     
    </>
  );
};

export default DependentAvengers;
