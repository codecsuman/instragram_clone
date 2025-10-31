import { setMessages } from "@/redux/chatSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllMessage = () => {
    const dispatch = useDispatch();
    const { selectedUser } = useSelector((store) => store.auth);

    useEffect(() => {
        if (!selectedUser?._id) return; // ✅ Prevent API call if no user selected

        const fetchAllMessage = async () => {
            try {
                const res = await axios.get(
                    `https://instragram-clone-5.onrender.com/api/v1/message/all/${selectedUser._id}`,
                    { withCredentials: true }
                );

                if (res.data.success) {
                    dispatch(setMessages(res.data.messages));
                }
            } catch (error) {
                console.error("Failed to fetch messages:", error.response?.data || error.message);
            }
        };

        fetchAllMessage();
    }, [selectedUser, dispatch]); // ✅ added `dispatch` for best practice
};

export default useGetAllMessage;
