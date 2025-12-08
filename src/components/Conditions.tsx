interface ConditionsProps {
  precipitation?: number | null,
  humidity?: number | null,
  windSpeed?: number | null,
}

const Conditions: React.FC<ConditionsProps> = ({
  precipitation, humidity, windSpeed
}) => {
    const fallback = (value: number | null | undefined) => value ?? "-";

    return (
      <div className="flex justify-between gap-25">

        <div className="flex flex-col gap-4 font-bold">
          <p className="text-white text-md">PRECIPITATION</p>
          <p className="text-white text-md">HUMIDITY</p>
          <p className="text-white text-md">WIND SPEED</p>
        </div>

        <div className="flex flex-col gap-4 font-bold">
          <p className="text-white text-md">{fallback(precipitation)} %</p>
          <p className="text-white text-md">{fallback(humidity)} %</p>
          <p className="text-white text-md">{fallback(windSpeed)} km/h</p>
        </div>
        
      </div>
    );
};

export default Conditions;