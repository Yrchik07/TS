type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
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
