import './stars.css'

interface Props {
  children?: React.ReactElement | React.ReactElement[];
}

const Stars = ({
  children
}: Props) => {
  return (
    <div className="stars-container">
      <div className="stars"></div>
      {children}
    </div>
  );
};

export default Stars;
