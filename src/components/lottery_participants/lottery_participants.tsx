import HiIcon from '../../assets/icon/hi.png'
import './lottery_participants.css'

const LotteryParticipants = ({
  participants,
}: {
  participants: Array<{ name: string }>;
}) => {
  return (
    <ul className="participants-container">
      {participants.map((user) => {
        return <li>
          <img src={HiIcon} className='hi-icon'/>
          {user.name}
          </li>;
      })}
    </ul>
  );
};

export default LotteryParticipants;
