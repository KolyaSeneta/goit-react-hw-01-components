
import { FriendListItem } from "./FriendListItem"


export const FriendList = ({ friends }) => {
    
    return (<ul className="friend-list">{friends.map((friend) =>
    {
        
        return (<FriendListItem
            {...friend}
            key={friend.id}
      ></FriendListItem>)} )}
 
</ul>)
}

// FriendListItem.PropTypes = {
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.string.isRequired
// }