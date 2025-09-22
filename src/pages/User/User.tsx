import React from "react";
import { useParams } from "react-router-dom";
const User: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  return (
    <div className="bg-gray-600 text-white text-3xl p-4">User: {userId}</div>
  );
};

export default User;
