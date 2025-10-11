import { setSuggestedUsers } from "@/redux/authSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetSuggestedUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true; // ✅ prevent state updates if unmounted

    const fetchSuggestedUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/user/suggested",
          { withCredentials: true }
        );

        if (res.data.success && isMounted) {
          dispatch(setSuggestedUsers(res.data.users));
        }
      } catch (error) {
        console.error("Error fetching suggested users:", error);
      }
    };

    fetchSuggestedUsers();

    return () => {
      isMounted = false; // ✅ cleanup to avoid memory leaks
    };
  }, [dispatch]); // ✅ include dispatch in deps
};

export default useGetSuggestedUsers;
