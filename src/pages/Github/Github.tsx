import React from "react";
import { useLoaderData} from "react-router-dom";
import  { User } from "../../shared/interface/user";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user/userSlice";

const Github: React.FC = () => {
  const data = useLoaderData<User>();
      // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    const dispatch = useDispatch();
    dispatch(userActions.SET_USER(data));
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data?.followers}
    <img src={data?.avatar_url} alt="Git picture" width={300} />
    </div>
  )
};

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/karanvir-7')
    return response.json()
}