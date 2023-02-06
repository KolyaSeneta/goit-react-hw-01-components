import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem"
import css from './FriendList.module.css';

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