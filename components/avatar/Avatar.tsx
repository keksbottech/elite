import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";


  type UserAvatarPropTypes = {
    imageUrl?: string;
    username?: string;
    className?: string;
  }
  
  export default function UserAvatar({imageUrl, username, className}: UserAvatarPropTypes) {
    return (
      <Avatar className={cn('w-[150px] h-[150px]', className)}>
        <AvatarImage src={imageUrl} alt={`${username} image`} />
        <AvatarFallback>{username}</AvatarFallback>
      </Avatar>
    )
  }
  