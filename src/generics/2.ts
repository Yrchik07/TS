interface AllType {
  name: string;
  position: number;
  color: string;
  weight: number;
}

function compare(
  top: AllType,
  bottom: AllType
): Pick<AllType, "name" | "color"> & Pick<AllType, "position" | "weight"> {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
const top: AllType = {
  name: "Top",
  color: "Red",
  position: 1,
  weight: 10,
};

const bottom: AllType = {
  name: "Bottom",
  color: "Blue",
  position: 2,
  weight: 20,
};

export const result = compare(top, bottom);
export const result2 = compare(bottom, top);
