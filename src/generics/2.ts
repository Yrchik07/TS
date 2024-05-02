type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

 function compare(top: AllType, bottom: AllType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const topObj: AllType = {
    name: "Top",
    color: "Red",
    position: 1,
    weight: 10,
  };
  
  const bottomObj: AllType = {
    name: "Bottom",
    color: "Blue",
    position: 2,
    weight: 20,
  };
  
  export const result = compare(topObj, bottomObj);
