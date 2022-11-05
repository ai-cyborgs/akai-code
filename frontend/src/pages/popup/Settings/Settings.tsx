type SettingsType = { name: string; value: boolean | number };

const settingData: SettingsType[] = [
  { name: "Enable", value: false },
  { name: "Show chart", value: false },
  { name: "Number of tweets", value: 3 },
];
export const Settings = () => {
  {
    console.log("XDDDDD");
  }
  return (
    <div>
      {settingData.map((el) => (
        <div key={el.name}>
          <p>
            {el.name} {el.value}
          </p>
        </div>
      ))}
    </div>
  );
};
