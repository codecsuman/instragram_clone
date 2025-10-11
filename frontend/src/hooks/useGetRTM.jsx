import { setMessages } from "@/redux/chatSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetRTM = () => {
    const dispatch = useDispatch();
    const { socket } = useSelector((store) => store.socketio);

    useEffect(() => {
        if (!socket) return;

        const handleNewMessage = (newMessage) => {
            dispatch((prevState) => {
                // Redux dispatch can take a function if you’re using Redux Toolkit’s "immer"
                return setMessages([...prevState.chat.messages, newMessage]);
            });
        };

        socket.on("newMessage", handleNewMessage);

        return () => {
            socket.off("newMessage", handleNewMessage);
        };
    }, [socket, dispatch]); // ✅ only depend on socket and dispatch
};

export default useGetRTM;
