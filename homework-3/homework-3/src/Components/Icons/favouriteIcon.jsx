import PropTypes from "prop-types";

const FavIcon = ({ color }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9019 13.7723C10.7899 13.7723 10.6789 13.7453 10.5809 13.6923L7.20495 11.9183C7.07795 11.8513 6.92395 11.8513 6.79495 11.9183L3.41995 13.6923C3.08095 13.8693 2.66595 13.7393 2.48995 13.4033C2.42095 13.2733 2.39595 13.1183 2.42095 12.9693L3.06595 9.20929C3.09095 9.06529 3.04295 8.91929 2.93895 8.81829L0.207946 6.15629C0.0769459 6.02929 0.00294591 5.85729 4.59143e-05 5.67329C-0.00205409 5.48829 0.0679459 5.31429 0.196946 5.18229C0.297946 5.07829 0.436946 5.00629 0.584946 4.98329L4.36295 4.43429C4.50695 4.41329 4.63095 4.32329 4.69595 4.19329L6.38295 0.773295C6.55195 0.434295 6.96695 0.293295 7.30395 0.460295C7.43695 0.525295 7.54895 0.636295 7.61595 0.771295L9.30395 4.19329C9.36895 4.32329 9.49295 4.41329 9.63595 4.43429L13.4109 4.98229C13.7859 5.03729 14.0469 5.38729 13.9939 5.76129C13.9669 5.92329 13.8959 6.05729 13.7879 6.16129L11.0609 8.81829C10.9579 8.91929 10.9099 9.06529 10.9349 9.20929L11.5799 12.9673C11.6099 13.1483 11.5689 13.3313 11.4639 13.4813C11.3579 13.6313 11.1989 13.7313 11.0179 13.7623C10.9789 13.7683 10.9409 13.7723 10.9019 13.7723Z"
        fill={color}
        stroke="#FF2A47"
        strokeWidth="1"
      />
    </svg>
  );
};

FavIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default FavIcon;
