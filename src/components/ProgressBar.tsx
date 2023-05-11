type ProgressProp = {
  percent: string;
};
const ProgressBar = ({ percent }: ProgressProp) => {
  const progressStyle = {
    width: `${percent}`,
    backgroundColor: "#395107",
    height: "100%",
    borderRadius: 15,
  };
  return (
    <div className="bg-inputbg pl-3 pr-12 py-4 w-11/12">
      <div className="flex items-center">
        <div className="w-full bg-greylight rounded-2xl h-8">
          <div style={progressStyle}></div>
        </div>
        <span className="font-bold text-urlColor ml-2 text-lg">{percent}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
