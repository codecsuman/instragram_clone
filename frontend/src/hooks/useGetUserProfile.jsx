import { setUserProfile } from "@/redux/authSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetUserProfile = (userId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userId) return; // ✅ avoid firing request with null/undefined

    let isMounted = true; // ✅ avoid dispatch after unmount

    const fetchUserProfile = async () => {
      try {
        const res = await axios.get(
          `https://instragram-clone-5.onrender.com/api/v1/user/${userId}/profile`,
          { withCredentials: true }
        );

        if (res.data.success && isMounted) {
          dispatch(setUserProfile(res.data.user));
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();

    return () => {
      isMounted = false; // ✅ cleanup to prevent memory leaks
    };
  }, [userId, dispatch]); // ✅ added dispatch to deps
};

export default useGetUserProfile;
