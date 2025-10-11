import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Messages = ({ selectedUser }) => {
    return (
        <div className="overflow-y-auto flex-1 p-4">
            {/* Profile Header */}
            <div className="flex justify-center mb-4">
                <div className="flex flex-col items-center">
                    <Avatar className="h-20 w-20">
                        <AvatarImage
                            src={selectedUser?.profilePicture}
                            alt="profile"
                        />
                        <AvatarFallback>?</AvatarFallback>
                    </Avatar>
                    <Link to={`/profile/${selectedUser?._id}`} className="mt-2">
                        <Button className="h-8" variant="secondary">
                            View Profile
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Messages List */}
            <div className="space-y-2">
                {[1, 2, 3].map((message, index) => (
                    <div key={index} className="flex p-2 bg-gray-100 rounded-lg">
                        <p className="text-sm text-gray-700">Message {message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Messages;
